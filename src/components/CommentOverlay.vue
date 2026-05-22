<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
import type { AnchorData, Identity, ResolvedAnchor, Thread, WidgetConfig } from '../types';
import { createSupabaseClient } from '../composables/useSupabase';
import { useIdentity } from '../composables/useIdentity';
import { useThreads, WidgetError } from '../composables/useThreads';
import { captureAnchor, useAnchoring } from '../composables/useAnchoring';
import { findCommentableTarget } from '../lib/selectorPath';
import Toolbar from './Toolbar.vue';
import CommentPin from './CommentPin.vue';
import CommentThread from './CommentThread.vue';
import IdentityPrompt from './IdentityPrompt.vue';
import '../styles.css';

const props = defineProps<{ config: WidgetConfig }>();

const client = createSupabaseClient(props.config.supabaseUrl, props.config.supabaseAnonKey);
const { identity, set: setIdentity } = useIdentity();

const {
  threads,
  commentsByThread,
  loadError,
  openThreadCount,
  totalThreadCount,
  load,
  startRealtime,
  createThread,
  replyToThread,
  updateThreadStatus,
} = useThreads(client, props.config.projectId);

const { positions } = useAnchoring(threads);

const commentMode = ref(false);
const activeThreadId = ref<string | null>(null);
const showOpenOnly = ref(true);

// Pending draft for creating a new thread.
interface PendingDraft {
  anchor: AnchorData;
  clientX: number;
  clientY: number;
  body: string;
  submitting: boolean;
  error: string | null;
}
const draft = ref<PendingDraft | null>(null);

// Reply / status state, keyed to the currently active thread. We hold these
// at overlay scope (instead of inside CommentThread) so the parent owns the
// async lifecycle and can replay actions after identity capture.
const replyState = reactive({
  busy: false,
  error: null as string | null,
  resetKey: 0,
});

const statusState = reactive({
  busy: false,
  error: null as string | null,
});

// Deferred action: when the user tries to write without identity set, we
// stash the action here and open the identity modal. After they submit
// identity, we replay the stored action.
type PendingAction =
  | { kind: 'create-thread' }
  | { kind: 'reply'; threadId: string; body: string }
  | { kind: 'status'; threadId: string; status: 'open' | 'resolved' };
const pendingAction = ref<PendingAction | null>(null);

const composerTextarea = ref<HTMLTextAreaElement | null>(null);

const visiblePins = computed(() =>
  threads.value
    .map((thread, i) => {
      const anchor = positions.get(thread.id);
      if (!anchor) return null;
      // Filter happens here so chronological index numbers stay stable as
      // resolved pins come and go.
      if (showOpenOnly.value && thread.status !== 'open' && thread.id !== activeThreadId.value) {
        return null;
      }
      return { thread, anchor, index: i + 1 };
    })
    .filter((entry): entry is { thread: Thread; anchor: ResolvedAnchor; index: number } => entry !== null),
);

const activeThread = computed(() => {
  if (!activeThreadId.value) return null;
  return threads.value.find((t) => t.id === activeThreadId.value) ?? null;
});

const activeThreadAnchor = computed<ResolvedAnchor | null>(() => {
  if (!activeThreadId.value) return null;
  return positions.get(activeThreadId.value) ?? null;
});

const activeThreadComments = computed(() => {
  if (!activeThreadId.value) return [];
  return commentsByThread.value[activeThreadId.value] ?? [];
});

function errorMessage(e: unknown): string {
  if (e instanceof WidgetError) return e.hint;
  if (e instanceof Error) return e.message;
  return 'Something went wrong. Check the console.';
}

function toggleCommentMode(): void {
  commentMode.value = !commentMode.value;
  if (!commentMode.value) {
    draft.value = null;
  } else {
    activeThreadId.value = null;
  }
}

function toggleFilter(): void {
  showOpenOnly.value = !showOpenOnly.value;
}

function openThread(id: string): void {
  activeThreadId.value = id;
  draft.value = null;
  // Reset thread-scoped state when switching threads.
  replyState.busy = false;
  replyState.error = null;
  statusState.busy = false;
  statusState.error = null;
}

function closeThread(): void {
  activeThreadId.value = null;
  replyState.busy = false;
  replyState.error = null;
  statusState.busy = false;
  statusState.error = null;
}

function handleDocumentMousedown(event: MouseEvent): void {
  if (!commentMode.value) return;
  if (event.button !== 0) return;

  const target = findCommentableTarget(event.target);
  if (!target) return;
  if (target === document.body || target === document.documentElement) return;

  event.preventDefault();
  event.stopPropagation();

  const anchor = captureAnchor(target, event);
  draft.value = {
    anchor,
    clientX: event.clientX,
    clientY: event.clientY,
    body: '',
    submitting: false,
    error: null,
  };

  queueMicrotask(() => {
    composerTextarea.value?.focus();
  });
}

function installCaptureClick(): void {
  document.addEventListener('mousedown', handleDocumentMousedown, { capture: true });
}
function removeCaptureClick(): void {
  document.removeEventListener('mousedown', handleDocumentMousedown, {
    capture: true,
  } as EventListenerOptions);
}

watch(commentMode, (active) => {
  document.body.classList.toggle('cw-mode-on', active);
});

async function submitDraft(): Promise<void> {
  if (!draft.value || draft.value.submitting) return;
  const body = draft.value.body.trim();
  if (!body) return;

  if (!identity.value) {
    pendingAction.value = { kind: 'create-thread' };
    return;
  }

  draft.value.submitting = true;
  draft.value.error = null;
  try {
    const thread = await createThread(draft.value.anchor, body, identity.value);
    draft.value = null;
    commentMode.value = false;
    activeThreadId.value = thread.id;
  } catch (e) {
    if (!draft.value) return;
    draft.value.submitting = false;
    draft.value.error = errorMessage(e);
  }
}

function cancelDraft(): void {
  draft.value = null;
}

async function handleReply(body: string): Promise<void> {
  const threadId = activeThreadId.value;
  if (!threadId) return;

  if (!identity.value) {
    pendingAction.value = { kind: 'reply', threadId, body };
    return;
  }

  replyState.busy = true;
  replyState.error = null;
  try {
    await replyToThread(threadId, body, identity.value);
    replyState.resetKey += 1;
  } catch (e) {
    replyState.error = errorMessage(e);
  } finally {
    replyState.busy = false;
  }
}

async function handleStatusChange(status: 'open' | 'resolved'): Promise<void> {
  const threadId = activeThreadId.value;
  if (!threadId) return;

  if (!identity.value) {
    pendingAction.value = { kind: 'status', threadId, status };
    return;
  }

  statusState.busy = true;
  statusState.error = null;
  try {
    await updateThreadStatus(threadId, status);
  } catch (e) {
    statusState.error = errorMessage(e);
  } finally {
    statusState.busy = false;
  }
}

async function onIdentitySubmit(next: Identity): Promise<void> {
  setIdentity(next);
  const action = pendingAction.value;
  pendingAction.value = null;
  if (!action) {
    queueMicrotask(() => composerTextarea.value?.focus());
    return;
  }
  if (action.kind === 'create-thread') {
    await submitDraft();
  } else if (action.kind === 'reply') {
    if (activeThreadId.value !== action.threadId) {
      activeThreadId.value = action.threadId;
    }
    await handleReply(action.body);
  } else if (action.kind === 'status') {
    if (activeThreadId.value !== action.threadId) {
      activeThreadId.value = action.threadId;
    }
    await handleStatusChange(action.status);
  }
}

function onIdentityCancel(): void {
  const action = pendingAction.value;
  pendingAction.value = null;
  // Cancelling identity for a brand-new draft also cancels the draft —
  // there's nothing meaningful to preserve. Cancelling for an in-place reply
  // or status leaves the popover open so the user can decide again.
  if (action?.kind === 'create-thread') {
    draft.value = null;
    commentMode.value = false;
  }
}

function handleKey(event: KeyboardEvent): void {
  if (event.key !== 'Escape') return;
  if (pendingAction.value) {
    onIdentityCancel();
  } else if (draft.value) {
    cancelDraft();
  } else if (activeThreadId.value) {
    closeThread();
  } else if (commentMode.value) {
    commentMode.value = false;
  }
}

const composerStyle = computed(() => {
  if (!draft.value) return {};
  const width = 320;
  const margin = 12;
  const left = Math.min(
    Math.max(margin, draft.value.clientX + 12),
    Math.max(margin, window.innerWidth - width - margin),
  );
  const top = Math.min(
    Math.max(margin, draft.value.clientY + 12),
    Math.max(margin, window.innerHeight - 220),
  );
  return { left: `${left}px`, top: `${top}px` };
});

onMounted(async () => {
  installCaptureClick();
  document.addEventListener('keydown', handleKey);
  await load();
  startRealtime();
});

onBeforeUnmount(() => {
  removeCaptureClick();
  document.removeEventListener('keydown', handleKey);
  document.body.classList.remove('cw-mode-on');
});
</script>

<template>
  <div class="cw-layer">
    <div v-if="commentMode" class="cw-mode-veil" aria-hidden="true" />

    <div v-if="loadError" class="cw-toast cw-toast--error" role="alert">
      <strong>Couldn't load comments.</strong>
      <span>{{ loadError }}</span>
    </div>

    <CommentPin
      v-for="entry in visiblePins"
      :key="entry.thread.id"
      :anchor="entry.anchor"
      :thread="entry.thread"
      :active="activeThreadId === entry.thread.id"
      :index="entry.index"
      @click="openThread(entry.thread.id)"
    />

    <CommentThread
      v-if="activeThread && activeThreadAnchor"
      :thread="activeThread"
      :comments="activeThreadComments"
      :anchor-x="activeThreadAnchor.x"
      :anchor-y="activeThreadAnchor.y"
      :reply-busy="replyState.busy"
      :reply-error="replyState.error"
      :reply-reset-key="replyState.resetKey"
      :status-busy="statusState.busy"
      :status-error="statusState.error"
      @close="closeThread"
      @reply="handleReply"
      @set-status="handleStatusChange"
    />

    <div
      v-if="draft"
      class="cw-composer"
      :style="composerStyle"
      @mousedown.stop
    >
      <div v-if="draft.error" class="cw-error-banner cw-error-banner--inline">
        {{ draft.error }}
      </div>
      <textarea
        ref="composerTextarea"
        v-model="draft.body"
        class="cw-composer-textarea"
        placeholder="Leave a comment…"
        :disabled="draft.submitting"
        @keydown.enter.exact.prevent="submitDraft"
        @keydown.escape.prevent="cancelDraft"
      />
      <div class="cw-composer-actions">
        <button
          type="button"
          class="cw-btn cw-btn--ghost"
          :disabled="draft.submitting"
          @click="cancelDraft"
        >
          Cancel
        </button>
        <button
          type="button"
          class="cw-btn cw-btn--primary"
          :disabled="draft.submitting || !draft.body.trim()"
          @click="submitDraft"
        >
          {{ draft.submitting ? 'Posting…' : 'Comment' }}
        </button>
      </div>
    </div>

    <IdentityPrompt
      v-if="pendingAction"
      @submit="onIdentitySubmit"
      @cancel="onIdentityCancel"
    />

    <Toolbar
      :active="commentMode"
      :open-count="openThreadCount"
      :total-count="totalThreadCount"
      :show-open-only="showOpenOnly"
      @toggle="toggleCommentMode"
      @toggle-filter="toggleFilter"
    />
  </div>
</template>
