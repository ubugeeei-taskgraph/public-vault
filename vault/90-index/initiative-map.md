---
note_type: index
id: index.public.initiative-map
title: Public initiative map
visibility: public
updated: 2026-03-21
---
# Public initiative map

```dataview
TABLE WITHOUT ID
file.link AS Initiative,
portfolio AS Portfolio,
focus AS Focus,
progress + "%" AS Progress
FROM "10-tasks"
WHERE note_type = "task" AND status != "done" AND parent = null
SORT portfolio ASC, contains(focus, "weekly") DESC, contains(focus, "monthly") DESC, importance DESC
```

## Lenses

- [Public home](./home.md)
- [Weekly focus for 2026-W12](../20-focus/weekly/2026-W12.md)
- [Monthly focus for 2026-03](../20-focus/monthly/2026-03.md)
- [Public scope disclosure](./public-scope-disclosure.md)
