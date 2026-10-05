---
note_type: task
fileClass: task
id: task.public.personal-oss.vize.verify-oxlint-plugin-alpha-release
title: Verify the oxlint-plugin-vize alpha release
content: >-
  Confirm that the oxlint-plugin-vize alpha release behaves correctly across
  representative projects, packaging paths, and release checks.
status: done
visibility: public
portfolio: personal-oss
surface: repository
discipline: engineering
stream: stabilization
urgency: 4
importance: 4
progress: 100
efforts: 3
agenty: 4
owners:
  - ubugeeei
assignees:
  - ubugeeei
requesters:
  - self
due_date: null
uncertainty: 2
blockers: []
focus: []
review_week: 2026-W12
review_month: 2026-03
parent: '[[10-tasks/vize--ship-oxlint-js-plugin]]'
children: []
private_children: 0
redaction_reason: null
tags:
  - repo/ubugeeei-vize
  - stream/stabilization
updated: "2026-10-05"
---
# Verify the oxlint-plugin-vize alpha release

## Outcome

Gain confidence that the alpha is solid enough to hand to early adopters without obvious packaging or runtime surprises.

## Notes

This is the practical release gate for the broader plugin-shipping task because it turns intent into a concrete check across real project conditions.

2026-10-05 review: the alpha is long behind; `oxlint-plugin-vize` ships with every Vize release (0.432.0 on 2026-10-04).

## Links

- [Ship the oxlint JavaScript plugin to production readiness](./vize--ship-oxlint-js-plugin.md)
- [Advance vize](./vize--advance.md)
