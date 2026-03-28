---
note_type: task
fileClass: task
id: task.public.personal-oss.pkg-pkl.write-pkl-to-nix-compiler
title: Write a pkl-to-Nix compiler
content: >-
  Implement a compiler from pkl to Nix so pkg.pkl can produce a concrete Nix
  output instead of stopping at schema and package modeling.
status: active
visibility: public
portfolio: personal-oss
surface: repository
discipline: engineering
stream: delivery
urgency: 3
importance: 4
progress: 0
efforts: 8
agenty: 4
owners:
  - ubugeeei
assignees:
  - ubugeeei
requesters:
  - self
due_date: null
uncertainty: 4
blockers:
  - '[[10-tasks/pkg-pkl--complete-tool-schemas]]'
focus: []
review_week: 2026-W12
review_month: 2026-03
parent: '[[10-tasks/pkg-pkl--explore-nix-compiler]]'
children: []
private_children: 0
redaction_reason: null
tags:
  - repo/ubugeeei-pkg-pkl
  - stream/delivery
updated: '2026-03-28'
---
# Write a pkl-to-Nix compiler

## Outcome

Turn the Nix direction from an interesting possibility into a working compiler path that can generate real output and expose the remaining design gaps.

## Notes

This is the implementation step that follows the exploratory Nix-compiler work. The main value is not only code generation itself, but learning where pkl semantics and Nix semantics align cleanly or resist translation.

## Links

- [Advance pkg.pkl](./pkg-pkl--advance.md)
- [Explore a Nix compiler path](./pkg-pkl--explore-nix-compiler.md)
- [Complete the tool-specific pkl schemas](./pkg-pkl--complete-tool-schemas.md)
