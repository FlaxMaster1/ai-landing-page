# AI at Wharton — Working Prototype

A working prototype of the "AI at Wharton" landing page: a React + TypeScript + Vite single-page app
using Tailwind CSS and Radix UI primitives. Navigation is hash-based, so it works on static hosting.

**Live site:** https://flaxmaster1.github.io/ai-landing-page/

## Local development

```bash
pnpm install
pnpm dev
```

Then open the URL Vite prints (default http://localhost:5173).

## Build

```bash
pnpm build      # type-check + production build into dist/
pnpm preview    # serve the production build locally
```

## Deployment

Every push to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds
the app and publishes `dist/` to GitHub Pages. Vite is configured with `base: "./"` so the build works
from the repository subpath.

## Project layout

- `index.html` — app shell and entry point
- `src/App.tsx` — the full page, including all stage content
- `src/components/` — UI components
- `src/assets/`, `public/` — images and icons
