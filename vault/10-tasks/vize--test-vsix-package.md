---
note_type: task
fileClass: task
id: task.public.personal-oss.vize.test-vsix-package
title: Test the Vize VSIX package
content: >-
  Verify the Vize VSIX packaging and install flow before treating the editor
  experience as ready for external trials.
status: done
visibility: public
portfolio: personal-oss
surface: repository
repository_url: https://github.com/ubugeeei/vize
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
uncertainty: 3
blockers: []
focus: []
review_week: 2026-W21
review_month: 2026-05
parent: "[[10-tasks/vize--advance]]"
children: []
private_children: 0
redaction_reason: null
public_bridge_id: null
tags:
  - repo/ubugeeei-vize
  - editor/vscode
  - stream/stabilization
updated: "2026-10-05"
---

# Test the Vize VSIX package

## Outcome

Confirm that the VSIX can be built, installed, activated, and used against a representative project without hidden packaging failures.

## Notes

This should cover local installation, extension activation, expected commands/settings, LSP startup, and any Marketplace-facing metadata assumptions that affect a later release.

2026-10-05 review: the `ubugeeei.vize` extension is published on the VS Code Marketplace and updated with each release.

## Links

- [Advance vize](./vize--advance.md)
- [Improve Vize LSP behavior](./vize--improve-lsp.md)
