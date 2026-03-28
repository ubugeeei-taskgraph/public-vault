---
note_type: home
id: home.public
title: Public home
visibility: public
updated: 2026-03-28
---
# Public taskgraph

> [!summary] Public lens
> This vault contains only public-facing tasks. It is a partial view of the broader task graph, and work-related tasks are managed elsewhere.

```dataviewjs
const pages = dv.pages('"10-tasks"').where((page) => page.note_type === "task" && page.status !== "done").array();
const hasFocus = (page, focus) => Array.isArray(page.focus) && page.focus.includes(focus);
const score = (page) => page.importance * 3 + page.urgency * 2 + page.agenty - page.uncertainty + page.progress / 25;
const byScore = (items) => [...items].sort((left, right) => score(right) - score(left));
const topLevel = pages.filter((page) => !page.parent);
const metrics = [
  { label: "Active tasks", value: pages.length, icon: "tasks" },
  { label: "Initiatives", value: topLevel.length, icon: "graph" },
  { label: "Weekly focus", value: pages.filter((page) => hasFocus(page, "weekly")).length, icon: "weekly" },
  { label: "Monthly focus", value: pages.filter((page) => hasFocus(page, "monthly")).length, icon: "monthly" },
];

const strip = dv.container.createDiv({ cls: "tg-metric-strip" });
for (const { label, value, icon } of metrics) {
  const card = strip.createDiv({ cls: "tg-metric" });
  card.dataset.icon = icon;
  card.createDiv({ text: String(value), cls: "tg-metric__value" });
  card.createDiv({ text: label, cls: "tg-metric__label" });
}

const dashboard = dv.container.createDiv({ cls: "tg-dashboard" });
const board = dashboard.createDiv({ cls: "tg-panel-grid" });

const renderChip = (parent, text, tone = "") => {
  const chip = parent.createDiv({ cls: `tg-chip${tone ? ` tg-chip--${tone}` : ""}` });
  chip.setText(text);
};

const renderTaskCard = (parent, page) => {
  const card = parent.createDiv({ cls: "tg-note-card" });
  card.tabIndex = 0;
  card.addEventListener("click", () => app.workspace.openLinkText(page.file.path, "", false));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      app.workspace.openLinkText(page.file.path, "", false);
    }
  });
  card.createDiv({ text: page.title, cls: "tg-note-card__title" });
  card.createDiv({ text: page.content, cls: "tg-note-card__summary" });
  const meta = card.createDiv({ cls: "tg-note-card__meta" });
  renderChip(meta, page.portfolio);
  renderChip(meta, page.stream);
  renderChip(meta, `${page.progress}%`, "strong");
  if ((page.blockers?.length ?? 0) > 0) {
    renderChip(meta, `${page.blockers.length} blocker${page.blockers.length > 1 ? "s" : ""}`, "muted");
  }
};

const renderPanel = ({ eyebrow, title, icon, span, items, emptyText }) => {
  const panel = board.createDiv({ cls: "tg-panel" });
  panel.dataset.icon = icon;
  panel.dataset.span = span;
  panel.createDiv({ text: eyebrow, cls: "tg-panel__eyebrow" });
  panel.createDiv({ text: title, cls: "tg-panel__title" });
  const body = panel.createDiv({ cls: "tg-panel__body" });
  if (items.length === 0) {
    body.createDiv({ text: emptyText, cls: "tg-empty" });
    return;
  }
  for (const item of items.slice(0, span === "8" ? 6 : 5)) {
    renderTaskCard(body, item);
  }
};

renderPanel({
  eyebrow: "Now",
  title: "Weekly focus",
  icon: "weekly",
  span: "4",
  items: byScore(pages.filter((page) => hasFocus(page, "weekly"))),
  emptyText: "No weekly focus tasks are marked right now."
});

renderPanel({
  eyebrow: "Direction",
  title: "Monthly focus",
  icon: "monthly",
  span: "4",
  items: byScore(pages.filter((page) => hasFocus(page, "monthly"))),
  emptyText: "No monthly focus tasks are marked right now."
});

renderPanel({
  eyebrow: "Attention",
  title: "Pressure points",
  icon: "pressure",
  span: "4",
  items: byScore(pages.filter((page) => (page.blockers?.length ?? 0) > 0 || page.uncertainty >= 4)),
  emptyText: "No blocker-heavy or high-uncertainty tasks stand out."
});

renderPanel({
  eyebrow: "Structure",
  title: "Initiative fronts",
  icon: "initiative",
  span: "8",
  items: byScore(topLevel),
  emptyText: "No initiative fronts are available."
});

const readingPanel = board.createDiv({ cls: "tg-panel" });
readingPanel.dataset.icon = "reading";
readingPanel.dataset.span = "4";
readingPanel.createDiv({ text: "Rooms", cls: "tg-panel__eyebrow" });
readingPanel.createDiv({ text: "Reading rooms", cls: "tg-panel__title" });
const readingBody = readingPanel.createDiv({ cls: "tg-link-list" });
for (const [label, target] of [
  ["Public initiative map", "90-index/initiative-map"],
  ["Weekly focus for 2026-W13", "20-focus/weekly/2026-W13"],
  ["Monthly focus for 2026-03", "20-focus/monthly/2026-03"],
  ["Public scope disclosure", "90-index/public-scope-disclosure"],
]) {
  const item = readingBody.createDiv({ cls: "tg-link-item" });
  item.tabIndex = 0;
  item.setText(label);
  item.addEventListener("click", () => app.workspace.openLinkText(target, "", false));
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      app.workspace.openLinkText(target, "", false);
    }
  });
}
```

## Full tables

### Weekly

```dataview
TABLE WITHOUT ID
file.link AS Task,
portfolio AS Portfolio,
progress + "%" AS Progress
FROM "10-tasks"
WHERE note_type = "task" AND status != "done" AND contains(focus, "weekly")
SORT importance DESC, urgency DESC, progress DESC
```

### Monthly

```dataview
TABLE WITHOUT ID
file.link AS Task,
portfolio AS Portfolio,
progress + "%" AS Progress
FROM "10-tasks"
WHERE note_type = "task" AND status != "done" AND contains(focus, "monthly")
SORT importance DESC, urgency DESC, progress DESC
```

## Initiatives

```dataview
TABLE WITHOUT ID
file.link AS Initiative,
portfolio AS Portfolio,
stream AS Stream,
progress + "%" AS Progress
FROM "10-tasks"
WHERE note_type = "task" AND status != "done" AND parent = null
SORT contains(focus, "weekly") DESC, contains(focus, "monthly") DESC, importance DESC, urgency DESC
```
