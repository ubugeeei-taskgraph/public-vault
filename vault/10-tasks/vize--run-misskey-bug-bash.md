---
note_type: task
fileClass: task
id: task.public.personal-oss.vize.run-misskey-bug-bash
title: Run a Misskey Vize bug-bash
content: >-
  Spend a focused session running Vize against Misskey and turning the failures
  into small, actionable fixes.
status: active
visibility: public
portfolio: personal-oss
surface: repository
repository_urls:
  - https://github.com/ubugeeei/vize
  - https://github.com/misskey-dev/misskey
discipline: engineering
stream: stabilization
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
blockers: []
focus:
  - weekly
review_week: 2026-W21
review_month: 2026-05
parent: "[[10-tasks/vize--fix-misskey-compile-errors]]"
children: []
private_children: 0
redaction_reason: null
public_bridge_id: null
tags:
  - repo/ubugeeei-vize
  - repo/misskey
  - stream/stabilization
updated: 2026-05-23
---

# Run a Misskey Vize bug-bash

## Outcome

Turn the Misskey compatibility thread from a broad concern into a concrete list of fixed or sharply scoped bugs.

## Notes

Start by choosing the Misskey revision and command path, then collect the first failures without overfitting. Good output is a short bug ledger plus one or two fixes that prove the loop works.

## Links

- [Fix the Misskey compile errors](./vize--fix-misskey-compile-errors.md)
- [Debug replacing the Misskey Storybook with vize/musea](./vize--debug-misskey-storybook-replacement-with-musea.md)
