-- Dev auth bypass — temporarily disables RLS on all four widget tables so the
-- client-side bypass (`localStorage.__cw_dev_bypass_auth`) actually works.
--
-- WHY THIS EXISTS
-- ----------------
-- The widget's auth-gated RLS policies require `auth.uid() is not null` for
-- writes. The client-side dev bypass fakes a signed-in identity for the UI
-- but has no real Supabase JWT, so server-side policies still reject those
-- writes. The result: comments save, mentions silently drop, pin drags snap
-- back, deletes fail. All confusing in slightly different ways.
--
-- Running this script removes the server-side block. The trade-off is that
-- while RLS is off, anyone with the anon key can read/write/delete any row
-- in these tables. NEVER ship a project in this state to real users.
--
-- IMPORTANT: re-running `schema.sql` re-enables RLS on all four tables.
-- After each schema migration, re-run this file too if you're staying in
-- bypass mode. See `supabase/README.md` → "Dev auth bypass" for the full
-- recovery flow when your Supabase OTP rate limit resets.
--
-- To revert (re-enable production RLS): scroll to the bottom of this file
-- and run the commented-out block.

alter table public.threads disable row level security;
alter table public.comments disable row level security;
alter table public.mentionables disable row level security;
alter table public.comment_mentions disable row level security;

-- Sanity check — should print 'false' for all four rows.
select c.relname as table_name, c.relrowsecurity as rls_enabled
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public'
  and c.relname in ('threads', 'comments', 'mentionables', 'comment_mentions')
order by c.relname;

-- ============================================================================
-- TO REVERT (run this block when you're done troubleshooting and want
-- normal auth-gated RLS back):
-- ============================================================================
--
-- alter table public.threads enable row level security;
-- alter table public.comments enable row level security;
-- alter table public.mentionables enable row level security;
-- alter table public.comment_mentions enable row level security;
--
-- And in the browser console:
-- localStorage.removeItem('__cw_dev_bypass_auth'); location.reload();
