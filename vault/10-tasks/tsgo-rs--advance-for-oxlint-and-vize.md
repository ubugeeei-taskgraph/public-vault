---
note_type: task
fileClass: task
id: task.public.personal-oss.tsgo-rs.advance-for-oxlint-and-vize
title: Advance tsgo_rs for oxlint and vize
content: >-
  Push tsgo_rs forward so oxlint-facing and vize-facing TypeScript tooling can
  share a stronger Rust-backed foundation.
status: active
visibility: public
portfolio: personal-oss
surface: repository
repository_url: https://github.com/ubugeeei/tsgo_rs
discipline: engineering
stream: compatibility
urgency: 4
importance: 4
progress: 0
efforts: 5
agenty: 4
owners:
  - ubugeeei
assignees:
  - ubugeeei
requesters:
  - self
due_date: null
uncertainty: 4
blockers: []
focus:
  - weekly
review_week: 2026-W14
review_month: 2026-04
parent: '[[10-tasks/vize--ship-oxlint-js-plugin]]'
children: []
private_children: 0
redaction_reason: null
public_bridge_id: null
tags:
  - area/linting
  - area/typescript
  - area/rust
updated: '2026-04-02'
---
# Advance tsgo_rs for oxlint and vize

## Outcome

Push the shared Rust-backed TypeScript layer far enough that oxlint work and vize work can build on something more reusable than one-off integration glue.

## Notes

This is a supporting repository task, but it is directly in the path of the current oxlint and vize implementation work. The value is not only in the standalone repo, but in making the surrounding tooling stack easier to evolve.

## Links

- [tsgo_rs repository](https://github.com/ubugeeei/tsgo_rs)
- [Ship the oxlint JavaScript plugin to production readiness](./vize--ship-oxlint-js-plugin.md)
- [Advance vize](./vize--advance.md)
- [Public initiative map](../90-index/initiative-map.md)
