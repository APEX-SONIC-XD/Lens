# Agent task: archived "review rounds" deployment for GitHub Pages

Paste this whole file into the project's agent chat. It is self-contained.

## Goal

Change this project's GitHub Pages deployment so that instead of overwriting the
site root on each deploy, every deploy is **archived under its own permanent
`/rounds/rN/` URL**. The site root redirects to the newest round, and a
`rounds/index.json` manifest lists all rounds. This is the preferred deployment
behavior going forward.

Why: the project embeds a Figma-style comment widget. Designs change
significantly between review rounds, so comments can't be re-flowed onto a
redesigned layout. Giving each round a permanent URL lets the widget switch
between rounds and flip back to any past round with perfect fidelity (each round
keeps its exact build). Comments are isolated per round automatically because the
widget scopes them by URL.

## Steps

### 1. Add the deploy workflow at `.github/workflows/deploy-round.yml`

```yaml
name: Deploy preview round

on:
  workflow_dispatch:
    inputs:
      round:
        description: 'Round id (r1, r2, ...). Reuse an existing id to redeploy that round in place.'
        required: true
        default: r1

permissions:
  contents: write

concurrency:
  group: preview-pages
  cancel-in-progress: false

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Check out source
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: '22'

      # >>> CUSTOMIZE THIS STEP for this project's toolchain. <<<
      # The only requirement: the final static files must end up in ./build-output.
      #
      #   Static site (files live at the repo root):
      #     mkdir -p build-output
      #     rsync -a --exclude build-output --exclude .git --exclude deploy --exclude .github ./ build-output/
      #
      #   Node build that emits to dist/:
      #     npm ci && npm run build && mv dist build-output
      - name: Build preview
        run: |
          mkdir -p build-output
          rsync -a --exclude build-output --exclude .git --exclude deploy --exclude .github ./ build-output/

      - name: Check out existing published site
        uses: actions/checkout@v4
        with:
          ref: gh-pages
          path: published
        continue-on-error: true

      - name: Assemble rounds tree (archive + manifest + root redirect)
        env:
          ROUND_ID: ${{ github.event.inputs.round }}
        run: >-
          node deploy/build-rounds-manifest.mjs
          --site published
          --build build-output
          --round "$ROUND_ID"

      - name: Publish to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./published
          force_orphan: false
```

### 2. Add the manifest script at `deploy/build-rounds-manifest.mjs`

Dependency-free (Node stdlib only). It copies the new build into
`rounds/<id>/`, regenerates `rounds/index.json`, and writes the root redirect.
It reconstructs the full tree from the existing `gh-pages` branch, so prior
rounds are never clobbered.

```javascript
#!/usr/bin/env node
import { existsSync, mkdirSync, rmSync, cpSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token.startsWith('--')) {
      const key = token.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith('--')) args[key] = true;
      else { args[key] = next; i += 1; }
    }
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));
const siteDir = args.site || 'published';
const buildDir = args.build || 'build-output';
const roundId = args.round;

if (!roundId) { console.error('[rounds] --round <id> is required (e.g. --round r1).'); process.exit(1); }
if (!/^r\d+$/.test(roundId)) { console.error(`[rounds] invalid round id "${roundId}". Expected r<number>.`); process.exit(1); }
if (!existsSync(buildDir)) { console.error(`[rounds] build directory "${buildDir}" does not exist.`); process.exit(1); }

const roundsDir = join(siteDir, 'rounds');
mkdirSync(roundsDir, { recursive: true });

const targetRoundDir = join(roundsDir, roundId);
if (existsSync(targetRoundDir)) rmSync(targetRoundDir, { recursive: true, force: true });
cpSync(buildDir, targetRoundDir, { recursive: true });
console.log(`[rounds] published build to rounds/${roundId}/`);

const roundFolders = readdirSync(roundsDir, { withFileTypes: true })
  .filter((e) => e.isDirectory() && /^r\d+$/.test(e.name))
  .map((e) => e.name)
  .sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));

const rounds = roundFolders.map((id) => ({ id, label: `Round ${Number(id.slice(1))}`, path: `rounds/${id}/` }));
const latest = roundFolders[roundFolders.length - 1] ?? roundId;

writeFileSync(join(roundsDir, 'index.json'), `${JSON.stringify({ rounds, latest }, null, 2)}\n`);
console.log(`[rounds] wrote rounds/index.json (${rounds.length} round(s), latest ${latest}).`);

const redirectHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting to latest round</title>
    <meta http-equiv="refresh" content="0; url=./rounds/${latest}/" />
    <link rel="canonical" href="./rounds/${latest}/" />
  </head>
  <body>
    <p>Redirecting to the <a href="./rounds/${latest}/">latest review round</a>&hellip;</p>
    <script>location.replace('./rounds/${latest}/' + location.search + location.hash);</script>
  </body>
</html>
`;
writeFileSync(join(siteDir, 'index.html'), redirectHtml);
console.log(`[rounds] wrote root redirect -> rounds/${latest}/`);
```

### 3. Ensure the comment-widget embed is in the built output

Each round needs the widget script so it can be reviewed. Use a widget version
that includes the review-rounds feature (it reads the round from the
`/rounds/rN/` path and the manifest automatically — no extra config). Pin an
exact tag, never `@latest`. Put this in the page `<head>` (fill in the values):

```html
<script
  src="https://cdn.jsdelivr.net/gh/{your-user}/comment-widget@vX.Y.Z/dist/widget.iife.js"
  data-project-id="{this-project-id}"
  data-supabase-url="https://your-project.supabase.co"
  data-supabase-anon-key="eyJhbG..."
  defer
></script>
```

### 4. One-time GitHub setup

1. Repo **Settings -> Pages**: set source to **Deploy from a branch -> `gh-pages` / root**.
2. Run the **Deploy preview round** workflow from the **Actions** tab with `round = r1`.
3. For each later iteration, run it again with `r2`, `r3`, ... Reuse an existing id to redeploy that round in place (for fixes); use a new id to start a new round.

### 5. Acceptance check (after deploying r1 then r2)

- `https://<user>.github.io/<repo>/rounds/r1/` and `/rounds/r2/` each load their own build.
- `https://<user>.github.io/<repo>/` redirects to `/rounds/r2/`.
- `https://<user>.github.io/<repo>/rounds/index.json` lists both rounds with `"latest": "r2"`.
- The widget toolbar shows a "Round N of M" switcher, and an "archived round" banner on r1.

## Caveats

- **Existing root-URL comments get orphaned** the first time you adopt this
  layout (the bare root becomes a redirect, so its old `page_url` no longer
  loads). If this project already had comments on the root, re-home them once in
  the Supabase SQL editor (adjust ids/URLs):

  ```sql
  update public.threads
  set page_url = 'https://<user>.github.io/<repo>/rounds/r1/'
  where project_id = '<project-id>'
    and page_url = 'https://<user>.github.io/<repo>/';
  ```

- **Storage grows per round** — every round is a full copy of the build, kept
  forever. Fine for static previews; add a pruning policy later if builds get heavy.
```
