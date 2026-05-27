# Supabase setup

This widget uses a single Supabase project as the shared backend across every consuming site (BMW T3, EchoPark, future XD work). One database, many `project_id`s.

## First-time setup

1. Create a new Supabase project at https://supabase.com.
2. Copy the **project URL** and **anon key** from Project Settings → API. You'll embed these on every consuming site.
3. Open the **SQL editor** and run [`schema.sql`](./schema.sql). It is idempotent — re-running on an existing v0.1.x project upgrades it in place.
4. Open **Database → Publications**, click `supabase_realtime`, and confirm `threads`, `comments`, and `mentionables` are all checked. The schema script enables them, but verify here.
5. (Optional) Open **Database → Replication** and confirm `Realtime` is on for the project.

## Authentication setup (email OTP)

The widget gates *writes* on a Supabase email-OTP session. Reading the page remains anonymous. We use OTP codes rather than magic links because URL-rewriting enterprise email gateways (Mimecast URL Protect, Microsoft Safe Links, etc.) mangle link tokens — codes have no URL to rewrite.

1. In the dashboard, go to **Authentication → Providers** and confirm **Email** is enabled. The default settings are fine; the widget never invokes password sign-up.
2. Go to **Authentication → Email Templates → Magic Link** and replace the default body with a code-only template that renders the token and omits the link. A minimal example:

   ```html
   <h2>Your sign-in code</h2>
   <p>Enter this code in the comment widget to sign in:</p>
   <p style="font-size:24px;font-weight:600;letter-spacing:4px">{{ .Token }}</p>
   <p>This code expires in one hour. If you didn't request it, ignore this email.</p>
   ```

   `{{ .Token }}` is Supabase's placeholder for the six-digit OTP code. Crucially, **do not include `{{ .ConfirmationURL }}`** — that's the clickable link, and re-introducing it gives URL-rewriting gateways something to break.

3. (Optional) Customise the subject under the same template page so stakeholders recognise the email.

The widget no longer requires entries in **Authentication → URL Configuration → Redirect URLs**. You can leave any existing entries in place — they're harmless — but the OTP flow doesn't use them. Verification happens in-tab via `verifyOtp`.

## Team list (mentionables)

Adding or removing people from the @-mention autocomplete pool is done **inside the widget itself**, not in the database. Any signed-in user on a project can:

- Click the team icon in the toolbar to open the **Team** panel.
- Enter a name + email and click **Add**. New rows are visible to every other signed-in user immediately via realtime.
- Click **Remove** next to a row to drop someone.

The list backs into the `mentionables` table, scoped per `project_id`. RLS gates reads to authenticated users so the email list never leaks to anonymous viewers, and DB surgery is not required for normal team churn.

## Mention notifications

When a signed-in user posts a comment that `@-mentions` someone, the `comment_mentions` table gets a new row. A trigger (`notify_comment_mention`) installed by `schema.sql` then dispatches the notification via one of two paths, depending on which rows are present in the `widget_settings` table:

| Path | Setting key(s) in `widget_settings` | Sender shown to recipient | When to use |
|---|---|---|---|
| **A. Brevo direct** | `brevo_api_key`, `brevo_sender_email`, `brevo_sender_name` | Whatever email you verified with Brevo (typically a personal Gmail/Outlook) | Default — no IT approval needed, totally outside corporate single-sign-on. |
| **B. Generic webhook bridge** | `mention_webhook_url` | Whatever the bridge sends as (e.g. your work account via Make.com → Outlook) | Once IT clears Make.com or another HTTP-webhook automation service. Wins precedence if both are set. |

If neither is set the trigger silently no-ops — safe to ship without configuring anything.

`widget_settings` is a private key/value table created by `schema.sql`. RLS denies all reads from anon/authenticated keys; only the security-definer trigger function can read it. Inspect or edit it from the SQL Editor (which runs as the `postgres` role and bypasses RLS).

### Path A: Brevo direct (recommended default)

[Brevo](https://www.brevo.com) (ex-Sendinblue) has a free tier of 300 emails/day and lets you verify a single sender email instead of a whole domain. No OAuth into your work tenant, so no admin-consent gate.

**Caveat about your sender choice.** If you verify your **work email** with Brevo, most corporate DMARC policies will quarantine or reject those outgoing emails when they hit the recipient's gateway — because Brevo's servers aren't authorized to send "from" your company's domain. Verify a **personal Gmail/Outlook** as the sender instead. Recipients see something like *"Comment Widget <yourname@gmail.com>"* — informal but unambiguous for an internal review tool.

#### 1. Sign up and get an API key

1. Sign up at https://www.brevo.com (free, no credit card). Use any email — personal or work doesn't matter for the account itself.
2. Verify your account via the confirmation email.
3. Skip the onboarding wizard's domain-setup prompt — you don't have a domain.
4. Go to **Senders, Domains & Dedicated IPs → Senders** in the dashboard. Click **Add a sender**, enter your name and a Gmail/Outlook address you control, save. Brevo emails that address with a confirmation link — click it. The sender is now verified.
5. Go to **SMTP & API → API Keys**. Click **Generate a new API key**, give it a name like `comment-widget`, copy the value (starts with `xkeysib-…`). Brevo only shows it once.

#### 2. Tell Supabase about Brevo

In the Supabase SQL Editor:

```sql
insert into public.widget_settings (key, value) values
  ('brevo_api_key', 'xkeysib-PASTE-YOUR-KEY-HERE'),
  ('brevo_sender_email', 'your-verified-sender@gmail.com'),
  ('brevo_sender_name', 'Comment Widget')
on conflict (key) do update
  set value = excluded.value, updated_at = now();
```

The trigger re-reads these on every fire, so changes take effect immediately. To inspect current config:

```sql
select key, value, updated_at from public.widget_settings;
```

To disable Brevo (the trigger will no-op unless `mention_webhook_url` is set):

```sql
delete from public.widget_settings where key = 'brevo_api_key';
```

#### 3. Test the round-trip

While signed in (or with the dev bypass + RLS off), drop a comment that `@-mentions` a teammate. Within a few seconds you should see:

- A new row in `comment_mentions`.
- A successful 201 in Brevo dashboard → **Transactional → Logs**.
- An email arrive in the mentioned address, sent from your verified Brevo sender.

To verify the trigger fires without going through the UI:

```sql
insert into public.comment_mentions (comment_id, mentioned_email, mentioned_name)
values ('<some-existing-comment-id>', 'you@yourcompany.com', 'Test Recipient');
```

If you see no email and no log entry on Brevo, check Supabase logs for a `notify_comment_mention failed:` warning. Most failures are: API key typo, sender email not yet verified, or `pg_net` extension missing.

### Path B: Webhook bridge (Make.com → Outlook, when IT eventually clears it)

If your IT admin approves Make.com (or another HTTP-webhook automation service), the same trigger can route through a bridge that sends email from your **work account via OAuth** — closer to a "real" notification. The Postgres trigger is shape-agnostic; you only need to:

1. Build the bridge scenario (Make.com, n8n, or any service that accepts an HTTP webhook and can call an email-send action) with the JSON payload below.
2. Set the webhook URL in `widget_settings`:
   ```sql
   insert into public.widget_settings (key, value) values
     ('mention_webhook_url', 'https://hook.eu2.make.com/...')
   on conflict (key) do update
     set value = excluded.value, updated_at = now();
   ```

The webhook key takes precedence over Brevo when both are set, so the swap is purely an insert — no schema edits required. To go back to Brevo only: `delete from public.widget_settings where key = 'mention_webhook_url';`

#### Make.com walkthrough

1. Sign up at https://make.com (free, no credit card).
2. **Create a new scenario** → first module **Webhooks → Custom webhook** → create, name it `comment-widget mention`. Copy the generated URL.
3. Second module **Microsoft 365 Email → Send an Email**. Connect with your work account when prompted (this is the OAuth step IT controls).
4. Map fields using the dynamic-content picker:
   - **To**: `{{to_email}}`
   - **Subject**: e.g. `{{mentioned_by_name}} mentioned you on {{project_id}}`
   - **Body** (HTML): use `{{mentioned_by_name}}`, `{{comment_body}}`, `{{page_url}}`
5. Before the field picker can populate, Make needs a sample payload. After the `insert into public.widget_settings` above, click **Re-determine data structure** on the webhook module and drop a real mention from the widget.
6. Toggle the scenario **ON** at the bottom of the editor.

Payload shape Make.com will see:

```json
{
  "to_email": "bob@example.com",
  "to_name": "Bob",
  "mentioned_by_email": "alice@example.com",
  "mentioned_by_name": "Alice",
  "comment_body": "Hey @Bob, can you look at this?",
  "comment_id": "uuid",
  "thread_id": "uuid",
  "page_url": "https://staging.example.com/preview",
  "project_id": "marketing-site",
  "created_at": "2026-05-26T17:00:00Z"
}
```

#### Make.com free-tier capacity

1000 operations/month ÷ 2 per mention (webhook + email) ≈ **500 mentions/month** free. Beyond that, Core is $10.59/mo for 10,000 ops.

### Swapping in another email provider

If you outgrow Brevo's 300/day, want a verified domain sender, or are moving to a service IT controls directly, edit `notify_comment_mention()` in `schema.sql` to POST against the new provider's API — the `pg_net.http_post` call near the bottom of the function is the only thing that has to change (URL + headers + JSON body shape). The skeleton, `widget_settings`-driven config, dedupe, and `html_escape` work unchanged.

### Gotchas

- **`pg_net` extension MUST be installed.** `schema.sql` now does `create extension if not exists pg_net;` near the top, but older projects re-running an earlier schema may not have it. The smoking gun: `select * from net._http_response;` errors with `relation "net._http_response" does not exist`. Fix is just `create extension pg_net;`. Until it's installed, the trigger fires, calls `net.http_post`, the call throws, and the `exception when others` handler swallows it — so **the comment insert succeeds but no email goes out, with no visible failure**.
- **The trigger is async, fire-and-forget.** A bad URL or API key won't fail the comment insert — it'll log a `warning` and move on. To see what pg_net actually attempted:

  ```sql
  select id, status_code, content_type,
         left(coalesce(content, error_msg, ''), 300) as response_preview,
         timed_out, created
  from net._http_response
  order by created desc
  limit 10;
  ```

  Note that `net._http_response` doesn't have a `url` column in pg_net 0.20+ — the URL lives on the request side, which is purged after the response lands. To match a response to an expected provider, filter on `status_code` patterns or just inspect recent rows by `created` timestamp. Brevo's transactional logs and Make.com's scenario history are usually the easier surface to debug from once you know the call reached them (status 201).
- **Self-mentions skip the trigger.** If `mentioned_email` matches the comment's `author_email`, the trigger no-ops so you don't email yourself.
- **One trigger fires per mention row.** A comment with three `@-mentions` generates three email sends. That's intentional — each recipient should be addressed individually so reply chains work.
- **Brevo: verify a personal email as sender, not your work address.** Corporate DMARC policies (SPF/DKIM alignment on your `@yourcompany.com` domain) will silently quarantine "spoofed" outbound mail. Using a Gmail/Outlook sender sidesteps the issue entirely.
- **Brevo + corporate inbox spam filtering.** Even with a personal sender, the *recipient's* corporate filter may still send the first message to junk. Whitelist the sender once on each recipient's mailbox for clean delivery thereafter.
- **`replyTo` header points at the comment author.** Recipients hitting Reply in their mail client will reach the person who tagged them, not the Brevo sender. That's intentional — keep all real conversation in the widget threads, but a reply still finds a human if someone insists on email.

## Testing realtime locally

1. Run the demo (`npm run dev` from the repo root) in two browser tabs pointed at the same URL.
2. Drop a comment in tab A.
3. Tab B should show the new pin within ~2 seconds without reloading.

If realtime isn't propagating:

- Confirm the publication includes all three tables (step 4 above).
- Check the browser console for `CHANNEL_ERROR` from `@supabase/supabase-js`. If you see it, the realtime connection is failing — usually a missing anon key or RLS policy that blocks `select`.
- The widget logs `[comment-widget]` messages to the console when realtime events arrive.

## Troubleshooting sign-in

- **Code never arrives.** Check the spam folder and (in a corporate environment) the email gateway's quarantine. If still missing, the sender domain `noreply@mail.app.supabase.io` may be filtered at the org level. The fix is either a one-time IT allow-list of that sender, or configuring a custom SMTP sender in Supabase from a domain your gateway already trusts (e.g. via SES, Postmark, Resend).
- **Code arrives but "invalid or expired" on verify.** Codes are single-use and time-limited (one hour by default). Hit **Resend code** in the modal to get a fresh one — there's a 30-second cooldown to avoid Supabase rate-limiting.
- **Email template still contains a link.** Supabase will happily render both `{{ .Token }}` and `{{ .ConfirmationURL }}` if both are present; URL-rewriting gateways will still mangle the link half. The OTP code path still works (the user just types the code) but to make this bulletproof, edit the template and remove the link entirely.

## Dev auth bypass

When you're rate-limited by Supabase OTP (the default project-wide cap is ~3-4 per hour) and need to test the UI, `src/composables/useAuth.ts` reads `localStorage.__cw_dev_bypass_auth` and fakes a signed-in session client-side. To actually write to the database, RLS must also be disabled because the bypass has no real `auth.uid()`.

**The combination has a sharp edge:** every time you re-run `schema.sql` (for migrations, hotfixes, anything), the `alter table ... enable row level security;` lines flip RLS back on. From the user's perspective:

- Comments still save (the client doesn't check RLS pre-write).
- `comment_mentions` writes silently drop (mentions look like they posted but never trigger emails).
- Pin drags snap back on release (UPDATE on `threads` is denied; optimistic rollback fires).
- Comment/thread deletes silently fail.

Fix: run [`dev-bypass.sql`](./dev-bypass.sql) any time you re-run `schema.sql`. It disables RLS on all four widget tables and prints a sanity-check row showing the new RLS state.

To revert to production-safe RLS when you're done troubleshooting: scroll to the bottom of `dev-bypass.sql` and run the commented-out block (or `alter table public.X enable row level security;` for each of the four tables), then remove the localStorage flag and sign in normally with OTP.

## Security hardening (further tightening)

The shipped RLS policies already gate writes on `auth.uid() is not null` and restrict delete to row creators. If you want to go further:

- **Rate-limit inserts.** A Supabase Edge Function gating the insert is the cleanest way to add per-IP throttling.
- **Body length CHECK constraint** on `comments.body` to cap pathological payloads.
- **Domain-allow-list auth.** Add a trigger on `auth.users` that rejects sign-ups from emails outside an internal domain list.

## Schema notes

- `project_id` is a free-form string. Convention: lowercase kebab-case, e.g. `bmw-t3`, `echopark`, `sonic-staging-q3`.
- `page_url` is stored verbatim from `window.location.href` minus the hash. Threads are scoped to `(project_id, page_url)` — see `src/composables/useThreads.ts`.
- `selector_path` and `anchor_x_pct` / `anchor_y_pct` together describe a stable position on the page across responsive layouts. The same trio is rewritten in place when a user drags a pin. See `src/lib/selectorPath.ts` and `src/lib/anchoring.ts`.
- `status` is a `text` column with a CHECK constraint rather than a Postgres enum so we can add new statuses without a migration.
- `mentionables` and `comment_mentions` are independent of identity: they store plain email strings, not foreign keys to `auth.users`. This keeps the `mentionables` workflow usable for people who haven't authenticated yet.
- `created_by_email` / `author_email` are matched case-insensitively against `auth.email()` in RLS so casing drift on the client doesn't break inserts.
