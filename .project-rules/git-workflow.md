# Git Workflow

## Working In This Repository

- Start by checking `git status --short`.
- Assume the worktree may already contain user changes.
- Do not revert unrelated modifications.
- Do not use destructive cleanup to force a clean state.

## Change Scope

- Keep edits focused on the current task.
- Avoid mixing rule maintenance, refactors, and feature work unless the task requires it.
- Review the final diff to make sure only intended files changed.

## Safety Rules

- Do not delete business code or overwrite user content without instruction.
- If code and docs conflict, follow the actual code, then update the docs to match.
