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
progress: 80
efforts: 5
agenty: 3
owners:
  - ubugeeei
assignees:
  - ubugeeei
requesters:
  - self
due_date: null
uncertainty: 2
blockers: []
focus:
  - weekly
review_week: 2026-W25
review_month: 2026-06
parent: "[[10-tasks/vize--fix-misskey-compile-errors]]"
children: []
private_children: 0
redaction_reason: null
public_bridge_id: null
tags:
  - repo/ubugeeei-vize
  - repo/misskey
  - stream/stabilization
updated: 2026-06-21
---

# Run a Misskey Vize bug-bash

## Outcome

Turn the Misskey compatibility thread from a broad concern into a concrete list of fixed or sharply scoped bugs.

## Notes

Start by choosing the Misskey revision and command path, then collect the first failures without overfitting. Good output is a short bug ledger plus one or two fixes that prove the loop works.

2026-06-18 through 2026-06-21 produced the intended bug-bash shape: the work broke down into many narrow PRs instead of one broad rewrite, with fixes for Nuxt 2 module/runtime behavior, SFC virtual TS, setup/Options API edge cases, Musea static output, formatter convergence, and HMR invalidation. Keep this open only until the current legacy Vue 2 helper PR is merged and the remaining issue list is re-triaged.

## Links

- [Fix the Misskey compile errors](./vize--fix-misskey-compile-errors.md)
- [Debug replacing the Misskey Storybook with vize/musea](./vize--debug-misskey-storybook-replacement-with-musea.md)
- [Legacy Vue 2 helper PR](https://github.com/ubugeeei-prod/vize/pull/2059)
- [Lint migration and scoped CSS PR](https://github.com/ubugeeei-prod/vize/pull/2057)
