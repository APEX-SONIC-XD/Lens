<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { Comment, Thread } from '../types';

const props = defineProps<{
  thread: Thread;
  comments: readonly Comment[];
  anchorX: number;
  anchorY: number;
  replyBusy: boolean;
  replyError: string | null;
  replyResetKey: number;
  statusBusy: boolean;
  statusError: string | null;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'reply', body: string): void;
  (e: 'set-status', status: 'open' | 'resolved'): void;
}>();

// Reply input state lives here; parent signals successful submission by
// bumping `replyResetKey`. That keeps the popover self-contained while still
// letting the parent control async lifecycle and error display.
const replyBody = ref('');
const replyTextarea = ref<HTMLTextAreaElement | null>(null);

watch(
  () => props.replyResetKey,
  () => {
    replyBody.value = '';
  },
);

function submitReply(): void {
  const body = replyBody.value.trim();
  if (!body || props.replyBusy) return;
  emit('reply', body);
}

function toggleStatus(): void {
  if (props.statusBusy) return;
  emit('set-status', props.thread.status === 'open' ? 'resolved' : 'open');
}

// Popover positioning: prefer right of pin, fall back to left if not enough
// room. The popover itself is 320px wide; we offset 18px from the pin center.
const POPOVER_WIDTH = 320;
const OFFSET = 18;

const position = computed(() => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const placeRight = props.anchorX + OFFSET + POPOVER_WIDTH < viewportWidth - 12;
  const left = placeRight
    ? props.anchorX + OFFSET
    : Math.max(12, props.anchorX - OFFSET - POPOVER_WIDTH);
  const top = Math.min(
    Math.max(12, props.anchorY - 12),
    Math.max(12, viewportHeight - 280),
  );
  return { left: `${left}px`, top: `${top}px` };
});

const isResolved = computed(() => props.thread.status === 'resolved');

function formatWhen(iso: string): string {
  const date = new Date(iso);
  const now = Date.now();
  const diffMs = now - date.getTime();
  const minutes = Math.round(diffMs / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString();
}
</script>

<template>
  <div
    class="cw-popover"
    :class="{ 'cw-popover--resolved': isResolved }"
    :style="position"
    @mousedown.stop
  >
    <div class="cw-popover-header">
      <span class="cw-popover-title">
        <span v-if="isResolved" class="cw-status-pill">Resolved</span>
        <span v-else>Comment</span>
      </span>
      <div class="cw-popover-header-actions">
        <button
          type="button"
          class="cw-btn cw-btn--ghost cw-btn--small"
          :disabled="statusBusy"
          :title="isResolved ? 'Reopen this thread' : 'Mark this thread resolved'"
          @click="toggleStatus"
        >
          {{ statusBusy ? 'Saving…' : isResolved ? 'Reopen' : 'Resolve' }}
        </button>
        <button
          type="button"
          class="cw-btn cw-btn--ghost cw-btn--icon"
          aria-label="Close"
          @click="$emit('close')"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="statusError" class="cw-error-banner">{{ statusError }}</div>

    <div class="cw-popover-body">
      <div v-if="comments.length === 0" class="cw-popover-empty">
        No comments yet.
      </div>
      <div v-for="comment in comments" :key="comment.id" class="cw-comment">
        <div class="cw-comment-meta">
          <strong>{{ comment.author_name }}</strong>
          <span>{{ formatWhen(comment.created_at) }}</span>
        </div>
        <div class="cw-comment-body">{{ comment.body }}</div>
      </div>
    </div>

    <div class="cw-popover-footer">
      <div v-if="replyError" class="cw-error-banner cw-error-banner--inline">{{ replyError }}</div>
      <textarea
        ref="replyTextarea"
        v-model="replyBody"
        class="cw-composer-textarea cw-composer-textarea--compact"
        :placeholder="isResolved ? 'Reply to reopen the conversation…' : 'Reply…'"
        :disabled="replyBusy"
        @keydown.enter.exact.prevent="submitReply"
      />
      <div class="cw-composer-actions">
        <button
          type="button"
          class="cw-btn cw-btn--primary cw-btn--small"
          :disabled="replyBusy || !replyBody.trim()"
          @click="submitReply"
        >
          {{ replyBusy ? 'Posting…' : 'Reply' }}
        </button>
      </div>
    </div>
  </div>
</template>
