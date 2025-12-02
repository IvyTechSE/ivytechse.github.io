# Ivy Technology – Next.js statisk sida

En svensk, tillgänglig one-page sajt för Ivy Technology. Byggd med Next.js (app router), designad för WCAG 2.2 AA, och klar för GitHub Pages via statisk export.

## Kom igång

```bash
npm install
npm run dev
```

## Bygg och exportera för GitHub Pages

```bash
npm run build
# lägger exporten i out/
```

Deploya `out/` med GitHub Pages (se arbetsflöde i `.github/workflows` om du lägger till det).

## Viktiga färger
- Forest `#596e5c` (primär)
- Sand `#F1EADA` (ljus bakgrund/highlight)
- Stone `#E2E2DE` (bakgrund)
- Midnight `#2E333A`, Onyx `#1C1C1B` (text/kontrast)

## Tillgänglighet
- Semantisk struktur med `header/nav/main/section/footer`
- Synligt fokusläge, tangentbordsnavigerbar mobilmeny
- Formulär med etiketter, felmeddelanden nära fält och `aria-live`
- Respekt för `prefers-reduced-motion`

## Att göra om du vill fortsätta
- Lägg till riktiga bilder (använd `next/image`) och uppdatera alt-texter.
- Justera copy och lägg till fler case.
- Lägg till GitHub Actions för Pages-deploy (t.ex. `actions/upload-pages-artifact` + `deploy-pages`).
