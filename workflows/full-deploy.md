---
description: Full Application Deployment including Frontend and Backend
---
This workflow performs a complete deployment cycle: lint, test, build, deploy, document, commit, and push.

> **PowerShell Protocol**: Do NOT use `&&` to chain commands. Use `;` or run commands sequentially.

> **Prerequisites**: Ensure the project's `AGENTS.md` rules have been read and applied.

// turbo-all

## 1. Install Dependencies
```powershell
npm install
```

## 2. Run Linting
```powershell
npm run lint
```
Fix any lint errors before proceeding.

## 3. Run Tests
Run unit tests to ensure stability.

### Unit Tests
```powershell
npm test
```

If tests fail, fix them before proceeding.

## 4. Build Frontend
```powershell
npm run build
```

## 5. Install and Build Backend (If Backend Changes)
If changes were made to backend/functions, rebuild the backend.

```powershell
# Example: cd functions; npm install; npm run build; cd ..
```
*Note: Example uses `;` for PowerShell chaining. Ensure you return to root directory.*

## 6. Deploy Service
```powershell
# Example: firebase deploy --force
```

## 7. Documentation Sync (Mandatory)
Audit and update documentation before committing. This ensures all changes are captured in a single commit.

### 7.1 Identify Changed Areas
Review what was changed in this sprint:
- New/modified backend functions → Update architecture docs
- Data model changes → Update data model docs
- New UI components/blocks → Update component reference docs
- RBAC changes → Update roles and permissions docs
- Billing/tier changes → Update subscription docs
- Storage changes → Update storage docs

### 7.2 Update Engineering Docs (`.agent/` or similar)
- New features or implementation changes
- Configuration changes
- Breaking changes or migration notes

### 7.3 Update Knowledge Base (`docs/`)
- User-facing feature descriptions
- Tier/billing changes
- Role/permission updates

> [!IMPORTANT]
> Do NOT skip this step. Documentation must be updated before the commit to maintain a single commit per sprint.

## 8. Git Commit with Detailed Message
```powershell
git add -A
git commit -m "feat: [FEATURE_NAME] - [BRIEF_DESCRIPTION]

- [Change 1]
- [Change 2]
- [Change 3]

Docs: Updated [DOC_NAME] with [CHANGES]"
```

## 9. Push to GitHub
```powershell
git push origin main
```
