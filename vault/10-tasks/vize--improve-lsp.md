---
note_type: task
fileClass: task
id: task.public.personal-oss.vize.improve-lsp
title: Improve Vize LSP behavior
content: >-
  Push Vize LSP behavior forward across editor smoke tests, diagnostics,
  Corsa-backed paths, and real usage in VS Code and Neovim.
status: active
visibility: public
portfolio: personal-oss
surface: repository
repository_url: https://github.com/ubugeeei/vize
discipline: engineering
stream: stabilization
urgency: 5
importance: 5
progress: 30
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
parent: "[[10-tasks/vize--advance]]"
children:
  - "[[10-tasks/vize--verify-neovim]]"
private_children: 0
redaction_reason: null
public_bridge_id: null
tags:
  - repo/ubugeeei-vize
  - stream/stabilization
updated: 2026-05-23
---

# Improve Vize LSP behavior

## Outcome

Make the LSP path trustworthy enough that editor users can try Vize without immediately hitting setup or diagnostic confusion.

## Notes

Recent activity added Corsa-backed editor integration smoke coverage and closed several config/runtime naming issues. The next work is to turn those checks into practical editor confidence: VS Code/VSIX testing, Neovim testing, and real diagnostic flows.

## Links

- [Advance vize](./vize--advance.md)
- [Verify Vize in Neovim](./vize--verify-neovim.md)
- [Corsa-backed editor integration smoke](https://github.com/ubugeeei/vize/issues/548)
- [Runtime naming cleanup](https://github.com/ubugeeei/vize/issues/550)
