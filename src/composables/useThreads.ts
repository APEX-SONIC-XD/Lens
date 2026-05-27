import { computed, onBeforeUnmount, ref, shallowRef } from 'vue';
import type { PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import type { AnchorData, Comment, Identity, MentionDraft, Thread } from '../types';
import { subscribeToProject, type ProjectSubscription } from './useSupabase';

// Page URL minus hash. Two views of the same logical page differing only by
// fragment identifier should share comments.
function normalizedPageUrl(): string {
  const url = new URL(window.location.href);
  url.hash = '';
  return url.toString();
}

// Translate a Supabase / network error into a short, human-readable string the
// composer or popover can render inline. We keep the raw message available
// via Error.cause for debugging in the console.
export class WidgetError extends Error {
  hint: string;
  constructor(hint: string, cause?: unknown) {
    super(hint);
    this.name = 'WidgetError';
    this.hint = hint;
    if (cause !== undefined) (this as { cause?: unknown }).cause = cause;
  }
}

function describeError(e: unknown, fallback: string): WidgetError {
  // Supabase errors include `.code`, `.message`, `.details`, `.hint`.
  const pg = e as Partial<PostgrestError> & { status?: number };
  const message = pg?.message ?? (e instanceof Error ? e.message : String(e ?? ''));
  const lowered = message.toLowerCase();
  let hint = fallback;
  if (lowered.includes('row-level security') || lowered.includes('rls')) {
    hint = 'You need to be signed in to do that. Sign in and try again.';
  } else if (lowered.includes('invalid api key') || lowered.includes('jwt') || pg?.status === 401) {
    hint = 'Invalid Supabase anon key. Double-check the credentials.';
  } else if (lowered.includes('failed to fetch') || lowered.includes('networkerror')) {
    hint = "Couldn't reach Supabase. Check the project URL and your connection.";
  } else if (lowered.includes('not found') || pg?.status === 404) {
    hint = 'Supabase URL or table not found. Check the project URL and that the schema was run.';
  } else if (message) {
    hint = `${fallback} (${message})`;
  }
  return new WidgetError(hint, e);
}

export function useThreads(client: SupabaseClient, projectId: string) {
  const pageUrl = normalizedPageUrl();
  const threads = shallowRef<Thread[]>([]);
  const commentsByThread = shallowRef<Record<string, Comment[]>>({});
  const loading = ref(true);
  const loadError = ref<string | null>(null);

  let subscription: ProjectSubscription | null = null;
  // Track recently-created IDs whose realtime echo we should ignore (we
  // already added them locally from the insert response).
  const localThreadIds = new Set<string>();
  const localCommentIds = new Set<string>();

  async function load(): Promise<void> {
    loading.value = true;
    loadError.value = null;
    try {
      const { data: threadRows, error: threadsError } = await client
        .from('threads')
        .select('*')
        .eq('project_id', projectId)
        .eq('page_url', pageUrl)
        .order('created_at', { ascending: true });

      if (threadsError) throw threadsError;
      const loadedThreads = (threadRows ?? []) as Thread[];
      threads.value = loadedThreads;

      if (loadedThreads.length === 0) {
        commentsByThread.value = {};
      } else {
        const ids = loadedThreads.map((t) => t.id);
        const { data: commentRows, error: commentsError } = await client
          .from('comments')
          .select('*')
          .in('thread_id', ids)
          .order('created_at', { ascending: true });
        if (commentsError) throw commentsError;
        const grouped: Record<string, Comment[]> = {};
        for (const id of ids) grouped[id] = [];
        for (const row of (commentRows ?? []) as Comment[]) {
          (grouped[row.thread_id] ??= []).push(row);
        }
        commentsByThread.value = grouped;
      }
    } catch (e) {
      const wrapped = describeError(e, 'Could not load comments.');
      loadError.value = wrapped.hint;
      // eslint-disable-next-line no-console
      console.error('[comment-widget] failed to load threads:', e);
    } finally {
      loading.value = false;
    }
  }

  function startRealtime(): void {
    subscription = subscribeToProject(client, projectId, (event) => {
      if (event.table === 'threads') {
        handleThreadEvent(event.type, event.row);
      } else if (event.table === 'comments') {
        handleCommentEvent(event.type, event.row);
      }
      // mentionables events are handled in useMentionables' own channel.
    });
  }

  function handleThreadEvent(type: 'INSERT' | 'UPDATE' | 'DELETE', row: Thread): void {
    // Scope to this page — server filter is project_id only.
    if (type !== 'DELETE' && row.page_url !== pageUrl) return;

    if (type === 'INSERT') {
      if (localThreadIds.has(row.id)) {
        localThreadIds.delete(row.id);
        return;
      }
      if (threads.value.some((t) => t.id === row.id)) return;
      threads.value = [...threads.value, row];
      commentsByThread.value = {
        ...commentsByThread.value,
        [row.id]: commentsByThread.value[row.id] ?? [],
      };
    } else if (type === 'UPDATE') {
      threads.value = threads.value.map((t) => (t.id === row.id ? row : t));
    } else if (type === 'DELETE') {
      threads.value = threads.value.filter((t) => t.id !== row.id);
      const next = { ...commentsByThread.value };
      delete next[row.id];
      commentsByThread.value = next;
    }
  }

  function handleCommentEvent(type: 'INSERT' | 'UPDATE' | 'DELETE', row: Comment): void {
    if (type === 'INSERT') {
      if (localCommentIds.has(row.id)) {
        localCommentIds.delete(row.id);
        return;
      }
      // Drop comments for threads we don't know about (different page).
      if (!threads.value.some((t) => t.id === row.thread_id)) return;
      const existing = commentsByThread.value[row.thread_id] ?? [];
      if (existing.some((c) => c.id === row.id)) return;
      commentsByThread.value = {
        ...commentsByThread.value,
        [row.thread_id]: [...existing, row].sort((a, b) =>
          a.created_at < b.created_at ? -1 : 1,
        ),
      };
    } else if (type === 'DELETE') {
      const existing = commentsByThread.value[row.thread_id];
      if (!existing) return;
      commentsByThread.value = {
        ...commentsByThread.value,
        [row.thread_id]: existing.filter((c) => c.id !== row.id),
      };
    }
  }

  // Best-effort: persist mentions for a newly inserted comment. Failure here
  // is logged but doesn't fail the caller — the comment landed successfully,
  // and mentions can be rebuilt by re-parsing the body if necessary.
  async function persistMentions(commentId: string, mentions: readonly MentionDraft[]): Promise<void> {
    if (mentions.length === 0) return;
    const rows = mentions.map((m) => ({
      comment_id: commentId,
      mentioned_email: m.email,
      mentioned_name: m.name,
    }));
    const { error } = await client.from('comment_mentions').insert(rows);
    if (error) {
      // eslint-disable-next-line no-console
      console.warn('[comment-widget] failed to persist mentions:', error);
    }
  }

  // Throws WidgetError on failure. Returns the persisted Thread on success.
  async function createThread(
    anchor: AnchorData,
    body: string,
    identity: Identity,
    mentions: readonly MentionDraft[] = [],
  ): Promise<Thread> {
    const { data: threadRow, error: threadError } = await client
      .from('threads')
      .insert({
        project_id: projectId,
        page_url: pageUrl,
        selector_path: anchor.selector,
        anchor_x_pct: anchor.x_pct,
        anchor_y_pct: anchor.y_pct,
        status: 'open',
        created_by_name: identity.name,
        created_by_email: identity.email,
      })
      .select()
      .single();

    if (threadError || !threadRow) {
      // eslint-disable-next-line no-console
      console.error('[comment-widget] failed to create thread:', threadError);
      throw describeError(threadError, 'Could not save comment.');
    }

    const thread = threadRow as Thread;
    localThreadIds.add(thread.id);
    threads.value = [...threads.value, thread];
    commentsByThread.value = { ...commentsByThread.value, [thread.id]: [] };

    try {
      await replyToThread(thread.id, body, identity, mentions);
    } catch (e) {
      // Thread row landed but the initial comment didn't. Surface to caller so
      // they can decide whether to retry the reply or roll back. We leave the
      // thread in place — better than orphaning state on the server.
      throw e;
    }
    return thread;
  }

  async function replyToThread(
    threadId: string,
    body: string,
    identity: Identity,
    mentions: readonly MentionDraft[] = [],
  ): Promise<Comment> {
    const { data, error: insertError } = await client
      .from('comments')
      .insert({
        thread_id: threadId,
        body,
        author_name: identity.name,
        author_email: identity.email,
      })
      .select()
      .single();

    if (insertError || !data) {
      // eslint-disable-next-line no-console
      console.error('[comment-widget] failed to insert comment:', insertError);
      throw describeError(insertError, 'Could not post reply.');
    }

    const comment = data as Comment;
    localCommentIds.add(comment.id);
    const existing = commentsByThread.value[threadId] ?? [];
    commentsByThread.value = {
      ...commentsByThread.value,
      [threadId]: [...existing, comment],
    };

    // Fire-and-forget; logged on failure. Awaited so the caller can serialize
    // mention work behind comment work if it cares, but errors don't bubble.
    await persistMentions(comment.id, mentions);

    return comment;
  }

  async function updateThreadStatus(
    threadId: string,
    status: 'open' | 'resolved',
  ): Promise<Thread> {
    // Optimistic update so the popover/pin react instantly.
    const previous = threads.value.find((t) => t.id === threadId);
    if (previous && previous.status !== status) {
      threads.value = threads.value.map((t) => (t.id === threadId ? { ...t, status } : t));
    }

    const { data, error: updateError } = await client
      .from('threads')
      .update({ status })
      .eq('id', threadId)
      .select()
      .single();

    if (updateError || !data) {
      // Roll back if the server rejected the change.
      if (previous) {
        threads.value = threads.value.map((t) => (t.id === threadId ? previous : t));
      }
      // eslint-disable-next-line no-console
      console.error('[comment-widget] failed to update thread status:', updateError);
      throw describeError(updateError, 'Could not change status.');
    }

    const updated = data as Thread;
    threads.value = threads.value.map((t) => (t.id === threadId ? updated : t));
    return updated;
  }

  // Drag-to-reposition: rewrite the pin's selector + percentage coordinates.
  async function updateThreadAnchor(threadId: string, anchor: AnchorData): Promise<Thread> {
    const previous = threads.value.find((t) => t.id === threadId);
    if (!previous) throw new WidgetError('Pin no longer exists.');

    const optimistic: Thread = {
      ...previous,
      selector_path: anchor.selector,
      anchor_x_pct: anchor.x_pct,
      anchor_y_pct: anchor.y_pct,
    };
    threads.value = threads.value.map((t) => (t.id === threadId ? optimistic : t));

    const { data, error: updateError } = await client
      .from('threads')
      .update({
        selector_path: anchor.selector,
        anchor_x_pct: anchor.x_pct,
        anchor_y_pct: anchor.y_pct,
      })
      .eq('id', threadId)
      .select()
      .single();

    if (updateError || !data) {
      threads.value = threads.value.map((t) => (t.id === threadId ? previous : t));
      // eslint-disable-next-line no-console
      console.error('[comment-widget] failed to update thread anchor:', updateError);
      throw describeError(updateError, 'Could not move the pin.');
    }

    const updated = data as Thread;
    threads.value = threads.value.map((t) => (t.id === threadId ? updated : t));
    return updated;
  }

  // Hard-delete a single comment. RLS only permits this when the signed-in
  // user matches the author email.
  async function deleteComment(threadId: string, commentId: string): Promise<void> {
    const previousList = commentsByThread.value[threadId];
    if (!previousList) throw new WidgetError('Comment no longer exists.');
    const previousComment = previousList.find((c) => c.id === commentId);
    if (!previousComment) throw new WidgetError('Comment no longer exists.');

    commentsByThread.value = {
      ...commentsByThread.value,
      [threadId]: previousList.filter((c) => c.id !== commentId),
    };

    const { error: deleteError } = await client.from('comments').delete().eq('id', commentId);
    if (deleteError) {
      // Roll back.
      commentsByThread.value = {
        ...commentsByThread.value,
        [threadId]: previousList,
      };
      // eslint-disable-next-line no-console
      console.error('[comment-widget] failed to delete comment:', deleteError);
      throw describeError(deleteError, 'Could not delete reply.');
    }
  }

  // Hard-delete a thread. Schema cascades remove its comments + mentions.
  // RLS only permits this when the signed-in user matches the thread creator.
  async function deleteThread(threadId: string): Promise<void> {
    const previousThreads = threads.value;
    const previousComments = commentsByThread.value[threadId];
    threads.value = previousThreads.filter((t) => t.id !== threadId);
    const nextMap = { ...commentsByThread.value };
    delete nextMap[threadId];
    commentsByThread.value = nextMap;

    const { error: deleteError } = await client.from('threads').delete().eq('id', threadId);
    if (deleteError) {
      threads.value = previousThreads;
      if (previousComments) {
        commentsByThread.value = { ...commentsByThread.value, [threadId]: previousComments };
      }
      // eslint-disable-next-line no-console
      console.error('[comment-widget] failed to delete thread:', deleteError);
      throw describeError(deleteError, 'Could not delete thread.');
    }
  }

  const openThreadCount = computed(
    () => threads.value.filter((t) => t.status === 'open').length,
  );

  const totalThreadCount = computed(() => threads.value.length);

  onBeforeUnmount(() => {
    subscription?.unsubscribe();
    subscription = null;
  });

  return {
    pageUrl,
    threads,
    commentsByThread,
    loading,
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
  };
}
