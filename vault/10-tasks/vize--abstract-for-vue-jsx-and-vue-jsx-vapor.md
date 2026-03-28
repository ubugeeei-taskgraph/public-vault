---
note_type: task
fileClass: task
id: task.public.personal-oss.vize.abstract-for-vue-jsx-and-vue-jsx-vapor
title: Abstract vize for vue-jsx and vue-jsx-vapor
content: >-
  Refactor vize around a more general abstraction so the same core can support
  both vue-jsx and vue-jsx-vapor cleanly.
status: active
visibility: public
portfolio: personal-oss
surface: repository
discipline: engineering
stream: compatibility
urgency: 4
importance: 4
progress: 0
efforts: 5
agenty: 3
owners:
  - ubugeeei
assignees:
  - ubugeeei
requesters:
  - self
due_date: null
uncertainty: 4
blockers:
  - '[[10-tasks/vuejs-core-team--drive-vapor-stability]]'
focus: []
review_week: 2026-W12
review_month: 2026-03
parent: '[[10-tasks/vize--improve-vapor-compatibility]]'
children: []
private_children: 0
redaction_reason: null
tags:
  - repo/ubugeeei-vize
  - stream/compatibility
updated: '2026-03-28'
---
# Abstract vize for vue-jsx and vue-jsx-vapor

## Outcome

Make the vize core reusable across both JSX-oriented surfaces so compatibility work does not fork into separate one-off implementations.

## Notes

This is the architectural side of the Vapor compatibility track. The goal is not only to support another target, but to find the right seam where shared logic can stay stable while frontend-specific behavior remains pluggable.

## Links

- [Improve Vapor compatibility](./vize--improve-vapor-compatibility.md)
- [Drive Vapor toward stability](./vuejs-core-team--drive-vapor-stability.md)
