<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue';
import type { MentionDraft } from '../types';
import type { MentionCandidate } from '../composables/useMentionables';

const props = defineProps<{
  modelValue: string;
  mentions: readonly MentionDraft[];
  pool: readonly MentionCandidate[];
  placeholder?: string;
  disabled?: boolean;
  compact?: boolean;
  // Used by the caller to reset internal state (selection cleared on submit).
  resetKey?: number;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'update:mentions', value: MentionDraft[]): void;
  (e: 'submit'): void;
  (e: 'cancel'): void;
}>();

const textareaRef = ref<HTMLTextAreaElement | null>(null);
const dropdownOpen = ref(false);
const dropdownQuery = ref('');
const dropdownStart = ref(0); // index of the '@' that opened the dropdown
const highlightIndex = ref(0);

// Filter the pool against the query after `@`. Names match case-insensitively
// by prefix or by any word boundary, so "ja" matches "Jane" and "li" matches
// "Carlos Lin".
const matches = computed<MentionCandidate[]>(() => {
  const q = dropdownQuery.value.trim().toLowerCase();
  if (!q) return props.pool.slice(0, 8);
  return props.pool
    .filter((c) => {
      const name = c.name.toLowerCase();
      const email = c.email.toLowerCase();
      if (name.startsWith(q) || email.startsWith(q)) return true;
      return name.split(/\s+/).some((part) => part.startsWith(q));
    })
    .slice(0, 8);
});

watch(matches, () => {
  highlightIndex.value = 0;
});

watch(
  () => props.resetKey,
  () => {
    closeDropdown();
  },
);

function onInput(event: Event): void {
  const ta = event.target as HTMLTextAreaElement;
  const value = ta.value;
  emit('update:modelValue', value);
  // Re-evaluate which mentions are still present in the new body. If the user
  // deleted part of a `@Name` token, drop the corresponding mention.
  pruneMentions(value);
  updateDropdownState(ta);
}

function pruneMentions(body: string): void {
  if (props.mentions.length === 0) return;
  const surviving = props.mentions.filter((m) => bodyContainsMention(body, m.name));
  if (surviving.length !== props.mentions.length) {
    emit('update:mentions', surviving);
  }
}

function bodyContainsMention(body: string, name: string): boolean {
  // Word-boundary on the right keeps "@Jane" from matching a deletion that
  // left "@Jan". We do a literal substring search for "@<name>" preceded by
  // start/whitespace and followed by non-word-character or end.
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(^|\\s)@${escaped}(?=$|[^\\w])`);
  return pattern.test(body);
}

function updateDropdownState(ta: HTMLTextAreaElement): void {
  const value = ta.value;
  const caret = ta.selectionStart ?? value.length;
  // Walk backward from caret until we find an '@' with whitespace/start before
  // it, or until we hit whitespace (no active @).
  let i = caret - 1;
  while (i >= 0) {
    const ch = value[i];
    if (ch === '@') {
      const before = i === 0 ? '' : value[i - 1];
      if (i === 0 || /\s/.test(before)) {
        const query = value.slice(i + 1, caret);
        // Cancel the dropdown if the in-progress token includes whitespace
        // — that means the user moved on.
        if (/\s/.test(query)) {
          closeDropdown();
          return;
        }
        dropdownStart.value = i;
        dropdownQuery.value = query;
        dropdownOpen.value = true;
        return;
      }
      closeDropdown();
      return;
    }
    if (/\s/.test(ch)) {
      closeDropdown();
      return;
    }
    i -= 1;
  }
  closeDropdown();
}

function closeDropdown(): void {
  dropdownOpen.value = false;
  dropdownQuery.value = '';
  dropdownStart.value = 0;
  highlightIndex.value = 0;
}

function selectMatch(candidate: MentionCandidate): void {
  const ta = textareaRef.value;
  if (!ta) return;
  const value = props.modelValue;
  const caret = ta.selectionStart ?? value.length;
  // Replace from the `@` up to the caret with `@Name `.
  const before = value.slice(0, dropdownStart.value);
  const after = value.slice(caret);
  const token = `@${candidate.name}`;
  const next = `${before}${token} ${after}`;
  emit('update:modelValue', next);

  // Track this selection alongside the body so the parent can persist it
  // into comment_mentions. De-dupe by email.
  const dedup = new Map<string, MentionDraft>();
  for (const m of props.mentions) dedup.set(m.email.toLowerCase(), m);
  dedup.set(candidate.email.toLowerCase(), { email: candidate.email, name: candidate.name });
  emit('update:mentions', Array.from(dedup.values()));

  closeDropdown();

  nextTick(() => {
    const nextCaret = before.length + token.length + 1;
    ta.focus();
    try {
      ta.setSelectionRange(nextCaret, nextCaret);
    } catch {
      // Some browsers throw on setSelectionRange when the element is detached
      // or has the wrong input type — non-fatal.
    }
  });
}

function onKeydown(event: KeyboardEvent): void {
  if (dropdownOpen.value && matches.value.length > 0) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      highlightIndex.value = (highlightIndex.value + 1) % matches.value.length;
      return;
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      highlightIndex.value =
        (highlightIndex.value - 1 + matches.value.length) % matches.value.length;
      return;
    }
    if (event.key === 'Enter' || event.key === 'Tab') {
      event.preventDefault();
      selectMatch(matches.value[highlightIndex.value]);
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      closeDropdown();
      return;
    }
  }

  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    emit('submit');
    return;
  }
  if (event.key === 'Escape') {
    event.preventDefault();
    emit('cancel');
    return;
  }
}

// Click handler for the dropdown popover. We mouse-down inside the popover
// without losing the textarea's focus by setting selection back after.
function onCandidateMousedown(event: MouseEvent, candidate: MentionCandidate): void {
  event.preventDefault();
  selectMatch(candidate);
}
</script>

<template>
  <div class="cw-mention-wrap">
    <textarea
      ref="textareaRef"
      class="cw-composer-textarea"
      :class="{ 'cw-composer-textarea--compact': compact }"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="onInput"
      @keydown="onKeydown"
      @blur="closeDropdown"
    />
    <ul
      v-if="dropdownOpen && matches.length > 0"
      class="cw-mention-dropdown"
      role="listbox"
      @mousedown.stop
    >
      <li
        v-for="(candidate, idx) in matches"
        :key="candidate.email"
        class="cw-mention-option"
        :class="{ 'cw-mention-option--active': idx === highlightIndex }"
        role="option"
        :aria-selected="idx === highlightIndex"
        @mouseenter="highlightIndex = idx"
        @mousedown="onCandidateMousedown($event, candidate)"
      >
        <span class="cw-mention-option-name">{{ candidate.name }}</span>
        <span class="cw-mention-option-email">{{ candidate.email }}</span>
      </li>
    </ul>
  </div>
</template>
