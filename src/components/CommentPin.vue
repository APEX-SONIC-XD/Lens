<script setup lang="ts">
import { computed } from 'vue';
import type { ResolvedAnchor, Thread } from '../types';

const props = defineProps<{
  anchor: ResolvedAnchor;
  thread: Thread;
  active: boolean;
  index: number;
}>();

defineEmits<{
  (e: 'click'): void;
}>();

const titleText = computed(() => {
  const parts: string[] = [];
  if (props.thread.status === 'resolved') parts.push('Resolved');
  if (props.anchor.approximate) parts.push('Approximate anchor');
  return parts.join(' · ');
});
</script>

<template>
  <button
    type="button"
    class="cw-pin"
    :class="{
      'cw-pin--approximate': anchor.approximate,
      'cw-pin--active': active,
      'cw-pin--resolved': thread.status === 'resolved',
    }"
    :style="{ left: `${anchor.x}px`, top: `${anchor.y}px` }"
    :title="titleText"
    @click.stop="$emit('click')"
  >
    <span class="cw-pin-label">{{ index }}</span>
  </button>
</template>
