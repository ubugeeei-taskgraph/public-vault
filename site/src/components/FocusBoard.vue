<script setup lang="ts">
import type { Task } from "@/lib/types";
import TaskCard from "./TaskCard.vue";
import UiIcon from "./UiIcon.vue";

defineProps<{
  title: string;
  subtitle: string;
  icon: string;
  tasks: Task[];
}>();
</script>

<template>
  <section class="focus-board glass">
    <header class="section-heading">
      <div class="section-heading__title">
        <UiIcon :path="icon" :size="22" />
        <div>
          <p class="section-heading__eyebrow">{{ subtitle }}</p>
          <h2>{{ title }}</h2>
        </div>
      </div>
      <span class="section-heading__count">{{ tasks.length }} tasks</span>
    </header>

    <div class="focus-board__list">
      <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </section>
</template>
