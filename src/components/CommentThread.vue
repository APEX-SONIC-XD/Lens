<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { Comment, MentionDraft, Thread } from '../types';
import type { MentionCandidate } from '../composables/useMentionables';
import MentionInput from './MentionInput.vue';

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
  deleteBusy: boolean;
  deleteError: string | null;
  signedIn: boolean;
  currentEmail: string | null;
  mentionPool: readonly MentionCandidate[];
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'reply', payload: { body: string; mentions: MentionDraft[] }): void;
  (e: 'set-status', status: 'open' | 'resolved'): void;
  (e: 'delete-comment', commentId: string): void;
  (e: 'delete-thread'): void;
  (e: 'sign-in-required'): void;
}>();

// Reply input state lives here; parent signals successful submission by
// bumping `replyResetKey`. That keeps the popover self-contained while still
// letting the parent control async lifecycle and error display.
const replyBody = ref('');
const replyMentions = ref<MentionDraft[]>([]);

watch(
  () => props.replyResetKey,
  () => {
    replyBody.value = '';
    replyMentions.value = [];
  },
);

function submitReply(): void {
  if (!props.signedIn) {
    emit('sign-in-required');
    return;
  }
  const body = replyBody.value.trim();
  if (!body || props.replyBusy) return;
  emit('reply', { body, mentions: replyMentions.value });
}

function toggleStatus(): void {
  if (props.statusBusy) return;
  if (!props.signedIn) {
    emit('sign-in-required');
    return;
  }
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

const firstCommentId = computed(() => props.comments[0]?.id ?? null);

const isThreadCreator = computed(
  () =>
    props.signedIn &&
    props.currentEmail !== null &&
    props.thread.created_by_email.toLowerCase() === props.currentEmail.toLowerCase(),
);

function canDeleteComment(comment: Comment): boolean {
  if (!props.signedIn || !props.currentEmail) return false;
  // The first comment is the thread's "anchoring" comment. The thread creator
  // deletes it implicitly by deleting the whole thread instead.
  if (comment.id === firstCommentId.value) return false;
  return comment.author_email.toLowerCase() === props.currentEmail.toLowerCase();
}

// Inline confirm state — keyed to a comment id, or the literal string
// 'thread' when confirming a thread delete.
const confirmTarget = ref<string | null>(null);

function askConfirmComment(commentId: string): void {
  confirmTarget.value = commentId;
}

function askConfirmThread(): void {
  confirmTarget.value = 'thread';
}

function cancelConfirm(): void {
  confirmTarget.value = null;
}

function confirmDeleteComment(commentId: string): void {
  emit('delete-comment', commentId);
  confirmTarget.value = null;
}

function confirmDeleteThread(): void {
  emit('delete-thread');
  confirmTarget.value = null;
}

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

// Render a comment body with @-mention pills. Walk the text matching against
// the known pool (case-insensitive, longest name first to handle "Jane" vs
// "Jane Doe"). Anything not matched is rendered as a plain text segment.
interface Segment {
  type: 'text' | 'mention';
  value: string;
}

const sortedPoolNames = computed(() =>
  [...props.mentionPool]
    .map((c) => c.name)
    .filter((n) => !!n)
    .sort((a, b) => b.length - a.length),
);

function renderSegments(body: string): Segment[] {
  if (!body) return [];
  const names = sortedPoolNames.value;
  if (names.length === 0) return [{ type: 'text', value: body }];

  const escapedNames = names.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(^|\\s)@(${escapedNames.join('|')})(?=$|[^\\w])`, 'g');

  const segments: Segment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(body)) !== null) {
    const fullStart = match.index;
    const leadingWhitespace = match[1] ?? '';
    const tokenStart = fullStart + leadingWhitespace.length;
    if (tokenStart > lastIndex) {
      segments.push({ type: 'text', value: body.slice(lastIndex, tokenStart) });
    }
    const name = match[2];
    segments.push({ type: 'mention', value: `@${name}` });
    lastIndex = tokenStart + 1 + name.length;
  }
  if (lastIndex < body.length) {
    segments.push({ type: 'text', value: body.slice(lastIndex) });
  }
  return segments;
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
          v-if="isThreadCreator"
          type="button"
          class="cw-btn cw-btn--ghost cw-btn--icon cw-btn--danger"
          :disabled="deleteBusy"
          aria-label="Delete thread"
          title="Delete thread"
          @click="askConfirmThread"
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
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          </svg>
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
    <div v-if="deleteError" class="cw-error-banner">{{ deleteError }}</div>

    <div
      v-if="confirmTarget === 'thread'"
      class="cw-confirm-banner"
      role="alertdialog"
    >
      <span>Delete the whole thread? This removes every reply too.</span>
      <div class="cw-confirm-banner-actions">
        <button
          type="button"
          class="cw-btn cw-btn--ghost cw-btn--small"
          :disabled="deleteBusy"
          @click="cancelConfirm"
        >
          Cancel
        </button>
        <button
          type="button"
          class="cw-btn cw-btn--danger cw-btn--small"
          :disabled="deleteBusy"
          @click="confirmDeleteThread"
        >
          {{ deleteBusy ? 'Deleting…' : 'Delete thread' }}
        </button>
      </div>
    </div>

    <div class="cw-popover-body">
      <div v-if="comments.length === 0" class="cw-popover-empty">
        No comments yet.
      </div>
      <div v-for="comment in comments" :key="comment.id" class="cw-comment">
        <div class="cw-comment-meta">
          <strong>{{ comment.author_name }}</strong>
          <span>{{ formatWhen(comment.created_at) }}</span>
          <button
            v-if="canDeleteComment(comment)"
            type="button"
            class="cw-btn cw-btn--ghost cw-btn--icon cw-btn--danger cw-comment-delete"
            :disabled="deleteBusy"
            aria-label="Delete reply"
            title="Delete reply"
            @click="askConfirmComment(comment.id)"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>
        <div class="cw-comment-body">
          <template v-for="(segment, idx) in renderSegments(comment.body)" :key="idx">
            <span v-if="segment.type === 'mention'" class="cw-mention">{{ segment.value }}</span>
            <template v-else>{{ segment.value }}</template>
          </template>
        </div>
        <div
          v-if="confirmTarget === comment.id"
          class="cw-confirm-banner cw-confirm-banner--inline"
          role="alertdialog"
        >
          <span>Delete this reply?</span>
          <div class="cw-confirm-banner-actions">
            <button
              type="button"
              class="cw-btn cw-btn--ghost cw-btn--small"
              :disabled="deleteBusy"
              @click="cancelConfirm"
            >
              Cancel
            </button>
            <button
              type="button"
              class="cw-btn cw-btn--danger cw-btn--small"
              :disabled="deleteBusy"
              @click="confirmDeleteComment(comment.id)"
            >
              {{ deleteBusy ? 'Deleting…' : 'Delete' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="cw-popover-footer">
      <div v-if="replyError" class="cw-error-banner cw-error-banner--inline">{{ replyError }}</div>
      <div v-if="!signedIn" class="cw-popover-signin-hint">
        <button
          type="button"
          class="cw-btn cw-btn--primary cw-btn--small"
          @click="$emit('sign-in-required')"
        >
          Sign in to reply
        </button>
      </div>
      <template v-else>
        <MentionInput
          v-model="replyBody"
          v-model:mentions="replyMentions"
          :pool="mentionPool"
          :placeholder="isResolved ? 'Reply to reopen the conversation…' : 'Reply…'"
          :disabled="replyBusy"
          :reset-key="replyResetKey"
          :compact="true"
          @submit="submitReply"
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
      </template>
    </div>
  </div>
</template>
