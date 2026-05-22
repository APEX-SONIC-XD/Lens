-- Comment widget schema
-- Run this in the Supabase SQL editor for a new project.

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

-- Row-level security: enabled with permissive policies for v1.
-- TIGHTEN THESE BEFORE LEAVING PREVIEW. See supabase/README.md §"Security hardening".
alter table public.threads enable row level security;
alter table public.comments enable row level security;

-- Threads policies
drop policy if exists "threads_select_all" on public.threads;
drop policy if exists "threads_insert_all" on public.threads;
drop policy if exists "threads_update_all" on public.threads;
create policy "threads_select_all" on public.threads for select using (true);
create policy "threads_insert_all" on public.threads for insert with check (true);
create policy "threads_update_all" on public.threads for update using (true);

-- Comments policies
drop policy if exists "comments_select_all" on public.comments;
drop policy if exists "comments_insert_all" on public.comments;
create policy "comments_select_all" on public.comments for select using (true);
create policy "comments_insert_all" on public.comments for insert with check (true);

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
end $$;
