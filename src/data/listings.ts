import type { Listing } from './types';

// Sample data - Replace with Google Sheets fetch in production
export const sampleListings: Listing[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa with Ocean Views',
    description: 'Experience coastal living at its finest in this stunning modern villa. Floor-to-ceiling windows showcase breathtaking ocean views from nearly every room. The open-concept living space features high ceilings, premium finishes, and seamless indoor-outdoor flow to the expansive terrace and infinity pool. The gourmet kitchen boasts top-of-the-line appliances, custom cabinetry, and a large island perfect for entertaining. The primary suite is a true retreat with a spa-like bathroom and private balcony. Smart home technology throughout.',
    price: 2450000,
    status: 'For Sale',
    address: '123 Coastal Drive',
    city: 'Malibu',
    state: 'CA',
    zipCode: '90265',
    beds: 5,
    baths: 4.5,
    sqft: 4200,
    lotSize: '0.75 acres',
    yearBuilt: 2022,
    propertyType: 'House',
    features: [
      'Ocean Views',
      'Infinity Pool',
      'Smart Home',
      'Wine Cellar',
      'Home Theater',
      '3-Car Garage',
      'Outdoor Kitchen',
      'Private Beach Access',
    ],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
  },
  {
    id: '2',
    title: 'Elegant Downtown Penthouse',
    description: 'Situated atop one of downtown\'s most prestigious buildings, this penthouse offers unparalleled luxury and city views. The residence spans the entire top floor with 360-degree views through floor-to-ceiling windows. Custom Italian finishes, rare marble surfaces, and designer fixtures throughout. The chef\'s kitchen features Gaggenau appliances and a butler\'s pantry. Private elevator access, 24-hour concierge, and exclusive amenities including rooftop lounge and fitness center.',
    price: 3800000,
    status: 'For Sale',
    address: '500 Park Avenue, PH1',
    city: 'New York',
    state: 'NY',
    zipCode: '10022',
    beds: 4,
    baths: 3.5,
    sqft: 3800,
    yearBuilt: 2020,
    propertyType: 'Condo',
    features: [
      'City Views',
      'Private Elevator',
      '24-Hour Concierge',
      'Rooftop Access',
      'Wine Storage',
      'Smart Home',
      'Heated Floors',
      'Custom Closets',
    ],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    ],
  },
  {
    id: '3',
    title: 'Historic Estate with Modern Amenities',
    description: 'A rare opportunity to own a piece of history. This meticulously restored 1920s estate combines timeless elegance with modern luxury. Original architectural details including coffered ceilings, hand-carved moldings, and grand fireplaces have been preserved while integrating contemporary comforts. The grounds feature mature gardens, a tennis court, and a newly constructed pool house. Located in a prestigious gated community with excellent schools nearby.',
    price: 5200000,
    status: 'For Sale',
    address: '888 Heritage Lane',
    city: 'Greenwich',
    state: 'CT',
    zipCode: '06830',
    beds: 7,
    baths: 6,
    sqft: 8500,
    lotSize: '2.5 acres',
    yearBuilt: 1925,
    propertyType: 'House',
    features: [
      'Historic Architecture',
      'Tennis Court',
      'Pool House',
      'Guest House',
      'Library',
      'Wine Cellar',
      'Gated Community',
      'Mature Gardens',
    ],
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    ],
  },
  {
    id: '4',
    title: 'Contemporary Mountain Retreat',
    description: 'Nestled in the mountains with ski-in/ski-out access, this contemporary masterpiece offers the ultimate luxury mountain lifestyle. Walls of glass frame dramatic mountain views while allowing natural light to flood the interior. The great room features a striking stone fireplace and soaring ceilings. Heated outdoor spaces extend living areas year-round. A private spa with sauna and steam room provides relaxation after a day on the slopes.',
    price: 4100000,
    status: 'For Sale',
    address: '45 Summit Ridge',
    city: 'Aspen',
    state: 'CO',
    zipCode: '81611',
    beds: 6,
    baths: 5,
    sqft: 5600,
    lotSize: '1.2 acres',
    yearBuilt: 2021,
    propertyType: 'House',
    features: [
      'Mountain Views',
      'Ski-In/Ski-Out',
      'Private Spa',
      'Heated Driveway',
      'Hot Tub',
      'Game Room',
      'Mudroom',
      'Radiant Heating',
    ],
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
    ],
  },
  {
    id: '5',
    title: 'Luxury Waterfront Condo',
    description: 'Wake up to stunning waterfront views in this beautifully appointed luxury condo. Recently renovated with designer finishes throughout. The open floor plan maximizes the spectacular views from every room. Gourmet kitchen with quartz countertops and premium appliances. Resort-style amenities include pool, fitness center, and private marina with boat slip included. Minutes from world-class dining and shopping.',
    price: 8500,
    status: 'For Rent',
    address: '200 Marina Bay Drive, Unit 1502',
    city: 'Miami',
    state: 'FL',
    zipCode: '33131',
    beds: 3,
    baths: 2,
    sqft: 2100,
    yearBuilt: 2019,
    propertyType: 'Condo',
    features: [
      'Waterfront',
      'Boat Slip',
      'Pool',
      'Fitness Center',
      'Concierge',
      'Balcony',
      'In-Unit Laundry',
      'Parking Included',
    ],
    images: [
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
    ],
  },
  {
    id: '6',
    title: 'Charming Townhouse in Historic District',
    description: 'Discover urban living at its best in this beautifully updated townhouse located in the heart of the historic district. Exposed brick, hardwood floors, and original details blend seamlessly with modern updates. The renovated kitchen features custom cabinetry and stainless appliances. A private rooftop deck offers city views and space for entertaining. Walk to restaurants, shops, and cultural attractions.',
    price: 925000,
    status: 'For Sale',
    address: '42 Beacon Street',
    city: 'Boston',
    state: 'MA',
    zipCode: '02108',
    beds: 3,
    baths: 2.5,
    sqft: 2400,
    yearBuilt: 1890,
    propertyType: 'Townhouse',
    features: [
      'Historic Character',
      'Rooftop Deck',
      'Exposed Brick',
      'Hardwood Floors',
      'Updated Kitchen',
      'Walk to Transit',
      'Private Garden',
      'Central A/C',
    ],
    images: [
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    ],
  },
];

// Google Sheets integration
// To use: Publish your Google Sheet as CSV, then replace the URL below
const GOOGLE_SHEET_URL = '';

export async function getListings(): Promise<Listing[]> {
  // If no Google Sheet URL is configured, return sample data
  if (!GOOGLE_SHEET_URL) {
    return sampleListings;
  }

  try {
    const response = await fetch(GOOGLE_SHEET_URL);
    const csvText = await response.text();
    return parseCSVToListings(csvText);
  } catch (error) {
    console.error('Error fetching listings from Google Sheets:', error);
    return sampleListings;
  }
}

export async function getListingById(id: string): Promise<Listing | undefined> {
  const listings = await getListings();
  return listings.find((listing) => listing.id === id);
}

function parseCSVToListings(csvText: string): Listing[] {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]);
  const listings: Listing[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length < headers.length) continue;

    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header.trim().toLowerCase().replace(/\s+/g, '')] = values[index]?.trim() || '';
    });

    try {
      const listing: Listing = {
        id: row.id || String(i),
        title: row.title || '',
        description: row.description || '',
        price: parseFloat(row.price) || 0,
        status: (row.status as Listing['status']) || 'For Sale',
        address: row.address || '',
        city: row.city || '',
        state: row.state || '',
        zipCode: row.zipcode || row.zip || '',
        beds: parseInt(row.beds) || 0,
        baths: parseFloat(row.baths) || 0,
        sqft: parseInt(row.sqft) || 0,
        lotSize: row.lotsize || undefined,
        yearBuilt: row.yearbuilt ? parseInt(row.yearbuilt) : undefined,
        propertyType: (row.propertytype as Listing['propertyType']) || 'House',
        features: row.features ? row.features.split(',').map((f) => f.trim()) : [],
        images: row.images ? row.images.split(',').map((url) => url.trim()) : [],
      };

      if (listing.title && listing.price > 0) {
        listings.push(listing);
      }
    } catch (e) {
      console.error('Error parsing row:', i, e);
    }
  }

  return listings;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current);
  return result;
}
