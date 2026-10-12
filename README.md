# ToolPilot

Small tools for creators, done properly. Live at https://usetoolpilot.com.

A Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS content site.
Pages are statically generated and tools run in the browser.

- **38 tools** in 4 categories (`app/tools/*`, registry in `lib/tools-data.ts`)
- **Blog** (`app/blog`, posts in `lib/blog-posts.ts`)
- **Guides** (`app/guides`, content in `lib/guides.ts`)
- Comparison pages (`app/compare`), categories, search, and policy pages
- `app/sitemap.ts`, `app/robots.ts`, and `app/rss.xml` generate the SEO feeds

## Scripts

```bash
npm install
npm run dev        # next dev  -> http://localhost:3000
npm run build      # next build
npm run start      # next start (after build)
npm run lint       # next lint
npm run typecheck  # tsc --noEmit
```

## Tests

```bash
npx vitest run
```

The tests live in `lib/traffic-engine/__tests__/`.

## Traffic engine (internal)

`lib/traffic-engine/` is an offline analysis tool that reads Google Search
Console CSV exports and reports traffic opportunities. It is not used by the site.

```bash
npx tsx lib/traffic-engine/run-engine.ts <data-dir> <output-dir> HISTORICAL|CURRENT
```

`<data-dir>` must contain `queries.csv`, `pages.csv`, and `query-page.csv`.
The defaults are `data/gsc`, `reports`, and `HISTORICAL`. `tsx` is not a
project dependency, so `npx` fetches it on first use.

`data/gsc/` is gitignored, so do not commit GSC exports.
