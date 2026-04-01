---
note_type: task
fileClass: task
id: task.public.personal-operations.workstation.advance
title: Advance the personal workstation environment
content: >-
  Make the personal workstation more reproducible and safer to evolve by
  improving system management and upgrade readiness.
status: active
visibility: public
portfolio: personal-operations
surface: infrastructure
repository_urls:
  - https://github.com/ubugeeei/ush
  - https://github.com/ubugeeei/tnix
discipline: infra
stream: migration
urgency: 4
importance: 4
progress: 6
efforts: 8
agenty: 3
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
review_week: 2026-W12
review_month: 2026-04
parent: null
children:
  - '[[10-tasks/workstation--migrate-to-nix]]'
  - '[[10-tasks/workstation--upgrade-macos]]'
private_children: 0
redaction_reason: null
public_bridge_id: null
tags:
  - area/workstation
  - visibility/public
  - stream/migration
updated: '2026-04-02'
---
# Advance the personal workstation environment

## Outcome

Make the machine setup easier to reproduce, safer to upgrade, and less dependent on fragile manual state.

## Notes

This initiative captures personal operations work that supports every other stream indirectly. The main idea is to establish a stronger foundation before larger system changes compound risk.

## Links

- [ush repository](https://github.com/ubugeeei/ush)
- [tnix repository](https://github.com/ubugeeei/tnix)
- [Migrate the personal workstation environment to Nix](./workstation--migrate-to-nix.md)
- [Upgrade macOS on the personal workstation](./workstation--upgrade-macos.md)
- [Public initiative map](../90-index/initiative-map.md)
