---
note_type: task
fileClass: task
id: task.public.personal-operations.workstation.upgrade-macos
title: Upgrade macOS on the personal workstation
content: >-
  Prepare for and execute a macOS upgrade without breaking the development
  environment.
status: active
visibility: public
portfolio: personal-operations
surface: infrastructure
discipline: operations
stream: stabilization
urgency: 3
importance: 4
progress: 0
efforts: 3
agenty: 2
owners:
  - ubugeeei
assignees:
  - ubugeeei
requesters:
  - self
due_date: null
uncertainty: 3
blockers:
  - '[[10-tasks/workstation--migrate-to-nix]]'
focus:
  - monthly
review_week: 2026-W12
review_month: 2026-03
parent: '[[10-tasks/workstation--advance]]'
children: []
private_children: 0
redaction_reason: null
public_bridge_id: null
tags:
  - area/workstation
  - platform/macos
updated: '2026-03-21'
---
# Upgrade macOS on the personal workstation

## Outcome

Complete a macOS update with enough preparation that tools, shell setup, and development workflows stay intact.

## Notes

This task is intentionally downstream of the Nix migration effort because reproducibility reduces upgrade risk and recovery time.

## Links

- [Advance the personal workstation environment](./workstation--advance.md)
- [Migrate the personal workstation environment to Nix](./workstation--migrate-to-nix.md)
