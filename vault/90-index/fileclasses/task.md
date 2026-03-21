---
fields:
  - name: id
    type: Input
    id: task-id
    path: id
  - name: title
    type: Input
    id: task-title
    path: title
  - name: content
    type: Input
    id: task-content
    path: content
  - name: status
    type: Select
    options:
      - "0": active
      - "1": blocked
      - "2": paused
      - "3": done
    id: task-status
    path: status
  - name: visibility
    type: Select
    options:
      - "0": public
      - "1": private
    id: task-visibility
    path: visibility
  - name: portfolio
    type: Select
    options:
      - "0": official-oss
      - "1": personal-oss
      - "2": personal-product
      - "3": personal-operations
      - "4": community
      - "5": event
      - "6": research
    id: task-portfolio
    path: portfolio
  - name: surface
    type: Select
    options:
      - "0": repository
      - "1": product
      - "2": event
      - "3": team-stream
      - "4": infrastructure
    id: task-surface
    path: surface
  - name: discipline
    type: Select
    options:
      - "0": engineering
      - "1": docs
      - "2": infra
      - "3": research
      - "4": design
      - "5": operations
    id: task-discipline
    path: discipline
  - name: stream
    type: Select
    options:
      - "0": delivery
      - "1": migration
      - "2": stabilization
      - "3": compatibility
      - "4": exploration
      - "5": documentation
      - "6": review
      - "7": distribution
    id: task-stream
    path: stream
  - name: urgency
    type: Number
    id: task-urgency
    path: urgency
  - name: importance
    type: Number
    id: task-importance
    path: importance
  - name: progress
    type: Number
    id: task-progress
    path: progress
  - name: efforts
    type: Select
    options:
      - "0": "1"
      - "1": "2"
      - "2": "3"
      - "3": "5"
      - "4": "8"
      - "5": "13"
    id: task-efforts
    path: efforts
  - name: agenty
    type: Number
    id: task-agenty
    path: agenty
  - name: owners
    type: MultiSelect
    options:
      - "0": ubugeeei
      - "1": vuejs-core-team
      - "2": vuefes
      - "3": self
    id: task-owners
    path: owners
  - name: assignees
    type: MultiSelect
    options:
      - "0": ubugeeei
    id: task-assignees
    path: assignees
  - name: requesters
    type: MultiSelect
    options:
      - "0": self
      - "1": vuejs-core-team
      - "2": vuefes
    id: task-requesters
    path: requesters
  - name: due_date
    type: Date
    id: task-due-date
    path: due_date
  - name: uncertainty
    type: Number
    id: task-uncertainty
    path: uncertainty
  - name: focus
    type: MultiSelect
    options:
      - "0": weekly
      - "1": monthly
    id: task-focus
    path: focus
  - name: review_week
    type: Input
    id: task-review-week
    path: review_week
  - name: review_month
    type: Input
    id: task-review-month
    path: review_month
  - name: parent
    type: File
    options:
      dvQueryString: "dv.pages('\"10-tasks\"')"
    id: task-parent
    path: parent
  - name: children
    type: MultiFile
    options:
      dvQueryString: "dv.pages('\"10-tasks\"')"
    id: task-children
    path: children
  - name: blockers
    type: MultiFile
    options:
      dvQueryString: "dv.pages('\"10-tasks\"')"
    id: task-blockers
    path: blockers
  - name: private_children
    type: Number
    id: task-private-children
    path: private_children
  - name: redaction_reason
    type: Input
    id: task-redaction-reason
    path: redaction_reason
  - name: public_bridge_id
    type: Input
    id: task-public-bridge-id
    path: public_bridge_id
  - name: updated
    type: Date
    id: task-updated
    path: updated
---
Shared task fileclass for `ubugeeei/taskgraph`.

Use the Metadata Menu fileclass view to adjust field types or options over time. The main vault convention is:

- task files live in `10-tasks`
- `focus` is a single multi-select property
- `parent`, `children`, and `blockers` define the in-vault graph
- `public_bridge_id` is only for cross-vault references
