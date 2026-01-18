export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  status: 'For Sale' | 'For Rent' | 'Sold' | 'Pending';
  address: string;
  city: string;
  state: string;
  zipCode: string;
  beds: number;
  baths: number;
  sqft: number;
  lotSize?: string;
  yearBuilt?: number;
  propertyType: 'House' | 'Condo' | 'Townhouse' | 'Land' | 'Commercial';
  features: string[];
  images: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ListingsResponse {
  listings: Listing[];
}
