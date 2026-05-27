<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Mentionable } from '../types';

const props = defineProps<{
  members: readonly Mentionable[];
  loadError: string | null;
  currentEmail: string | null;
}>();

const emit = defineEmits<{
  (e: 'add', payload: { email: string; name: string }): Promise<void> | void;
  (e: 'remove', id: string): Promise<void> | void;
  (e: 'close'): void;
}>();

const newEmail = ref('');
const newName = ref('');
const addBusy = ref(false);
const addError = ref<string | null>(null);
const removeBusyId = ref<string | null>(null);
const removeError = ref<string | null>(null);

const sorted = computed(() =>
  [...props.members].sort((a, b) => a.name.localeCompare(b.name)),
);

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const canSubmit = computed(() => isValidEmail(newEmail.value.trim()) && !addBusy.value);

async function submitAdd(): Promise<void> {
  const email = newEmail.value.trim();
  const name = newName.value.trim();
  if (!isValidEmail(email)) return;
  addBusy.value = true;
  addError.value = null;
  try {
    await emit('add', { email, name });
    newEmail.value = '';
    newName.value = '';
  } catch (e) {
    addError.value = e instanceof Error ? e.message : 'Could not add team member.';
  } finally {
    addBusy.value = false;
  }
}

async function submitRemove(member: Mentionable): Promise<void> {
  removeBusyId.value = member.id;
  removeError.value = null;
  try {
    await emit('remove', member.id);
  } catch (e) {
    removeError.value = e instanceof Error ? e.message : 'Could not remove team member.';
  } finally {
    removeBusyId.value = null;
  }
}
</script>

<template>
  <div class="cw-modal-backdrop" @mousedown.self="$emit('close')">
    <div class="cw-modal cw-team-panel" role="dialog" aria-label="Team" @mousedown.stop>
      <div class="cw-team-panel-header">
        <h2 class="cw-modal-title">Team</h2>
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
      <p class="cw-modal-subtitle">
        People here always appear in @-mention suggestions, even if they haven't signed in yet.
      </p>

      <div v-if="loadError" class="cw-error-banner">{{ loadError }}</div>

      <form class="cw-team-add" @submit.prevent="submitAdd">
        <input
          v-model="newName"
          class="cw-input"
          type="text"
          autocomplete="name"
          placeholder="Name (optional)"
          :disabled="addBusy"
        />
        <input
          v-model="newEmail"
          class="cw-input"
          type="email"
          autocomplete="email"
          placeholder="email@example.com"
          :disabled="addBusy"
          required
        />
        <button type="submit" class="cw-btn cw-btn--primary cw-btn--small" :disabled="!canSubmit">
          {{ addBusy ? 'Adding…' : 'Add' }}
        </button>
      </form>
      <div v-if="addError" class="cw-error-banner cw-error-banner--inline">{{ addError }}</div>

      <ul v-if="!loadError" class="cw-team-list">
        <li v-if="sorted.length === 0" class="cw-team-empty">
          No one on the team yet. Add an email above.
        </li>
        <li v-for="member in sorted" :key="member.id" class="cw-team-row">
          <div class="cw-team-row-meta">
            <strong>{{ member.name }}</strong>
            <span>{{ member.email }}</span>
          </div>
          <button
            type="button"
            class="cw-btn cw-btn--ghost cw-btn--small"
            :disabled="removeBusyId === member.id"
            :title="member.email === currentEmail ? 'Remove yourself' : 'Remove'"
            @click="submitRemove(member)"
          >
            {{ removeBusyId === member.id ? 'Removing…' : 'Remove' }}
          </button>
        </li>
      </ul>
      <div v-if="removeError" class="cw-error-banner cw-error-banner--inline">{{ removeError }}</div>
    </div>
  </div>
</template>
