# Demo page

This is the local test surface for the comment widget. It serves the source via Vite's dev server, so edits in `src/` hot-reload here.

## Running

```bash
npm install
npm run dev
```

That opens `http://localhost:5173/demo/`.

## Pointing it at a real Supabase project

The demo reads Supabase credentials from `localStorage` (so you don't accidentally commit them). In the browser DevTools console:

```js
localStorage.setItem('CW_SUPABASE_URL', 'https://your-project.supabase.co');
localStorage.setItem('CW_SUPABASE_ANON_KEY', 'eyJhbG...');
location.reload();
```

The yellow config banner at the top disappears once both are set.

### Enabling sign-in locally

The widget signs writers in with a six-digit code emailed by Supabase. Before testing sign-in from the dev server:

1. Go to **Authentication → Email Templates → Magic Link** in the Supabase dashboard.
2. Replace the default body with a code-only template that renders `{{ .Token }}` and omits `{{ .ConfirmationURL }}`. The snippet is in [`../supabase/README.md`](../supabase/README.md).

You do not need to configure **Redirect URLs** — the OTP flow stays in the same tab.

## §7.5 acceptance-criteria walkthrough

The page exposes buttons that let you exercise each of the seven failure modes from §7.5 of the build plan. Before declaring Phase 1 done, walk through all of these:

1. **Page loads with comments → pins at correct positions.** Drop a few pins, reload, confirm they reappear in the same places.
2. **Anchored element removed → pin degrades.** Pin on a card, click "Remove last card" if you pinned the last one, then reload. The pin should render with a dashed amber outline (approximate state) by attaching to the parent grid.
3. **Resize between mobile and desktop → pins move with elements.** Click "Toggle narrow viewport" or resize the window. Pins should track their elements.
4. **Lazy-loaded section → pin appears when section appears.** Pin on the "Load lazy section" trigger first to leave a known pin in place. Then reload. Pin the lazy-loaded content (after pressing "Load lazy section"), reload — the pin should appear once you press "Load lazy section" again because of the MutationObserver.
5. **Page scrolls → pins stay attached.** Drop pins at the top and bottom of the page. Scroll. Pins should follow.
6. **Inner content swapped → pin stays roughly correct.** Pin near the start of the hero title text, then click "Swap hero title text". Percentage anchoring should keep the pin in approximately the right place.
7. **Same selector on different pages.** Not directly exercisable from a single page, but verify by serving two distinct pages with overlapping selectors and confirming `page_url` filters them.

## Review rounds (local test)

`demo/rounds/` is a fixture that exercises the round switcher with no deploy. It mirrors the production layout the deploy templates produce: three deliberately different builds at `/demo/rounds/r1|r2|r3/` plus a manifest at `/demo/rounds/index.json`. The widget's `useRounds` keys entirely off the URL + manifest, so the dev server reproduces real behaviour.

1. Run `npm run dev` and open `http://localhost:5173/demo/`.
2. In the **Review rounds (local test)** section, click **Open Round 1** (or go straight to `http://localhost:5173/demo/rounds/r1/`).
3. The toolbar shows a **Round 1 of 3** control. Open it and jump between rounds — each navigation loads a visibly different build.
4. Rounds 1 and 2 show the amber **"Viewing an archived round"** banner; round 3 (the manifest's `latest`) does not.
5. To verify per-round comment isolation, point the demo at a real Supabase project (see above), then leave a pin on round 1 and switch to round 2 — round 1's pins should not appear, and switching back should restore them. (Each round is a distinct `page_url`.)

To confirm the graceful fallback, open `http://localhost:5173/demo/` itself: it isn't under `/rounds/`, so the switcher and banner stay hidden and the widget behaves exactly as before.

## Two-tab realtime test

Open the demo in two browser tabs at the same URL. Create a comment in tab A. Tab B should show the new pin within ~2 seconds with no manual refresh.

## Phase 2 acceptance criteria

Once you have a working Supabase backend wired up:

1. **Threaded replies.** Drop a pin. Click it. Use the reply textarea at the bottom of the popover to add 4 more replies. All 5 should render in chronological order, cleanly, without overflowing.
2. **Resolve / reopen.** Click **Resolve** in the popover header. The pin should turn gray and (if "Showing open" is active in the toolbar) disappear from the page. Click the toolbar filter funnel to switch to "Showing all" — the resolved pin reappears in muted style. Open it and click **Reopen**; the pin returns to blue.
3. **Toolbar filter.** With a mix of open and resolved pins, the toolbar funnel button toggles between "N open" (open only) and "N of M" (all). Open pins always remain visible; resolved pins only show when the filter is off.
4. **Multi-project isolation.** Click **Switch project (demo ↔ demo-alt)** in the controls. The page reloads with a different `project_id` and the project pill at the top updates. Comments from one project should not appear in the other. To restore: click the button again.

## Phase 3 acceptance criteria

1. **Sign-in is required to write.** With no local Supabase session (use the **Clear local session** button to wipe), entering comment mode and clicking the page should still open the composer, but submitting it opens the sign-in modal with the hint "Sign in to post this comment." Enter name + email, click **Send code**, paste the six-digit code from your email, and click **Verify**. The original comment should auto-submit and the pin should land. The same deferred-replay behaviour should hold for reply, resolve / reopen, drag, and delete.
2. **Reading stays anonymous.** Open the demo in an incognito tab with no `localStorage` Supabase session. Existing pins and threads should be visible. Trying to reply prompts sign-in.
3. **@-mention autocomplete.** Open the **Team** panel from the toolbar (visible only when signed in). Add two team members with names + emails. Open any comment and type `@` in the reply box — the autocomplete dropdown should list both team members plus anyone who has previously authored on this project. Selecting a candidate inserts an `@Name` token and visually pills it after submit.
4. **Drag-to-reposition.** Press and hold any pin for ~200 ms (or click and drag past ~4 px). The pin should follow the cursor. Release over another element — the pin should snap to that element and persist after reload. Dropping outside any valid element (e.g. over the body background) snaps the pin back to its origin without saving.
5. **Selective delete.**
   - Posting a thread: only the thread creator sees the **Delete thread** icon in the popover header. Clicking it shows an inline confirm; confirming removes the entire conversation. No other signed-in user (and no anonymous viewer) should see that button.
   - Posting a reply: hovering your own reply reveals a trash icon next to the metadata. Clicking it shows an inline "Delete this reply?" prompt; confirming removes only that reply.
   - The thread creator's first comment does *not* get a per-comment delete — the only way to remove it is via **Delete thread**.

### Visible errors

The widget surfaces insert / update / delete failures inline:

- Failed to create the initial comment → red banner in the composer with a hint about what went wrong (RLS, invalid key, network, etc.).
- Failed to post a reply → red banner inside the popover footer.
- Failed to change status → red banner under the popover header.
- Failed delete → red banner under the popover header.
- Failed drag → red toast in the top-left of the viewport (a drag isn't tied to any popover).
- Failed initial load → red toast in the top-left of the viewport.
- Failed OTP request or verify → red banner inside the sign-in modal.

Console still logs the full underlying error for debugging.
