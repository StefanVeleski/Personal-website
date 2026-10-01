# stefanveleski.com

Personal website of **Stefan Veleski** — Configuration Engineer (DocOps) & Technical Writer.

Built with [Astro](https://astro.build), TypeScript, and Tailwind CSS v4. Deployed on
Netlify.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the production site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Type-check and validate content collections |

## Content

Most content is typed data in `src/data/` (experience, projects, publications, talks, site
config). Blog posts go in `src/content/posts/` as Markdown. See [`CLAUDE.md`](./CLAUDE.md)
for the full project guide.
