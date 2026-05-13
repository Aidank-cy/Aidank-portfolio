# Versioning And Changelog

Use this after a meaningful repository change is complete.

## Repo-Specific Rules

- `CHANGELOG.md` follows Keep a Changelog with `## [Unreleased]` at the top.
- This repo is currently `0.1.0`; do not bump the package version unless the user asks to cut a release.
- Record harness, workflow, build, and content changes in human language, not raw commit text.

## Update Flow

1. Re-read `CHANGELOG.md`.
2. Add entries under `## [Unreleased]` using `Added`, `Changed`, `Fixed`, or `Security`.
3. If the user asks for a release, then:
   - decide the SemVer bump
   - update `package.json`
   - move `Unreleased` notes into a dated version section
4. Do not create tags or push unless the user explicitly asks.
