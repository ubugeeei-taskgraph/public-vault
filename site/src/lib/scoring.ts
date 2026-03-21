import type { Task } from "./types";

export function getLeverageScore(task: Task) {
  return (
    task.importance * 3 + task.urgency * 2 + task.agenty - task.uncertainty + task.progress / 25
  );
}

export function sortByLeverage(tasks: Task[]) {
  return [...tasks].sort((left, right) => getLeverageScore(right) - getLeverageScore(left));
}

export function averageProgress(tasks: Task[]) {
  if (tasks.length === 0) {
    return 0;
  }

  const total = tasks.reduce((sum, task) => sum + task.progress, 0);
  return Math.round(total / tasks.length);
}
