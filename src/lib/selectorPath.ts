// Selector path computation and resolution.
//
// The goal: take a clicked element, produce a string we can use later to find
// the same logical element after a page reload or a code change. Then on load,
// resolve that string back to an element — and degrade gracefully when the
// exact selector no longer matches.
//
// Stability hierarchy (preferred → fallback):
//   1. `id`                              — explicit, stable
//   2. `data-comment-anchor="…"`         — designer-provided opt-in anchor
//   3. tag + :nth-of-type chain          — auto-generated, fragile

import type { Thread } from '../types';

// Elements we never anchor on — they're internal widget chrome.
const WIDGET_ROOT_ID = '__comment-widget-root';

export function computeSelectorPath(element: Element): string {
  const path: string[] = [];
  let current: Element | null = element;

  while (current && current !== document.body && current !== document.documentElement) {
    if (current.id && current.id !== WIDGET_ROOT_ID) {
      path.unshift(`#${CSS.escape(current.id)}`);
      return path.join(' > ');
    }

    const anchorAttr = current.getAttribute('data-comment-anchor');
    if (anchorAttr) {
      path.unshift(`[data-comment-anchor="${CSS.escape(anchorAttr)}"]`);
      return path.join(' > ');
    }

    let part = current.tagName.toLowerCase();
    const parent: Element | null = current.parentElement;
    if (parent) {
      const sameTag = Array.from(parent.children).filter(
        (c) => c.tagName === current!.tagName,
      );
      if (sameTag.length > 1) {
        part += `:nth-of-type(${sameTag.indexOf(current) + 1})`;
      }
    }
    path.unshift(part);
    current = parent;
  }

  return path.join(' > ');
}

export interface ResolveResult {
  element: Element;
  approximate: boolean;
}

// Resolve a stored selector_path back to a live element.
// Returns null only when nothing along the ancestor chain matches.
export function resolveSelectorPath(selectorPath: string): ResolveResult | null {
  const exact = safeQuery(selectorPath);
  if (exact) {
    return { element: exact, approximate: false };
  }

  // Fallback: shorten the selector from the right, looking for the deepest
  // ancestor that still matches. This handles the common case where leaf
  // markup changed (text node added, wrapper inserted) but the surrounding
  // structure is intact.
  const parts = selectorPath.split(' > ');
  for (let i = parts.length - 1; i > 0; i--) {
    const truncated = parts.slice(0, i).join(' > ');
    const candidate = safeQuery(truncated);
    if (candidate) {
      return { element: candidate, approximate: true };
    }
  }

  return null;
}

// `document.querySelector` throws on syntactically invalid selectors. Some
// stored selectors are from older versions or hand-crafted; we'd rather treat
// them as "no match" than throw the whole resolver.
function safeQuery(selector: string): Element | null {
  try {
    return document.querySelector(selector);
  } catch {
    return null;
  }
}

// Walk up from an event target, stopping at the first non-widget element.
// Used in capture mode so clicks on the widget's own UI don't anchor pins
// onto the widget itself.
export function findCommentableTarget(eventTarget: EventTarget | null): Element | null {
  if (!(eventTarget instanceof Element)) return null;
  let current: Element | null = eventTarget;
  while (current) {
    if (current.closest(`#${WIDGET_ROOT_ID}`)) return null;
    return current;
  }
  return null;
}

// Test convenience: re-export the constant so callers don't hardcode it.
export const WIDGET_ROOT_SELECTOR = `#${WIDGET_ROOT_ID}`;

// Exported for testing — not part of the public surface.
export function _internal_buildPath(element: Element): string {
  return computeSelectorPath(element);
}

// Helper: given a Thread, compute the on-screen pixel position of its anchor
// inside a known element. Kept here (rather than in anchoring.ts) because it
// pairs naturally with the resolver above.
export function anchorPointInElement(
  element: Element,
  thread: Pick<Thread, 'anchor_x_pct' | 'anchor_y_pct'>,
): { x: number; y: number } {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left + rect.width * thread.anchor_x_pct,
    y: rect.top + rect.height * thread.anchor_y_pct,
  };
}
