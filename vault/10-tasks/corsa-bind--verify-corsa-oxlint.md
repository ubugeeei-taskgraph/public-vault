---
note_type: task
fileClass: task
id: task.public.personal-oss.corsa-bind.verify-corsa-oxlint
title: Verify corsa-oxlint behavior
content: >-
  Confirm that corsa-oxlint works in representative Vize and standalone
  scenarios after the recent Rust parity push.
status: active
visibility: public
portfolio: personal-oss
surface: repository
repository_url: https://github.com/ubugeeei/corsa-bind
discipline: engineering
stream: stabilization
urgency: 4
importance: 4
progress: 20
efforts: 3
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
review_week: 2026-W21
review_month: 2026-05
parent: "[[10-tasks/vize--ship-oxlint-js-plugin]]"
children: []
private_children: 0
redaction_reason: null
public_bridge_id: null
tags:
  - repo/ubugeeei-corsa-bind
  - repo/ubugeeei-vize
  - stream/stabilization
updated: 2026-05-23
---

# Verify corsa-oxlint behavior

## Outcome

Know whether the recent corsa-oxlint parity work is usable from the flows that matter, rather than only merged in isolation.

## Notes

Recent GitHub activity closed native rule parity, TypeScript utility API parity, benchmark tuning, and runtime API work in `corsa-bind`. The next check should run it through Vize, a small standalone fixture, and at least one type-aware rule path.

## Links

- [Ship the oxlint JavaScript plugin to production readiness](./vize--ship-oxlint-js-plugin.md)
- [corsa-bind PR 145](https://github.com/ubugeeei/corsa-bind/pull/145)
- [corsa-bind issue 120](https://github.com/ubugeeei/corsa-bind/issues/120)
- [corsa-bind issue 122](https://github.com/ubugeeei/corsa-bind/issues/122)
