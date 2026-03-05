---
name: Agent Code Review
description: Enforces a mandatory, exhaustive secondary review pass on all generated code before presenting it to the human. Activated during the "Rigid Review" step.
---
# Code Review Skill (Rigid Reviewer)

Before any code is presented for human review or merged into a branch, you MUST run through this entire checklist. Do not skip any item.

## 1. Functional Correctness
- [ ] Does the code do exactly what the specification requires?
- [ ] Are all edge cases handled (empty arrays, null values, network failures, race conditions)?
- [ ] Are error states caught and surfaced gracefully to the user (not swallowed silently)?

## 2. Architectural Integrity
- [ ] Does the change respect the project's existing module boundaries and dependency graph?
- [ ] Are there any circular dependencies introduced?
- [ ] Is there any logic duplicated that should be extracted into a shared utility?
- [ ] Are components within the 200-line file limit?

## 3. Type Safety & Data Contracts
- [ ] Are all types explicit (no `any`, no implicit `any` via missing return types)?
- [ ] Are external/boundary data inputs validated at runtime (Zod, etc.)?
- [ ] Do API contracts match between frontend and backend?

## 4. Centralization Compliance
- [ ] Are theme colors, spacing, and design tokens referenced from the central source (not hardcoded)?
- [ ] Are shared types imported from the centralized `types/` or `models/` directory?
- [ ] Are environment-specific values in `.env` files, not embedded in source code?

## 5. Security
- [ ] No secrets, API keys, or credentials committed to source code.
- [ ] All user input is sanitized and validated server-side.
- [ ] Authentication checks are present on all protected routes and endpoints.
- [ ] Authorization (RBAC) is enforced where applicable.

## 6. Accessibility
- [ ] Semantic HTML is used (`<button>`, `<nav>`, `<main>`, not `<div onClick>`).
- [ ] Interactive elements have visible focus indicators.
- [ ] Icon-only buttons have `aria-label` attributes.
- [ ] Modals trap focus and return it on close.

## 7. Performance
- [ ] No unnecessary re-renders (React.memo, useMemo, useCallback where appropriate).
- [ ] No blocking operations on the main thread.
- [ ] Images and assets are optimized.

## 8. Stylistic Conformity
- [ ] Variable and function names are descriptive and follow project conventions.
- [ ] Comments explain the *why*, not the *what*.
- [ ] Code formatting is consistent with the project linter configuration.

If ANY item fails, the code MUST be corrected before proceeding. Do not present partially reviewed code to the human.
