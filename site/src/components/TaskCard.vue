<script setup lang="ts">
import {
  mdiAccountCircleOutline,
  mdiAlertCircleOutline,
  mdiBrain,
  mdiLinkVariant,
  mdiProgressClock,
} from "@mdi/js";
import MetricPill from "./MetricPill.vue";
import UiIcon from "./UiIcon.vue";
import type { Task } from "@/lib/types";

defineProps<{
  task: Task;
  compact?: boolean;
}>();
</script>

<template>
  <article class="task-card glass">
    <header class="task-card__header">
      <div>
        <p class="task-card__eyebrow">{{ task.portfolio }}</p>
        <h3>{{ task.title }}</h3>
      </div>
      <span class="task-card__status">{{ task.status }}</span>
    </header>

    <p class="task-card__content">{{ task.content }}</p>

    <div class="task-card__meta">
      <span class="task-card__meta-item">
        <UiIcon :path="mdiProgressClock" :size="16" />
        {{ task.progress }}%
      </span>
      <span class="task-card__meta-item">
        <UiIcon :path="mdiAlertCircleOutline" :size="16" />
        U{{ task.urgency }} / I{{ task.importance }}
      </span>
      <span class="task-card__meta-item">
        <UiIcon :path="mdiBrain" :size="16" />
        Agenty {{ task.agenty }}/5
      </span>
      <span class="task-card__meta-item">
        <UiIcon :path="mdiAccountCircleOutline" :size="16" />
        {{ task.owners.join(", ") }}
      </span>
    </div>

    <div class="task-card__pills">
      <MetricPill label="Effort" :value="task.efforts" />
      <MetricPill label="Uncertainty" :value="task.uncertainty" />
      <MetricPill label="Blockers" :value="task.blockers.length" />
      <MetricPill
        v-if="task.privateChildren > 0"
        label="Private tracks"
        :value="task.privateChildren"
      />
    </div>

    <footer class="task-card__footer">
      <span class="task-card__path">{{ task.path }}</span>
      <div class="task-card__footer-actions">
        <a
          v-if="task.repositoryUrl"
          class="task-card__repo-link"
          :href="task.repositoryUrl"
          target="_blank"
          rel="noreferrer"
        >
          <UiIcon :path="mdiLinkVariant" :size="16" />
          Repository
        </a>
        <span class="task-card__links">
          <UiIcon :path="mdiLinkVariant" :size="16" />
          {{ task.children.length }} children
        </span>
      </div>
    </footer>
  </article>
</template>
