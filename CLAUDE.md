# CLAUDE.md

Start with `AGENTS.md`, then open only the relevant files under `.project-rules/`.

## Claude Notes

- Use the same task boundaries as `AGENTS.md`; do not create a separate rule stack.
- Prefer `hooks/post-file-edit.sh` after meaningful edits and `hooks/pre-commit.sh` before commits. [INFERRED]
- Keep GitHub data in build-time code paths and preserve static export behavior.
- Use the project-local skills in `skills/` when the task matches their scope.
