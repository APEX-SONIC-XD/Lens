import { computed, onBeforeUnmount, ref } from 'vue';
import type { Session, SupabaseClient, User } from '@supabase/supabase-js';
import type { Identity } from '../types';

// Translates Supabase auth errors into widget-friendly hints. We're not
// reusing useThreads' WidgetError here because auth surface area is small
// and the failure modes are different enough to be worth their own copy.
function describeAuthError(e: unknown, fallback: string): string {
  const err = e as { message?: string; status?: number };
  const message = err?.message ?? (e instanceof Error ? e.message : String(e ?? ''));
  const lowered = message.toLowerCase();
  if (lowered.includes('rate limit') || err?.status === 429) {
    return 'Too many sign-in requests. Wait a minute and try again.';
  }
  if (lowered.includes('invalid api key') || lowered.includes('jwt')) {
    return 'Invalid Supabase anon key. Double-check the credentials.';
  }
  if (lowered.includes('failed to fetch') || lowered.includes('networkerror')) {
    return "Couldn't reach Supabase. Check the project URL and your connection.";
  }
  if (lowered.includes('not allowed')) {
    return 'This email is not allowed for this Supabase project.';
  }
  if (
    lowered.includes('expired') ||
    lowered.includes('invalid') ||
    lowered.includes('otp')
  ) {
    return 'That code is invalid or has expired. Request a new one.';
  }
  if (message) return `${fallback} (${message})`;
  return fallback;
}

// Derive a display name. Order of preference:
//   1. Explicit `name` in user_metadata (captured when requesting the OTP)
//   2. Local-part of the email, title-cased
//   3. Email itself, as last resort
function deriveName(user: User | null): string {
  if (!user) return '';
  const fromMeta = user.user_metadata?.name;
  if (typeof fromMeta === 'string' && fromMeta.trim()) return fromMeta.trim();
  const email = user.email ?? '';
  const local = email.split('@')[0] ?? '';
  if (!local) return email;
  return local.charAt(0).toUpperCase() + local.slice(1);
}

// DEV-ONLY: localStorage-gated bypass for when you're rate-limited by Supabase
// OTP and need to test the UI without a real session. Set it from devtools:
//   localStorage.setItem('__cw_dev_bypass_auth', JSON.stringify({
//     email: 'you@example.com',
//     name: 'You',
//   }));
// Then reload. To clear: localStorage.removeItem('__cw_dev_bypass_auth').
// The bypass ALSO requires temporarily disabling RLS in Supabase, since the
// faked identity has no real JWT to satisfy auth.uid()-gated policies.
// See README troubleshooting for the SQL commands.
const DEV_BYPASS_KEY = '__cw_dev_bypass_auth';

function readDevBypass(): { email: string; name: string } | null {
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(DEV_BYPASS_KEY) : null;
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { email?: unknown; name?: unknown };
    if (typeof parsed.email !== 'string' || !parsed.email.includes('@')) return null;
    const name = typeof parsed.name === 'string' && parsed.name.trim() ? parsed.name.trim() : parsed.email.split('@')[0];
    // eslint-disable-next-line no-console
    console.warn('[comment-widget] dev auth bypass active for', parsed.email, '— remove __cw_dev_bypass_auth before deploying.');
    return { email: parsed.email, name };
  } catch {
    return null;
  }
}

export function useAuth(client: SupabaseClient) {
  const session = ref<Session | null>(null);
  const user = ref<User | null>(null);
  const ready = ref(false);

  const devBypass = readDevBypass();

  const identity = computed<Identity | null>(() => {
    if (devBypass) return { name: devBypass.name, email: devBypass.email };
    const u = user.value;
    if (!u || !u.email) return null;
    return { name: deriveName(u), email: u.email };
  });

  const signedIn = computed(() => (devBypass ? true : !!user.value));

  // Bootstrap from any persisted session, then keep both refs in sync with
  // auth state changes (sign-in via OTP verify, sign-out, token refresh).
  let authListener: { subscription: { unsubscribe(): void } } | null = null;

  if (devBypass) {
    ready.value = true;
  }

  void client.auth.getSession().then(({ data }) => {
    session.value = data.session ?? null;
    user.value = data.session?.user ?? null;
    ready.value = true;
  });

  const { data: listenerHandle } = client.auth.onAuthStateChange((_event, nextSession) => {
    session.value = nextSession ?? null;
    user.value = nextSession?.user ?? null;
    if (!ready.value) ready.value = true;
  });
  authListener = listenerHandle;

  // Step 1 of the sign-in flow: ask Supabase to send a six-digit code to the
  // given email. We deliberately do NOT pass `emailRedirectTo` — when it's
  // omitted, Supabase's Magic Link template renders {{ .Token }} as the
  // six-digit code. Combined with a template that omits {{ .ConfirmationURL }},
  // the email contains no link at all, which is what makes this flow survive
  // URL-rewriting gateways like Mimecast.
  async function requestEmailCode(email: string, name?: string): Promise<void> {
    const trimmed = email.trim();
    if (!trimmed) throw new Error('Email is required.');
    const trimmedName = name?.trim();
    try {
      const { error } = await client.auth.signInWithOtp({
        email: trimmed,
        options: {
          data: trimmedName ? { name: trimmedName } : undefined,
        },
      });
      if (error) throw error;
    } catch (e) {
      throw new Error(describeAuthError(e, "Couldn't send the sign-in code."));
    }
  }

  // Step 2: verify the six-digit code the user pasted in. On success, the
  // auth listener above flips `user`/`signedIn` and the parent's deferred
  // action replay kicks in. `type: 'email'` is the OTP type for the email
  // OTP flow (distinct from 'signup', 'recovery', 'magiclink', etc.).
  async function verifyEmailCode(email: string, code: string): Promise<void> {
    const trimmedEmail = email.trim();
    const trimmedCode = code.trim();
    if (!trimmedEmail) throw new Error('Email is required.');
    if (!trimmedCode) throw new Error('Enter the six-digit code from the email.');
    try {
      const { error } = await client.auth.verifyOtp({
        email: trimmedEmail,
        token: trimmedCode,
        type: 'email',
      });
      if (error) throw error;
    } catch (e) {
      throw new Error(describeAuthError(e, "Couldn't verify the sign-in code."));
    }
  }

  async function signOut(): Promise<void> {
    try {
      const { error } = await client.auth.signOut();
      if (error) throw error;
    } catch (e) {
      throw new Error(describeAuthError(e, "Couldn't sign out."));
    }
  }

  onBeforeUnmount(() => {
    authListener?.subscription.unsubscribe();
    authListener = null;
  });

  return {
    session,
    user,
    identity,
    signedIn,
    ready,
    requestEmailCode,
    verifyEmailCode,
    signOut,
  };
}
