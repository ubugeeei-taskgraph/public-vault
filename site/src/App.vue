<script setup lang="ts">
import {
  mdiCalendarMonthOutline,
  mdiCalendarWeekOutline,
  mdiChartTimelineVariant,
  mdiEyeOutline,
  mdiFolderNetworkOutline,
} from "@mdi/js";
import FocusBoard from "@/components/FocusBoard.vue";
import GraphBoard from "@/components/GraphBoard.vue";
import LegendCard from "@/components/LegendCard.vue";
import MetricPill from "@/components/MetricPill.vue";
import PublicScopeCard from "@/components/PublicScopeCard.vue";
import UiIcon from "@/components/UiIcon.vue";
import { useDerivedFocus } from "@/composables/useDerivedFocus";
import { publicScopeDisclosure } from "@/generated/public-scope";
import { generatedAt, tasks } from "@/generated/tasks";
import { averageProgress } from "@/lib/scoring";
import type { Task } from "@/lib/types";

const {
  activeMonth,
  activeWeek,
  initiatives,
  monthlyFocus,
  portfolioSummary,
  priorityStack,
  weeklyFocus,
} = useDerivedFocus(tasks);

const focusCoverage = `${weeklyFocus.value.length} weekly / ${monthlyFocus.value.length} monthly`;
const average = averageProgress(tasks);
const privateBridgeCount = tasks.reduce((sum: number, task: Task) => sum + task.privateChildren, 0);
</script>

<template>
  <div class="shell">
    <div class="shell__noise" aria-hidden="true" />

    <header class="hero glass">
      <div class="hero__copy">
        <p class="hero__eyebrow">ubugeeei/taskgraph</p>
        <h1>A public surface for a larger task graph.</h1>
        <p class="hero__body">
          Generated from Markdown notes in the vault, this view stays intentionally partial: a calm
          public surface over a broader graph that also includes private and work-managed streams
          elsewhere.
        </p>
      </div>

      <div class="hero__summary">
        <div class="hero__summary-card">
          <UiIcon :path="mdiEyeOutline" :size="24" />
          <div>
            <p class="hero__summary-label">Visible focus</p>
            <strong>{{ focusCoverage }}</strong>
          </div>
        </div>
        <div class="hero__summary-card">
          <UiIcon :path="mdiChartTimelineVariant" :size="24" />
          <div>
            <p class="hero__summary-label">Mean progress</p>
            <strong>{{ average }}%</strong>
          </div>
        </div>
        <div class="hero__summary-card">
          <UiIcon :path="mdiFolderNetworkOutline" :size="24" />
          <div>
            <p class="hero__summary-label">Redacted links</p>
            <strong>{{ privateBridgeCount }}</strong>
          </div>
        </div>
      </div>
    </header>

    <PublicScopeCard :disclosure="publicScopeDisclosure" />

    <section class="metrics">
      <div class="metrics__card glass">
        <p class="metrics__label">Weekly review window</p>
        <h2>{{ activeWeek }}</h2>
        <div class="metrics__pills">
          <MetricPill label="Tasks" :value="weeklyFocus.length" />
          <MetricPill label="Generated" :value="generatedAt.slice(0, 10)" />
        </div>
      </div>

      <div class="metrics__card glass">
        <p class="metrics__label">Monthly review window</p>
        <h2>{{ activeMonth }}</h2>
        <div class="metrics__pills">
          <MetricPill label="Tasks" :value="monthlyFocus.length" />
          <MetricPill label="Initiatives" :value="initiatives.length" />
        </div>
      </div>

      <div class="metrics__card glass">
        <p class="metrics__label">Portfolio balance</p>
        <ul class="metrics__portfolio-list">
          <li v-for="entry in portfolioSummary.slice(0, 4)" :key="entry.label">
            <span>{{ entry.label }}</span>
            <strong>{{ entry.count }}</strong>
          </li>
        </ul>
      </div>
    </section>

    <main class="layout">
      <FocusBoard
        title="Weekly focus"
        :subtitle="activeWeek"
        :icon="mdiCalendarWeekOutline"
        :tasks="weeklyFocus"
      />

      <FocusBoard
        title="Monthly focus"
        :subtitle="activeMonth"
        :icon="mdiCalendarMonthOutline"
        :tasks="monthlyFocus"
      />

      <GraphBoard :tasks="priorityStack" />

      <section class="initiative-board glass">
        <header class="section-heading">
          <div class="section-heading__title">
            <div>
              <p class="section-heading__eyebrow">Initiatives</p>
              <h2>Top-level public nodes</h2>
            </div>
          </div>
          <span class="section-heading__count">{{ initiatives.length }} initiatives</span>
        </header>

        <div class="initiative-board__grid">
          <article v-for="task in initiatives" :key="task.id" class="initiative-board__item">
            <p class="initiative-board__item-label">{{ task.stream }}</p>
            <h3>{{ task.title }}</h3>
            <p>{{ task.content }}</p>
          </article>
        </div>
      </section>

      <LegendCard />
    </main>
  </div>
</template>
