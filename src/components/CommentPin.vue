<script setup lang="ts">
import { computed, ref } from 'vue';
import type { AnchorData, ResolvedAnchor, Thread } from '../types';
import { captureAnchor } from '../composables/useAnchoring';
import { WIDGET_ROOT_SELECTOR } from '../lib/selectorPath';

const props = defineProps<{
  anchor: ResolvedAnchor;
  thread: Thread;
  active: boolean;
  index: number;
  draggable: boolean;
}>();

const emit = defineEmits<{
  (e: 'click'): void;
  (e: 'reposition', anchor: AnchorData): void;
}>();

// Drag interaction is intentionally distinct from click. We start a hold
// timer on pointerdown; if it fires (~180ms) or the pointer moves more than
// DRAG_THRESHOLD pixels before pointerup, we enter drag mode and suppress
// the click. Plain clicks (no hold, no move) still open the thread.
const HOLD_MS = 180;
const DRAG_THRESHOLD = 4;

const dragging = ref(false);
const dragOffset = ref({ dx: 0, dy: 0 });
const startPoint = ref({ x: 0, y: 0 });
const suppressClick = ref(false);
let holdTimer: number | null = null;
let activePointerId: number | null = null;

const titleText = computed(() => {
  const parts: string[] = [];
  if (props.thread.status === 'resolved') parts.push('Resolved');
  if (props.anchor.approximate) parts.push('Approximate anchor');
  if (props.draggable) parts.push('Hold and drag to reposition');
  return parts.join(' · ');
});

const pinStyle = computed(() => {
  if (dragging.value) {
    return {
      left: `${dragOffset.value.dx + startPoint.value.x}px`,
      top: `${dragOffset.value.dy + startPoint.value.y}px`,
    };
  }
  return {
    left: `${props.anchor.x}px`,
    top: `${props.anchor.y}px`,
  };
});

function clearHoldTimer(): void {
  if (holdTimer !== null) {
    window.clearTimeout(holdTimer);
    holdTimer = null;
  }
}

function onPointerDown(event: PointerEvent): void {
  if (event.button !== 0) return;
  if (!props.draggable) return;
  const targetEl = event.currentTarget as HTMLElement;

  activePointerId = event.pointerId;
  startPoint.value = { x: props.anchor.x, y: props.anchor.y };
  dragOffset.value = { dx: 0, dy: 0 };
  suppressClick.value = false;

  const startX = event.clientX;
  const startY = event.clientY;

  holdTimer = window.setTimeout(() => {
    holdTimer = null;
    enterDrag(targetEl);
  }, HOLD_MS);

  function onMove(ev: PointerEvent): void {
    if (ev.pointerId !== activePointerId) return;
    const dx = ev.clientX - startX;
    const dy = ev.clientY - startY;
    if (!dragging.value) {
      if (Math.hypot(dx, dy) >= DRAG_THRESHOLD) {
        clearHoldTimer();
        enterDrag(targetEl);
      } else {
        return;
      }
    }
    dragOffset.value = { dx, dy };
  }

  function onUp(ev: PointerEvent): void {
    if (ev.pointerId !== activePointerId) return;
    cleanup();
    if (dragging.value) {
      finishDrag(ev);
    }
  }

  function onCancel(ev: PointerEvent): void {
    if (ev.pointerId !== activePointerId) return;
    cleanup();
    if (dragging.value) {
      // Snap back to original position; cancelling the drag means no DB write.
      dragOffset.value = { dx: 0, dy: 0 };
      dragging.value = false;
      suppressClick.value = true;
    }
  }

  function cleanup(): void {
    clearHoldTimer();
    window.removeEventListener('pointermove', onMove);
    window.removeEventListener('pointerup', onUp);
    window.removeEventListener('pointercancel', onCancel);
    try {
      targetEl.releasePointerCapture(event.pointerId);
    } catch {
      // releasePointerCapture throws if the element never captured — non-fatal.
    }
    activePointerId = null;
  }

  function enterDrag(el: HTMLElement): void {
    if (dragging.value) return;
    dragging.value = true;
    suppressClick.value = true;
    try {
      el.setPointerCapture(event.pointerId);
    } catch {
      // Some environments (jsdom, very old browsers) lack pointer capture.
    }
  }

  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onUp);
  window.addEventListener('pointercancel', onCancel);
}

function finishDrag(event: PointerEvent): void {
  dragging.value = false;

  // Use `elementsFromPoint` (plural) so we get every element at the drop
  // coordinates in z-order, top to bottom, and pick the first one outside
  // the widget. This sidesteps the long-standing trap that `pointer-events`
  // is NOT inherited across elements — setting it on the widget root has no
  // effect on `.cw-pin { pointer-events: auto }`, so a temporary toggle
  // could never make the pin transparent to `elementFromPoint` (singular).
  // The plural API skips past the pin entirely without any style juggling.
  const stack = document.elementsFromPoint(event.clientX, event.clientY);
  const target =
    stack.find((el) => !el.closest(WIDGET_ROOT_SELECTOR)) ?? null;

  // Only refuse the drop when there is no usable target at all — the pointer
  // landed in dead space outside any document element. Dropping on `<body>`
  // / `<html>` is fine (body-relative anchors still position correctly via
  // their bounding rect); only the widget's own UI is rejected, and the
  // `elementsFromPoint` walk above already filtered that out.
  if (!target) {
    dragOffset.value = { dx: 0, dy: 0 };
    // eslint-disable-next-line no-console
    console.warn(
      '[comment-widget] drag dropped outside any anchorable element; snapped back.',
      { stack },
    );
    return;
  }

  // Build a synthetic MouseEvent payload for captureAnchor — only clientX/Y
  // are read so the constructor approach is fine even though pointer events
  // don't extend MouseEvent in all environments.
  const fakeEvent = new MouseEvent('mouseup', {
    clientX: event.clientX,
    clientY: event.clientY,
  });
  const anchorData = captureAnchor(target, fakeEvent);
  // Reset visual offset; the real position arrives via thread update + watcher.
  dragOffset.value = { dx: 0, dy: 0 };
  emit('reposition', anchorData);
}

function onClick(event: MouseEvent): void {
  if (suppressClick.value) {
    suppressClick.value = false;
    event.stopPropagation();
    return;
  }
  event.stopPropagation();
  emit('click');
}
</script>

<template>
  <button
    type="button"
    class="cw-pin"
    :class="{
      'cw-pin--approximate': anchor.approximate,
      'cw-pin--active': active,
      'cw-pin--resolved': thread.status === 'resolved',
      'cw-pin--dragging': dragging,
      'cw-pin--draggable': draggable,
    }"
    :style="pinStyle"
    :title="titleText"
    @pointerdown="onPointerDown"
    @click="onClick"
  >
    <span class="cw-pin-label">{{ index }}</span>
  </button>
</template>
