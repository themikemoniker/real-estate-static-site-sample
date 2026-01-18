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

---

## For Agents: How to Add a New Listing

Once the Google Sheet is set up and connected, follow these steps to add a new property:

### Step 1: Open Your Google Sheet
Open the Google Sheet that's connected to your website.

### Step 2: Add a New Row
Go to the bottom of your existing listings and add a new row with the following information:

| Column | What to Enter | Example |
|--------|---------------|---------|
| **id** | Next number in sequence | `7` |
| **title** | Catchy property title | `Stunning Beachfront Villa` |
| **description** | Full property description | `Beautiful 4-bed home with ocean views...` |
| **price** | Price (numbers only, no $ or commas) | `1500000` for sale, `5000` for rent |
| **status** | Current status | `For Sale`, `For Rent`, `Sold`, or `Pending` |
| **address** | Street address | `456 Ocean Blvd, Unit 12` |
| **city** | City | `Miami Beach` |
| **state** | State abbreviation | `FL` |
| **zipCode** | ZIP code | `33139` |
| **beds** | Number of bedrooms | `4` |
| **baths** | Number of bathrooms | `3.5` |
| **sqft** | Square footage | `2800` |
| **lotSize** | Lot size (optional) | `0.25 acres` |
| **yearBuilt** | Year built (optional) | `2021` |
| **propertyType** | Type of property | `House`, `Condo`, `Townhouse`, `Land`, or `Commercial` |
| **features** | Features separated by commas | `Pool,Ocean View,Smart Home,2-Car Garage` |
| **images** | Image URLs separated by commas | `https://...image1.jpg,https://...image2.jpg` |

### Step 3: Add Property Images

**Option A: Use Google Drive (Easiest)**
1. Upload your photos to Google Drive
2. Right-click the image → **Share** → **Anyone with the link**
3. Copy the link (looks like: `https://drive.google.com/file/d/ABC123/view`)
4. Change it to: `https://drive.google.com/uc?id=ABC123`
5. Paste this URL in the **images** column

**Option B: Use Your Phone**
1. Upload photos to Google Drive from your phone
2. Follow the same steps above to get shareable links

### Step 4: Wait for Update
The website updates automatically within **5 minutes** of your changes.

### Tips for Great Listings
- Use **3-5 high-quality photos** per listing (first photo is the main image)
- Write descriptions that highlight **unique features**
- Keep titles **short and catchy** (under 50 characters)
- Double-check the **price** - no dollar signs or commas!

### Need to Edit or Remove a Listing?
- **Edit**: Simply change the values in the spreadsheet
- **Remove**: Delete the entire row or change status to `Sold`
- **Hide temporarily**: Change status to `Pending`

---

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
