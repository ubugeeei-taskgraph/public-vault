<script setup lang="ts">
defineProps<{
  path: string;
  size?: number;
}>();
</script>

<template>
  <svg :viewBox="'0 0 24 24'" :width="size ?? 20" :height="size ?? 20" aria-hidden="true">
    <path :d="path" fill="currentColor" />
  </svg>
</template>
