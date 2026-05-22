<script setup lang="ts">
import { ref } from 'vue';
import type { Identity } from '../types';

defineProps<{
  initialName?: string;
  initialEmail?: string;
}>();

const emit = defineEmits<{
  (e: 'submit', identity: Identity): void;
  (e: 'cancel'): void;
}>();

const name = ref('');
const email = ref('');
const submitted = ref(false);

function isValidEmail(value: string): boolean {
  // Simple sanity check — server has the source of truth via auth later.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function submit(): void {
  submitted.value = true;
  const trimmedName = name.value.trim();
  const trimmedEmail = email.value.trim();
  if (!trimmedName || !isValidEmail(trimmedEmail)) return;
  emit('submit', { name: trimmedName, email: trimmedEmail });
}
</script>

<template>
  <div class="cw-modal-backdrop" @mousedown.self="$emit('cancel')">
    <form class="cw-modal" @submit.prevent="submit" @mousedown.stop>
      <h2 class="cw-modal-title">Who's commenting?</h2>
      <p class="cw-modal-subtitle">
        We use this to show your name on comments. Stored on this device only.
      </p>
      <label class="cw-field">
        <span class="cw-field-label">Name</span>
        <input
          v-model="name"
          class="cw-input"
          type="text"
          autocomplete="name"
          placeholder="Jane Designer"
          required
        />
      </label>
      <label class="cw-field">
        <span class="cw-field-label">Email</span>
        <input
          v-model="email"
          class="cw-input"
          type="email"
          autocomplete="email"
          placeholder="jane@example.com"
          required
        />
        <span v-if="submitted && email && !isValidEmail(email)" class="cw-field-label" style="color:#c0382e">
          Enter a valid email address.
        </span>
      </label>
      <div class="cw-composer-actions">
        <button type="button" class="cw-btn cw-btn--ghost" @click="$emit('cancel')">Cancel</button>
        <button type="submit" class="cw-btn cw-btn--primary">Continue</button>
      </div>
    </form>
  </div>
</template>
