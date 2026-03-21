import { computed } from "vue";
import { sortByLeverage } from "@/lib/scoring";
import type { Task } from "@/lib/types";

function toIsoWeek(date: Date) {
  const next = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = next.getUTCDay() || 7;

  next.setUTCDate(next.getUTCDate() + 4 - day);

  const yearStart = new Date(Date.UTC(next.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((next.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);

  return `${next.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

function toMonthKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

export function useDerivedFocus(tasks: Task[]) {
  const availableWeeks = [...new Set(tasks.map((task) => task.reviewWeek).filter(Boolean))].sort();
  const availableMonths = [
    ...new Set(tasks.map((task) => task.reviewMonth).filter(Boolean)),
  ].sort();
  const currentWeek = toIsoWeek(new Date());
  const currentMonth = toMonthKey(new Date());

  const activeWeek = availableWeeks.includes(currentWeek)
    ? currentWeek
    : (availableWeeks.at(-1) ?? currentWeek);
  const activeMonth = availableMonths.includes(currentMonth)
    ? currentMonth
    : (availableMonths.at(-1) ?? currentMonth);

  const weeklyFocus = computed(() =>
    sortByLeverage(
      tasks.filter((task) => task.focus.includes("weekly") && task.reviewWeek === activeWeek),
    ),
  );

  const monthlyFocus = computed(() =>
    sortByLeverage(
      tasks.filter((task) => task.focus.includes("monthly") && task.reviewMonth === activeMonth),
    ),
  );

  const initiatives = computed(() =>
    sortByLeverage(tasks.filter((task) => task.parent === null && task.visibility === "public")),
  );

  const priorityStack = computed(() => sortByLeverage(tasks).slice(0, 18));

  const portfolioSummary = computed(() => {
    const counts = new Map<string, number>();

    for (const task of tasks) {
      counts.set(task.portfolio, (counts.get(task.portfolio) ?? 0) + 1);
    }

    return [...counts.entries()]
      .map(([label, count]) => ({ label, count }))
      .sort((left, right) => right.count - left.count);
  });

  return {
    activeWeek,
    activeMonth,
    weeklyFocus,
    monthlyFocus,
    initiatives,
    priorityStack,
    portfolioSummary,
  };
}
