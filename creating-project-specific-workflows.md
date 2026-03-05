# Creating Project-Specific Workflows

This central warehouse contains **universal** workflows that apply to any project. However, individual projects will often need **project-specific** workflows tailored to their unique domain, tooling, or business logic.

This guide describes how to create and organize those workflows within a specific project.

---

## When to Create a Project-Specific Workflow

Create a dedicated workflow when a task is:
- **Repetitive** within a single project (e.g., generating invite links, updating a product FAQ, running a specific migration script).
- **Domain-specific** and would not apply to other projects (e.g., billing tier management, product-specific deployment steps).
- **Multi-step** and benefits from a structured, repeatable checklist.

---

## Where to Store Them

Project-specific workflows live inside the **individual project's** repository, NOT in this central warehouse.

```
my-project/
├── .agent/
│   └── workflows/       ← Project-specific workflows go here
│       ├── create-invite.md
│       ├── update-faq.md
│       └── run-migration.md
├── AGENTS.md            ← Copied from central warehouse
└── ...
```

---

## Workflow File Format

Every workflow file should follow this standard structure:

```markdown
---
description: Short one-line description of what this workflow does.
---

# Workflow Title

## Prerequisites
- List any required context, tools, or approvals.

## Steps

### Phase 1: [Phase Name]
1. Step description.
2. Step description.

### Phase 2: [Phase Name]
3. Step description.
   - Sub-step detail.

## Quick Reference
| Phase | Key Action | Checkpoint |
|-------|------------|------------|
| 1     | ...        | ...        |
```

---

## Turbo Annotations

Use turbo annotations to allow the agent to auto-run safe steps:
- `// turbo` above a single step → auto-run that step only.
- `// turbo-all` at the top of the workflow → auto-run ALL steps.

Only use turbo on steps that are non-destructive (e.g., running tests, installing dependencies).

---

## Example Project-Specific Workflows

| Workflow | Description |
|----------|-------------|
| `create-invite.md` | Generate a secure invite link for user registration via a terminal script. |
| `update-faq.md` | Review and update FAQ content following AEO/SEO best practices. |
| `run-migration.md` | Execute a database schema migration with rollback steps. |
| `seed-data.md` | Populate the development database with test fixtures. |
| `release-notes.md` | Generate release notes from recent Git commits. |
