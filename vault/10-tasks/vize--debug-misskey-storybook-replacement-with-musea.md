---
note_type: task
fileClass: task
id: task.public.personal-oss.vize.debug-misskey-storybook-replacement-with-musea
title: Debug replacing the Misskey Storybook with vize/musea
content: >-
  Try replacing the Misskey Storybook with vize/musea and debug the resulting
  behavior so the integration path is grounded in a real fixture.
status: active
visibility: public
portfolio: personal-oss
surface: repository
discipline: engineering
stream: stabilization
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
focus: []
review_week: 2026-W12
review_month: 2026-03
parent: '[[10-tasks/vize--fix-misskey-compile-errors]]'
children: []
private_children: 0
redaction_reason: null
public_bridge_id: null
tags:
  - repo/ubugeeei-vize
  - stream/stabilization
updated: '2026-03-21'
---
# Debug replacing the Misskey Storybook with vize/musea

## Outcome

Use a concrete Misskey-facing replacement experiment to expose where the vize or musea flow still breaks under real project pressure.

## Notes

This is narrower than the overall Misskey compile-compatibility task, but it is a good debugging probe because Storybook replacement work tends to touch multiple fragile assumptions at once.

## Links

- [Fix the Misskey compile errors](./vize--fix-misskey-compile-errors.md)
- [Make the type checker production ready](./vize--harden-type-checker.md)
