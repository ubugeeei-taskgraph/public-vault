---
note_type: task
fileClass: task
id: task.public.personal-oss.vize.revisit-ecosystem-ci
title: Revisit ecosystem CI
content: >-
  Re-evaluate ecosystem CI coverage for Vapor, compilers, parsers, and language
  tooling around vize.
status: active
visibility: public
portfolio: personal-oss
surface: repository
discipline: operations
stream: compatibility
urgency: 3
importance: 4
progress: 60
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
review_week: 2026-W20
review_month: 2026-05
parent: "[[10-tasks/vize--advance]]"
children:
  - "[[10-tasks/vize--run-ai-assisted-security-checks]]"
private_children: 0
redaction_reason: null
tags:
  - repo/ubugeeei-vize
  - stream/compatibility
updated: "2026-05-17"
---

# Revisit ecosystem CI

## Outcome

Update CI coverage so important compatibility signals arrive earlier and with less manual tracking.

## Notes

2026-05-17 closed a serious readiness set: warnings now fail repo checks, prerelease install smoke tests cover public packages, the Node engine matrix is tested, benchmark regression budgets are enforced, compiler fixture coverage has a regression gate, real-world snapshot baselines were audited, and the all-targets clippy snapshot policy was made explicit.

The remaining ecosystem-CI question is preview publishing: `pkg.pr.new` exists as an open draft PR, so it should either be landed as a release feedback loop or explicitly deferred.

## Links

- [Advance vize](./vize--advance.md)
- [Run AI-assisted security checks on vize](./vize--run-ai-assisted-security-checks.md)
- [Improve SSR and SSG compatibility](./vize--improve-ssr-ssg-compatibility.md)
- [Improve Vapor compatibility](./vize--improve-vapor-compatibility.md)
- [pkg.pr.new preview publishing PR](https://github.com/ubugeeei/vize/pull/390)
- [Compiler fixture regression budget](https://github.com/ubugeeei/vize/issues/375)
- [All-targets clippy snapshot policy](https://github.com/ubugeeei/vize/issues/433)
