# Editing Guide

This guide explains how to update copy, social links, and project entries for the portfolio without changing the core implementation.

## What To Edit Most Often

### Site Copy And Social Links

Edit [config/site.ts](/Users/ninnnnk/Aidank-portfolio/config/site.ts).

Main fields:

- `name`
  - Site owner name shown in navigation and metadata
- `title`
  - Site title used in footer and metadata
- `description`
  - Main SEO description
- `url`
  - Production site URL
- `githubUsername`
  - GitHub username used for portfolio identity
- `intro`
  - Homepage hero supporting sentence
- `about`
  - Homepage about section paragraph
- `socials`
  - Footer and header external links

Example:

```ts
export const siteConfig = {
  name: "Aidank",
  title: "Aidank Portfolio",
  description: "A static GitHub-driven portfolio...",
  url: "https://aidank-cy.github.io/Aidank-portfolio",
  githubUsername: "Aidank-cy",
  intro: "Short homepage intro text",
  about: "Longer about paragraph",
  socials: [
    { label: "GitHub", href: "https://github.com/Aidank-cy" },
    { label: "Email", href: "mailto:you@example.com" },
  ],
} as const;
```

### Add, Remove, Or Reorder Projects

Edit [config/projects.ts](/Users/ninnnnk/Aidank-portfolio/config/projects.ts).

Each project entry controls one GitHub repository:

- `repo`
  - GitHub repository in `owner/name` format
- `featured`
  - Whether the project appears in the homepage featured section
- `order`
  - Display order, smaller numbers come first

Example:

```ts
export const projects = [
  { repo: "Aidank-cy/Aidank-portfolio", featured: true, order: 1 },
  { repo: "Aidank-cy/project-two", featured: false, order: 2 },
  { repo: "Aidank-cy/project-three", featured: true, order: 3 },
] as const;
```

## How Project Content Actually Appears

The project list and project detail pages are generated from GitHub data at build time.

That means these parts usually come from the repository itself, not from local copy files:

- project title
- repository description
- primary language
- stars
- forks
- issues
- last updated date
- README content
- homepage link

If you want to change those, edit the corresponding GitHub repository:

- repository description on GitHub
- `README.md`
- repository homepage
- repository topics if needed

Then rebuild or redeploy the site.

## Common Editing Tasks

### Change Homepage Intro

Edit:

- `config/site.ts` → `intro`

### Change About Section

Edit:

- `config/site.ts` → `about`

### Add A New Social Link

Edit:

- `config/site.ts` → `socials`

Example:

```ts
socials: [
  { label: "GitHub", href: "https://github.com/Aidank-cy" },
  { label: "Email", href: "mailto:you@example.com" },
  { label: "X", href: "https://x.com/your-handle" },
];
```

### Feature A Project On The Homepage

Edit:

- `config/projects.ts` → set `featured: true`

### Remove A Project

Edit:

- `config/projects.ts` → delete the matching entry

### Reorder Projects

Edit:

- `config/projects.ts` → update `order`

## How To Preview Changes Locally

If the dev server is already running:

- save the file
- refresh the browser if needed

If it is not running:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## How To Update The Live Site

After editing:

```bash
git add .
git commit -m "update site content"
git push origin main
```

GitHub Actions will then rebuild and deploy the static site to GitHub Pages.

## Important Notes

- Do not call the GitHub API from the client. This project fetches GitHub data only at build time.
- If you add a repository that is private or rate-limited, local builds may need a `GITHUB_TOKEN`.
- If a project page looks incomplete, check whether that repository has:
  - a description
  - a valid README
  - a homepage URL if you want a live-link button
