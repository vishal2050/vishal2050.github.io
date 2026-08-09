# Sutrava Software Solutions

Premium B2B website for AI business automation and intelligence.

## Brand

- **Name:** SUTRAVA
- **Tagline:** Find the leaks. Automate the work. Grow the business.
- **Config:** `src/config/brand.ts`

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide icons

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
- `npm run deploy` — build static site and publish to GitHub Pages (`gh-pages`)

## GitHub Pages

```bash
npm run deploy
```

This runs `deploy.sh`, which:
1. Builds a static export with `GITHUB_PAGES=true`
2. Force-pushes the `out/` folder to the `gh-pages` branch

Live URL after Pages is enabled:

`https://vishal2050.github.io/SutravaSoftwareSolution/`

In GitHub: **Settings → Pages → Deploy from a branch → `gh-pages` / root**

## Structure

```text
src/
  components/   UI, sections, animations, forms, navigation
  config/       Brand configuration
  data/         Services & industries content
  app/          Routes
public/brand/   Logo & OG assets
public/visuals/ Generated visual assets
```
# SutravaSoftwareSolution
