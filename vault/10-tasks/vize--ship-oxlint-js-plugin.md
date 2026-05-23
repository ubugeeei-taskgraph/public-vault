---
note_type: task
fileClass: task
id: task.public.personal-oss.vize.ship-oxlint-js-plugin
title: Ship the oxlint JavaScript plugin to production readiness
content: >-
  Push the oxlint JavaScript plugin from promising implementation to reliable
  public usage.
status: active
visibility: public
portfolio: personal-oss
surface: repository
discipline: engineering
stream: stabilization
urgency: 4
importance: 4
progress: 68
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
review_week: 2026-W21
review_month: 2026-05
parent: "[[10-tasks/vize--advance]]"
children:
  - "[[10-tasks/tsgo-rs--advance-for-oxlint-and-vize]]"
  - "[[10-tasks/tsslint--research-implementation]]"
  - "[[10-tasks/vize--verify-oxlint-plugin-alpha-release]]"
  - "[[10-tasks/corsa-bind--verify-corsa-oxlint]]"
private_children: 0
redaction_reason: null
tags:
  - repo/ubugeeei-vize
  - stream/stabilization
updated: "2026-05-23"
---

# Ship the oxlint JavaScript plugin to production readiness

## Outcome

Finish the rough edges that still separate the plugin from broad public use.

## Notes

This is one of the clearest productization tasks inside vize because it turns core implementation work into a dependable user surface. The current implementation lane also runs through `tsgo_rs`, which is shaping the lower-level TypeScript and Oxlint-facing foundation behind the plugin work.

2026-05-22 and 2026-05-23 `corsa-bind` activity moved corsa-oxlint from "promising" to something closer to parity: native tsgolint rules, unsafe TypeScript rules, AST utilities, benchmark-driven tuning, and utility API parity all landed or closed. The next task is no longer only implementation; it is representative operation checks from the Vize side.

## Links

- [Advance vize](./vize--advance.md)
- [Advance tsgo_rs for oxlint and vize](./tsgo-rs--advance-for-oxlint-and-vize.md)
- [Research the tsslint implementation](./tsslint--research-implementation.md)
- [Verify the oxlint-plugin-vize alpha release](./vize--verify-oxlint-plugin-alpha-release.md)
- [Verify corsa-oxlint behavior](./corsa-bind--verify-corsa-oxlint.md)
- [corsa-bind PR 145](https://github.com/ubugeeei/corsa-bind/pull/145)
- [corsa-bind issue 120](https://github.com/ubugeeei/corsa-bind/issues/120)
