# Client Onboarding Guide

Welcome to **Vallarta Luxury Living**! This guide explains how to manage your property listings using the Google Sheet connected to your website at [vallartaluxuryliving.com](https://vallartaluxuryliving.com).

---

## Table of Contents

- [Adding a New Property](#adding-a-new-property)
- [Editing an Existing Property](#editing-an-existing-property)
- [Removing a Property](#removing-a-property)
- [Adding Images](#adding-images)
- [Publishing Changes](#publishing-changes)
- [Column Reference](#column-reference)
- [Tips for Great Listings](#tips-for-great-listings)
- [Contact Form Leads](#contact-form-leads)
- [Troubleshooting](#troubleshooting)

---

## Adding a New Property

1. Open your Google Sheet (the one connected to the website)
2. Go to the bottom of your existing listings and add a new row
3. Fill in each column following the [Column Reference](#column-reference) below
4. [Publish your changes](#publishing-changes)

### Example Row

| id | title | description | price | status | address | city | state | zipcode | beds | baths | sqft | lotsize | yearbuilt | propertytype | features | images |
|----|-------|-------------|-------|--------|---------|------|-------|---------|------|-------|------|---------|-----------|--------------|----------|--------|
| 103 | Luxury Beachfront Condo | Beautiful oceanview condo... | 450000 | For Sale | Av. Las Garzas 789 | Puerto Vallarta | Jalisco | 48300 | 2 | 2 | 1500 | N/A | 2022 | Condo | Ocean Views,Pool,Gym | url1\|url2\|url3 |

---

## Editing an Existing Property

Simply find the row for the property you want to change and update the cell values directly. Common edits:

- **Change the price**: Update the `price` column (numbers only, no `$` or commas)
- **Mark as sold**: Change the `status` column to `Sold`
- **Update description**: Edit the `description` column
- **Add/remove photos**: Edit the `images` column

After editing, [publish your changes](#publishing-changes).

---

## Removing a Property

You have two options:

- **Delete permanently**: Right-click the row number on the left and select **Delete row**
- **Mark as sold** (recommended): Change the `status` column to `Sold` — the listing will still appear on the site but will be clearly marked as sold

After removing, [publish your changes](#publishing-changes).

---

## Adding Images

### Using Cloudinary (Recommended)

1. Go to [cloudinary.com](https://cloudinary.com) and sign in to your account
2. Click **Upload** and select your photos from your phone or computer
3. After uploading, click on the image and copy the URL
4. Paste the URL into the `images` column

### Multiple Images

Separate multiple image URLs with a **pipe character** `|` (not a comma):

```
https://example.com/photo1.jpg|https://example.com/photo2.jpg|https://example.com/photo3.jpg
```

The **first image** becomes the main photo shown on the listing card and at the top of the detail page. Use 3-5 images per listing.

### Using Unsplash (Free Stock Photos)

For placeholder or demo images, you can use Unsplash URLs like:
```
https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80
```

---

## Publishing Changes

After making changes to your spreadsheet, you need to publish them to the live website.

### Option 1: Deploy Menu (Recommended)

1. In your Google Sheet, click the **Deploy** menu in the menu bar
2. Click **Publish site now**
3. You'll see a confirmation: "Deploy triggered!"
4. The website will update in about **30 seconds**

### Option 2: Automatic Updates

The website automatically rebuilds every **12 hours**, so even if you forget to deploy, your changes will appear within half a day.

### First-Time Deploy Menu Setup

If you don't see the "Deploy" menu:

1. Go to **Extensions > Apps Script**
2. Make sure the deploy script code is in the editor (see `docs/google-apps-script.js`)
3. Save the script (Ctrl+S)
4. Click **Deploy > Manage deployments > edit (pencil) > Version: New version > Deploy**
5. Close the Apps Script editor
6. Reload the spreadsheet
7. Click **Deploy > Set GitHub token** and paste your GitHub token

---

## Column Reference

| Column | Required | Example | Notes |
|--------|----------|---------|-------|
| **id** | Yes | `101` | Unique number for each listing |
| **title** | Yes | `Oceanfront Villa in Conchas Chinas` | Short, catchy title |
| **description** | Yes | `Stunning beachfront villa with...` | Full property description |
| **price** | Yes | `850000` | Numbers only — no `$`, no commas |
| **status** | Yes | `For Sale` | One of: `For Sale`, `For Rent`, `Sold`, `Pending` |
| **address** | Yes | `Calle Santa Barbara 123` | Street address |
| **city** | Yes | `Puerto Vallarta` | City name |
| **state** | Yes | `Jalisco` | State or province |
| **zipcode** | Yes | `48399` | ZIP or postal code |
| **beds** | Yes | `4` | Number of bedrooms |
| **baths** | Yes | `3.5` | Number of bathrooms (decimals OK) |
| **sqft** | Yes | `3200` | Square footage (numbers only) |
| **lotsize** | No | `0.25 acres` | Lot size with unit, or `N/A` |
| **yearbuilt** | No | `2021` | Year the property was built |
| **propertytype** | Yes | `House` | One of: `House`, `Condo`, `Townhouse`, `Land`, `Commercial` |
| **features** | No | `Ocean Views,Infinity Pool,Gym` | Comma-separated list of features |
| **images** | Yes | `url1\|url2\|url3` | Pipe-separated (`\|`) image URLs |

---

## Tips for Great Listings

- **Photos**: Use 3-5 high-quality photos. The first photo is the main image shown everywhere.
- **Titles**: Keep them short and descriptive (under 50 characters). Include the neighborhood or key feature.
- **Descriptions**: Highlight what makes the property special. Mention views, amenities, location, and lifestyle.
- **Price**: Always use numbers only. `850000` not `$850,000`.
- **Features**: List the most appealing features first. These appear as checkmarks on the listing page.
- **Status**: Use `Pending` to temporarily hide a listing without deleting it. Use `Sold` to show it was sold.

---

## Contact Form Leads

When someone fills out the contact form on the website, their information is automatically saved to a **Leads** tab in your Google Sheet. You'll find:

| Column | Description |
|--------|-------------|
| Timestamp | When the form was submitted |
| Name | Contact's full name |
| Email | Contact's email address |
| Phone | Contact's phone number (if provided) |
| Interest | What they're interested in (Buying, Renting, etc.) |
| Message | Their message |

Check this tab regularly to follow up with potential clients.

---

## Troubleshooting

### My changes aren't showing up
- Did you click **Deploy > Publish site now**? Changes don't appear until you deploy.
- Wait 30 seconds after deploying, then hard-refresh the website (Ctrl+Shift+R).
- If you didn't deploy, changes will still appear within 12 hours automatically.

### A listing isn't appearing
- Make sure the `title` column is not empty
- Make sure the `price` column has a number greater than 0
- Both `title` and `price > 0` are required for a listing to appear

### Images aren't showing
- Make sure the image URL is a direct link to the image (ends in .jpg, .png, etc., or is a valid Unsplash/Cloudinary URL)
- Make sure multiple images are separated by `|` (pipe), not commas
- Test the URL by pasting it directly in your browser — you should see the image

### Deploy button says "Deploy failed"
- Your GitHub token may have expired. Go to **Deploy > Set GitHub token** and paste a new one.
- Generate a new token at: GitHub > Settings > Developer settings > Personal access tokens > Fine-grained tokens
