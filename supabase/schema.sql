-- Comment widget schema
-- Run this in the Supabase SQL editor for a new project.
--
-- Migration history:
--   v0.1.x — threads + comments, permissive RLS.
--   v0.2.x — magic-link / email-OTP auth for writes, mentionables +
--            comment_mentions, row-creator delete policies. Existing tables
--            unchanged in shape.
--   v0.3.x — mention-notification trigger (Brevo direct or webhook bridge),
--            widget_settings key/value table, pg_net extension required.
--
-- Re-running on an older project is safe: every statement is idempotent and
-- the policy block drops + recreates the policies under their final names.

-- pg_net is the HTTP client used by the mention-notification trigger.
-- Supabase ships it pre-installed on new projects, but older projects may
-- not have it enabled and will silently swallow `net.http_post` calls inside
-- the trigger's `exception when others` block — the comment insert succeeds
-- but no email goes out. Installing here makes the dependency explicit.
create extension if not exists pg_net;

-- Threads: one per pin on the page.
create table if not exists public.threads (
  id uuid primary key default gen_random_uuid(),
  project_id text not null,
  page_url text not null,
  selector_path text not null,
  anchor_x_pct numeric not null check (anchor_x_pct between 0 and 1),
  anchor_y_pct numeric not null check (anchor_y_pct between 0 and 1),
  status text not null default 'open' check (status in ('open', 'resolved')),
  created_at timestamptz not null default now(),
  created_by_name text not null,
  created_by_email text not null
);

create index if not exists threads_project_page on public.threads (project_id, page_url);
create index if not exists threads_status on public.threads (status);

-- Comments: flat replies inside a thread (including the initial comment).
create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references public.threads(id) on delete cascade,
  body text not null,
  author_name text not null,
  author_email text not null,
  created_at timestamptz not null default now()
);

create index if not exists comments_thread on public.comments (thread_id, created_at);

-- Mentionables: per-project team list surfaced in the @-mention autocomplete.
-- Managed in-widget by any signed-in user; reads gated to signed-in users so
-- the email list doesn't leak to anonymous viewers.
create table if not exists public.mentionables (
  id uuid primary key default gen_random_uuid(),
  project_id text not null,
  email text not null,
  name text not null,
  added_at timestamptz not null default now(),
  added_by_email text
);

create unique index if not exists mentionables_project_email
  on public.mentionables (project_id, lower(email));

-- Comment mentions: out-of-band table for the email addresses associated with
-- @-tokens in a comment body. Indexed by recipient for future notification work.
create table if not exists public.comment_mentions (
  id uuid primary key default gen_random_uuid(),
  comment_id uuid not null references public.comments(id) on delete cascade,
  mentioned_email text not null,
  mentioned_name text not null,
  created_at timestamptz not null default now()
);

create index if not exists comment_mentions_comment on public.comment_mentions (comment_id);
create index if not exists comment_mentions_recipient on public.comment_mentions (lower(mentioned_email));

-- Row-level security
alter table public.threads enable row level security;
alter table public.comments enable row level security;
alter table public.mentionables enable row level security;
alter table public.comment_mentions enable row level security;

-- Threads policies
-- SELECT stays public: anonymous viewers can read the conversation. INSERT,
-- UPDATE, DELETE require sign-in; DELETE additionally requires the row's
-- creator email matches the signed-in user.
drop policy if exists "threads_select_all" on public.threads;
drop policy if exists "threads_insert_all" on public.threads;
drop policy if exists "threads_update_all" on public.threads;
drop policy if exists "threads_select_public" on public.threads;
drop policy if exists "threads_insert_authed" on public.threads;
drop policy if exists "threads_update_authed" on public.threads;
drop policy if exists "threads_delete_creator" on public.threads;

create policy "threads_select_public" on public.threads
  for select using (true);
create policy "threads_insert_authed" on public.threads
  for insert with check (
    auth.uid() is not null
    and lower(created_by_email) = lower(coalesce(auth.email(), ''))
  );
create policy "threads_update_authed" on public.threads
  for update using (auth.uid() is not null);
create policy "threads_delete_creator" on public.threads
  for delete using (
    auth.uid() is not null
    and lower(created_by_email) = lower(coalesce(auth.email(), ''))
  );

-- Comments policies
drop policy if exists "comments_select_all" on public.comments;
drop policy if exists "comments_insert_all" on public.comments;
drop policy if exists "comments_select_public" on public.comments;
drop policy if exists "comments_insert_authed" on public.comments;
drop policy if exists "comments_delete_author" on public.comments;

create policy "comments_select_public" on public.comments
  for select using (true);
create policy "comments_insert_authed" on public.comments
  for insert with check (
    auth.uid() is not null
    and lower(author_email) = lower(coalesce(auth.email(), ''))
  );
create policy "comments_delete_author" on public.comments
  for delete using (
    auth.uid() is not null
    and lower(author_email) = lower(coalesce(auth.email(), ''))
  );

-- Mentionables policies — emails stay private. Reads and writes both require
-- a signed-in session.
drop policy if exists "mentionables_select_authed" on public.mentionables;
drop policy if exists "mentionables_insert_authed" on public.mentionables;
drop policy if exists "mentionables_update_authed" on public.mentionables;
drop policy if exists "mentionables_delete_authed" on public.mentionables;

create policy "mentionables_select_authed" on public.mentionables
  for select using (auth.uid() is not null);
create policy "mentionables_insert_authed" on public.mentionables
  for insert with check (auth.uid() is not null);
create policy "mentionables_update_authed" on public.mentionables
  for update using (auth.uid() is not null);
create policy "mentionables_delete_authed" on public.mentionables
  for delete using (auth.uid() is not null);

-- Comment mentions policies. SELECT is gated to signed-in users so the
-- recipient list stays private; INSERT requires sign-in (and the parent
-- comment's RLS already enforces author = caller).
drop policy if exists "comment_mentions_select_authed" on public.comment_mentions;
drop policy if exists "comment_mentions_insert_authed" on public.comment_mentions;

create policy "comment_mentions_select_authed" on public.comment_mentions
  for select using (auth.uid() is not null);
create policy "comment_mentions_insert_authed" on public.comment_mentions
  for insert with check (auth.uid() is not null);

-- Tiny helper to make user-typed content safe to drop into HTML email bodies.
-- The recipient's mail client doesn't execute JS so this isn't an XSS defense
-- per se — it's mostly there so a comment like `<3 this design` doesn't
-- accidentally close a tag and mangle the email layout.
create or replace function public.html_escape(input text)
returns text
language sql
immutable
as $$
  select replace(replace(replace(replace(replace(coalesce(input, ''),
    '&', '&amp;'),
    '<', '&lt;'),
    '>', '&gt;'),
    '"', '&quot;'),
    '''', '&#39;');
$$;

-- Settings table for the mention-notification trigger. We use a normal
-- public table (not `ALTER DATABASE SET`) because hosted Supabase doesn't
-- grant the postgres role permission to set database parameters. RLS denies
-- ALL access to anon/authenticated; the security-definer trigger reads it
-- bypassing RLS. Privileges are revoked from anon/authenticated for
-- defense-in-depth (table still wouldn't be readable through PostgREST, but
-- this also hides it from the OpenAPI discovery).
create table if not exists public.widget_settings (
  key text primary key,
  value text not null,
  updated_at timestamptz not null default now()
);

alter table public.widget_settings enable row level security;
-- Intentionally no policies. Only roles that bypass RLS (postgres,
-- service_role, the trigger function via security definer) can read.

revoke all on public.widget_settings from anon, authenticated;

-- Mention notifications. The trigger fires AFTER INSERT on comment_mentions,
-- joins to the parent comment + thread for context, and dispatches via one of
-- two paths chosen by which widget_settings rows are present:
--
--   1. Generic webhook (Make.com, Power Automate Premium, Zapier, n8n, etc.) —
--      set `mention_webhook_url` and the trigger POSTs the raw JSON payload.
--      This path wins precedence if both modes are configured.
--
--   2. Brevo direct — set `brevo_api_key` (and optionally `brevo_sender_email`,
--      `brevo_sender_name`) and the trigger formats the email and POSTs it
--      straight to api.brevo.com/v3/smtp/email with the api-key header.
--      Used when you can't get a bridge service approved through IT.
--
-- To enable the webhook bridge (recommended once you have it cleared):
--   insert into public.widget_settings (key, value) values
--     ('mention_webhook_url', 'https://hook.eu2.make.com/...')
--   on conflict (key) do update set value = excluded.value, updated_at = now();
--
-- To enable Brevo direct (the no-IT-approval-needed fallback):
--   insert into public.widget_settings (key, value) values
--     ('brevo_api_key', 'xkeysib-...'),
--     ('brevo_sender_email', 'you@gmail.com'),
--     ('brevo_sender_name', 'Comment Widget')
--   on conflict (key) do update set value = excluded.value, updated_at = now();
--
-- To disable a path: `delete from public.widget_settings where key = '...';`
-- If neither key is set the trigger no-ops, so this block is safe to ship in
-- projects that haven't configured notifications yet. Self-mentions are
-- always skipped.
--
-- Requires the `pg_net` extension (Supabase enables it by default — verify
-- with `select extname from pg_extension where extname = 'pg_net';`).
create or replace function public.notify_comment_mention()
returns trigger
language plpgsql
security definer
set search_path = public
as $func$
declare
  v_webhook_url text;
  v_brevo_key text;
  v_brevo_sender_email text;
  v_brevo_sender_name text;
  v_comment_body text;
  v_author_email text;
  v_author_name text;
  v_thread_id uuid;
  v_page_url text;
  v_project_id text;
  v_payload jsonb;
  v_subject text;
  v_html_body text;
  v_text_body text;
begin
  -- Pull both possible config sets from widget_settings. The trigger is
  -- security-definer so RLS doesn't block these reads.
  select nullif(value, '') into v_webhook_url
    from public.widget_settings where key = 'mention_webhook_url';
  select nullif(value, '') into v_brevo_key
    from public.widget_settings where key = 'brevo_api_key';

  if v_webhook_url is null and v_brevo_key is null then
    return new;
  end if;

  select c.body, c.author_email, c.author_name, c.thread_id
    into v_comment_body, v_author_email, v_author_name, v_thread_id
    from public.comments c
   where c.id = new.comment_id;

  -- Skip self-mentions. The autocomplete UI already filters them out, but a
  -- user typing `@MyOwnName` manually would still land here.
  if lower(coalesce(v_author_email, '')) = lower(new.mentioned_email) then
    return new;
  end if;

  select t.page_url, t.project_id
    into v_page_url, v_project_id
    from public.threads t
   where t.id = v_thread_id;

  -- Path 1: generic webhook (preferred when available — gives the host the
  -- most flexibility in formatting the email or routing to other channels).
  if v_webhook_url is not null then
    v_payload := jsonb_build_object(
      'to_email', new.mentioned_email,
      'to_name', new.mentioned_name,
      'mentioned_by_email', v_author_email,
      'mentioned_by_name', v_author_name,
      'comment_body', v_comment_body,
      'comment_id', new.comment_id,
      'thread_id', v_thread_id,
      'page_url', v_page_url,
      'project_id', v_project_id,
      'created_at', new.created_at
    );

    perform net.http_post(
      url := v_webhook_url,
      body := v_payload,
      headers := jsonb_build_object('Content-Type', 'application/json')
    );

    return new;
  end if;

  -- Path 2: Brevo direct. Builds the email body here in SQL since we don't
  -- have a templating layer; HTML and plain-text alternates are both sent so
  -- text-only mail clients still get a readable message.
  select nullif(value, '') into v_brevo_sender_email
    from public.widget_settings where key = 'brevo_sender_email';
  select nullif(value, '') into v_brevo_sender_name
    from public.widget_settings where key = 'brevo_sender_name';
  v_brevo_sender_name := coalesce(v_brevo_sender_name, 'Comment Widget');

  if v_brevo_sender_email is null then
    raise warning 'notify_comment_mention: brevo_sender_email is not set in widget_settings; cannot send via Brevo';
    return new;
  end if;

  v_subject := coalesce(v_author_name, 'Someone') || ' mentioned you on '
            || coalesce(v_project_id, 'a page');

  v_html_body :=
    '<p><strong>' || public.html_escape(v_author_name) || '</strong> mentioned you in a comment:</p>'
    || '<blockquote style="border-left:3px solid #d0d0d0;padding:4px 0 4px 12px;color:#555;margin:12px 0;">'
    || replace(public.html_escape(v_comment_body), E'\n', '<br>')
    || '</blockquote>'
    || '<p><a href="' || public.html_escape(v_page_url) || '">Open the page</a></p>'
    || '<p style="color:#888;font-size:12px;margin-top:24px;">'
    || 'Sent by Comment Widget. Reply on the page to keep the thread together.'
    || '</p>';

  v_text_body :=
    coalesce(v_author_name, 'Someone') || ' mentioned you in a comment:' || E'\n\n'
    || coalesce(v_comment_body, '') || E'\n\n'
    || 'Open: ' || coalesce(v_page_url, '');

  v_payload := jsonb_build_object(
    'sender', jsonb_build_object('name', v_brevo_sender_name, 'email', v_brevo_sender_email),
    'to', jsonb_build_array(
      jsonb_build_object(
        'email', new.mentioned_email,
        'name', coalesce(nullif(new.mentioned_name, ''), new.mentioned_email)
      )
    ),
    'replyTo', jsonb_build_object('email', v_author_email, 'name', v_author_name),
    'subject', v_subject,
    'htmlContent', v_html_body,
    'textContent', v_text_body
  );

  perform net.http_post(
    url := 'https://api.brevo.com/v3/smtp/email',
    body := v_payload,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'accept', 'application/json',
      'api-key', v_brevo_key
    )
  );

  return new;
exception
  -- Never block the comment insert on a notification failure. pg_net is
  -- asynchronous so most send-time errors don't surface here, but config
  -- typos (missing extension, malformed URL) can throw synchronously.
  when others then
    raise warning 'notify_comment_mention failed: %', sqlerrm;
    return new;
end;
$func$;

drop trigger if exists comment_mentions_notify on public.comment_mentions;
create trigger comment_mentions_notify
  after insert on public.comment_mentions
  for each row
  execute function public.notify_comment_mention();

-- Realtime publication. The supabase_realtime publication is created by Supabase
-- on every project. Adding tables to it streams row changes over the realtime API.
-- (Idempotent: re-running this skips tables already in the publication.)
do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'threads'
  ) then
    execute 'alter publication supabase_realtime add table public.threads';
  end if;

  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'comments'
  ) then
    execute 'alter publication supabase_realtime add table public.comments';
  end if;

  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'mentionables'
  ) then
    execute 'alter publication supabase_realtime add table public.mentionables';
  end if;
end $$;
