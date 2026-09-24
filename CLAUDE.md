# CLAUDE.md — Personal Website

Project memory for stefanveleski.com. Read this first when working in this repo.

## What this is

Stefan Veleski's personal website — **https://stefanveleski.com**. A bespoke, static
**Astro** site with a minimal developer-portfolio design. It leads with Stefan's
docs-engineering identity and keeps his academic research as a secondary archive.

> History: this repo was previously a Hugo "Academic" (pre-Wowchemy) site scaffolded with
> R `blogdown`. That stack was dead and career-stale. It was fully replaced by the current
> Astro site in 2026 (branch `astro-redesign`). There is no Hugo, R, or blogdown left.

## Who Stefan is (keep site copy accurate to this)

- **Configuration Engineer at Veeam** (Prague) — current role. Automates documentation
  workflows, writes autotests, and maintains a custom **TypeScript** editor for the writing
  team.
- Climbed the Veeam technical-writing ladder: Junior → Technical Writer → Experienced →
  Senior (2023–2026), then into docs engineering / DocOps.
- PhD in English literature / digital humanities (Masaryk University, 2022) — computational
  text analysis, sentiment analysis, data viz. This is the "Research" archive, not the lead.

## Tech stack

- **Astro** (v7.x at time of build) — static output, TypeScript strict.
- **Tailwind CSS v4** via `@tailwindcss/vite` (CSS-first config; no `tailwind.config.js`).
- `@astrojs/sitemap` (sitemap) and `@astrojs/rss` (blog feed).
- Self-hosted fonts: `@fontsource-variable/inter` (sans) + `.../jetbrains-mono` (mono).
- No external icon library — icons are inline SVG in `src/components/Icon.astro`.
- Node **22** (pinned in `netlify.toml`). TypeScript is pinned to **5.x** (Astro's checker
  does not yet support TS 7).

## Layout

```
src/
  data/            # Typed content as TS modules (the site's real data)
    site.ts        #   identity, socials, nav
    experience.ts  #   Veeam career timeline (Role[])
    projects.ts    #   docs-engineering projects (Project[])
    publications.ts#   academic publications (Publication[])
    talks.ts       #   conference talks (Talk[])
  content.config.ts# Astro content collection: `posts` (blog, glob loader + zod schema)
  content/posts/   # Blog posts (Markdown/MDX). Empty for now.
  components/       # Icon, Nav, Footer, ThemeToggle, SocialLinks, SectionHeading, ProjectCard
  layouts/Base.astro   # <head>/SEO, fonts, no-flash theme init, Nav + main + Footer
  styles/global.css    # Tailwind import, @theme tokens, light/dark CSS variables
  pages/           # index, about, experience, projects, research, blog/, 404, rss.xml.js
public/            # favicon.svg, robots.txt, (cv.pdf — see below)
```

**Content model:** structured content (experience, projects, publications, talks) lives as
**typed TS data** in `src/data/` — edit those files to change site content. Only the **blog**
uses an Astro content collection (`src/content/posts/*.md`). To add a post, drop a Markdown
file there with frontmatter `title`, `description`, `date` (optional `updated`, `draft`,
`tags`).

## Design system

- Colors are semantic CSS variables (`--bg`, `--fg`, `--muted`, `--accent`, …) defined in
  `global.css`, flipped by `:root` vs `:root[data-theme="dark"]`. Tailwind utilities like
  `bg-bg`, `text-muted`, `border-border`, `text-accent` map to them via `@theme`.
- Dark mode is a **manual toggle** (persisted to `localStorage`), wired through a custom
  `dark:` variant (`@custom-variant dark`). The no-flash init script is inline in
  `Base.astro`'s `<head>`.
- Accent is indigo (`#4f46e5` light / `#818cf8` dark). Mono font is used for eyebrows,
  labels, dates, and metadata.

## Commands

```bash
npm run dev      # local dev server (localhost:4321)
npm run build    # production build to dist/
npm run preview  # serve the built dist/
npm run check    # astro check — TS + content schema validation
```

## Deployment

- **Netlify**, Git-triggered (unchanged model): push to GitHub → Netlify builds → deploys.
- `netlify.toml`: `command = "npm run build"`, `publish = "dist"`, `NODE_VERSION = "22"`.
- Production deploys from `master`; other branches get Netlify branch/preview deploys.

## Known follow-ups

- **`public/cv.pdf` is intentionally absent.** `site.cv` is `null`, which hides the home
  "Curriculum Vitae" button. Stefan's industry CV lives in the private `Personal` repo and
  prints a home address + phone; a redaction decision is pending. Add a (redacted) `cv.pdf`
  to `public/` and set `site.cv = '/cv.pdf'` to show the button.
- Configuration Engineer **start month** in `src/data/experience.ts` is approximate
  (`2026 — Present`); confirm and adjust the Senior TW end date to match.
- No `og.png` yet — social-share cards render without an image until one is added and passed
  to `Base`'s `image` prop.

## Conventions

- Keep site copy consistent with "Who Stefan is" above — never reintroduce the old
  "doctoral student" framing as a current identity.
- Prefer editing `src/data/*.ts` over hardcoding content in pages.
- Related private/local notes: `CLAUDE.local.md` (gitignored).
