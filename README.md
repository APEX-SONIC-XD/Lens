# Comment widget

A Figma-style commenting layer for live web designs. Drop the script onto any preview URL; stakeholders click elements to leave pinned, threaded comments; everyone viewing the page sees the same comments in real time.

Built per the spec in [`comment-widget-build-plan.md`](./comment-widget-build-plan.md). This repo currently delivers **Phase 1 and Phase 2**: pinned comments with threaded replies, resolve / reopen flow, per-project filtering, real-time sync, reload persistence, and visible error feedback for failed writes. Phase 3 (notifications, archive, magic-link auth) is on the roadmap below.

---

## Status

| Phase | State |
|---|---|
| 1 — Minimum viable (click → comment → pin, real-time, reload persistence) | **Complete** |
| 2 — Threaded replies, resolved status, toolbar filter, multi-project isolation | **Complete** |
| 3 — Slack webhook, archive, magic-link auth | Not started |

Acceptance criteria walked through manually on the demo page — see [`demo/README.md`](./demo/README.md) for the §7.5 failure-mode checklist.

---

## Quick start (for consuming projects)

In the `<head>` or end of `<body>` of any XD preview:

```html
<script
  src="https://cdn.jsdelivr.net/gh/{your-github-user}/comment-widget@v0.1.0/dist/widget.iife.js"
  data-project-id="bmw-t3"
  data-supabase-url="https://your-project.supabase.co"
  data-supabase-anon-key="eyJhbG..."
  defer
></script>
```

That's the whole integration. The widget reads its config from data attributes on its own script tag, mounts itself at `document.body`, loads existing threads for `(project_id, normalized page URL)`, and starts streaming real-time changes.

**Pin to an exact tag** (`@v0.1.0`) in production embeds — never `@latest`. jsDelivr caches per-tag, so version pinning gives you both deterministic behaviour and free CDN performance.

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

Opens `http://localhost:5173/demo/`. Supabase credentials are read from `localStorage` in dev so they never end up in version control — see [`demo/README.md`](./demo/README.md) for the one-time setup.

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
                               │ select · insert · realtime
                               ▼
                ┌─────────────────────────────┐
                │   One Supabase project      │
                │   threads + comments tables │
                └─────────────────────────────┘
```

One database backs every consuming project. Threads are scoped by `(project_id, page_url)`. The widget script is a single file, version-pinned via jsDelivr, served from this public GitHub repo.

### Repository layout

```
src/
├── index.ts                  # Entrypoint, mount + auto-mount logic
├── components/
│   ├── CommentOverlay.vue    # Root component, owns click-capture mode
│   ├── CommentPin.vue        # Single pin marker
│   ├── CommentThread.vue     # Thread popover
│   ├── IdentityPrompt.vue    # First-visit name + email modal
│   └── Toolbar.vue           # Floating toggle button
├── composables/
│   ├── useSupabase.ts        # Client + project channel subscription
│   ├── useIdentity.ts        # localStorage name + email
│   ├── useAnchoring.ts       # Vue glue over AnchorScheduler/Watcher
│   └── useThreads.ts         # Threads + comments CRUD + realtime merge
├── lib/
│   ├── selectorPath.ts       # Compute + resolve DOM selector paths
│   └── anchoring.ts          # AnchorScheduler / AnchorWatcher primitives
├── types.ts
├── styles.css                # All rules scoped under #__comment-widget-root
└── shims-vue.d.ts

demo/
├── index.html                # Local test page with §7.5 controls
└── README.md

supabase/
├── schema.sql                # Tables, indexes, RLS, realtime publication
└── README.md                 # Setup + security hardening notes
```

### The anchoring algorithm (the part that decides whether it feels reliable)

See `src/lib/selectorPath.ts` and `src/lib/anchoring.ts` for the implementation. Two pieces:

1. **Storage.** On click, we capture a CSS selector path (preferring `#id` → `[data-comment-anchor]` → tag + `:nth-of-type` chain) plus *percentage* coordinates inside the element's bounding box. Percentage coordinates are the trick that survives responsive layouts: a click on the middle of a button is "50%, 50%" whether the button is 200 px wide on mobile or 600 px wide on desktop.
2. **Resolution.** On load, we try the stored selector. If it doesn't match, we progressively shorten it from the right looking for the deepest ancestor that still matches; pins fall back to that ancestor and render with a dashed amber outline so it's visually obvious they're approximate.
3. **Live tracking.** A shared `AnchorScheduler` owns one `MutationObserver` on `document.body`, one passive scroll listener, and one debounced resize listener. Each pin's `AnchorWatcher` owns a `ResizeObserver` on its anchored element. Together they keep pins glued to their elements through lazy-loaded sections, font swaps, JS-driven UI changes, and viewport changes.

---

## Bundle size

The production IIFE is **~102 KB gzipped** (`dist/widget.iife.js`, CSS inlined). The build plan budget is ~80 KB; we're 22 KB over. Approximate breakdown:

- `@supabase/supabase-js` v2 — ~50 KB gzipped. Bundles auth, storage, functions, postgrest, and realtime as a single non-tree-shakable unit.
- Vue 3 runtime + reactivity — ~30 KB gzipped.
- Widget code + injected CSS — ~22 KB gzipped.

If hitting 80 KB matters before Phase 3, swap the umbrella Supabase package for direct imports of `@supabase/postgrest-js` and `@supabase/realtime-js` and compose them by hand — recovers ~20 KB. Tracked as a Phase 3 task.

---

## Backend setup

See [`supabase/README.md`](./supabase/README.md). The short version:

1. Create a Supabase project, copy URL + anon key.
2. Run [`supabase/schema.sql`](./supabase/schema.sql) in the SQL editor.
3. Confirm `threads` and `comments` are in the `supabase_realtime` publication.
4. Drop the embed snippet on any consuming page.

The shipped RLS policies are permissive (`using (true)`) — they assume stakeholder-only preview URLs. **Tighten them before this leaves preview.** Hardening checklist is in `supabase/README.md`.

---

## Versioning and releases

Pin tags to exact versions on consumers (`@v0.1.0`, not `@latest`). Releases follow semver:

- Patch: anchor algorithm tweaks, UI polish that doesn't change behaviour.
- Minor: new features that are backward compatible.
- Major: schema or embed-API breaking changes (will not happen lightly while Supabase project is shared across multiple consumers).

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
   git tag v0.2.0
   git push origin v0.2.0
   ```
6. The **Release** workflow runs, creates the GitHub Release, and the tag becomes immediately servable from jsDelivr at:
   ```
   https://cdn.jsdelivr.net/gh/{user}/comment-widget@v0.2.0/dist/widget.iife.js
   ```
7. Update consuming projects to bump the version in their script tags.

**Don't skip step 4.** If you tag before pulling, the tag will point at a commit that pre-dates the bot's `dist/` commit and jsDelivr will 404 on `widget.iife.js`. The Release workflow guards against this and fails loudly when it happens — delete the bad tag (`git push --delete origin v0.2.0 && git tag -d v0.2.0`), pull, and re-tag.

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
