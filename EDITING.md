# Editing Guide

This guide explains how to update copy, social links, and project entries for the portfolio without changing the core implementation.

## How To View The Website

### View The Live Website

Open the deployed GitHub Pages site:

```text
https://aidank-cy.github.io/Aidank-portfolio
```

### View The Local Website

Start the local development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

If the dev server is already running, just refresh the browser after saving your changes.

## What To Edit Most Often

### Site Copy And Social Links

Edit [config/site.ts](/Users/ninnnnk/Aidank-portfolio/config/site.ts).

Main fields:

- `name`
  - Site owner name shown in navigation and metadata
- `avatar`
  - Header avatar image path, usually a file under `public/`
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
  avatar: "/avatar.png",
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

Avatar notes:

- Put the avatar file in `public/`, for example `public/avatar.png`
- Reference it from `config/site.ts` as `avatar: "/avatar.png"`
- The header avatar is clickable and opens a larger preview modal
- Use a square image for best cropping in the circular header frame
- The header displays it at `32x32`, so large source files work but increase download size
- Recommended source size: `256x256` to `1024x1024`
- Recommended file size: keep it under about `200 KB` when possible

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

### Change Header Avatar

Edit:

- `config/site.ts` → `avatar`
- `public/avatar.png` or another file under `public/`

Example:

```ts
avatar: "/avatar.png",
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

## How To Update The Website After Editing

### Step 1: Check Changes Locally

- save your file changes
- make sure `npm run dev` is running
- open `http://localhost:3000`
- refresh and confirm the page looks correct

If you changed GitHub repository content such as:

- repository description
- `README.md`
- repository homepage

then restart the local dev server or run a fresh build if the data does not refresh as expected.

### Step 2: Push The Changes

After editing and checking locally:

```bash
git add .
git commit -m "update site content"
git push origin main
```

GitHub Actions will then rebuild and deploy the static site to GitHub Pages.

### Step 3: Check The Deployed Website

After the GitHub Actions workflow finishes, open:

```text
https://aidank-cy.github.io/Aidank-portfolio
```

If you do not see the latest update immediately:

- wait a little for GitHub Pages deployment to finish
- hard refresh the browser
- confirm the latest workflow on GitHub completed successfully

## Important Notes

- Do not call the GitHub API from the client. This project fetches GitHub data only at build time.
- If you add a repository that is private or rate-limited, local builds may need a `GITHUB_TOKEN`.
- If a project page looks incomplete, check whether that repository has:
  - a description
  - a valid README
  - a homepage URL if you want a live-link button
