export interface TouristSite {
  id: number;
  name: string;
  description: string;
  image: string;
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
  id: number;
  name: string;
  type: VehicleType;
  description: string;
  image: string;
  features: string[];
}

export type VehicleType = 'SUV' | 'Van' | 'Mini-Bus' | 'Compact' | 'Sedan' | 'Luxury' | 'Pickup';