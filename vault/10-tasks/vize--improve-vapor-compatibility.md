---
note_type: task
fileClass: task
id: task.public.personal-oss.vize.improve-vapor-compatibility
title: Improve Vapor compatibility
content: >-
  Make sure the vize toolchain tracks the evolving needs of Vapor closely enough
  to stay relevant.
status: active
visibility: public
portfolio: personal-oss
surface: repository
repository_urls:
  - https://github.com/ubugeeei/vize
  - https://github.com/vuejs/core
discipline: engineering
stream: compatibility
urgency: 4
importance: 5
progress: 45
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
  - "[[10-tasks/vuejs-core-team--drive-vapor-stability]]"
focus:
  - weekly
  - monthly
review_week: 2026-W20
review_month: 2026-05
parent: "[[10-tasks/vize--advance]]"
children:
  - "[[10-tasks/vize--abstract-for-vue-jsx-and-vue-jsx-vapor]]"
private_children: 0
redaction_reason: null
tags:
  - repo/ubugeeei-vize
  - stream/compatibility
updated: "2026-05-17"
---

# Improve Vapor compatibility

## Outcome

Align vize with the direction that Vapor is taking so adoption paths stay plausible.

## Notes

2026-05-17 brought fixture-oriented progress inside vize: destructured `v-for` keys, block effect coalescing, and static string escaping all landed as merged Vapor fixes. The current frontier is narrower and easier to steer: dynamic children and nested control-flow fixture gaps remain open, with a draft PR already tracking the next slice.

## Links

- [Advance vize](./vize--advance.md)
- [Abstract vize for vue-jsx and vue-jsx-vapor](./vize--abstract-for-vue-jsx-and-vue-jsx-vapor.md)
- [Drive Vapor toward stability](./vuejs-core-team--drive-vapor-stability.md)
- [Dynamic children and nested control-flow fixture gaps](https://github.com/ubugeeei/vize/issues/424)
- [Draft PR: nested control-flow fixture gaps](https://github.com/ubugeeei/vize/pull/442)
