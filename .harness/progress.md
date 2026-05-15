## Session progress

_This file is read at the start of each agent session and updated at the end. It is the primary mechanism for cross-session state persistence._

### Completed
- 2026-05-15: Replaced `README.md` with a polished, visitor-facing portfolio overview.
- 2026-05-15: Added `CHANGELOG.md` entries under `## [Unreleased]` for the README refresh and progress-tracking restoration.
- 2026-05-15: Restored `.harness/progress.md` to resume cross-session project tracking.
- 2026-05-15: Updated the private-repo ignore and public sync rules so harness runtime notes stay version-controlled privately but never reach the public mirror.

### In progress
- Validate the `/projects` metadata fix and navigation active-state feature before creating the local commit.

### Decisions made
- Current working branch is `feat/nav-active-projects-og`.
- `main` tracks `origin/main` at commit `9722ada`.
- `origin` points to `https://github.com/Aidank-cy/Aidank-portfolio-dev.git`.
- The latest released version remains `0.2.0` dated `2026-05-14`.
- `.harness/progress.md` and future `.harness/learning-log.md` entries are now intended to be version-controlled in the private repo.
- The public sync workflow still strips `.harness/`, `.project-rules/`, agent config, internal docs, and private-only workflows before mirroring.
- The current local worktree contains uncommitted changes to `app/projects/page.tsx`, `components/layout/Header.tsx`, `CHANGELOG.md`, and `.harness/progress.md`.

### Next session should
1. Run `npm run lint`, `npm run typecheck`, and `npm run build`.
2. Create one atomic local commit for the `/projects` metadata fix and nav active-state feature.
3. Push the feature branch to `origin` and open a PR when the change is ready for review.

## 2026-05-15 — Refresh portfolio README and restore progress tracking
- **Status:** Complete
- **Commit:** Not created yet
- **Changes:** Replaced the root README with a cleaner visitor-facing portfolio overview and reintroduced `.harness/progress.md` so future sessions can recover project state directly from the repo.
- **CHANGELOG:** Changed: Refresh the portfolio README with a polished visitor-facing overview, live site link, stack summary, route map, and customization guidance. Changed: Restore `.harness/progress.md` so cross-session project state and pending follow-ups are tracked again.
- **Rules updated:** No
- **Follow-ups:**
  - Decide whether `main` should track `origin/main` or remain without an upstream.
  - Commit and push the current documentation changes when ready.

## 2026-05-15 — Track private harness notes and tighten public sync filtering
- **Status:** Complete
- **Commit:** Not created yet
- **Changes:** Stopped ignoring harness runtime notes in the private repo and updated the public mirror workflow to keep all internal harness and process-tracking files out of the public repository.
- **CHANGELOG:** Changed: Track harness runtime notes in the private repo instead of ignoring them locally. Changed: Clarify the public sync workflow so internal harness files, process docs, and private automation are stripped before mirroring.
- **Rules updated:** No
- **Follow-ups:**
  - Confirm whether `.harness/learning-log.md` should actually be created now that it can be version-controlled.
  - Commit and push the current docs and sync-policy changes when ready.

## 2026-05-15 — Fix projects OG metadata and add nav active state
- **Status:** Complete
- **Commit:** Not created yet
- **Changes:** Updated the `/projects` page metadata so its Open Graph title and URL resolve to the actual projects index page, and added route-aware active styling for the Home and Projects links in the header without highlighting the GitHub external link.
- **CHANGELOG:** Added: Add active-state highlighting to the Home and Projects navigation links based on the current route while keeping the GitHub external link neutral. Fixed: Fix the `/projects` Open Graph metadata so its title and URL reflect the actual projects index page instead of the site root defaults.
- **Rules updated:** No
- **Follow-ups:**
  - Push the feature branch and open a PR after verification passes.
