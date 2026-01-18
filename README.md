# LuxeEstates - Luxury Real Estate Site

A mobile-first, luxury real estate listing site built with Astro and Tailwind CSS. Features a dark theme with gold accents, Google Sheets integration for easy listing management, and a floating WhatsApp button for instant client contact.

## Features

- Mobile-first responsive design
- Luxury dark theme with gold accents
- Google Sheets CMS integration
- Floating WhatsApp contact button
- Property listing cards and detail pages
- Fast static site generation
- SEO-friendly

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Google Sheets Setup

### Step 1: Create Your Spreadsheet

Create a new Google Sheet with these column headers (first row):

| id | title | description | price | status | address | city | state | zipCode | beds | baths | sqft | lotSize | yearBuilt | propertyType | features | images |
|----|-------|-------------|-------|--------|---------|------|-------|---------|------|-------|------|---------|-----------|--------------|----------|--------|

### Step 2: Column Details

| Column | Required | Example | Notes |
|--------|----------|---------|-------|
| id | Yes | `1` | Unique identifier |
| title | Yes | `Modern Luxury Villa` | Property title |
| description | Yes | `Beautiful home with...` | Full description |
| price | Yes | `2450000` | Number only, no $ or commas |
| status | Yes | `For Sale` | `For Sale`, `For Rent`, `Sold`, or `Pending` |
| address | Yes | `123 Main St` | Street address |
| city | Yes | `Los Angeles` | City name |
| state | Yes | `CA` | State abbreviation |
| zipCode | Yes | `90210` | ZIP/postal code |
| beds | Yes | `4` | Number of bedrooms |
| baths | Yes | `3.5` | Number of bathrooms |
| sqft | Yes | `3200` | Square footage |
| lotSize | No | `0.5 acres` | Lot size with unit |
| yearBuilt | No | `2020` | Year built |
| propertyType | Yes | `House` | `House`, `Condo`, `Townhouse`, `Land`, or `Commercial` |
| features | No | `Pool,Garage,Smart Home` | Comma-separated list |
| images | Yes | `url1,url2,url3` | Comma-separated image URLs |

### Step 3: Host Your Images

For images, you can use:

1. **Google Drive** (Free)
   - Upload image to Google Drive
   - Right-click → Share → Anyone with link
   - Copy link and convert to direct URL:
   - Original: `https://drive.google.com/file/d/FILE_ID/view`
   - Direct: `https://drive.google.com/uc?id=FILE_ID`

2. **Cloudinary** (Free tier: 25GB)
   - Sign up at cloudinary.com
   - Upload images
   - Copy the URL directly

3. **Unsplash/Pexels** (Free stock photos for testing)

### Step 4: Publish Your Sheet

1. In Google Sheets, go to **File → Share → Publish to web**
2. Select **Entire Document** and **Comma-separated values (.csv)**
3. Click **Publish**
4. Copy the generated URL

### Step 5: Connect to Your Site

Open `src/data/listings.ts` and replace the empty `GOOGLE_SHEET_URL`:

```typescript
const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pub?output=csv';
```

That's it! Your listings will now sync from Google Sheets.

## Customization

### WhatsApp Number

Edit `src/components/WhatsAppButton.astro`:

```typescript
const phoneNumber = 'YOUR_PHONE_NUMBER'; // Include country code, no + or spaces
```

### Branding

- **Colors**: Edit `tailwind.config.mjs` to change the gold and dark color schemes
- **Fonts**: Update the Google Fonts import in `src/styles/global.css`
- **Logo**: Edit the text in `src/components/Header.astro` and `src/components/Footer.astro`

### Stats Section

Edit the stats in `src/pages/index.astro` to reflect your real numbers.

## Deployment

### Cloudflare Pages (Recommended - Free)

1. Push your code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect your GitHub repo
4. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Output directory: `dist`

### Netlify (Free tier)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import your repo
4. Build settings are auto-detected

### Vercel (Free tier)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repo
4. Build settings are auto-detected

## Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ListingCard.astro
│   │   └── WhatsAppButton.astro
│   ├── data/
│   │   ├── listings.ts      # Data fetching & sample data
│   │   └── types.ts         # TypeScript types
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   └── listing/
│   │       └── [id].astro   # Property detail page
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Future Improvements

- [ ] Add search/filter functionality
- [ ] Image upload form (to simplify agent workflow)
- [ ] Migrate to Sanity CMS for better image handling
- [ ] Add AI chatbot for lead qualification
- [ ] Add property comparison feature
- [ ] Add favorites/saved properties

## License

MIT
