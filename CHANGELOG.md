# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com),
and this project adheres to [Semantic Versioning](https://semver.org).

## [Unreleased]

### Added
- Add active-state highlighting to the Home and Projects navigation links based on the current route while keeping the GitHub external link neutral.
- Add a sliding Framer Motion indicator for the active Home and Projects navigation pill.

### Changed
- Refresh the portfolio README with a polished visitor-facing overview, live site link, stack summary, route map, and customization guidance.
- Restore `.harness/progress.md` so cross-session project state and pending follow-ups are tracked again.
- Track harness runtime notes in the private repo instead of ignoring them locally.
- Clarify the public sync workflow so internal harness files, process docs, and private automation are stripped before mirroring.
- Fail static project generation instead of silently exporting partial repository lists when configured GitHub data cannot be resolved at build time.

### Fixed
- Fix the `/projects` Open Graph metadata so its title and URL reflect the actual projects index page instead of the site root defaults.
- Fix the `/projects` page so project cards remain visible across first load, hydration, and history navigation instead of intermittently collapsing to an empty filtered list.
- Fix project detail pages so long READMEs scroll inside a consistent-height content panel instead of changing the overall page length.

## [0.2.0] - 2026-05-14

### Added
- Harness scaffolding under `.harness/`, `hooks/`, and `skills/` for repeatable AI-assisted work.
- Cross-tool instruction entry points for Claude, Cursor, and GitHub Copilot.
- A dedicated GitHub Actions quality gate for lint, typecheck, and static build verification.

### Changed
- Cleaned up README content to remove stale workflow references and keep the editing guidance inline.
- Added `siteConfig.githubUrl` and updated the header GitHub link to avoid relying on `socials[0]`.
- Deduplicated global light-theme CSS variables so light-mode tokens are defined in one place.
- Reused the shared `Motion` wrapper in `FadeIn` and `ProjectCard`, and documented the simpler motion-wrapper rule in `.project-rules`.
- Root agent guidance now reflects the repo's actual static export, GitHub data, and validation boundaries.
- Project command documentation now includes the TypeScript validation step and build expectations.
- Public-repo hygiene now excludes local TypeScript build info and mutable harness runtime logs from future commits.
- Default ignore rules now also cover common local editor folders, coverage output, deployment state, and package-manager debug logs.

### Fixed
- GitHub project fetching now degrades gracefully when individual repository, README, or language API requests fail during static generation.

## [0.1.0] - 2026-05-13

### Added
- Initial static portfolio scaffold with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion.
- GitHub-driven project pages, README rendering, and GitHub Pages deployment workflow.
