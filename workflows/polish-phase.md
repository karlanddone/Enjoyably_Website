---
description: Execute a single phase of the pre-launch polish plan - paste in phase details for detailed testing workflow
---

# Pre-Launch Polish Phase Workflow

Use this workflow to execute any of the phases from your launch polish plan. Paste the phase content when invoking.

## How to Use

1. Invoke with: `/polish-phase`
2. Paste the phase section you want to execute
3. The agent will map out and guide you through that phase's testing

## Workflow Steps

### Phase 1: Initialize Phase Session

1. Read and apply all rules from `AGENTS.md`
2. Parse the provided phase content to extract:
   - Phase name and scope
   - Components/files to test
   - Related hooks, contexts, and backend functions
   - Manual test procedures
   - Documentation to verify

### Phase 2: Create Phase Checklist

3. Create a working checklist artifact:
   - All components listed with status markers
   - All test procedures as actionable checklist items
   - Documentation items to verify
   - Bug/issue tracking section

### Phase 3: Component Analysis

4. For each component group in the phase:
   - View file outlines to confirm they exist
   - Note any file structure changes from the plan
   - Identify any missing or renamed files

5. Report findings to user:
   - Confirm all expected files found
   - Note any discrepancies
   - Provide file quick-reference

### Phase 4: Guided Manual Testing

6. For each test procedure in the phase:
   - Display the test steps clearly
   - Wait for user confirmation of test completion
   - If user reports issues:
     - Document the issue in the checklist
     - Optionally investigate the relevant code
     - Provide fix recommendations
   - Mark test as ✅ PASS, ⚠️ ISSUE, or ❌ FAIL

7. Request screenshots where the plan indicates:
   - User provides screenshot
   - Agent confirms visual state matches expectations
   - Note any UI issues

### Phase 5: Code Review (Optional)

8. If user requests, review specific component code:
   - Check for guideline violations
   - Check for potential bugs
   - Check for accessibility issues
   - Report findings

### Phase 6: Documentation Verification

9. For each document listed in the phase:
   - Open and review the document
   - Check if it accurately reflects current implementation
   - Note any needed updates
   - Offer to make updates if requested

### Phase 7: Phase Summary

10. Generate phase completion summary:
    - Tests passed/failed/issues
    - Bugs discovered
    - Documentation updates needed/made
    - Open items for follow-up

11. Update the phase checklist with final status

12. **STOP and present summary to user**

---

## Phase Reference (Example Map)

| Phase | Focus Area |
|-------|------------|
| 1 | Authentication & User Management |
| 2 | Dashboard & Navigation |
| 3 | Core Feature 1 |
| 4 | Core Feature 2 |
| 5 | Data Models & Processing |
| 6 | Workspace & Member Management |
| 7 | Operations & Activity Logs |
| 8 | Sharing & Notifications |
| 9 | Billing & Subscriptions |
| 10 | Security & Compliance |
| 11 | Backend/Cloud Verification |
| 12 | Public Pages & Legal |
| 13 | UI Components & Design System |
| 14 | Documentation Final Review |

---

## Bug Tracking Template

When issues are found, log them as:

```markdown
| ID | Component | Description | Severity | Status |
|----|-----------|-------------|----------|--------|
| P1-001 | Login.tsx | Error message not clearing | Low | Open |
```

Severity levels: Critical, High, Medium, Low

---

## Notes

- This workflow is for MANUAL testing - no automated E2E tests
- Request screenshots at key points for visual verification
- Pause between test groups for user feedback
- Document everything for later reference
