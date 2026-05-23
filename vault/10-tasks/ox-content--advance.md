---
note_type: task
fileClass: task
id: task.public.personal-oss.ox-content.advance
title: Advance ox-content
content: >-
  Improve ox-content where performance, plugin extensibility, and
  cross-framework integrations matter most.
status: active
visibility: public
portfolio: personal-oss
surface: repository
discipline: engineering
stream: stabilization
urgency: 4
importance: 4
progress: 62
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
parent: null
children:
  - "[[10-tasks/ox-content--improve-performance]]"
  - "[[10-tasks/ox-content--build-mdast-js-plugin]]"
  - "[[10-tasks/ox-content--verify-code-highlighting-release]]"
  - "[[10-tasks/ox-content--implement-vitepress-migration]]"
  - "[[10-tasks/ox-content--advance-vp-dpcs-proposal]]"
  - "[[10-tasks/ox-content--improve-react-svelte-integration]]"
  - "[[10-tasks/ox-content--build-slide-feature]]"
  - "[[10-tasks/chibinuxt--migrate-to-ox-content]]"
private_children: 0
redaction_reason: null
tags:
  - repo/ubugeeei-ox-content
  - stream/stabilization
updated: "2026-05-23"
---

# Advance ox-content

## Outcome

Move ox-content toward a more compelling public release by balancing speed, plugin power, and framework reach.

## Notes

2026-05-17 activity leaned strongly toward core implementation consolidation: docs and SSG helpers, search-index build/write paths, search module options, i18n project checks, and bare SSG HTML all moved into Rust/N-API-backed paths through merged PRs.

This makes the near-term ox-content story less about adding surface area and more about proving that the faster Rust core can carry real documentation workflows cleanly.

2026-05-22 activity added another readiness layer: parser fixes, MDC checker diagnostics, Rust metadata centralization, protected public exports, package dry-runs, dependency policy gates, benchmark thresholds, and cross-platform NAPI smoke coverage. That makes the slide feature a more plausible next product surface rather than a side quest.

## Links

- [Improve performance in ox-content](./ox-content--improve-performance.md)
- [Build the mdast-based JavaScript plugin](./ox-content--build-mdast-js-plugin.md)
- [Verify the ox-content code highlighting release](./ox-content--verify-code-highlighting-release.md)
- [Implement the ox-content VitePress migration](./ox-content--implement-vitepress-migration.md)
- [Advance the VP DPCS proposal for ox-content](./ox-content--advance-vp-dpcs-proposal.md)
- [Improve React and Svelte integration](./ox-content--improve-react-svelte-integration.md)
- [Build the ox-content slide feature](./ox-content--build-slide-feature.md)
- [Migrate chibinuxt to ox-content](./chibinuxt--migrate-to-ox-content.md)
- [Rust docs and SSG helpers PR](https://github.com/ubugeeei/ox-content/pull/105)
- [Rust search index build PR](https://github.com/ubugeeei/ox-content/pull/106)
- [Rust search index write PR](https://github.com/ubugeeei/ox-content/pull/107)
- [Rust i18n project checks PR](https://github.com/ubugeeei/ox-content/pull/109)
- [Rust bare SSG HTML PR](https://github.com/ubugeeei/ox-content/pull/110)
- [MDC checker diagnostics PR](https://github.com/ubugeeei/ox-content/pull/140)
- [Cross-platform NAPI smoke coverage PR](https://github.com/ubugeeei/ox-content/pull/144)
- [Monthly focus for 2026-05](../20-focus/monthly/2026-05.md)
