---
note_type: task
fileClass: task
id: task.public.personal-oss.ox-content.improve-performance
title: Improve performance in ox-content
content: >-
  Make the content pipeline faster so future ecosystem integrations inherit a
  stronger core.
status: active
visibility: public
portfolio: personal-oss
surface: repository
discipline: engineering
stream: stabilization
urgency: 4
importance: 5
progress: 44
efforts: 5
agenty: 4
owners:
  - ubugeeei
assignees:
  - ubugeeei
requesters:
  - self
due_date: null
uncertainty: 3
blockers: []
focus:
  - weekly
  - monthly
review_week: 2026-W20
review_month: 2026-05
parent: "[[10-tasks/ox-content--advance]]"
children: []
private_children: 0
redaction_reason: null
tags:
  - repo/ubugeeei-ox-content
  - stream/stabilization
updated: "2026-05-17"
---

# Improve performance in ox-content

## Outcome

Strengthen the core enough that plugin and framework work does not compound a slow baseline.

## Notes

2026-05-17 moved several hot paths out of TypeScript and into Rust-backed implementation: docs/SSG helpers, search-index build/write, i18n project checks, and bare SSG HTML. That is a meaningful baseline shift, not just isolated cleanup.

Next useful check: run the public build against representative docs content and record whether the Rust migration improved wall-clock time, memory, or failure clarity enough to change release positioning.

## Links

- [Advance ox-content](./ox-content--advance.md)
- [Rust search index build PR](https://github.com/ubugeeei/ox-content/pull/106)
- [Rust search index write PR](https://github.com/ubugeeei/ox-content/pull/107)
- [Rust bare SSG HTML PR](https://github.com/ubugeeei/ox-content/pull/110)
- [Weekly focus for 2026-W20](../20-focus/weekly/2026-W20.md)
