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

For pull requests, `.github/workflows/preview.yml`:
- Builds and deploys a full preview to `https://ivytech.se/pr-preview/pr-{number}/` when the PR is opened or updated
- Posts a comment with the preview URL on the pull request
- Automatically removes the preview directory from `gh-pages` when the PR is closed

## Analytics (Umami Cloud)

The site uses Umami Cloud for anonymous, cookie-free analytics.

- Script source: `https://cloud.umami.is/script.js`
- Website ID: `2a1d90c8-a4e0-43f3-b520-7f191b687b30`
- Script is included globally in `app/layout.tsx` before `</body>`, so it is present on all pages.

References:
- https://umami.is/docs
- https://cloud.umami.is/share/2a1d90c8-a4e0-43f3-b520-7f191b687b30

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

## Adding a new team member

1. **Add the portrait image**
   Save a high-resolution `.jpg` portrait to `public/images/team/<firstname-lastname>.jpg` (e.g., `public/images/team/mikael-tornered.jpg`).

2. **Generate responsive image variants**
   Run the image-variant script to create optimized sizes (320 px & 640 px) in `.jpg`, `.webp`, and `.avif`:
   ```bash
   npm run images:variants
   # or directly:
   bash scripts/generate-image-variants.sh
   ```
   The script requires **ffmpeg** and processes every `.jpg`/`.jpeg` in `public/images/`. Generated files follow the naming convention `<firstname-lastname>-<size>.<format>` (e.g., `mikael-tornered-320.webp`).

3. **Add the profile entry**
   Open `app/content.ts` and append a new object to the `team` array:
   ```ts
   {
     name: "First Last",
     role: "Role title",
     intro: "Short intro in Swedish.",
     email: "first.last@ivytech.se",
     linkedin: "https://www.linkedin.com/in/first-last/",
     photoBase: "/images/team/first-last",
   }
   ```

4. **Verify**
   Run `npm run dev` and open the "Om oss" page to confirm the new profile displays correctly with the photo, name, role, intro, email, and LinkedIn link.

## Next steps
- Add real images (use `next/image`) and update alt text.
- Refine copy and add more case studies.
- Add GitHub Actions for Pages deploy (e.g., `actions/upload-pages-artifact` + `deploy-pages`).
