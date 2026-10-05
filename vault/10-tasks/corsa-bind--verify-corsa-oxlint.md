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
repository_url: https://github.com/ubugeeei-prod/corsa-bind
discipline: engineering
stream: stabilization
urgency: 4
importance: 4
progress: 75
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
  - monthly
review_week: 2026-W41
review_month: 2026-10
parent: "[[10-tasks/vize--ship-oxlint-js-plugin]]"
children: []
private_children: 0
redaction_reason: null
public_bridge_id: null
tags:
  - repo/ubugeeei-corsa-bind
  - repo/ubugeeei-vize
  - stream/stabilization
updated: "2026-10-05"
---

# Verify corsa-oxlint behavior

## Outcome

Know whether the recent corsa-oxlint parity work is usable from the flows that matter, rather than only merged in isolation.

## Notes

Recent GitHub activity closed native rule parity, TypeScript utility API parity, benchmark tuning, and runtime API work in `corsa-bind`. The next check should run it through Vize, a small standalone fixture, and at least one type-aware rule path.

2026-06-19 through 2026-06-20 activity shows verification finding real integration edges rather than only green-path parity. Open PRs now cover RuleTester project isolation and ESTree tuple ranges, with Actions green on the latest ESTree range PR. Keep this in weekly focus until those PRs are merged or a Vize-side follow-up is filed.

July through September activity kept corsa-bind moving with smaller batches: project-session API parity with LSP, params-less LSP messages and graceful shutdown, and related TypeScript content-mapper PRs upstream. The verification work now overlaps with the Oxc language plugin task.

## Links

- [Ship the oxlint JavaScript plugin to production readiness](./vize--ship-oxlint-js-plugin.md)
- [corsa-bind PR 145](https://github.com/ubugeeei/corsa-bind/pull/145)
- [corsa-bind issue 120](https://github.com/ubugeeei/corsa-bind/issues/120)
- [corsa-bind issue 122](https://github.com/ubugeeei/corsa-bind/issues/122)
- [ESTree tuple ranges PR](https://github.com/ubugeeei-prod/corsa-bind/pull/354)
- [RuleTester isolation PR](https://github.com/ubugeeei-prod/corsa-bind/pull/352)
- [Project-session API issue](https://github.com/ubugeeei-prod/corsa-bind/issues/409)
- [Advance Oxc language plugins](./oxc--advance-language-plugins.md)
