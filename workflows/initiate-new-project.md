---
description: Bootstrap a new repository using the central library's AGENTS.md and Agent Skills.
---

# Initiate New Project Workflow

This workflow is to be used when starting a completely new project. It connects the new codebase to the structured 2026 Agent-Driven Development standards.

## Steps

### 1. Scaffolding
1. Choose the appropriate pre-approved framework/template for the project based on User requirements. This workflow is **universal** and applies to any project type (Web, Mobile, Native App, Backend API, Python Data Pipeline, etc.).
   - Example (React/TS Web App): `pnpm create vite@latest new-project-name -- --template react-ts`
   - Example (Mobile App - Expo): `npx create-expo-app@latest new-project-name`
   - Example (Backend - Node/Express): `mkdir new-project-name && cd new-project-name && pnpm init`
   - Make sure to scaffold according to the specific framework's latest 2026 standards.

### 2. Standardize Agent Context
// turbo
2. Copy the central `AGENTS.md` ruleset into the root of the newly created repository.
// turbo
3. Copy the `.agent/rules/` directory (including `agent-stack-typescript`, `agent-strict-tdd`, and `agent-code-review` skills) from the central library into the new repository.

### 3. Dependencies & Tooling
// turbo
4. Run scoped package installations (e.g., `pnpm install`).
// turbo
5. Install necessary testing libraries if missing (Vitest, React Testing Library) to support the Strict TDD mandate.

### 4. Git Initialization
// turbo
6. Run `git init` within the new project directory.
// turbo
7. Create an initial "chore: initialize agent environment" commit with the scaffolding and `AGENTS.md`.

### 5. Final Setup check
8. Ask the **USER** if there are any `llms.txt` URLs or `mcpdoc` configurations that need to be appended to the `AGENTS.md` before beginning development.
