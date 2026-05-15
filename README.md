# Aidank Portfolio

A minimal, GitHub-driven personal portfolio — vibe coded with AI, zero human-written code.

Live site: https://aidank-cy.github.io/Aidank-portfolio

## ✨ What Is This

Aidank Portfolio is a statically generated personal portfolio built with Next.js and deployed to GitHub Pages. It pulls repository data from the GitHub API at build time, with no CMS, no database, and no runtime backend. The visual direction is clean and product-focused, drawing inspiration from Apple, Linear, and Vercel.

## 🛠 Tech Stack

| Technology | Role |
| --- | --- |
| Next.js 15 (App Router) | Application framework and routing |
| TypeScript | Typed application code |
| Tailwind CSS v4 | Styling system |
| Framer Motion | Motion and interaction |
| React Markdown + remark-gfm | README rendering with GitHub Flavored Markdown support |
| GitHub Pages static export | Static hosting target |
| GitHub Actions CI/CD | Build and deployment automation |

## 📄 Pages

- `/` — hero, featured projects, about, and footer links
- `/projects` — full project list with language filter
- `/projects/[slug]` — project detail page with README rendering, stats, and language breakdown

## 🚀 Getting Started

```bash
git clone https://github.com/Aidank-cy/Aidank-portfolio.git
cd Aidank-portfolio
npm install
npm run dev
```

## 📦 Build & Deploy

```bash
npm run build
```

The project exports a static site into `out/`. Deployment is handled automatically by GitHub Actions whenever changes are pushed to `main`.

## 🎛 Customization

- `config/site.ts` controls site copy and social links.
- `config/projects.ts` controls the project list and featured status.
- Project metadata is pulled from GitHub at build time.
- Editing guidance is available in [EDITING.md](./EDITING.md).

## 🧭 Project Structure

```text
app/
components/
  layout/
  sections/
  ui/
config/
lib/
```

## 🤖 AI-Built

This codebase was created through AI-assisted vibe coding, with the portfolio experience, UI, and implementation generated without hand-written application code.

## 📄 License

Released under the [MIT License](./LICENSE).
