import { computed, ref } from 'vue';

// A review round is one archived deploy of the preview site, living at a
// permanent URL like https://org.github.io/site/rounds/r2/. Rounds are a pure
// URL convention — there is no `round_id` on threads. Comment isolation per
// round comes for free from the existing (project_id, page_url) scoping in
// useThreads: each round is a distinct page_url, so navigating between rounds
// loads the right comments automatically.
export interface Round {
  id: string;
  label: string;
  /** Path relative to the site root, e.g. "rounds/r1/". */
  path: string;
}

interface RoundsManifest {
  rounds?: Round[];
  latest?: string;
}

interface ParsedLocation {
  /** Absolute URL up to and including the "rounds/" segment. */
  baseUrl: string;
  /** Current round id parsed from the path, e.g. "r2". */
  roundId: string;
  /** Anything after "rounds/<id>/" so we can stay on the same page across rounds. */
  subPath: string;
}

// Matches ".../rounds/<id>/<rest>" and captures the base (through "rounds/"),
// the round id, and the remaining sub-path.
const ROUND_PATH_RE = /^(.*\/rounds\/)(r\d+)\/(.*)$/;

function parseLocation(): ParsedLocation | null {
  if (typeof window === 'undefined') return null;
  const { origin, pathname } = window.location;
  const match = pathname.match(ROUND_PATH_RE);
  if (!match) return null;
  return { baseUrl: origin + match[1], roundId: match[2], subPath: match[3] };
}

export function useRounds() {
  const parsed = parseLocation();

  const rounds = ref<Round[]>([]);
  const latestId = ref<string | null>(null);
  const manifestLoaded = ref(false);

  // Parsed once from the URL — it can't change without a navigation, which
  // reloads the widget entirely.
  const currentRoundId = parsed?.roundId ?? null;

  // The switcher only makes sense once we're on a /rounds/ URL AND a manifest
  // with at least one round has loaded. Otherwise (local dev, a site not using
  // the archived-deploy layout, or a missing manifest) the widget behaves
  // exactly as it did before this feature.
  const enabled = computed(
    () => parsed !== null && manifestLoaded.value && rounds.value.length > 0,
  );

  const currentRound = computed(
    () => rounds.value.find((round) => round.id === currentRoundId) ?? null,
  );

  const currentIndex = computed(() =>
    rounds.value.findIndex((round) => round.id === currentRoundId),
  );

  const isLatest = computed(
    () => latestId.value !== null && currentRoundId === latestId.value,
  );

  async function load(): Promise<void> {
    if (!parsed) return;
    try {
      const res = await fetch(`${parsed.baseUrl}index.json`, { cache: 'no-store' });
      if (!res.ok) return;
      const data = (await res.json()) as RoundsManifest;
      if (!Array.isArray(data.rounds) || data.rounds.length === 0) return;
      rounds.value = data.rounds;
      latestId.value =
        data.latest ?? data.rounds[data.rounds.length - 1]?.id ?? null;
      manifestLoaded.value = true;
    } catch (e) {
      // Manifest missing or malformed — degrade silently to no round UI.
      // eslint-disable-next-line no-console
      console.warn(
        '[comment-widget] rounds manifest unavailable; round switcher disabled.',
        e,
      );
    }
  }

  function switchTo(round: Round): void {
    if (!parsed || round.id === currentRoundId) return;
    // Preserve the sub-path (so multi-page sites stay on the same page) plus
    // any query string and hash.
    const target =
      `${parsed.baseUrl}${round.id}/${parsed.subPath}` +
      `${window.location.search}${window.location.hash}`;
    window.location.assign(target);
  }

  return {
    enabled,
    rounds,
    currentRoundId,
    currentRound,
    currentIndex,
    isLatest,
    load,
    switchTo,
  };
}
