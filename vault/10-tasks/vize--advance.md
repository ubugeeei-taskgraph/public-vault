---
note_type: task
fileClass: task
id: task.public.personal-oss.vize.advance
title: Advance vize
content: >-
  Push the Vue toolchain forward across production readiness, compatibility, and
  ecosystem confidence.
status: active
visibility: public
portfolio: personal-oss
surface: repository
discipline: engineering
stream: compatibility
urgency: 4
importance: 5
progress: 70
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
review_week: 2026-W21
review_month: 2026-05
parent: null
children:
  - "[[10-tasks/vize--ship-oxlint-js-plugin]]"
  - "[[10-tasks/vize--ship-blog-release]]"
  - "[[10-tasks/vize--monitor-oxc-prs]]"
  - "[[10-tasks/vize--fix-misskey-compile-errors]]"
  - "[[10-tasks/vize--harden-type-checker]]"
  - "[[10-tasks/vize--improve-ssr-ssg-compatibility]]"
  - "[[10-tasks/vize--improve-vapor-compatibility]]"
  - "[[10-tasks/vize--revisit-ecosystem-ci]]"
  - "[[10-tasks/vize--improve-lsp]]"
  - "[[10-tasks/vize--test-vsix-package]]"
private_children: 0
redaction_reason: null
tags:
  - repo/ubugeeei-vize
  - stream/compatibility
updated: "2026-05-23"
---

# Advance vize

## Outcome

Raise vize from an ambitious toolchain effort to something that feels dependable in more real-world scenarios.

## Notes

2026-05-17 GitHub activity shows a major v1 alpha hardening pass: release governance, CI gates, package install smoke tests, native/package version alignment, Musea/Fresco terminal behavior, LSP/editor fixes, Vite/Nuxt compile-error handling, and VDOM/Vapor fixture repairs all moved through merged PRs.

The next connective work is to land the open package metadata thread and keep the remaining SFC/Vapor fixture gaps visible enough that they do not disappear under the broader "production readiness" label.

2026-05-18 through 2026-05-23 activity pushed the repo further into production-readiness cleanup: release/security policy work closed, fuzz reproducers were handled, Corsa runtime configuration landed, config toggles were fixed, and native/editor smoke paths became more concrete. The new focus is practical verification: LSP behavior, VSIX packaging, Neovim usage, and a Misskey bug-bash pass.

## Links

- [Ship the oxlint JavaScript plugin](./vize--ship-oxlint-js-plugin.md)
- [Ship the vize blog release](./vize--ship-blog-release.md)
- [Monitor oxc pull requests](./vize--monitor-oxc-prs.md)
- [Fix the Misskey compile errors](./vize--fix-misskey-compile-errors.md)
- [Make the type checker production ready](./vize--harden-type-checker.md)
- [Improve SSR and SSG compatibility](./vize--improve-ssr-ssg-compatibility.md)
- [Improve Vapor compatibility](./vize--improve-vapor-compatibility.md)
- [Revisit ecosystem CI](./vize--revisit-ecosystem-ci.md)
- [Improve Vize LSP behavior](./vize--improve-lsp.md)
- [Run a Misskey Vize bug-bash](./vize--run-misskey-bug-bash.md)
- [Test the Vize VSIX package](./vize--test-vsix-package.md)
- [Verify Vize in Neovim](./vize--verify-neovim.md)
- [Package metadata issue](https://github.com/ubugeeei/vize/issues/431)
- [Vapor fixture gap issue](https://github.com/ubugeeei/vize/issues/424)
- [SFC script setup gap issue](https://github.com/ubugeeei/vize/issues/425)
- [SFC patch fixture gap issue](https://github.com/ubugeeei/vize/issues/426)
- [Monthly focus for 2026-05](../20-focus/monthly/2026-05.md)
