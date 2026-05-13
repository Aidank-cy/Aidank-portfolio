## Plan

### Objective
{what is changing and why}

### Read First
- `AGENTS.md`
- `.project-rules/README.md`
- `{task-specific files}`

### Work Plan
1. Audit the current implementation and identify the source-of-truth files.
2. Make the smallest change that satisfies the task.
3. Re-read the affected files for import, path, and static export correctness.
4. Run validation commands.
5. Update `CHANGELOG.md` under `## [Unreleased]` if the change is meaningful.

### Risk Checks
- Does this move GitHub data fetching into the browser?
- Does this break static generation or route metadata?
- Does this edit generated output instead of source files?
- Does this change more files than the task requires?
