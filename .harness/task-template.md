## Task: {title}

### Goal
{1-2 sentence outcome}

### Scope
Files to modify:
- `{path}` -> {change}

Files to read only:
- `{path}` -> {why it matters}

### Constraints
- Keep static export compatibility.
- Do not add new dependencies unless approved.
- Prefer existing patterns in `app/`, `components/`, `config/`, and `lib/`.

### Pattern To Follow
- Reference file: `{path}`
- Why it matches: {short note}

### Acceptance Criteria
1. `npm run lint` passes.
2. `npm run typecheck` passes.
3. `npm run build` passes when routes, config, workflows, or GitHub data flow changed.
4. No generated files in `.next/` or `out/` were edited.
