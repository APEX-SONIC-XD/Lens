# Comment widget

A Figma-style commenting layer for live web designs. Drop the script onto any preview URL; stakeholders click elements to leave pinned, threaded comments; everyone viewing the page sees the same comments in real time.

Built per the spec in [`comment-widget-build-plan.md`](./comment-widget-build-plan.md). This repo currently delivers **Phase 1, Phase 2, and Phase 3**: pinned comments with threaded replies, resolve / reopen flow, per-project filtering, real-time sync, reload persistence, visible error feedback, email-OTP auth for writes, @-mentions with an in-widget team list and **outbound email notifications via Power Automate**, drag-to-reposition pins, and selective delete of your own comments. The remaining Phase 3 backlog (Slack webhook, archive view) is on the roadmap below.

---

## Status

| Phase | State |
|---|---|
| 1 — Minimum viable (click → comment → pin, real-time, reload persistence) | **Complete** |
| 2 — Threaded replies, resolved status, toolbar filter, multi-project isolation | **Complete** |
| 3 — Email-OTP auth, @-mentions, drag-to-reposition, selective delete | **Complete** |
| 3.1 — Mention notifications via Power Automate webhook | **Complete** |
| 3.x — Slack webhook on new threads, archive view | Not started |

Acceptance criteria walked through manually on the demo page — see [`demo/README.md`](./demo/README.md) for the §7.5 failure-mode checklist plus the Phase 3 walkthrough.

---

## Quick start (for consuming projects)

In the `<head>` or end of `<body>` of any XD preview:

```html
<script
  src="https://cdn.jsdelivr.net/gh/{your-github-user}/comment-widget@v0.3.0/dist/widget.iife.js"
  data-project-id="bmw-t3"
  data-supabase-url="https://your-project.supabase.co"
  data-supabase-anon-key="eyJhbG..."
  defer
></script>
```

That's the whole integration. The widget reads its config from data attributes on its own script tag, mounts itself at `document.body`, loads existing threads for `(project_id, normalized page URL)`, and starts streaming real-time changes.

**Pin to an exact tag** (`@v0.3.0`) in production embeds — never `@latest`. jsDelivr caches per-tag, so version pinning gives you both deterministic behaviour and free CDN performance.

### Upgrading from v0.1.x

`v0.2.x` ships a write-only authentication gate and two new tables. Existing v0.1.x deployments need a one-time backend migration:

1. Re-run [`supabase/schema.sql`](./supabase/schema.sql) in the SQL editor. The script is idempotent — it adds the `mentionables` and `comment_mentions` tables and replaces the permissive RLS policies with auth-gated ones.
2. In Supabase **Authentication → Email Templates → Magic Link**, replace the default body with a code-only template that renders `{{ .Token }}` and omits `{{ .ConfirmationURL }}`. See [`supabase/README.md`](./supabase/README.md) for the snippet.
3. Existing comments remain readable by anonymous viewers; new comments now require sign-in. Pre-existing anonymous identities in `localStorage` are no longer used and can be ignored.

### Upgrading from v0.2.0

`v0.2.1` swaps the magic-link callback for an email-OTP (six-digit code) flow so URL-rewriting email gateways like Mimecast stop breaking sign-in. The only change consumers need:

1. Update the Supabase email template to use `{{ .Token }}` (see step 2 above). If you previously customized **Redirect URLs** in Supabase Authentication for the widget, you can leave them — they're no longer required by this codebase but harmless.

### Upgrading from v0.2.x

`v0.3.0` adds outbound mention notifications via a Postgres trigger. Existing comments and mentions are unaffected; the trigger is opt-in and supports two delivery paths chosen by which rows are present in a private `widget_settings` table:

1. **Brevo direct** (default, no IT approval needed) — free 300/day, sends from a verified personal Gmail/Outlook.
2. **Generic webhook bridge** (Make.com → Outlook, Power Automate Premium, Zapier, etc.) — sends from your real work account once IT clears the bridge tool. Wins precedence over Brevo when both are set.

Steps:

1. Re-run [`supabase/schema.sql`](./supabase/schema.sql). It is still idempotent — it adds the `widget_settings` key/value table, the `notify_comment_mention` function + trigger on `comment_mentions`, and a `html_escape()` helper, and is safe to re-run.
2. (Default path) Sign up at [brevo.com](https://www.brevo.com), verify a personal sender email, grab an API key, then:

   ```sql
   insert into public.widget_settings (key, value) values
     ('brevo_api_key', 'xkeysib-...'),
     ('brevo_sender_email', 'you@gmail.com'),
     ('brevo_sender_name', 'Comment Widget')
   on conflict (key) do update
     set value = excluded.value, updated_at = now();
   ```

3. (When IT clears it later) Build a Make.com scenario instead and just add the webhook URL — no schema changes, takes precedence over Brevo immediately:

   ```sql
   insert into public.widget_settings (key, value) values
     ('mention_webhook_url', 'https://hook.eu2.make.com/...')
   on conflict (key) do update
     set value = excluded.value, updated_at = now();
   ```

4. Leave all rows absent (or `delete` them) to run with mentions persisted but no email out — useful for staging environments.

Full walkthroughs of both paths (including the corporate-DMARC gotcha that pushes most teams toward a personal Brevo sender), test queries, and provider alternatives: [`supabase/README.md`](./supabase/README.md) → **Mention notifications**.

### Optional: make pins more resilient

For UI elements you expect to be frequent comment targets, add a stable anchor attribute:

```html
<button data-comment-anchor="hero-cta">Start review</button>
```

The selector resolver prefers `[data-comment-anchor]` over auto-generated `nth-of-type` selectors, so pins on these elements survive code restructuring that would otherwise demote them to "approximate" mode.

---

## Local development

```bash
npm install
npm run dev
```

Opens `http://localhost:5173/demo/`. Supabase credentials are read from `localStorage` in dev so they never end up in version control — see [`demo/README.md`](./demo/README.md) for the one-time setup, including the magic-link redirect allow-list entry for `http://localhost:5173`.

Commands:

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server on port 5173 with the demo page |
| `npm run typecheck` | `vue-tsc --noEmit` |
| `npm run build` | Production library bundle to `dist/` |
| `npm run preview` | Serve the built artifact for sanity testing |

---

## Architecture

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ BMW T3 preview  │  │ EchoPark preview│  │  Future XD work │
│ (GitHub Pages)  │  │ (GitHub Pages)  │  │ (Sonic staging) │
└────────┬────────┘  └────────┬────────┘  └────────┬────────┘
         │                    │                    │
         └────────────────────┼────────────────────┘
                              ▼
                ┌─────────────────────────────┐
                │   widget.iife.js (jsDelivr) │
                └──────────────┬──────────────┘
                               │ select · insert · realtime · auth
                               ▼
                ┌─────────────────────────────┐
                │   One Supabase project      │
                │   threads + comments +      │
                │   mentionables + mentions   │
                │   plus Supabase Auth        │
                └─────────────────────────────┘
```

One database backs every consuming project. Threads are scoped by `(project_id, page_url)`. The `mentionables` table holds a per-project team list curated from inside the widget itself; emails never appear in checked-in code. The widget script is a single file, version-pinned via jsDelivr, served from this public GitHub repo.

### Repository layout

```
src/
├── index.ts                  # Entrypoint, mount + auto-mount logic
├── components/
│   ├── CommentOverlay.vue    # Root component, owns auth-deferred actions
│   ├── CommentPin.vue        # Single pin marker + hold-and-drag interaction
│   ├── CommentThread.vue     # Thread popover, delete affordances, mention rendering
│   ├── SignInPrompt.vue      # Magic-link request modal (replaces IdentityPrompt)
│   ├── TeamPanel.vue         # In-widget mentionables management
│   ├── MentionInput.vue      # Textarea + @-autocomplete dropdown
│   └── Toolbar.vue           # Floating toggle + sign-in + team button
├── composables/
│   ├── useSupabase.ts        # Client + project channel subscription
│   ├── useAuth.ts            # Magic-link auth wrapper (session + identity)
│   ├── useAnchoring.ts       # Vue glue over AnchorScheduler/Watcher
│   ├── useThreads.ts         # CRUD + realtime merge + comment_mentions persistence
│   └── useMentionables.ts    # Team list + autocomplete pool (team ∪ authors)
├── lib/
│   ├── selectorPath.ts       # Compute + resolve DOM selector paths
│   └── anchoring.ts          # AnchorScheduler / AnchorWatcher primitives
├── types.ts
├── styles.css                # All rules scoped under #__comment-widget-root
└── shims-vue.d.ts

demo/
├── index.html                # Local test page with §7.5 + Phase 3 controls
└── README.md

supabase/
├── schema.sql                # Tables, indexes, RLS, realtime publication
└── README.md                 # Setup + auth configuration notes
```

### The anchoring algorithm (the part that decides whether it feels reliable)

See `src/lib/selectorPath.ts` and `src/lib/anchoring.ts` for the implementation. Two pieces:

1. **Storage.** On click, we capture a CSS selector path (preferring `#id` → `[data-comment-anchor]` → tag + `:nth-of-type` chain) plus *percentage* coordinates inside the element's bounding box. Percentage coordinates are the trick that survives responsive layouts: a click on the middle of a button is "50%, 50%" whether the button is 200 px wide on mobile or 600 px wide on desktop.
2. **Resolution.** On load, we try the stored selector. If it doesn't match, we progressively shorten it from the right looking for the deepest ancestor that still matches; pins fall back to that ancestor and render with a dashed amber outline so it's visually obvious they're approximate.
3. **Live tracking.** A shared `AnchorScheduler` owns one `MutationObserver` on `document.body`, one passive scroll listener, and one debounced resize listener. Each pin's `AnchorWatcher` owns a `ResizeObserver` on its anchored element. Together they keep pins glued to their elements through lazy-loaded sections, font swaps, JS-driven UI changes, and viewport changes.
4. **Drag-to-reposition.** Signed-in viewers can press and hold a pin (180 ms) or drag it more than ~4 px to enter drag mode. On drop, the widget root momentarily disables its own pointer events, calls `document.elementFromPoint`, recomputes the selector + percentage anchor for the drop target, and writes the new anchor back to the same thread row. The watcher's `updateAnchor` swaps its `ResizeObserver` onto the new element without disposing or recreating the watcher.

### Auth model

Reading the page stays anonymous. Writing — creating a thread, replying, resolving / reopening, dragging a pin, deleting a comment, deleting a thread, or managing the team — requires a Supabase session. The widget's RLS policies enforce this at the database layer: anonymous viewers can `select` from `threads` and `comments` only.

Email-OTP flow:

1. The user clicks **Sign in** in the toolbar (or starts a write action while anonymous, which opens the sign-in modal with a contextual hint like "Sign in to post your reply").
2. **Step 1** — they enter name + email. The widget calls `supabase.auth.signInWithOtp` (with the name stashed in `user_metadata` and no `emailRedirectTo`), and Supabase emails a six-digit code.
3. **Step 2** — they paste the code back into the modal. The widget calls `supabase.auth.verifyOtp({ type: 'email' })`; on success Supabase fires `onAuthStateChange` and the modal dismisses.
4. The widget watches `signedIn` — once it flips, any deferred action (the original write attempt) replays automatically, all in the same browser tab.

OTP codes (vs. clickable magic links) tolerate URL-rewriting email security gateways like Mimecast: the message body contains no URL for URL Protect to mangle. The required Supabase email template change is documented in [`supabase/README.md`](./supabase/README.md).

### Mentions

`@`-typing inside the composer or reply box opens a dropdown of candidates. The pool is the union of:

- **Curated team members** in `mentionables` (per-project, edited from the in-widget **Team** panel).
- **Historical authors** — anyone who has previously authored a thread or comment on this project. These appear automatically once their content loads.

Selecting a candidate inserts a plain `@Display Name` token into the comment body and tracks the mention's email in an out-of-band `mentions` array. On submit, mentions land in `comment_mentions` for the just-inserted comment. The rendered comment matches `@Name` tokens against the same pool and wraps them in `cw-mention` pills. Notifications on mention (Slack / email) are tracked separately and ship in 3.x.

---

## Bundle size

The production IIFE is **~95 KB gzipped** (`dist/widget.iife.js`, CSS inlined). The build plan budget is ~80 KB; we're 15 KB over. Approximate breakdown:

- `@supabase/supabase-js` v2 — ~50 KB gzipped. Bundles auth, storage, functions, postgrest, and realtime as a single non-tree-shakable unit.
- Vue 3 runtime + reactivity — ~30 KB gzipped.
- Widget code + injected CSS — ~30 KB gzipped.

If hitting 80 KB matters before 3.x, swap the umbrella Supabase package for direct imports of `@supabase/postgrest-js`, `@supabase/realtime-js`, and `@supabase/auth-js` and compose them by hand — recovers ~20 KB.

---

## Backend setup

See [`supabase/README.md`](./supabase/README.md). The short version:

1. Create a Supabase project, copy URL + anon key.
2. Run [`supabase/schema.sql`](./supabase/schema.sql) in the SQL editor.
3. Confirm `threads`, `comments`, and `mentionables` are in the `supabase_realtime` publication.
4. In **Authentication → Email Templates → Magic Link**, swap the default body for a code-only template that renders `{{ .Token }}` and omits `{{ .ConfirmationURL }}`. See [`supabase/README.md`](./supabase/README.md).
5. Drop the embed snippet on any consuming page.

The shipped RLS policies treat anonymous viewers as read-only; signed-in users can create / reply / resolve / drag / delete with row-creator constraints on delete. Tightening further (per-IP rate limits, body length caps) is documented in `supabase/README.md`.

---

## Versioning and releases

Pin tags to exact versions on consumers (`@v0.2.1`, not `@latest`). Releases follow semver:

- Patch: anchor algorithm tweaks, UI polish, sign-in flow tweaks (e.g. `v0.2.1`'s magic-link → OTP swap, which only requires a Supabase email-template edit on the consumer side).
- Minor: new features that are backward compatible. (`v0.2.0` is technically schema-breaking for v0.1.x consumers, but pre-1.0 we bump minor for breaking changes and call them out in the release notes.)
- Major: post-1.0 schema or embed-API breaking changes.

### Release workflow

The repo ships two GitHub Actions under `.github/workflows/`:

- **`build-dist.yml`** runs on every push to `main`, runs `npm run build`, and commits a refreshed `dist/widget.iife.js` + `dist/widget.es.js` back to `main` via a `build: refresh dist/ [skip ci]` commit. You never run the build for a release — the bot does.
- **`release.yml`** runs on every push of a `vX.Y.Z` tag. It verifies `dist/` is present in the tagged commit, creates a GitHub Release with auto-generated notes, and attaches the built bundles as release assets.

Shipping a new version:

1. Make code changes locally, test against the demo + a local copy in a consuming project.
2. Bump `version` in `package.json` (semver).
3. `git push origin main`.
4. Wait for **Build and commit dist** to finish in the **Actions** tab. If it produced a `build: refresh dist/` commit, `git pull` to fetch it locally.
5. Tag and push:
   ```powershell
   git tag v0.2.1
   git push origin v0.2.1
   ```
6. The **Release** workflow runs, creates the GitHub Release, and the tag becomes immediately servable from jsDelivr at:
   ```
   https://cdn.jsdelivr.net/gh/{user}/comment-widget@v0.2.1/dist/widget.iife.js
   ```
7. **For releases that require Supabase configuration changes** (like v0.2.0's schema or v0.2.1's email-template edit): coordinate with each consuming project before they bump their `<script>` tag.

**Don't skip step 4.** If you tag before pulling, the tag will point at a commit that pre-dates the bot's `dist/` commit and jsDelivr will 404 on `widget.iife.js`. The Release workflow guards against this and fails loudly when it happens — delete the bad tag (`git push --delete origin v0.2.1 && git tag -d v0.2.1`), pull, and re-tag.

---

## Project conventions

- Vue 3 Composition API throughout — no Options API.
- TypeScript strict mode.
- Sentence case in all UI strings, never Title Case.
- All styles scoped under `#__comment-widget-root` with `cw-` class prefixes. No bare element selectors — they would leak into the host page.
- The widget's visual language is deliberately neutral. It's a tool layered on top of designs and shouldn't compete with them.

---

## License

Private — Sonic XD internal tooling.
