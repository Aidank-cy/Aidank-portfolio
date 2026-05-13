# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com),
and this project adheres to [Semantic Versioning](https://semver.org).

## [Unreleased]

### Added
- Harness scaffolding under `.harness/`, `hooks/`, and `skills/` for repeatable AI-assisted work.
- Cross-tool instruction entry points for Claude, Cursor, and GitHub Copilot.
- A dedicated GitHub Actions quality gate for lint, typecheck, and static build verification.

### Changed
- Root agent guidance now reflects the repo's actual static export, GitHub data, and validation boundaries.
- Project command documentation now includes the TypeScript validation step and build expectations.
- Public-repo hygiene now excludes local TypeScript build info and mutable harness runtime logs from future commits.
- Default ignore rules now also cover common local editor folders, coverage output, deployment state, and package-manager debug logs.

## [0.1.0] - 2026-05-13

### Added
- Initial static portfolio scaffold with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion.
- GitHub-driven project pages, README rendering, and GitHub Pages deployment workflow.
