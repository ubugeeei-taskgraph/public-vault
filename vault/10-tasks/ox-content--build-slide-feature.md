---
note_type: task
fileClass: task
id: task.public.personal-oss.ox-content.build-slide-feature
title: Build the ox-content slide feature
content: >-
  Add a slide authoring and rendering surface to ox-content so presentation
  workflows can share the same content pipeline.
status: active
visibility: public
portfolio: personal-oss
surface: repository
repository_url: https://github.com/ubugeeei-prod/ox-content
discipline: engineering
stream: delivery
urgency: 4
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
uncertainty: 4
blockers: []
focus:
  - monthly
review_week: 2026-W41
review_month: 2026-10
parent: "[[10-tasks/ox-content--advance]]"
children: []
private_children: 1
redaction_reason: private event delivery details live in the private vault
public_bridge_id: null
tags:
  - repo/ubugeeei-ox-content
  - stream/delivery
updated: "2026-10-05"
---

# Build the ox-content slide feature

## Outcome

Make slides a first-class ox-content output so presentation materials can be authored as content instead of exported through a separate throwaway deck flow.

## Notes

This should start with the smallest useful feature: slide document shape, route/render output, speaker-friendly styling constraints, and a way to dogfood it against upcoming presentation work.

2026-06-19 through 2026-06-21 activity produced the first reusable substrate for this: framework markdown render utilities landed, and `#433` now tracks component render targets. The next concrete slice is to decide which part becomes slide-specific and which stays as the shared framework rendering foundation.

July 2026 activity split slide work into a dedicated framework, `slidx`, with about 180 PRs through August covering N-API and WASM bindings, presenter view, rehearsal timing, PDF export, projector lint, and venue preflight. Decide which slide pieces stay in ox-content and which live in slidx, and dogfood the result against the Vue Fes deck.

## Links

- [Advance ox-content](./ox-content--advance.md)
- [Implement the ox-content VitePress migration](./ox-content--implement-vitepress-migration.md)
- [Framework markdown render issue](https://github.com/ubugeeei-prod/ox-content/issues/433)
- [Framework markdown render utilities PR](https://github.com/ubugeeei-prod/ox-content/pull/434)
- [slidx repository](https://github.com/ubugeeei-prod/slidx)
- [slidx overview issue](https://github.com/ubugeeei-prod/slidx/issues/1)
