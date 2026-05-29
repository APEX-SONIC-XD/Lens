#!/usr/bin/env node
// Assemble the archived-rounds tree for a preview site's GitHub Pages branch.
//
// Given the currently published site (a checkout of the gh-pages branch) and a
// freshly built preview, this script:
//   1. Copies the new build into <site>/rounds/<round>/ (replacing that round
//      if it already exists, leaving every other round untouched).
//   2. Regenerates <site>/rounds/index.json — the manifest the comment widget
//      fetches to populate its round switcher.
//   3. Writes <site>/index.html as a redirect to the newest round so the bare
//      site URL always lands on the latest build.
//
// Usage:
//   node build-rounds-manifest.mjs --site published --build build-output --round r2
//
// It is intentionally dependency-free (Node stdlib only) so preview repos don't
// need an npm install step just to deploy.

import { existsSync, mkdirSync, rmSync, cpSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token.startsWith('--')) {
      const key = token.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith('--')) {
        args[key] = true;
      } else {
        args[key] = next;
        i += 1;
      }
    }
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));
const siteDir = args.site || 'published';
const buildDir = args.build || 'build-output';
const roundId = args.round;

if (!roundId) {
  console.error('[rounds] --round <id> is required (e.g. --round r1).');
  process.exit(1);
}
if (!/^r\d+$/.test(roundId)) {
  console.error(`[rounds] invalid round id "${roundId}". Expected r<number>, e.g. r1, r2.`);
  process.exit(1);
}
if (!existsSync(buildDir)) {
  console.error(`[rounds] build directory "${buildDir}" does not exist.`);
  process.exit(1);
}

const roundsDir = join(siteDir, 'rounds');
mkdirSync(roundsDir, { recursive: true });

// 1. Drop the new build into rounds/<id>/, replacing any prior copy of that
//    round but leaving sibling rounds alone.
const targetRoundDir = join(roundsDir, roundId);
if (existsSync(targetRoundDir)) {
  rmSync(targetRoundDir, { recursive: true, force: true });
}
cpSync(buildDir, targetRoundDir, { recursive: true });
console.log(`[rounds] published build to rounds/${roundId}/`);

// 2. Enumerate every round folder and sort numerically (r2 before r10).
const roundFolders = readdirSync(roundsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && /^r\d+$/.test(entry.name))
  .map((entry) => entry.name)
  .sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));

const rounds = roundFolders.map((id) => ({
  id,
  label: `Round ${Number(id.slice(1))}`,
  path: `rounds/${id}/`,
}));

// "Latest" is the highest-numbered round, which may differ from the round just
// deployed when an earlier round is being re-published with a fix.
const latest = roundFolders[roundFolders.length - 1] ?? roundId;

const manifest = { rounds, latest };
writeFileSync(join(roundsDir, 'index.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`[rounds] wrote rounds/index.json (${rounds.length} round(s), latest ${latest}).`);

// 3. Root redirect to the newest round.
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
    <script>
      location.replace('./rounds/${latest}/' + location.search + location.hash);
    </script>
  </body>
</html>
`;
writeFileSync(join(siteDir, 'index.html'), redirectHtml);
console.log(`[rounds] wrote root redirect -> rounds/${latest}/`);
