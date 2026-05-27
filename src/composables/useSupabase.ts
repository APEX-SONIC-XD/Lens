import {
  createClient,
  type RealtimePostgresChangesPayload,
  type SupabaseClient,
} from '@supabase/supabase-js';
import type { Comment, Mentionable, Thread } from '../types';

// Verified May 2026 against supabase.com/docs/guides/realtime/postgres-changes
// and @supabase/realtime-js's RealtimeChannel.on overloads (v2.x):
//   supabase.channel(name).on('postgres_changes', { event, schema, table, filter }, cb).subscribe()

export type ProjectChangeEvent =
  | { table: 'threads'; type: 'INSERT' | 'UPDATE' | 'DELETE'; row: Thread }
  | { table: 'comments'; type: 'INSERT' | 'UPDATE' | 'DELETE'; row: Comment }
  | { table: 'mentionables'; type: 'INSERT' | 'UPDATE' | 'DELETE'; row: Mentionable };

export interface ProjectSubscription {
  unsubscribe(): void;
}

export function createSupabaseClient(url: string, anonKey: string): SupabaseClient {
  // persistSession + autoRefreshToken keep signed-in users from having to
  // re-OTP on every page reload. detectSessionInUrl stays on as a no-op for
  // the OTP flow (no callback hash), but doesn't hurt and would re-enable
  // magic-link callbacks if we ever fall back to that. Anonymous read
  // traffic is unaffected — no session, no auth header.
  return createClient(url, anonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
    realtime: {
      params: {
        // Reasonable default for a comment widget — clients sending at most
        // one event per few seconds.
        eventsPerSecond: 5,
      },
    },
  });
}

export function subscribeToProject(
  client: SupabaseClient,
  projectId: string,
  onEvent: (event: ProjectChangeEvent) => void,
): ProjectSubscription {
  const channelName = `comment-widget:${projectId}`;
  const channel = client
    .channel(channelName)
    .on<Thread>(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'threads',
        filter: `project_id=eq.${projectId}`,
      },
      (payload: RealtimePostgresChangesPayload<Thread>) => {
        const type = payload.eventType as 'INSERT' | 'UPDATE' | 'DELETE';
        const row = (type === 'DELETE' ? payload.old : payload.new) as Thread;
        onEvent({ table: 'threads', type, row });
      },
    )
    .on<Comment>(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        // Comments aren't filtered server-side by project_id because they
        // reference a thread, not a project. The client filters by known
        // thread membership in useThreads.
        table: 'comments',
      },
      (payload: RealtimePostgresChangesPayload<Comment>) => {
        const type = payload.eventType as 'INSERT' | 'UPDATE' | 'DELETE';
        const row = (type === 'DELETE' ? payload.old : payload.new) as Comment;
        onEvent({ table: 'comments', type, row });
      },
    )
    .on<Mentionable>(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'mentionables',
        filter: `project_id=eq.${projectId}`,
      },
      (payload: RealtimePostgresChangesPayload<Mentionable>) => {
        const type = payload.eventType as 'INSERT' | 'UPDATE' | 'DELETE';
        const row = (type === 'DELETE' ? payload.old : payload.new) as Mentionable;
        onEvent({ table: 'mentionables', type, row });
      },
    )
    .subscribe((status, err) => {
      if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
        // eslint-disable-next-line no-console
        console.warn('[comment-widget] realtime channel error:', status, err);
      }
    });

  return {
    unsubscribe() {
      void client.removeChannel(channel);
    },
  };
}
