<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
import type { AnchorData, MentionDraft, ResolvedAnchor, Thread, WidgetConfig } from '../types';
import { createSupabaseClient } from '../composables/useSupabase';
import { useAuth } from '../composables/useAuth';
import { useThreads, WidgetError } from '../composables/useThreads';
import { useMentionables } from '../composables/useMentionables';
import { useRounds } from '../composables/useRounds';
import { captureAnchor, useAnchoring } from '../composables/useAnchoring';
import { findCommentableTarget } from '../lib/selectorPath';
import Toolbar from './Toolbar.vue';
import CommentPin from './CommentPin.vue';
import CommentThread from './CommentThread.vue';
import SignInPrompt from './SignInPrompt.vue';
import TeamPanel from './TeamPanel.vue';
import MentionInput from './MentionInput.vue';
import '../styles.css';

const props = defineProps<{ config: WidgetConfig }>();

const client = createSupabaseClient(props.config.supabaseUrl, props.config.supabaseAnonKey);
const { user, identity, signedIn, requestEmailCode, verifyEmailCode, signOut } = useAuth(client);

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
  updateThreadAnchor,
  deleteComment,
  deleteThread,
} = useThreads(client, props.config.projectId);

const currentEmail = computed(() => identity.value?.email ?? null);

const mentionables = useMentionables({
  client,
  projectId: props.config.projectId,
  signedIn,
  threads,
  commentsByThread,
  currentEmail,
});

const { positions } = useAnchoring(threads);

const {
  enabled: roundsEnabled,
  rounds: roundList,
  currentRoundId,
  isLatest: isLatestRound,
  load: loadRounds,
  switchTo: switchRound,
} = useRounds();

const commentMode = ref(false);
const activeThreadId = ref<string | null>(null);
const showOpenOnly = ref(true);
const teamPanelOpen = ref(false);

// Pending draft for creating a new thread.
interface PendingDraft {
  anchor: AnchorData;
  clientX: number;
  clientY: number;
  body: string;
  mentions: MentionDraft[];
  submitting: boolean;
  error: string | null;
  resetKey: number;
}
const draft = ref<PendingDraft | null>(null);

const replyState = reactive({
  busy: false,
  error: null as string | null,
  resetKey: 0,
});

const statusState = reactive({
  busy: false,
  error: null as string | null,
});

const deleteState = reactive({
  busy: false,
  error: null as string | null,
});

// Deferred action: when the user tries to write without being signed in, we
// stash the action here and open the sign-in modal. After authentication
// completes (via magic-link callback), we replay the stored action.
type PendingAction =
  | { kind: 'create-thread' }
  | { kind: 'reply'; threadId: string; body: string; mentions: MentionDraft[] }
  | { kind: 'status'; threadId: string; status: 'open' | 'resolved' }
  | { kind: 'reposition'; threadId: string; anchor: AnchorData }
  | { kind: 'delete-comment'; threadId: string; commentId: string }
  | { kind: 'delete-thread'; threadId: string }
  | { kind: 'sign-in-only' };
const pendingAction = ref<PendingAction | null>(null);

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

const signInReason = computed(() => {
  const action = pendingAction.value;
  if (!action) return undefined;
  switch (action.kind) {
    case 'create-thread':
      return 'Sign in to post this comment.';
    case 'reply':
      return 'Sign in to post your reply.';
    case 'status':
      return action.status === 'resolved'
        ? 'Sign in to resolve this thread.'
        : 'Sign in to reopen this thread.';
    case 'reposition':
      return 'Sign in to move this pin.';
    case 'delete-comment':
      return 'Sign in to delete your reply.';
    case 'delete-thread':
      return 'Sign in to delete this thread.';
    case 'sign-in-only':
      return undefined;
  }
  return undefined;
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
  replyState.busy = false;
  replyState.error = null;
  statusState.busy = false;
  statusState.error = null;
  deleteState.busy = false;
  deleteState.error = null;
}

function closeThread(): void {
  activeThreadId.value = null;
  replyState.busy = false;
  replyState.error = null;
  statusState.busy = false;
  statusState.error = null;
  deleteState.busy = false;
  deleteState.error = null;
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
    mentions: [],
    submitting: false,
    error: null,
    resetKey: 0,
  };
}

/**
 * Block click and mouseup events from reaching host-page elements while comment
 * mode is active. The mousedown handler above stops propagation of mousedown,
 * but the browser still synthesises a separate click event after mouseup — which
 * is what activates buttons, links, and other interactive elements. Intercepting
 * click (and mouseup for frameworks that listen there) in the same capture phase
 * prevents those actions from firing.
 *
 * Widget-internal clicks are allowed through because findCommentableTarget returns
 * null for anything inside the widget root.
 */
function handleDocumentClickCapture(event: MouseEvent): void {
  if (!commentMode.value) return;
  const target = findCommentableTarget(event.target);
  if (!target) return; // Inside widget UI — let it through.
  event.preventDefault();
  event.stopPropagation();
}

function installCaptureClick(): void {
  document.addEventListener('mousedown', handleDocumentMousedown, { capture: true });
  document.addEventListener('mouseup', handleDocumentClickCapture, { capture: true });
  document.addEventListener('click', handleDocumentClickCapture, { capture: true });
}
function removeCaptureClick(): void {
  document.removeEventListener('mousedown', handleDocumentMousedown, { capture: true } as EventListenerOptions);
  document.removeEventListener('mouseup', handleDocumentClickCapture, { capture: true } as EventListenerOptions);
  document.removeEventListener('click', handleDocumentClickCapture, { capture: true } as EventListenerOptions);
}

watch(commentMode, (active) => {
  document.body.classList.toggle('cw-mode-on', active);
});

function requireSignIn(action: PendingAction): boolean {
  if (signedIn.value && identity.value) return false;
  pendingAction.value = action;
  return true;
}

async function submitDraft(): Promise<void> {
  if (!draft.value || draft.value.submitting) return;
  const body = draft.value.body.trim();
  if (!body) return;

  if (requireSignIn({ kind: 'create-thread' })) return;

  draft.value.submitting = true;
  draft.value.error = null;
  try {
    const thread = await createThread(
      draft.value.anchor,
      body,
      identity.value!,
      draft.value.mentions,
    );
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
  commentMode.value = false;
}

async function handleReply(payload: { body: string; mentions: MentionDraft[] }): Promise<void> {
  const threadId = activeThreadId.value;
  if (!threadId) return;

  if (requireSignIn({ kind: 'reply', threadId, body: payload.body, mentions: payload.mentions })) return;

  replyState.busy = true;
  replyState.error = null;
  try {
    await replyToThread(threadId, payload.body, identity.value!, payload.mentions);
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
  if (requireSignIn({ kind: 'status', threadId, status })) return;

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

async function handleRepositionPin(threadId: string, anchor: AnchorData): Promise<void> {
  if (requireSignIn({ kind: 'reposition', threadId, anchor })) return;
  try {
    await updateThreadAnchor(threadId, anchor);
  } catch (e) {
    // No popover-scoped error state for a drag — surface to the load-error
    // toast so the user notices the failure even when no thread is open.
    loadError.value = errorMessage(e);
  }
}

async function handleDeleteComment(commentId: string): Promise<void> {
  const threadId = activeThreadId.value;
  if (!threadId) return;
  if (requireSignIn({ kind: 'delete-comment', threadId, commentId })) return;

  deleteState.busy = true;
  deleteState.error = null;
  try {
    await deleteComment(threadId, commentId);
  } catch (e) {
    deleteState.error = errorMessage(e);
  } finally {
    deleteState.busy = false;
  }
}

async function handleDeleteThread(): Promise<void> {
  const threadId = activeThreadId.value;
  if (!threadId) return;
  if (requireSignIn({ kind: 'delete-thread', threadId })) return;

  deleteState.busy = true;
  deleteState.error = null;
  try {
    await deleteThread(threadId);
    activeThreadId.value = null;
  } catch (e) {
    deleteState.error = errorMessage(e);
  } finally {
    deleteState.busy = false;
  }
}

async function handleRequestCode(payload: { email: string; name: string }): Promise<void> {
  // Throws on failure; SignInPrompt catches it and renders the inline error.
  await requestEmailCode(payload.email, payload.name);
}

async function handleVerifyCode(payload: { email: string; code: string }): Promise<void> {
  // Same error contract as handleRequestCode. On success, Supabase fires
  // onAuthStateChange, `signedIn` flips, and the watch below replays any
  // deferred action plus clears `pendingAction` so the modal unmounts.
  await verifyEmailCode(payload.email, payload.code);
}

function onSignInCancel(): void {
  const action = pendingAction.value;
  pendingAction.value = null;
  // Cancelling sign-in for a brand-new draft also cancels the draft — there's
  // nothing meaningful to preserve. For in-place actions on an existing thread,
  // leave UI state alone so the user can decide again.
  if (action?.kind === 'create-thread') {
    draft.value = null;
    commentMode.value = false;
  }
}

// Replay deferred action once the user signs in. Watching `signedIn` covers
// both the in-page completion path (user pastes the magic link into this tab)
// and the redirect path (link opens this URL in a new tab and Supabase
// completes the session detection in createClient).
watch(signedIn, async (isIn) => {
  if (!isIn) return;
  const action = pendingAction.value;
  pendingAction.value = null;
  if (!action) return;

  if (action.kind === 'create-thread') {
    await submitDraft();
  } else if (action.kind === 'reply') {
    if (activeThreadId.value !== action.threadId) activeThreadId.value = action.threadId;
    await handleReply({ body: action.body, mentions: action.mentions });
  } else if (action.kind === 'status') {
    if (activeThreadId.value !== action.threadId) activeThreadId.value = action.threadId;
    await handleStatusChange(action.status);
  } else if (action.kind === 'reposition') {
    await handleRepositionPin(action.threadId, action.anchor);
  } else if (action.kind === 'delete-comment') {
    if (activeThreadId.value !== action.threadId) activeThreadId.value = action.threadId;
    await handleDeleteComment(action.commentId);
  } else if (action.kind === 'delete-thread') {
    if (activeThreadId.value !== action.threadId) activeThreadId.value = action.threadId;
    await handleDeleteThread();
  }
});

async function handleSignOut(): Promise<void> {
  try {
    await signOut();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('[comment-widget] sign out failed:', e);
  }
}

function handleKey(event: KeyboardEvent): void {
  // "c" toggles comment mode — skip when the user is typing in a field or
  // when any modifier key is held (avoids stealing Ctrl+C / Cmd+C / etc.).
  if (
    event.key === 'c' &&
    !event.metaKey && !event.ctrlKey && !event.altKey
  ) {
    const t = event.target as HTMLElement;
    if (t.tagName !== 'INPUT' && t.tagName !== 'TEXTAREA' && !t.isContentEditable) {
      toggleCommentMode();
      return;
    }
  }

  if (event.key !== 'Escape') return;
  if (pendingAction.value) {
    onSignInCancel();
  } else if (teamPanelOpen.value) {
    teamPanelOpen.value = false;
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
    Math.max(margin, window.innerHeight - 240),
  );
  return { left: `${left}px`, top: `${top}px` };
});

onMounted(async () => {
  installCaptureClick();
  document.addEventListener('keydown', handleKey);
  void loadRounds();
  await load();
  startRealtime();
});

onBeforeUnmount(() => {
  removeCaptureClick();
  document.removeEventListener('keydown', handleKey);
  document.body.classList.remove('cw-mode-on');
});

// Surface to compiler that these symbols are referenced from templates that
// TypeScript can't see — the explicit usage check appeases noUnusedLocals.
void user;
</script>

<template>
  <div class="cw-layer">
    <div v-if="commentMode" class="cw-mode-veil" aria-hidden="true" />

    <div v-if="loadError" class="cw-toast cw-toast--error" role="alert">
      <strong>Something went wrong.</strong>
      <span>{{ loadError }}</span>
    </div>

    <div
      v-if="roundsEnabled && !isLatestRound"
      class="cw-round-banner"
      role="status"
    >
      Viewing an archived round
    </div>

    <CommentPin
      v-for="entry in visiblePins"
      :key="entry.thread.id"
      :anchor="entry.anchor"
      :thread="entry.thread"
      :active="activeThreadId === entry.thread.id"
      :index="entry.index"
      :draggable="signedIn"
      @click="openThread(entry.thread.id)"
      @reposition="(anchor) => handleRepositionPin(entry.thread.id, anchor)"
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
      :delete-busy="deleteState.busy"
      :delete-error="deleteState.error"
      :signed-in="signedIn"
      :current-email="currentEmail"
      :mention-pool="mentionables.pool.value"
      @close="closeThread"
      @reply="handleReply"
      @set-status="handleStatusChange"
      @delete-comment="handleDeleteComment"
      @delete-thread="handleDeleteThread"
      @sign-in-required="pendingAction = { kind: 'sign-in-only' }"
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
      <MentionInput
        v-model="draft.body"
        v-model:mentions="draft.mentions"
        :pool="mentionables.pool.value"
        placeholder="Leave a comment…"
        :disabled="draft.submitting"
        :reset-key="draft.resetKey"
        @submit="submitDraft"
        @cancel="cancelDraft"
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

    <SignInPrompt
      v-if="pendingAction"
      :reason="signInReason"
      @request-code="handleRequestCode"
      @verify-code="handleVerifyCode"
      @cancel="onSignInCancel"
    />

    <TeamPanel
      v-if="teamPanelOpen"
      :members="mentionables.list.value"
      :load-error="mentionables.loadError.value"
      :current-email="currentEmail"
      @add="async (payload) => { await mentionables.add(payload.email, payload.name); }"
      @remove="async (id) => { await mentionables.remove(id); }"
      @close="teamPanelOpen = false"
    />

    <Toolbar
      :active="commentMode"
      :open-count="openThreadCount"
      :total-count="totalThreadCount"
      :show-open-only="showOpenOnly"
      :signed-in="signedIn"
      :user-name="identity?.name ?? null"
      :rounds-enabled="roundsEnabled"
      :rounds="roundList"
      :current-round-id="currentRoundId"
      :is-latest-round="isLatestRound"
      @toggle="toggleCommentMode"
      @toggle-filter="toggleFilter"
      @open-team="teamPanelOpen = true"
      @sign-in="pendingAction = { kind: 'sign-in-only' }"
      @sign-out="handleSignOut"
      @select-round="switchRound"
    />
  </div>
</template>
