import { onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
import type { Thread, AnchorData, ResolvedAnchor } from '../types';
import { AnchorScheduler, AnchorWatcher } from '../lib/anchoring';
import { computeSelectorPath } from '../lib/selectorPath';

// Composable that owns the lifecycle of the per-pin AnchorWatchers and the
// shared AnchorScheduler. Pass it the reactive list of threads; it produces
// a reactive map of `thread.id → ResolvedAnchor | null`.

interface WatcherEntry {
  watcher: AnchorWatcher;
  off: () => void;
  // Cached fingerprint to detect anchor changes on an existing thread without
  // diffing the whole row each tick.
  anchorKey: string;
}

function anchorKey(thread: Thread): string {
  return `${thread.selector_path}|${thread.anchor_x_pct}|${thread.anchor_y_pct}`;
}

export function useAnchoring(threadsRef: { value: readonly Thread[] }) {
  const positions = reactive(new Map<string, ResolvedAnchor | null>());
  const scheduler = new AnchorScheduler();
  const watchers = new Map<string, WatcherEntry>();
  const started = ref(false);

  function ensureWatcher(thread: Thread): void {
    const existing = watchers.get(thread.id);
    if (existing) {
      // Same id, but selector or coordinates moved — e.g. via drag-to-reposition.
      // Update the watcher in place rather than tearing it down so subscribers
      // continue to see one stream.
      const key = anchorKey(thread);
      if (existing.anchorKey !== key) {
        existing.watcher.updateAnchor({
          selector_path: thread.selector_path,
          anchor_x_pct: thread.anchor_x_pct,
          anchor_y_pct: thread.anchor_y_pct,
        });
        existing.anchorKey = key;
      }
      return;
    }
    const watcher = new AnchorWatcher({
      selector_path: thread.selector_path,
      anchor_x_pct: thread.anchor_x_pct,
      anchor_y_pct: thread.anchor_y_pct,
    });
    const off = watcher.subscribe((anchor) => {
      positions.set(thread.id, anchor);
    });
    scheduler.register(watcher);
    watchers.set(thread.id, { watcher, off, anchorKey: anchorKey(thread) });
  }

  function disposeWatcher(threadId: string): void {
    const entry = watchers.get(threadId);
    if (!entry) return;
    entry.off();
    scheduler.unregister(entry.watcher);
    watchers.delete(threadId);
    positions.delete(threadId);
  }

  onMounted(() => {
    scheduler.start();
    started.value = true;
    for (const thread of threadsRef.value) ensureWatcher(thread);
  });

  onBeforeUnmount(() => {
    scheduler.stop();
    for (const id of Array.from(watchers.keys())) disposeWatcher(id);
  });

  watch(
    () => threadsRef.value,
    (next) => {
      const nextIds = new Set(next.map((t) => t.id));
      for (const id of Array.from(watchers.keys())) {
        if (!nextIds.has(id)) disposeWatcher(id);
      }
      for (const thread of next) ensureWatcher(thread);
    },
    { deep: true },
  );

  return { positions };
}

export function captureAnchor(element: Element, event: MouseEvent): AnchorData {
  const selector = computeSelectorPath(element);
  const rect = element.getBoundingClientRect();
  // Guard against 0-area elements (e.g. inline elements with collapsed boxes).
  const width = rect.width || 1;
  const height = rect.height || 1;
  return {
    selector,
    x_pct: clamp01((event.clientX - rect.left) / width),
    y_pct: clamp01((event.clientY - rect.top) / height),
  };
}

function clamp01(n: number): number {
  if (Number.isNaN(n)) return 0.5;
  if (n < 0) return 0;
  if (n > 1) return 1;
  return n;
}
