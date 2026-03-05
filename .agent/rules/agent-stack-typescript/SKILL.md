---
name: Agent Stack - TypeScript Fullstack
description: Enforces strict type safety, modular component structures, and Tailwind v4 best practices for all TypeScript and React code generation.
---
# TypeScript & React Stack Rules

## TypeScript Guidelines
- `any` is **FORBIDDEN**. Use `unknown` or explicit generics.
- Interfaces for Props must be named `[ComponentName]Props`.
- Event handlers must be explicitly typed (e.g., `React.ChangeEvent<HTMLInputElement>`).
- Prefer discriminated unions for handling complex state (e.g., async state).
- Validate all external and boundary data at runtime using Zod or a similar schema library.

## React & Component Hygiene
- **STRICT Component File Limits**: NEVER exceed **200 lines** per file. If a file grows beyond this, you MUST forcibly decompose it into smaller, focused sub-components. AI models often bloat single files; you must actively fight this tendency.
- **Exporting**: 1 exported component per file (internal sub-components allowed).
- **Hooks Limit**: Max 4 `useState` and 3 `useEffect` per component before extracting to a custom hook.
- **Prohibitions**:
  - No `window.confirm()`, `window.alert()`. Use custom accessible modals.
  - No derived state in `useState`. Always calculate inline if based on props/state.
  - Every `useEffect` that creates a subscription MUST return a cleanup function.
- Always implement Error Boundaries around major feature sections.

## Tailwind CSS v4 Rules
- Group classes logically (Layout -> Position -> Box Model -> Typography -> Visual -> Interactive).
- Do NOT dynamically construct classes (e.g., `bg-${color}-500`). This breaks the purge/bundler process.
- Use explicit class mapping (e.g., `{ red: 'bg-red-500' }`).
- **Theme Centralization**: DO NOT hardcode Hex/RGB colors or random spacing values directly into components. You MUST use `@theme` design tokens centralized in your main CSS file and reference them utility-first.

## Code Quality & Documentation
- Variable names must be descriptive and human-readable, avoiding single-letter definitions outside of loop indices.
- Documentation comments should explain the *why*, not the *what*.
