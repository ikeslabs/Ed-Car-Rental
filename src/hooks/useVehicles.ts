import { useState, useEffect } from 'react';
import type { Vehicle } from '../types';
import { vehicles as vehicleData } from '../data/vehicles';

export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setVehicles(vehicleData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load vehicles');
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  return { vehicles, loading, error };
}