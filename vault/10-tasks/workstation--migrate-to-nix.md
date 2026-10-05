---
note_type: task
fileClass: task
id: task.public.personal-operations.workstation.migrate-to-nix
title: Migrate the personal workstation environment to Nix
content: >-
  Move the personal workstation toward a Nix-managed setup so core development
  tooling becomes more reproducible.
status: done
visibility: public
portfolio: personal-operations
surface: infrastructure
discipline: infra
stream: migration
urgency: 4
importance: 5
progress: 100
efforts: 13
agenty: 3
owners:
  - ubugeeei
assignees:
  - ubugeeei
requesters:
  - self
due_date: null
uncertainty: 5
blockers: []
focus: []
review_week: 2026-W12
review_month: 2026-03
parent: '[[10-tasks/workstation--advance]]'
children:
  - '[[10-tasks/workstation--finish-ryu-trifolium-nix-book]]'
private_children: 0
redaction_reason: null
public_bridge_id: null
tags:
  - area/workstation
  - tool/nix
updated: "2026-10-05"
---
# Migrate the personal workstation environment to Nix

## Outcome

Establish a more declarative machine setup so day-to-day development depends less on manual drift and hidden local state.

## Notes

This is the heavier foundational task. It should identify what belongs under Nix management first and avoid forcing the entire machine into one big-bang migration.

2026-10-05 review: the workstation now runs nix-darwin (`darwin-rebuild` is on the system path), so the migration itself is complete. Further refinement belongs in new, narrower tasks.

## Links

- [Advance the personal workstation environment](./workstation--advance.md)
- [Finish ryu_trifolium's Nix book](./workstation--finish-ryu-trifolium-nix-book.md)
- [Upgrade macOS on the personal workstation](./workstation--upgrade-macos.md)
