import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { TouristSite, Service, Vehicle } from '../types';

export const fetchTouristSites = async (): Promise<TouristSite[]> => {
  const sitesCollection = collection(db, 'touristSites');
  const sitesSnapshot = await getDocs(sitesCollection);
  return sitesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as TouristSite));
};

export const fetchServices = async (): Promise<Service[]> => {
  const servicesCollection = collection(db, 'services');
  const servicesSnapshot = await getDocs(servicesCollection);
  return servicesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Service));
};

export const fetchVehicles = async (): Promise<Vehicle[]> => {
  const vehiclesCollection = collection(db, 'vehicles');
  const vehiclesSnapshot = await getDocs(vehiclesCollection);
  return vehiclesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Vehicle));
}; 