<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { Round } from '../composables/useRounds';

const props = defineProps<{
  active: boolean;
  openCount: number;
  totalCount: number;
  showOpenOnly: boolean;
  signedIn: boolean;
  userName: string | null;
  roundsEnabled: boolean;
  rounds: Round[];
  currentRoundId: string | null;
  isLatestRound: boolean;
}>();

const emit = defineEmits<{
  (e: 'toggle'): void;
  (e: 'toggle-filter'): void;
  (e: 'open-team'): void;
  (e: 'sign-in'): void;
  (e: 'sign-out'): void;
  (e: 'select-round', round: Round): void;
}>();

const countLabel = computed(() => {
  if (props.totalCount === 0) return 'No comments';
  if (props.showOpenOnly) {
    return props.openCount === 1 ? '1 open' : `${props.openCount} open`;
  }
  return `${props.openCount} of ${props.totalCount}`;
});

const filterLabel = computed(() =>
  props.showOpenOnly ? 'Showing open · click to show all' : 'Showing all · click to show open only',
);

const userInitial = computed(() => {
  if (!props.userName) return '?';
  return props.userName.trim().charAt(0).toUpperCase() || '?';
});

const confirmingSignOut = ref(false);

// Reset the confirmation if the user's auth state changes (e.g. signed out
// elsewhere or session expires) so the toolbar doesn't get stuck.
watch(() => props.signedIn, () => {
  confirmingSignOut.value = false;
});

const roundMenuOpen = ref(false);

const currentRoundIndex = computed(() =>
  props.rounds.findIndex((round) => round.id === props.currentRoundId),
);

const roundButtonLabel = computed(() => {
  const index = currentRoundIndex.value;
  if (index < 0) return 'Rounds';
  return `Round ${index + 1} of ${props.rounds.length}`;
});

function chooseRound(round: Round): void {
  roundMenuOpen.value = false;
  if (round.id !== props.currentRoundId) emit('select-round', round);
}
</script>

<template>
  <div class="cw-toolbar" role="toolbar" aria-label="Comment widget">
    <span class="cw-toolbar-label">{{ countLabel }}</span>

    <div v-if="roundsEnabled" class="cw-round-switcher">
      <div
        v-if="roundMenuOpen"
        class="cw-round-backdrop"
        @click="roundMenuOpen = false"
      />
      <button
        type="button"
        class="cw-btn cw-btn--ghost cw-btn--small cw-round-trigger"
        :class="{ 'cw-round-trigger--archived': !isLatestRound }"
        :aria-expanded="roundMenuOpen"
        aria-haspopup="listbox"
        :title="isLatestRound ? 'Switch review round' : 'Viewing an archived round'"
        @click="roundMenuOpen = !roundMenuOpen"
      >
        <span v-if="!isLatestRound" class="cw-round-dot" aria-hidden="true" />
        <span>{{ roundButtonLabel }}</span>
        <svg
          class="cw-round-chevron"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <ul v-if="roundMenuOpen" class="cw-round-menu" role="listbox">
        <li v-for="(round, i) in rounds" :key="round.id">
          <button
            type="button"
            class="cw-round-option"
            :class="{ 'cw-round-option--current': round.id === currentRoundId }"
            role="option"
            :aria-selected="round.id === currentRoundId"
            @click="chooseRound(round)"
          >
            <span>{{ round.label || `Round ${i + 1}` }}</span>
            <span
              v-if="round.id === currentRoundId"
              class="cw-round-check"
              aria-hidden="true"
              >&check;</span
            >
          </button>
        </li>
      </ul>
    </div>

    <button
      v-if="totalCount > 0"
      type="button"
      class="cw-btn cw-btn--ghost cw-btn--icon"
      :class="{ 'cw-filter-active': showOpenOnly }"
      :title="filterLabel"
      :aria-pressed="showOpenOnly"
      @click="$emit('toggle-filter')"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        :fill="showOpenOnly ? 'currentColor' : 'none'"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    </button>

    <button
      v-if="signedIn"
      type="button"
      class="cw-btn cw-btn--ghost cw-btn--icon"
      title="Manage team"
      aria-label="Manage team"
      @click="$emit('open-team')"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    </button>

    <button
      v-if="!signedIn"
      type="button"
      class="cw-btn cw-btn--ghost cw-btn--small"
      title="Sign in to comment"
      @click="$emit('sign-in')"
    >
      Sign in
    </button>
    <template v-else>
      <!-- Normal state: avatar button opens the confirmation -->
      <button
        v-if="!confirmingSignOut"
        type="button"
        class="cw-btn cw-btn--ghost cw-btn--icon cw-toolbar-avatar"
        :title="`Signed in as ${userName ?? ''}`"
        @click="confirmingSignOut = true"
      >
        <span aria-hidden="true">{{ userInitial }}</span>
      </button>

      <!-- Confirmation state: prompt + confirm/cancel -->
      <template v-else>
        <span class="cw-toolbar-label">Sign out?</span>
        <button
          type="button"
          class="cw-btn cw-btn--ghost cw-btn--small"
          @click="$emit('sign-out'); confirmingSignOut = false"
        >
          Sign out
        </button>
        <button
          type="button"
          class="cw-btn cw-btn--ghost cw-btn--small"
          @click="confirmingSignOut = false"
        >
          Cancel
        </button>
      </template>
    </template>

    <button
      type="button"
      class="cw-btn cw-toolbar-toggle"
      :class="{ 'cw-toolbar-toggle--on': active }"
      :aria-pressed="active"
      :title="active ? 'Exit comment mode (C)' : 'Enter comment mode (C)'"
      @click="$emit('toggle')"
    >
      <svg
        v-if="!active"
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
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
      <svg
        v-else
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
      <span>{{ active ? 'Cancel' : 'Comment' }}</span>
    </button>
  </div>
</template>
