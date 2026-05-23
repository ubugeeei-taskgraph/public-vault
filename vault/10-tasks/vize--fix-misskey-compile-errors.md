---
note_type: task
fileClass: task
id: task.public.personal-oss.vize.fix-misskey-compile-errors
title: Fix the Misskey compile errors
content: >-
  Use the Misskey case to eliminate real-world compilation failures and harden
  vize behavior.
status: active
visibility: public
portfolio: personal-oss
surface: repository
discipline: engineering
stream: stabilization
urgency: 4
importance: 4
progress: 35
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
  - "[[10-tasks/vize--debug-misskey-storybook-replacement-with-musea]]"
  - "[[10-tasks/vize--run-misskey-bug-bash]]"
private_children: 0
redaction_reason: null
tags:
  - repo/ubugeeei-vize
  - stream/stabilization
updated: "2026-05-23"
---

# Fix the Misskey compile errors

## Outcome

Resolve a concrete public compatibility case that can reveal deeper assumptions in the compiler path.

## Notes

2026-05-17 improved the real-world reproduction infrastructure around this task: E2E snapshot baselines were audited, Vite plugin compile errors now fail loudly, and Nuxt/Vite compatibility fixes reduced several framework-generated false paths. Misskey still needs a dedicated replacement pass; today's work mostly makes the next concrete compile-error run easier to trust.

The next useful shape is a focused bug-bash session: choose a current Misskey branch, run Vize against the real app surfaces, collect failures, and close small fixes without trying to redesign the whole compatibility story in one pass.

## Links

- [Advance vize](./vize--advance.md)
- [Make the type checker production ready](./vize--harden-type-checker.md)
- [Debug replacing the Misskey Storybook with vize/musea](./vize--debug-misskey-storybook-replacement-with-musea.md)
- [Run a Misskey Vize bug-bash](./vize--run-misskey-bug-bash.md)
- [Real-world snapshot baseline audit](https://github.com/ubugeeei/vize/issues/399)
- [Vite plugin compile-error hardening](https://github.com/ubugeeei/vize/issues/384)
