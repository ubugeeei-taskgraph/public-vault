---
note_type: task
fileClass: task
id: task.public.personal-oss.vize.improve-ssr-ssg-compatibility
title: Improve SSR and SSG compatibility
content: >-
  Improve SSR and SSG behavior so the toolchain works more predictably across
  deployment styles.
status: active
visibility: public
portfolio: personal-oss
surface: repository
discipline: engineering
stream: compatibility
urgency: 4
importance: 4
progress: 38
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
  - monthly
review_week: 2026-W20
review_month: 2026-05
parent: "[[10-tasks/vize--advance]]"
children: []
private_children: 0
redaction_reason: null
tags:
  - repo/ubugeeei-vize
  - stream/compatibility
updated: "2026-05-17"
---

# Improve SSR and SSG compatibility

## Outcome

Reduce friction for projects that want to use vize across multiple rendering strategies.

## Notes

2026-05-17 landed concrete Nuxt/Vite compatibility repairs: conditional Vue runtime resolution, Nuxt dev route/module preservation, valid fallback auto-import stubs, and hard failures for SFC compile and virtual transform errors. Musea's Rust serve entrypoint now routes through Vite, which reduces ambiguity between development, SSR, and generated output paths.

The next pass should convert this into a smaller compatibility matrix so future regressions are easier to spot than they were in this burst.

## Links

- [Advance vize](./vize--advance.md)
- [Revisit ecosystem CI](./vize--revisit-ecosystem-ci.md)
- [Nuxt fallback auto-import stubs](https://github.com/ubugeeei/vize/issues/419)
- [Vite plugin compile-error hardening](https://github.com/ubugeeei/vize/issues/384)
