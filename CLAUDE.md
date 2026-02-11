# CLAUDE.md — Project Guide

## Project Overview
Luxury real estate listings site built with **Astro 5** + **Tailwind CSS 3**. Static site deployed to GitHub Pages with a custom domain.

- **Live URL**: https://vallartaluxuryliving.com
- **Repo**: themikemoniker/real-estate-static-site-sample

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build (output: `dist/`)
- `npm run preview` — preview production build locally

## Deployment
Push to `main` triggers automatic deploy via `.github/workflows/deploy.yml` (GitHub Pages).

## Architecture
```
src/
├── components/    # Reusable Astro components (Header, Footer, ListingCard, WhatsAppButton)
├── data/          # Listing data + types (sample data or Google Sheets CSV)
├── layouts/       # Layout.astro — wraps all pages
├── pages/         # Route pages (index, 404, listing/[id])
└── styles/        # global.css (Tailwind base)
```

## Key Conventions
- **Brand**: "Vallarta Luxury Living" — displayed as `Vallarta` (gold) + `Luxury` (white) in header/footer. Contact email: `contact@vallartaluxuryliving.com`.
- **Internal links**: Use `import.meta.env.BASE_URL` for all internal `href` values. Since `BASE_URL` includes a trailing slash, concatenate without adding another slash: `${base}listing/${id}` not `${base}/listing/${id}`.
- **SEO**: Layout.astro accepts `title`, `description`, and optional `image` props. Open Graph and Twitter Card meta tags are generated automatically. Listing pages pass their hero image for rich previews.
- **Listings data**: `src/data/listings.ts` — returns sample data by default; set `GOOGLE_SHEET_URL` to fetch from a published Google Sheet CSV.
- **Styling**: Dark luxury theme. Primary gold `#d4af37`, dark backgrounds `#1a1a1a` / `#0d0d0d`. Fonts: Playfair Display (headings), Inter (body).
- **Favicon**: `public/favicon.svg` — "VL" monogram in gold on dark background.
- **Images**: Listing images are external URLs (Unsplash). No local image assets to manage.
