export interface TouristSite {
  id: string;
  name: string;
  description: string;
  image: string;
  location?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  site?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  description: string;
  image: string;
  capacity: number;
  price: number;
  type: VehicleType;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type VehicleType = 'SUV' | 'Van' | 'Mini-Bus' | 'Compact' | 'Sedan' | 'Luxury' | 'Pickup';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface SpotCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  type: 'hotel' | 'beach' | 'studio' | 'nightclub' | 'restaurant';
  rating?: number;
  location?: string;
}

export interface CategorySection {
  title: string;
  type: SpotCategory['type'];
  description: string;
}