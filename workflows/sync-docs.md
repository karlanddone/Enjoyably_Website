---
description: Documentation sync - validates all docs against codebase
---
This workflow performs a comprehensive audit of both engineering and knowledge base documentation. Run weekly or before major releases.

## Prerequisites
- Recent `git pull` to ensure latest code
- Read `AGENTS.md` for coding/documentation standards

---

## Phase 1: Scan for Code Changes

1. Check recent commits for affected areas:
```bash
git log --oneline -20 --name-only
```

2. Identify which documentation areas might be affected:
   - New components → Update UI architecture docs
   - New hooks → Update frontend architecture docs
   - New Backend Functions → Update backend API docs
   - Data model changes → Update data model docs
   - RBAC changes → Update roles and permissions docs

---

## Phase 2: Engineering Docs

Audit each document one-by-one. For each document:
1. Read the document
2. Verify against current codebase
3. Update if outdated
4. Move to next document

### 2.1 Core Architecture
- [ ] Directory structure matches
- [ ] Contexts, hooks, components
- [ ] Type schemas and Data Models
- [ ] Coding standards are current

### 2.2 Authentication & Security
- [ ] Auth providers and security rules current

### 2.3 Backend
- [ ] Audit all backend functions against doc
- [ ] Verify backup/deployment procedures

### 2.4 Feature Implementation
- [ ] Verify core feature documentation
- [ ] Verify state management flow
- [ ] Verify any background jobs

### 2.5 UI/UX
- [ ] Check design tokens
- [ ] Verify responsive patterns
- [ ] Check routing and navigation system

---

## Phase 3: Knowledge Base (`docs/` or similar)

Audit each user-facing or product document. For each document:
1. Read the document
2. Verify against current features and codebase
3. Update for user clarity
4. Move to next document

### 3.1 Product Overview
- [ ] Verify feature list is current
- [ ] Test onboarding steps are accurate
- [ ] Update if stack changes

### 3.2 Features & Functionality
- [ ] Verify all main features documented
- [ ] Check workflows
- [ ] Verify notification types
- [ ] Verify email templates and triggers

### 3.3 Access & Billing
- [ ] Verify role permissions matrix
- [ ] Confirm pricing/tier limits match code

---

## Phase 4: Cross-Reference Validation

1. Verify all links between documents work
2. Check that the main README index is complete
3. Ensure no orphan documents exist

---

## Phase 5: Commit Documentation Updates

If any updates were made:
```bash
git add [path_to_docs]
git commit -m "docs: Documentation sync - [DATE]

- [Summary of updates made]
- [Documents changed]"
git push origin HEAD
```

---

## Quick Reference

| Phase | Focus | Time Estimate |
|-------|-------|---------------|
| 1 | Scan commits | 5 min |
| 2 | Engineering docs | 30-45 min |
| 3 | Knowledge base | 20-30 min |
| 4 | Cross-reference | 5 min |
| 5 | Commit | 2 min |

**Total**: ~1 hour for full audit
