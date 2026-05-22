# Supabase setup

This widget uses a single Supabase project as the shared backend across every consuming site (BMW T3, EchoPark, future XD work). One database, many `project_id`s.

## First-time setup

1. Create a new Supabase project at https://supabase.com.
2. Copy the **project URL** and **anon key** from Project Settings → API. You'll embed these on every consuming site.
3. Open the **SQL editor** and run [`schema.sql`](./schema.sql).
4. Open **Database → Publications**, click `supabase_realtime`, and confirm both `threads` and `comments` are checked. The schema script enables them, but verify here.
5. (Optional) Open **Database → Replication** and confirm `Realtime` is on for the project.

## Testing realtime locally

1. Run the demo (`npm run dev` from the repo root) in two browser tabs pointed at the same URL.
2. Drop a comment in tab A.
3. Tab B should show the new pin within ~2 seconds without reloading.

If realtime isn't propagating:

- Confirm the publication includes both tables (step 4 above).
- Check the browser console for `CHANNEL_ERROR` from `@supabase/supabase-js`. If you see it, the realtime connection is failing — usually a missing anon key or RLS policy that blocks `select`.
- The widget logs `[comment-widget]` messages to the console when realtime events arrive.

## Security hardening (before this leaves preview)

The schema ships with permissive `_all` RLS policies so the widget works out of the box behind a stakeholder-only URL. Before any production-ish deployment:

- **Lock writes to authenticated users.** Add Supabase magic-link auth in the widget, drop the anonymous insert policies, and require `auth.uid() is not null` in `with check`.
- **Restrict update to the row's creator.** Compare `created_by_email` to `auth.email()`.
- **Rate-limit inserts.** A Supabase Edge Function gating the insert is the cleanest way to add per-IP throttling.
- **Consider a CHECK constraint on `body` length** to cap pathological payloads.

## Schema notes

- `project_id` is a free-form string. Convention: lowercase kebab-case, e.g. `bmw-t3`, `echopark`, `sonic-staging-q3`.
- `page_url` is stored verbatim from `window.location.href` minus the hash. Threads are scoped to `(project_id, page_url)` — see `src/composables/useThreads.ts`.
- `selector_path` and `anchor_x_pct` / `anchor_y_pct` together describe a stable position on the page across responsive layouts. See `src/lib/selectorPath.ts` and `src/lib/anchoring.ts`.
- `status` is a `text` column with a CHECK constraint rather than a Postgres enum so we can add new statuses without a migration.
