---
name: Agent Strict TDD
description: Enforces mandatory Test-Driven Development (TDD) loops. Do not write logic before the failing test is confirmed.
---
# Strict TDD Protocol

This skill rewires the default agentic execution loop, enforcing classical Test-Driven Development. 

When creating or modifying logic, you MUST follow this sequence meticulously:

1. **Define the Test Case**: Identify the exact logical boundaries, edge cases, and expected input/output for the feature or fix.
2. **Author the Failing Test**: Write the unit test(s) using Vitest/RTL.
3. **Confirm Failure**: Execute the specific test explicitly in the terminal (e.g. `pnpm vitest run -t "your-test-name"`). You MUST observe the test failing as expected. Do not assume the test is valid without a failure state.
4. **Implement Logic**: Write the minimum amount of code required to pass the specific test.
5. **Verify Success**: Re-run the test suite and confirm it turns green.
6. **Refactor**: Clean up the implementation without breaking the newly written test.

Failure to follow this exact loop is considered a bypass of quality assurance constraints and is strictly forbidden.
