<script setup lang="ts">
defineProps<{
  label: string;
  value: string | number;
}>();
</script>

<template>
  <div class="metric-pill">
    <span class="metric-pill__label">{{ label }}</span>
    <strong class="metric-pill__value">{{ value }}</strong>
  </div>
</template>
