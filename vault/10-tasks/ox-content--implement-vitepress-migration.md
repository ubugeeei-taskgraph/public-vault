---
note_type: task
fileClass: task
id: task.public.personal-oss.ox-content.implement-vitepress-migration
title: Implement the ox-content VitePress migration
content: >-
  Migrate the ox-content VitePress surface so documentation and content
  authoring can run on a more coherent public foundation.
status: active
visibility: public
portfolio: personal-oss
surface: repository
discipline: engineering
stream: migration
urgency: 3
importance: 4
progress: 18
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
review_week: 2026-W20
review_month: 2026-05
parent: "[[10-tasks/ox-content--advance]]"
children: []
private_children: 0
redaction_reason: null
tags:
  - repo/ubugeeei-ox-content
  - stream/migration
updated: "2026-05-17"
---

# Implement the ox-content VitePress migration

## Outcome

Move the VitePress-facing surface onto ox-content in a way that proves the system can carry a real documentation experience.

## Notes

2026-05-17 did not directly migrate the VitePress surface, but it moved important prerequisites: docs and SSG helpers, i18n project checks, and bare SSG HTML now run through the Rust-backed path. That gives the migration a stronger foundation than it had when this task was created.

Next action is to pick one small VitePress-like content slice and force it through the new Rust-backed SSG path end to end.

## Links

- [Advance ox-content](./ox-content--advance.md)
- [Advance the VP DPCS proposal for ox-content](./ox-content--advance-vp-dpcs-proposal.md)
- [Rust docs and SSG helpers PR](https://github.com/ubugeeei/ox-content/pull/105)
- [Rust i18n project checks PR](https://github.com/ubugeeei/ox-content/pull/109)
- [Rust bare SSG HTML PR](https://github.com/ubugeeei/ox-content/pull/110)
