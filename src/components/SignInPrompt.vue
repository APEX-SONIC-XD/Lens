<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';

defineProps<{
  // Optional contextual hint shown above the form. Used by the deferred-action
  // flow ("Sign in to post your reply", etc.). Step 1 only.
  reason?: string;
}>();

const emit = defineEmits<{
  (e: 'request-code', payload: { email: string; name: string }): Promise<void> | void;
  (e: 'verify-code', payload: { email: string; code: string }): Promise<void> | void;
  (e: 'cancel'): void;
}>();

// Stage drives which form is rendered. The wider sign-in lifecycle (success →
// dismiss → replay deferred action) is owned by the parent watching signedIn.
type Stage = 'email' | 'code';
const stage = ref<Stage>('email');

// Step 1 state
const email = ref('');
const name = ref('');
const requesting = ref(false);
const requestError = ref<string | null>(null);
const validationTriggered = ref(false);

// Step 2 state
const code = ref('');
const verifying = ref(false);
const verifyError = ref<string | null>(null);

// Resend cooldown — Supabase will rate-limit at ~once-per-60s in practice,
// so we self-throttle at 30s and bump if the server still rejects.
const RESEND_COOLDOWN_MS = 30_000;
const cooldownRemainingMs = ref(0);
let cooldownTimer: number | null = null;

function startCooldown(): void {
  if (cooldownTimer !== null) window.clearInterval(cooldownTimer);
  cooldownRemainingMs.value = RESEND_COOLDOWN_MS;
  const startedAt = Date.now();
  cooldownTimer = window.setInterval(() => {
    const elapsed = Date.now() - startedAt;
    const remaining = RESEND_COOLDOWN_MS - elapsed;
    if (remaining <= 0) {
      cooldownRemainingMs.value = 0;
      if (cooldownTimer !== null) {
        window.clearInterval(cooldownTimer);
        cooldownTimer = null;
      }
    } else {
      cooldownRemainingMs.value = remaining;
    }
  }, 250);
}

onBeforeUnmount(() => {
  if (cooldownTimer !== null) window.clearInterval(cooldownTimer);
});

const cooldownSeconds = computed(() => Math.ceil(cooldownRemainingMs.value / 1000));

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const codeRef = ref<HTMLInputElement | null>(null);
watch(stage, (next) => {
  if (next === 'code') {
    nextTick(() => codeRef.value?.focus());
  }
});

async function submitRequest(): Promise<void> {
  validationTriggered.value = true;
  const trimmedEmail = email.value.trim();
  const trimmedName = name.value.trim();
  if (!isValidEmail(trimmedEmail) || !trimmedName) return;

  requesting.value = true;
  requestError.value = null;
  try {
    await emit('request-code', { email: trimmedEmail, name: trimmedName });
    stage.value = 'code';
    startCooldown();
  } catch (e) {
    requestError.value = e instanceof Error ? e.message : 'Could not send code.';
  } finally {
    requesting.value = false;
  }
}

async function resendCode(): Promise<void> {
  if (cooldownRemainingMs.value > 0 || requesting.value) return;
  const trimmedEmail = email.value.trim();
  const trimmedName = name.value.trim();
  if (!isValidEmail(trimmedEmail)) return;

  requesting.value = true;
  verifyError.value = null;
  try {
    await emit('request-code', { email: trimmedEmail, name: trimmedName });
    startCooldown();
  } catch (e) {
    verifyError.value = e instanceof Error ? e.message : 'Could not resend code.';
  } finally {
    requesting.value = false;
  }
}

// Minimum OTP length Supabase will issue (per their dashboard config).
// Codes can be 6 to 10 digits; we accept anything in that range and let
// verifyOtp surface a "wrong code" error if the length is plausible but
// the value isn't.
const MIN_OTP_LENGTH = 6;
const MAX_OTP_LENGTH = 10;

async function submitVerify(): Promise<void> {
  const trimmedCode = code.value.trim();
  if (trimmedCode.length < MIN_OTP_LENGTH) return;
  const trimmedEmail = email.value.trim();
  if (!trimmedEmail) {
    stage.value = 'email';
    return;
  }

  verifying.value = true;
  verifyError.value = null;
  try {
    await emit('verify-code', { email: trimmedEmail, code: trimmedCode });
    // Success: parent's watch(signedIn) closes the modal by clearing
    // pendingAction. We leave local state alone so the closing animation
    // shows the verified state if needed.
  } catch (e) {
    verifyError.value = e instanceof Error ? e.message : 'Could not verify code.';
  } finally {
    verifying.value = false;
  }
}

function backToEmail(): void {
  stage.value = 'email';
  code.value = '';
  verifyError.value = null;
}

// Restrict input to digits and clip to MAX_OTP_LENGTH. Auto-submit on paste
// (any inputType of insertFromPaste / insertFromDrop) when the pasted code
// is in the valid length window — that keeps the "paste-and-go" UX without
// hardcoding a specific code length, since Supabase projects can be
// configured for anywhere from 6 to 10 digits.
function onCodeInput(event: Event): void {
  const input = event.target as HTMLInputElement;
  const inputType = (event as InputEvent).inputType ?? '';
  const digits = input.value.replace(/\D+/g, '').slice(0, MAX_OTP_LENGTH);
  if (digits !== input.value) input.value = digits;
  code.value = digits;
  const wasPasted = inputType === 'insertFromPaste' || inputType === 'insertFromDrop';
  if (
    wasPasted &&
    digits.length >= MIN_OTP_LENGTH &&
    digits.length <= MAX_OTP_LENGTH &&
    !verifying.value
  ) {
    void submitVerify();
  }
}
</script>

<template>
  <div class="cw-modal-backdrop" @mousedown.self="$emit('cancel')">
    <form
      v-if="stage === 'email'"
      class="cw-modal"
      @submit.prevent="submitRequest"
      @mousedown.stop
    >
      <h2 class="cw-modal-title">Sign in to comment</h2>
      <p class="cw-modal-subtitle">
        {{ reason ?? "We'll email you a one-time code. Reading the page stays anonymous." }}
      </p>

      <label class="cw-field">
        <span class="cw-field-label">Name</span>
        <input
          v-model="name"
          class="cw-input"
          type="text"
          autocomplete="name"
          placeholder="Jane Designer"
          :disabled="requesting"
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
          :disabled="requesting"
          required
        />
        <span
          v-if="validationTriggered && email && !isValidEmail(email)"
          class="cw-field-label"
          style="color:#c0382e"
        >
          Enter a valid email address.
        </span>
      </label>

      <div v-if="requestError" class="cw-error-banner">{{ requestError }}</div>

      <div class="cw-composer-actions">
        <button type="button" class="cw-btn cw-btn--ghost" :disabled="requesting" @click="$emit('cancel')">
          Cancel
        </button>
        <button type="submit" class="cw-btn cw-btn--primary" :disabled="requesting">
          {{ requesting ? 'Sending…' : 'Send code' }}
        </button>
      </div>
    </form>

    <form
      v-else
      class="cw-modal"
      @submit.prevent="submitVerify"
      @mousedown.stop
    >
      <h2 class="cw-modal-title">Enter your code</h2>
      <p class="cw-modal-subtitle">
        We sent a one-time code to <strong>{{ email }}</strong>. Paste it below to finish signing in.
      </p>

      <label class="cw-field">
        <span class="cw-field-label">Code</span>
        <input
          ref="codeRef"
          :value="code"
          class="cw-input cw-input--code"
          type="text"
          inputmode="numeric"
          autocomplete="one-time-code"
          :maxlength="MAX_OTP_LENGTH"
          placeholder="Code from email"
          :disabled="verifying"
          required
          @input="onCodeInput"
        />
      </label>

      <div v-if="verifyError" class="cw-error-banner">{{ verifyError }}</div>

      <div class="cw-composer-actions cw-signin-actions">
        <button
          type="button"
          class="cw-btn cw-btn--ghost cw-btn--small"
          :disabled="verifying"
          @click="backToEmail"
        >
          Back
        </button>
        <button
          type="button"
          class="cw-btn cw-btn--ghost cw-btn--small"
          :disabled="cooldownRemainingMs > 0 || requesting || verifying"
          @click="resendCode"
        >
          {{ cooldownRemainingMs > 0 ? `Resend in ${cooldownSeconds}s` : 'Resend code' }}
        </button>
        <span class="cw-signin-spacer" />
        <button
          type="submit"
          class="cw-btn cw-btn--primary"
          :disabled="verifying || code.length < MIN_OTP_LENGTH"
        >
          {{ verifying ? 'Verifying…' : 'Verify' }}
        </button>
      </div>
    </form>
  </div>
</template>
