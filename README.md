# Vallarta Luxury Living

> **Client onboarding guide**: [docs/onboarding.md](docs/onboarding.md) — how to add/edit/remove listings, upload images, and deploy.

Luxury real estate listings site for Puerto Vallarta properties. Built with Astro 5 and Tailwind CSS. Listings are managed via a Google Sheet, contact form leads are captured via Google Apps Script, and the site deploys automatically to GitHub Pages.

**Live site**: [vallartaluxuryliving.com](https://vallartaluxuryliving.com)

## Architecture

```
src/
├── components/          # Reusable UI components
│   ├── Header.astro       # Nav bar with mobile hamburger menu
│   ├── Footer.astro       # Site footer with contact info & links
│   ├── ListingCard.astro  # Property card (used on homepage grid)
│   └── WhatsAppButton.astro  # Floating WhatsApp chat button
├── data/
│   ├── listings.ts        # Fetches & caches listings from Google Sheets CSV
│   └── types.ts           # Listing TypeScript interface
├── layouts/
│   └── Layout.astro       # Base layout (head, meta tags, OG/Twitter cards)
├── pages/
│   ├── index.astro        # Homepage — hero, listing grid
│   ├── contact.astro      # Contact form (posts to Google Apps Script)
│   ├── 404.astro          # Custom 404 page
│   └── listing/
│       └── [id].astro     # Dynamic listing detail page (image gallery, lightbox, sidebar)
├── styles/
│   └── global.css         # Tailwind base + component classes (btn-primary, btn-secondary, etc.)
docs/
├── onboarding.md          # Client guide for managing listings
└── google-apps-script.js  # Apps Script: contact form handler + deploy button
public/
└── favicon.svg            # "VL" monogram favicon
```

## How It Works

### Data Flow

1. **Google Sheet** (client edits listings) → published as CSV
2. **Astro build** fetches the CSV at build time via `GOOGLE_SHEET_URL` env var
3. `getListings()` parses CSV into typed `Listing[]` objects (cached per build)
4. `getStaticPaths()` generates a static HTML page for each listing
5. **GitHub Pages** serves the static `dist/` output

### Deployment Triggers

| Trigger | How |
|---------|-----|
| Code push to `main` | Automatic via GitHub Actions |
| Google Sheet deploy button | Client clicks **Deploy > Publish site now** in the spreadsheet |
| Manual | GitHub Actions > workflow_dispatch |
| Scheduled | Cron every 12 hours (picks up sheet changes automatically) |

### Contact Form

The `/contact` page submits to a Google Apps Script web app (`PUBLIC_FORM_URL`). The script writes leads to a "Leads" tab in the same Google Sheet. The form uses `mode: 'no-cors'` with `application/x-www-form-urlencoded` since Apps Script redirects on POST.

### Google Sheet Deploy Button

The Apps Script (`docs/google-apps-script.js`) includes an `onOpen()` trigger that adds a "Deploy" menu to the spreadsheet. Clicking "Publish site now" calls the GitHub Actions `workflow_dispatch` API with a stored fine-grained PAT (Actions write permission only). The token is stored in Apps Script Properties, not in the sheet.

## Tech Stack

- **Framework**: [Astro 5](https://astro.build) — static site generation
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com) — dark luxury theme, gold `#d4af37`
- **Fonts**: Playfair Display (headings), Inter (body) via Google Fonts
- **CMS**: Google Sheets (published as CSV, fetched at build time)
- **Contact form**: Google Apps Script web app
- **Hosting**: GitHub Pages with custom domain
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`)
- **Images**: Cloudinary or Unsplash (external URLs, pipe `|` separated in sheet)

## Development

```bash
npm install       # Install dependencies
npm run dev       # Start dev server (http://localhost:4321)
npm run build     # Production build (output: dist/)
npm run preview   # Preview production build locally
```

## Environment Variables

Set these as **GitHub repository secrets** (Settings > Secrets and variables > Actions):

| Variable | Description | Scope |
|----------|-------------|-------|
| `GOOGLE_SHEET_URL` | Published Google Sheet CSV URL | Server-side (build only) |
| `PUBLIC_FORM_URL` | Google Apps Script web app URL for contact form | Client-side (exposed in bundle) |

For local development without these variables, the site falls back to built-in sample listing data and the contact form will be non-functional.

## Key Conventions

- **Internal links**: Use `import.meta.env.BASE_URL` for all hrefs. `BASE_URL` includes a trailing slash, so use `${base}listing/${id}` (not `${base}/listing/${id}`).
- **Image separator**: Use pipe `|` (not comma) in the Google Sheet to separate multiple image URLs, since Cloudinary URLs contain commas.
- **Listing validation**: A listing must have a non-empty `title` and `price > 0` to appear on the site.
- **Listing cache**: `getListings()` caches its result per build so all pages (homepage + detail pages) share the same data from a single fetch.
- **SEO**: `Layout.astro` accepts `title`, `description`, and optional `image` props for Open Graph and Twitter Card meta tags.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).
