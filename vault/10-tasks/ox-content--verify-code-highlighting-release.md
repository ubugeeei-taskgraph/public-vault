---
note_type: task
fileClass: task
id: task.public.personal-oss.ox-content.verify-code-highlighting-release
title: Verify the ox-content code highlighting release
content: >-
  Confirm that the ox-content code highlighting path is ready for release across
  rendering correctness, performance, and integration behavior.
status: active
visibility: public
portfolio: personal-oss
surface: repository
discipline: engineering
stream: stabilization
urgency: 3
importance: 4
progress: 0
efforts: 3
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
review_week: 2026-W13
review_month: 2026-03
parent: '[[10-tasks/ox-content--advance]]'
children: []
private_children: 0
redaction_reason: null
tags:
  - repo/ubugeeei-ox-content
  - stream/stabilization
updated: '2026-03-28'
---
# Verify the ox-content code highlighting release

## Outcome

Make the code highlighting surface feel dependable enough to present as a real release capability instead of an unfinished supporting feature.

## Notes

Highlighting quality tends to be judged immediately, so this check should cover visual correctness, language coverage, and failure behavior rather than only happy-path snapshots.

## Links

- [Advance ox-content](./ox-content--advance.md)
- [Build the mdast-based JavaScript plugin](./ox-content--build-mdast-js-plugin.md)
