<script setup lang="ts">
import type { PublicScopeDisclosure } from "@/lib/types";

defineProps<{
  disclosure: PublicScopeDisclosure;
}>();
</script>

<template>
  <section class="public-scope-card glass">
    <header class="section-heading">
      <div class="section-heading__title">
        <div>
          <p class="section-heading__eyebrow">Scope disclosure</p>
          <h2>{{ disclosure.title }}</h2>
        </div>
      </div>
      <span class="section-heading__count">Approx. {{ disclosure.publicSharePercentLabel }}%</span>
    </header>

    <div class="public-scope-card__body">
      <p class="public-scope-card__lead">
        This vault contains only public-facing tasks. It represents about
        <strong>{{ disclosure.publicSharePercentLabel }}%</strong>
        of the overall task landscape.
      </p>

      <ul class="public-scope-card__list">
        <li v-for="item in disclosure.excludedScopes" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>
