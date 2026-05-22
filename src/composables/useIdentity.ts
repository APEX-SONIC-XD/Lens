import { ref } from 'vue';
import type { Identity } from '../types';

const STORAGE_KEY = '__comment_widget_identity';

function read(): Identity | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Identity>;
    if (typeof parsed.name === 'string' && typeof parsed.email === 'string' && parsed.name && parsed.email) {
      return { name: parsed.name, email: parsed.email };
    }
    return null;
  } catch {
    return null;
  }
}

function write(identity: Identity): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(identity));
  } catch {
    // localStorage can fail in private modes or strict CSPs. Identity is
    // session-only in that case — not a fatal error.
  }
}

export function useIdentity() {
  const identity = ref<Identity | null>(read());

  function set(next: Identity): void {
    identity.value = next;
    write(next);
  }

  function clear(): void {
    identity.value = null;
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Same rationale as write() — non-fatal.
    }
  }

  return { identity, set, clear };
}
