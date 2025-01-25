export type VehicleType = 'SUV' | 'Van' | 'Mini-Bus' | 'Compact' | 'Sedan' | 'Luxury' | 'Pickup';

export interface TouristSite {
  id: string;
  name: string;
  description: string;
  images: string[]; // Array of image URLs
  // ... other properties
}

export interface Vehicle {
  id: string;
  name: string;
  description: string;
  images: string[]; // Array of image URLs
  type: VehicleType;
  features: string[];
  // ... other properties
}

export type SpotCategoryType = 'beach' | 'hotel' | 'studio' | 'nightclub';

export interface SpotCategory {
  id: string;
  name: string;
  description: string;
  images: string[]; // Added images array
  type: SpotCategoryType;
  // ... other properties
} 