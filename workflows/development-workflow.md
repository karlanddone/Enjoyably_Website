---
description: Start a feature or fix following the rigorous 7-Step Specification-Driven Development (SDD) process.
---

# 7-Step Specification-Driven Development (SDD) Workflow

## Prerequisites
- The workspace must be initialized with an `AGENTS.md` file and appropriate `.agent/rules/` Agent Skills (e.g., Strict TDD).

## Workflow

### Step 1: Initialization and Context Seeding
1. Ensure the `AGENTS.md` context is loaded.
2. Verify any required Agent Skills (like Anthropic Core Code Review, Vercel React Best Practices) are in the `.agent/rules/` directory or appropriately loaded via registry.

### Step 2: Specification Generation
3. Request the **USER** to interact with Google Gemini 3.1 Pro via chat or prompt interface to provide raw requirements, visual mockups, or business logic.
4. Gemini will generate a `specs.md` document defining database schemas, frontend components, and API boundaries. **DO NOT PROCEED WITHOUT A COMPLETED SPECS.MD**.

### Step 3: Orchestration and Planning (Planning Mode)
5. Switch to **Planning Mode** (using Anthropic Opus 4.6 context if available).
6. Ingest the `specs.md` and generate an `implementation_plan.md` artifact. **CRITICAL GUIDELINE:** The implementation plan MUST NOT bundle all execution into a single pass. It MUST be structured into **multiple isolated phases**, and each phase must be further broken down into **granular sub-phases**. This ensures the agent maintains strict token focus on a single component at a time and catches errors immediately. NO LOCAL FILES SHALL BE MODIFIED YET.

### Step 4: Human Gatekeeping and Asynchronous Correction
7. Pause the agent loop and prompt the **USER** to manually review the implementation plan. 
8. The USER will leave comments or text edits directly resolving any circular logic or domain violations. 
9. **Wait for explicit USER approval** before proceeding.

### Step 5: Iterative TDD Execution (Fast/Execution Mode)
// turbo-all
10. Switch to Execution Mode. For each specific task in the implementation plan, enforce strict **interleaved testing**:
    - **Linting & Code Error Check**: Run the linter (`npm run lint` or `pnpm lint`) and fix any semantic errors before writing tests.
    - **Automated Testing**: Author failing unit tests based on specifications. Confirm test failure in the terminal, write the implementation logic, and confirm the test suite turns "green".
    - **Manual Verification (Interim)**: After automated tests pass, spin up the local dev server (if applicable) and manually verify the component or logic behaves as expected for the *current phase* before moving on to the next.

### Step 6: Frontend Generation and UI Actuation
11. If the tasks involve frontend visual mapping, utilize the visual capabilities of the workspace to build the UI elements.
12. If instructed, spin up the local dev server and utilize the Browser sub-agent to autonomously verify UI constraints and eliminate hydration errors.

### Step 7: Documentation & The "Rigid Review"
13. **Internal Documentation Maintenance**: Automatically generate or update version-controlled internal documentation (e.g., `SYSTEM_NAME.md`, `ARCHITECTURE.md`, or the project's internal wiki) to reflect the new feature's data flows and component state.
14. Run a final "rigid review" pass over the entire codebase to cross-check against project hygiene standards and maintainability metrics.
15. Ensure global `pnpm lint` and `pnpm test` pass flawlessly.
16. Display the diff for the **USER** to conduct a manual line-by-line review before committing out of the pipeline.
