---
note_type: task
fileClass: task
id: task.public.official-oss.vite-plus.support-bun-and-deno
title: Support Bun and Deno in Vite+
content: >-
  Make Vite+ work with Bun and Deno so the toolchain is not tied to a single
  JavaScript runtime.
status: active
visibility: public
portfolio: official-oss
surface: repository
repository_url: https://github.com/voidzero-dev/vite-plus
discipline: engineering
stream: compatibility
urgency: 3
importance: 4
progress: 0
efforts: 8
agenty: 3
owners:
  - ubugeeei
assignees:
  - ubugeeei
requesters:
  - voidzero
due_date: null
uncertainty: 4
blockers: []
focus: []
review_week: 2026-W41
review_month: 2026-10
parent: null
children: []
private_children: 0
redaction_reason: null
public_bridge_id: null
tags:
  - repo/vite-plus
  - stream/compatibility
updated: "2026-10-05"
---

# Support Bun and Deno in Vite+

## Outcome

Run the core `vp` workflows on Bun and Deno with CI coverage for each runtime.

## Notes

Scope runtime detection, package-manager integration, and task execution separately; the uf work on runtime-agnostic defaults is a useful reference.

## Links

- [Implement release and publish commands in Vite+](./vite-plus--implement-release-publish-commands.md)
- [Advance uf](./uf--advance.md)
