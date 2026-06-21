---
note_type: task
fileClass: task
id: task.public.personal-oss.vize.harden-type-checker
title: Make the type checker production ready
content: >-
  Raise the vize type checker to a level where it can be trusted in real
  projects and CI flows.
status: active
visibility: public
portfolio: personal-oss
surface: repository
discipline: engineering
stream: stabilization
urgency: 5
importance: 5
progress: 82
efforts: 8
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
review_week: 2026-W25
review_month: 2026-06
parent: "[[10-tasks/vize--advance]]"
children: []
private_children: 0
redaction_reason: null
tags:
  - repo/ubugeeei-vize
  - stream/stabilization
updated: "2026-06-21"
---

# Make the type checker production ready

## Outcome

Close the gap between a technically interesting checker and a production-ready tool that can survive real teams and real repositories.

## Notes

2026-05-17 activity moved the editor/type-checking surface forward through merged UTF-16, rename, diagnostic versioning, code action, and semantic-token hardening work. Nuxt auto-import fallback stubs also got a concrete fix, which matters because framework-generated types are one of the places a production checker is most likely to be judged.

The remaining high-risk surfaces are now clearer: type-rich `script setup` fixture gaps and compiler patch fixture parity are both open as first-class issues.

2026-06-18 through 2026-06-21 closed a much larger real-world type-checking tranche: package cwd resolution, Nuxt aliases and generated types, Options API props and setup returns, GraphQL generated modules, exported type preservation, nested union props, and Vue 2 compatibility cases all landed as merged fixes. The open production-readiness edge is now narrower: legacy Vue 2 virtual TS must stop leaking Vue 3 helpers, tracked by `ubugeeei-prod/vize#1893` and draft PR `#2059`.

## Links

- [Advance vize](./vize--advance.md)
- [Fix the Misskey compile errors](./vize--fix-misskey-compile-errors.md)
- [Type-rich script setup gaps](https://github.com/ubugeeei/vize/issues/425)
- [Compiler patch fixture gaps](https://github.com/ubugeeei/vize/issues/426)
- [Legacy Vue 2 helper issue](https://github.com/ubugeeei-prod/vize/issues/1893)
- [Legacy Vue 2 helper PR](https://github.com/ubugeeei-prod/vize/pull/2059)
- [Weekly focus for 2026-W20](../20-focus/weekly/2026-W20.md)
- [Weekly focus for 2026-W25](../20-focus/weekly/2026-W25.md)
