<script setup lang="ts">
import { computed } from "vue";
import type { Task } from "@/lib/types";

interface PositionedNode {
  id: string;
  title: string;
  progress: number;
  portfolio: string;
  task: Task;
  x: number;
  y: number;
}

interface GraphEdge {
  key: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const props = defineProps<{
  tasks: Task[];
}>();

const groupedNodes = computed(() => {
  const groups = new Map<string, Task[]>();

  for (const task of props.tasks) {
    const bucket = groups.get(task.portfolio) ?? [];
    bucket.push(task);
    groups.set(task.portfolio, bucket);
  }

  return [...groups.entries()];
});

const positionedNodes = computed(() => {
  const nodes: PositionedNode[] = [];

  groupedNodes.value.forEach(([portfolio, tasks], groupIndex) => {
    tasks.forEach((task, taskIndex) => {
      nodes.push({
        id: task.id,
        title: task.title,
        progress: task.progress,
        portfolio,
        task,
        x: 140 + groupIndex * 220,
        y: 110 + taskIndex * 108,
      });
    });
  });

  return nodes;
});

const edges = computed(() => {
  const lookup = new Map(positionedNodes.value.map((node) => [node.id, node]));

  return positionedNodes.value.flatMap((node): GraphEdge[] => {
    const relations = [...node.task.blockers];

    if (node.task.parent) {
      relations.push(node.task.parent);
    }

    return relations
      .map((targetId) => {
        const target = lookup.get(targetId);

        if (!target) {
          return null;
        }

        return {
          key: `${node.id}->${targetId}`,
          x1: node.x,
          y1: node.y,
          x2: target.x,
          y2: target.y,
        };
      })
      .filter((edge): edge is GraphEdge => edge !== null);
  });
});

const viewBox = computed(() => {
  const width = Math.max(groupedNodes.value.length * 220 + 160, 880);
  const height = Math.max(
    Math.max(0, ...groupedNodes.value.map(([, tasks]) => tasks.length * 108)) + 140,
    520,
  );

  return `0 0 ${width} ${height}`;
});
</script>

<template>
  <section class="graph-board glass">
    <header class="section-heading">
      <div class="section-heading__title">
        <div>
          <p class="section-heading__eyebrow">Graph first</p>
          <h2>Portfolio network</h2>
        </div>
      </div>
      <span class="section-heading__count">{{ tasks.length }} visible nodes</span>
    </header>

    <div class="graph-board__viewport">
      <svg class="graph-board__svg" :viewBox="viewBox" preserveAspectRatio="xMidYMid meet">
        <g class="graph-board__edges">
          <line
            v-for="edge in edges"
            :key="edge.key"
            :x1="edge.x1"
            :y1="edge.y1"
            :x2="edge.x2"
            :y2="edge.y2"
          />
        </g>

        <g class="graph-board__labels">
          <text
            v-for="([portfolio], index) in groupedNodes"
            :key="portfolio"
            :x="82 + index * 220"
            y="52"
          >
            {{ portfolio }}
          </text>
        </g>

        <g class="graph-board__nodes">
          <g
            v-for="node in positionedNodes"
            :key="node.id"
            :transform="`translate(${node.x - 72}, ${node.y - 34})`"
          >
            <rect rx="22" ry="22" width="144" height="68" />
            <text x="18" y="28" class="graph-board__node-title">
              {{ node.title.slice(0, 18) }}
            </text>
            <text x="18" y="49" class="graph-board__node-meta">{{ node.progress }}% complete</text>
          </g>
        </g>
      </svg>
    </div>
  </section>
</template>
