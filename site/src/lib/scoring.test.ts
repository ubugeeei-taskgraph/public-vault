import { describe, expect, it } from "vite-plus/test";
import { averageProgress, getLeverageScore, sortByLeverage } from "./scoring";
import type { Task } from "./types";

const makeTask = (overrides: Partial<Task>): Task => ({
  id: "task.public.personal-oss.example",
  title: "Example",
  content: "Example content",
  status: "active",
  visibility: "public",
  portfolio: "personal-oss",
  surface: "repository",
  repositoryUrls: [],
  discipline: "engineering",
  stream: "delivery",
  urgency: 3,
  importance: 3,
  progress: 0,
  efforts: 3,
  agenty: 3,
  owners: ["ubugeeei"],
  assignees: ["ubugeeei"],
  requesters: ["self"],
  dueDate: null,
  uncertainty: 3,
  blockers: [],
  focus: [],
  reviewWeek: "2026-W12",
  reviewMonth: "2026-03",
  parent: null,
  children: [],
  privateChildren: 0,
  redactionReason: null,
  tags: [],
  updated: "2026-03-21",
  path: "10-tasks/example--task.md",
  slug: "10-tasks/example--task",
  body: "Example body",
  ...overrides,
});

describe("scoring", () => {
  it("rewards important and urgent tasks", () => {
    const low = makeTask({ title: "Low", importance: 1, urgency: 1 });
    const high = makeTask({ title: "High", importance: 5, urgency: 5 });

    expect(getLeverageScore(high)).toBeGreaterThan(getLeverageScore(low));
  });

  it("sorts tasks by leverage descending", () => {
    const sorted = sortByLeverage([
      makeTask({ title: "Second", importance: 2 }),
      makeTask({ title: "First", importance: 5 }),
    ]);

    expect(sorted[0]?.title).toBe("First");
  });

  it("averages progress safely", () => {
    expect(averageProgress([])).toBe(0);
    expect(averageProgress([makeTask({ progress: 25 }), makeTask({ progress: 75 })])).toBe(50);
  });
});
