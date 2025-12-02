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
# places the export in out/
```

Deploy `out/` with GitHub Pages (see workflow in `.github/workflows` if you add it).

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

## Next steps
- Add real images (use `next/image`) and update alt text.
- Refine copy and add more case studies.
- Add GitHub Actions for Pages deploy (e.g., `actions/upload-pages-artifact` + `deploy-pages`).
