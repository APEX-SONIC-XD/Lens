// Live anchoring: keep pins glued to their elements as the page mutates.
//
// Each pin is backed by an AnchorWatcher that:
//   - resolves the stored selector to a live element
//   - publishes a current viewport position
//   - re-resolves when the DOM mutates (new elements appearing, etc.)
//   - recomputes position when the element's box changes, when the window
//     resizes, and when the user scrolls
//
// The watcher exposes a subscribe() callback rather than coupling to Vue, so
// the same primitives could drive a React port later.

import type { ResolvedAnchor, Thread } from '../types';
import { anchorPointInElement, resolveSelectorPath } from './selectorPath';

type Listener = (anchor: ResolvedAnchor | null) => void;

export class AnchorWatcher {
  private listeners = new Set<Listener>();
  private element: Element | null = null;
  private approximate = false;
  private resizeObserver: ResizeObserver | null = null;
  private current: ResolvedAnchor | null = null;
  private disposed = false;

  constructor(private readonly thread: Pick<Thread, 'selector_path' | 'anchor_x_pct' | 'anchor_y_pct'>) {
    this.resolve();
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    listener(this.current);
    return () => {
      this.listeners.delete(listener);
    };
  }

  // Called by the central scheduler on scroll / resize / RAF.
  recompute(): void {
    if (this.disposed) return;
    if (!this.element) {
      this.resolve();
      return;
    }
    // If the element was detached from the DOM since last compute, re-resolve.
    if (!this.element.isConnected) {
      this.teardownElement();
      this.resolve();
      return;
    }
    this.publishFromElement();
  }

  // Called by the central scheduler when MutationObserver fires.
  onDomMutated(): void {
    if (this.disposed) return;
    // Two cases:
    //   1. We don't have an element yet (initial resolve failed) — try again.
    //   2. We have an element but markup changed — re-resolve to upgrade from
    //      "approximate" back to "exact" if the original selector now matches.
    if (!this.element) {
      this.resolve();
      return;
    }
    if (this.approximate) {
      const result = resolveSelectorPath(this.thread.selector_path);
      if (result && !result.approximate && result.element !== this.element) {
        this.teardownElement();
        this.attachElement(result.element, false);
      }
    } else if (!this.element.isConnected) {
      this.teardownElement();
      this.resolve();
    }
  }

  dispose(): void {
    this.disposed = true;
    this.listeners.clear();
    this.teardownElement();
  }

  private resolve(): void {
    const result = resolveSelectorPath(this.thread.selector_path);
    if (!result) {
      this.current = null;
      this.publish();
      return;
    }
    this.attachElement(result.element, result.approximate);
  }

  private attachElement(element: Element, approximate: boolean): void {
    this.element = element;
    this.approximate = approximate;

    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => this.publishFromElement());
      this.resizeObserver.observe(element);
    }

    this.publishFromElement();
  }

  private teardownElement(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    this.element = null;
    this.approximate = false;
  }

  private publishFromElement(): void {
    if (!this.element) {
      this.current = null;
    } else {
      const { x, y } = anchorPointInElement(this.element, this.thread);
      this.current = { x, y, approximate: this.approximate, element: this.element };
    }
    this.publish();
  }

  private publish(): void {
    for (const listener of this.listeners) {
      listener(this.current);
    }
  }
}

// One scheduler for the whole widget — sharing scroll / resize / mutation
// listeners across all pins is dramatically cheaper than per-pin listeners
// when there are many threads on a page.
export class AnchorScheduler {
  private watchers = new Set<AnchorWatcher>();
  private mutationObserver: MutationObserver | null = null;
  private rafPending = false;
  private resizeDebounceTimer: number | null = null;
  private mutationDebounceTimer: number | null = null;

  // Bound handlers, kept as instance fields so add/removeEventListener match.
  private onScroll = (): void => this.scheduleRecompute();
  private onResize = (): void => {
    if (this.resizeDebounceTimer !== null) {
      window.clearTimeout(this.resizeDebounceTimer);
    }
    this.resizeDebounceTimer = window.setTimeout(() => {
      this.resizeDebounceTimer = null;
      this.recomputeAll();
    }, 120);
  };

  start(): void {
    window.addEventListener('scroll', this.onScroll, { passive: true, capture: true });
    window.addEventListener('resize', this.onResize);

    this.mutationObserver = new MutationObserver(() => {
      if (this.mutationDebounceTimer !== null) {
        window.clearTimeout(this.mutationDebounceTimer);
      }
      this.mutationDebounceTimer = window.setTimeout(() => {
        this.mutationDebounceTimer = null;
        for (const watcher of this.watchers) watcher.onDomMutated();
      }, 50);
    });
    this.mutationObserver.observe(document.body, {
      subtree: true,
      childList: true,
      // Intentionally not watching attributes / characterData — too noisy and
      // the ResizeObserver per element catches the layout consequences anyway.
    });
  }

  stop(): void {
    window.removeEventListener('scroll', this.onScroll, { capture: true } as EventListenerOptions);
    window.removeEventListener('resize', this.onResize);
    this.mutationObserver?.disconnect();
    this.mutationObserver = null;
    if (this.resizeDebounceTimer !== null) window.clearTimeout(this.resizeDebounceTimer);
    if (this.mutationDebounceTimer !== null) window.clearTimeout(this.mutationDebounceTimer);
  }

  register(watcher: AnchorWatcher): void {
    this.watchers.add(watcher);
  }

  unregister(watcher: AnchorWatcher): void {
    this.watchers.delete(watcher);
    watcher.dispose();
  }

  private scheduleRecompute(): void {
    if (this.rafPending) return;
    this.rafPending = true;
    requestAnimationFrame(() => {
      this.rafPending = false;
      this.recomputeAll();
    });
  }

  private recomputeAll(): void {
    for (const watcher of this.watchers) watcher.recompute();
  }
}
