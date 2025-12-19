# Ivy Technology – Next.js static site

An accessible one-page site for Ivy Technology. Built with Next.js (app router), designed for WCAG 2.2 AA, and ready for GitHub Pages via static export.

## Get started

```bash
npm install
npm run dev
```

## Build and export for GitHub Pages

```bash
npm run build
# places the export in out/ (using output: export)
```

## Deploy (GitHub Pages)

Push to `main` to trigger `.github/workflows/deploy.yml`, which builds the static export and deploys `out/` to the `gh-pages` branch.

For pull requests, `.github/workflows/preview.yml` publishes a per-PR preview (and cleans it up when the PR closes).

## Key colors
- Forest `#596e5c` (primary)
- Sand `#F1EADA` (light background/highlight)
- Stone `#E2E2DE` (background)
- Midnight `#2E333A`, Onyx `#1C1C1B` (text/contrast)

## Accessibility
- Semantic structure with `header/nav/main/section/footer`
- Visible focus states, keyboard-navigable mobile menu
- Forms with labels, inline errors, and `aria-live`
- Respects `prefers-reduced-motion`

## Performance & Caching

The site implements cache control headers for static assets to improve performance. See [docs/CACHING_STRATEGY.md](docs/CACHING_STRATEGY.md) for details.

**Note**: GitHub Pages has limited support for custom cache headers. For full caching benefits, consider deploying to Vercel, Netlify, or Cloudflare Pages.

## Next steps
- Add real images (use `next/image`) and update alt text.
- Refine copy and add more case studies.
- Add GitHub Actions for Pages deploy (e.g., `actions/upload-pages-artifact` + `deploy-pages`).
