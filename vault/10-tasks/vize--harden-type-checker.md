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
progress: 45
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
blockers:
  - "[[10-tasks/vize--fix-misskey-compile-errors]]"
focus:
  - weekly
  - monthly
review_week: 2026-W20
review_month: 2026-05
parent: "[[10-tasks/vize--advance]]"
children: []
private_children: 0
redaction_reason: null
tags:
  - repo/ubugeeei-vize
  - stream/stabilization
updated: "2026-05-17"
---

# Make the type checker production ready

## Outcome

Close the gap between a technically interesting checker and a production-ready tool that can survive real teams and real repositories.

## Notes

2026-05-17 activity moved the editor/type-checking surface forward through merged UTF-16, rename, diagnostic versioning, code action, and semantic-token hardening work. Nuxt auto-import fallback stubs also got a concrete fix, which matters because framework-generated types are one of the places a production checker is most likely to be judged.

The remaining high-risk surfaces are now clearer: type-rich `script setup` fixture gaps and compiler patch fixture parity are both open as first-class issues.

## Links

- [Advance vize](./vize--advance.md)
- [Fix the Misskey compile errors](./vize--fix-misskey-compile-errors.md)
- [Type-rich script setup gaps](https://github.com/ubugeeei/vize/issues/425)
- [Compiler patch fixture gaps](https://github.com/ubugeeei/vize/issues/426)
- [Weekly focus for 2026-W20](../20-focus/weekly/2026-W20.md)
