import { computed, onBeforeUnmount, ref, shallowRef, watch, type ComputedRef, type Ref } from 'vue';
import type {
  RealtimeChannel,
  RealtimePostgresChangesPayload,
  SupabaseClient,
} from '@supabase/supabase-js';
import type { Comment, Mentionable, Thread } from '../types';
import { WidgetError } from './useThreads';

// An entry in the mention autocomplete pool. Source distinguishes the curated
// list ("team") from author records derived from existing comments ("author").
// When the same email shows up in both, "team" wins so the curator's preferred
// display name is honored.
export interface MentionCandidate {
  email: string;
  name: string;
  source: 'team' | 'author';
}

export interface UseMentionablesOptions {
  client: SupabaseClient;
  projectId: string;
  signedIn: ComputedRef<boolean> | Ref<boolean>;
  threads: Ref<readonly Thread[]> | { value: readonly Thread[] };
  commentsByThread: Ref<Record<string, Comment[]>> | { value: Record<string, Comment[]> };
  currentEmail: ComputedRef<string | null> | Ref<string | null>;
}

// Supabase PostgrestError is a plain object, not an Error instance: it carries
// { message, details, hint, code }. We grab whichever fields are present and
// fold them into a single human-readable string before classifying.
function extractErrorMessage(e: unknown): { message: string; code: string } {
  if (!e) return { message: '', code: '' };
  if (e instanceof Error) return { message: e.message, code: '' };
  if (typeof e === 'string') return { message: e, code: '' };
  if (typeof e === 'object') {
    const obj = e as Record<string, unknown>;
    const parts: string[] = [];
    if (typeof obj.message === 'string' && obj.message) parts.push(obj.message);
    if (typeof obj.details === 'string' && obj.details) parts.push(obj.details);
    if (typeof obj.hint === 'string' && obj.hint) parts.push(obj.hint);
    const code = typeof obj.code === 'string' ? obj.code : '';
    return { message: parts.join(' — ') || JSON.stringify(obj), code };
  }
  return { message: String(e), code: '' };
}

function describeError(e: unknown, fallback: string): WidgetError {
  const { message, code } = extractErrorMessage(e);
  const lowered = message.toLowerCase();
  let hint = fallback;
  // Postgres error codes — see https://www.postgresql.org/docs/current/errcodes-appendix.html
  if (code === '42P01' || lowered.includes('does not exist')) {
    hint = `Tables missing. Re-run supabase/schema.sql to add the v0.2 tables.`;
  } else if (code === '42501' || lowered.includes('permission denied')) {
    hint = `Permission denied. Re-run supabase/schema.sql so the v0.2 policies are in place.`;
  } else if (lowered.includes('row-level security') || lowered.includes('rls')) {
    hint = 'You need to be signed in to manage the team.';
  } else if (code === '23505' || lowered.includes('duplicate key') || lowered.includes('unique constraint')) {
    hint = 'That email is already on the team.';
  } else if (lowered.includes('failed to fetch') || lowered.includes('networkerror')) {
    hint = "Couldn't reach Supabase. Check your connection.";
  } else if (message) {
    hint = `${fallback} (${message})`;
  }
  return new WidgetError(hint, e);
}

export function useMentionables(opts: UseMentionablesOptions) {
  const list = shallowRef<Mentionable[]>([]);
  const loaded = ref(false);
  const loadError = ref<string | null>(null);

  let channel: RealtimeChannel | null = null;

  async function load(): Promise<void> {
    if (!opts.signedIn.value) {
      // RLS denies SELECT for anonymous readers — skip the round-trip.
      list.value = [];
      loaded.value = false;
      return;
    }
    loadError.value = null;
    try {
      const { data, error } = await opts.client
        .from('mentionables')
        .select('*')
        .eq('project_id', opts.projectId)
        .order('name', { ascending: true });
      if (error) throw error;
      list.value = (data ?? []) as Mentionable[];
      loaded.value = true;
    } catch (e) {
      const wrapped = describeError(e, 'Could not load team list.');
      loadError.value = wrapped.hint;
      // eslint-disable-next-line no-console
      console.error('[comment-widget] failed to load mentionables:', e);
    }
  }

  function handleRealtime(payload: RealtimePostgresChangesPayload<Mentionable>): void {
    const type = payload.eventType as 'INSERT' | 'UPDATE' | 'DELETE';
    const row = (type === 'DELETE' ? payload.old : payload.new) as Mentionable;
    if (!row) return;
    if (type === 'INSERT') {
      if (list.value.some((m) => m.id === row.id)) return;
      list.value = [...list.value, row].sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === 'UPDATE') {
      list.value = list.value.map((m) => (m.id === row.id ? row : m));
    } else if (type === 'DELETE') {
      list.value = list.value.filter((m) => m.id !== row.id);
    }
  }

  function startRealtime(): void {
    if (channel) return;
    // Separate channel name from threads/comments to avoid topic collision.
    channel = opts.client
      .channel(`comment-widget:${opts.projectId}:mentionables`)
      .on<Mentionable>(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'mentionables',
          filter: `project_id=eq.${opts.projectId}`,
        },
        handleRealtime,
      )
      .subscribe((status, err) => {
        if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
          // eslint-disable-next-line no-console
          console.warn('[comment-widget] mentionables realtime error:', status, err);
        }
      });
  }

  function stopRealtime(): void {
    if (!channel) return;
    void opts.client.removeChannel(channel);
    channel = null;
  }

  // Re-fetch whenever the user signs in (RLS would have rejected reads while
  // they were anonymous). Tear realtime back down on sign-out to keep the
  // anonymous experience quiet.
  const stopWatchSignedIn = watch(
    () => opts.signedIn.value,
    (isIn) => {
      if (isIn) {
        void load();
        startRealtime();
      } else {
        list.value = [];
        loaded.value = false;
        stopRealtime();
      }
    },
    { immediate: true },
  );

  // Author candidates derived from already-loaded threads + comments. We
  // include the thread creator (sometimes the same as the first comment's
  // author, sometimes not when imported data drifts) and every comment author.
  // The current signed-in user is excluded — you can't @-mention yourself.
  const authorCandidates = computed<MentionCandidate[]>(() => {
    const map = new Map<string, MentionCandidate>();
    const me = (opts.currentEmail.value ?? '').toLowerCase();
    for (const t of opts.threads.value) {
      if (!t.created_by_email) continue;
      const key = t.created_by_email.toLowerCase();
      if (key === me) continue;
      if (!map.has(key)) {
        map.set(key, { email: t.created_by_email, name: t.created_by_name, source: 'author' });
      }
    }
    for (const arr of Object.values(opts.commentsByThread.value)) {
      for (const c of arr) {
        if (!c.author_email) continue;
        const key = c.author_email.toLowerCase();
        if (key === me) continue;
        if (!map.has(key)) {
          map.set(key, { email: c.author_email, name: c.author_name, source: 'author' });
        }
      }
    }
    return Array.from(map.values());
  });

  const pool = computed<MentionCandidate[]>(() => {
    const map = new Map<string, MentionCandidate>();
    // Authors first; team entries overwrite to win on display name.
    for (const c of authorCandidates.value) map.set(c.email.toLowerCase(), c);
    for (const m of list.value) {
      const key = m.email.toLowerCase();
      const me = (opts.currentEmail.value ?? '').toLowerCase();
      if (key === me) continue;
      map.set(key, { email: m.email, name: m.name, source: 'team' });
    }
    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
  });

  async function add(email: string, name?: string): Promise<Mentionable> {
    const trimmedEmail = email.trim();
    const trimmedName = (name ?? '').trim() || trimmedEmail.split('@')[0];
    if (!trimmedEmail) throw new WidgetError('Email is required.');
    try {
      const { data, error } = await opts.client
        .from('mentionables')
        .insert({
          project_id: opts.projectId,
          email: trimmedEmail,
          name: trimmedName,
          added_by_email: opts.currentEmail.value,
        })
        .select()
        .single();
      if (error || !data) throw error ?? new Error('No row returned.');
      // Optimistic: realtime echo will arrive but our local insert already
      // updated the list. handleRealtime dedupes by id.
      const row = data as Mentionable;
      if (!list.value.some((m) => m.id === row.id)) {
        list.value = [...list.value, row].sort((a, b) => a.name.localeCompare(b.name));
      }
      return row;
    } catch (e) {
      throw describeError(e, 'Could not add team member.');
    }
  }

  async function remove(id: string): Promise<void> {
    const previous = list.value;
    list.value = list.value.filter((m) => m.id !== id);
    try {
      const { error } = await opts.client.from('mentionables').delete().eq('id', id);
      if (error) throw error;
    } catch (e) {
      list.value = previous;
      throw describeError(e, 'Could not remove team member.');
    }
  }

  onBeforeUnmount(() => {
    stopWatchSignedIn();
    stopRealtime();
  });

  return { list, pool, loaded, loadError, load, add, remove };
}
