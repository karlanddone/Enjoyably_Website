# Agent Workflow Context (AGENTS.md)

## Core Philosophy
- This project strictly adheres to Specification-Driven Development (SDD) and 2026 Agentic Best Practices.
- **Accuracy over speed** — Never compromise quality for time.
- **Human-maintainable output** — All code must be highly legible and strictly follow the project's architectural guidelines.

## Technology Stack & Environment
- **Language**: TypeScript (Strict Mode)
- **Frontend**: React, Tailwind CSS v4
- **Testing**: Vitest, React Testing Library
- **Package Manager**: pnpm
- **Hosting / Deployment**: TBD (Options: Vercel, Firebase)
- **Backend / Email**: Google Apps Script for intake forms

## Workspace Navigation & Execution Constraints
- Agents MUST navigate the workspace using deterministic commands (e.g., `pnpm dlx turbo run where <project>`).
- Package installations MUST be scoped to the specific package (e.g., `pnpm install --filter <project>`).
- New project scaffolding MUST use pre-approved templates (e.g., `pnpm create vite@latest <project> -- --template react-ts`).
- **Boundaries**: NEVER modify security configurations, production secrets, or vendor directories. "Never commit secrets."

## Git Commit Conventions
- All commits MUST follow conventional commit format: `<type>: <description>`
- Allowed types: `feat`, `fix`, `refactor`, `docs`, `chore`, `test`, `style`, `perf`
- Commit messages MUST include a body listing specific changes when more than one file is modified.
- Example:
  ```
  feat: add user profile page

  - Created UserProfile component with avatar upload
  - Added /profile route to router
  - Updated navigation to include profile link

  Docs: Updated ARCHITECTURE.md with new route
  ```

## Centralization & Single Source of Truth
- **Never Hardcode Variables**: Do not hardcode recurring strings, colors, configuration endpoints, or theme logic deep into individual components.
- App-wide state, environment variables, and visual design tokens MUST be maintained in a single centralized location (e.g., a `.env` file, a global `theme.ts` file, or a global context provider) and referenced from there.
- Data models and types must be centralized in a shared `types/` or `models/` directory.

## Phase-Based Execution Constraint
- **Do not execute everything at once.** Implementation plans MUST be broken down into **multiple isolated phases** and smaller **sub-phases**. 
- You must dedicate your maximum token focus to executing, testing, and verifying ONE sub-phase completely before even considering the next sequence. This aggressively prevents context overflow and rapidly catches breaking logic.

## Testing & Quality Control (TDD Mandate)
- **Test-Driven Development (TDD) is MANDATORY**.
- Before implementing any logic, the agent MUST write expected input/output pairs as failing unit tests and run the test suite to confirm the failure.
- **Interleaved Testing**: Throughout execution, you must continuously run linter checks (`npm run lint`), write automated tests, and manually verify components in the browser/dev server between each sub-phase to catch errors early.
- Agents MUST proactively locate CI plans (e.g., `.github/workflows`) to understand testing standards.
- Pull Requests are **FORBIDDEN** until:
  - All type errors are resolved.
  - The entire test suite (`pnpm vitest run`) passes ("green").

## Documentation & API Standards
- **Continuous Internal Documentation**: You MUST maintain and update version-controlled architectural documentation (e.g., `ARCHITECTURE.md`, `SYSTEM_NAME.md`) alongside code changes so the project's data flow and component hierarchy are always historically accurate.
- When integrating external libraries, default to verifying syntax via `mcpdoc` or reading the relevant `llms.txt`. Do not rely on stale training data.

## Accessibility Requirements
- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, `<section>`) — NEVER use `<div onClick>` as a button substitute.
- All icon-only buttons MUST have `aria-label` attributes.
- Visible focus indicators are REQUIRED on all interactive elements. Never use bare `outline: none`.
- Modals MUST trap focus internally and return focus to the trigger element on close.
- Color contrast MUST meet WCAG 2.1 AA standards.

## Security Rules
- **Deny all by default** — Explicitly allow only what is needed.
- **Always verify authentication** — Every protected route and endpoint must check user identity.
- **Validate all data types** — Never trust client-side input. Validate server-side.
- **Use role-based access control (RBAC)** — e.g., `request.auth.token.role == 'admin'`.
- **Test security rules before deploying.**
- No secrets, API keys, or credentials in source code. Use environment variables.

## Backend / Cloud Functions Architecture
- Prefer event-driven triggers over polling.
- Organize functions by feature domain, not by type.
- All functions MUST be **idempotent** (same result if called multiple times).
- Use structured error handling with explicit error codes (e.g., `HttpsError('permission-denied', '...')`).

## State Management Patterns
| Pattern | When to Use |
|---------|-------------|
| Single object state or `useReducer` | 3+ state variables that update together |
| Custom hook `use[Feature]` | Complex logic extraction |
| React Query / TanStack Query | REST/GraphQL API data fetching & caching |
| Context Provider | Cross-component shared state (theme, auth, locale) |
| Backend hooks with cleanup | Real-time data sync (WebSockets, subscriptions) |

## Code Review "Rigid Reviewer" Mode
- All generated code MUST undergo a rigid secondary review using the `agent-code-review` skill checklist.
- Ensure edge case and error state handling is visually and practically tested.
- Do not bypass linter warnings (`npm run lint` must pass).
