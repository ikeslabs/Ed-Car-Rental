import { useState, useEffect } from 'react';
import type { TouristSite } from '../types';
import { touristSites as sitesData } from '../data/touristSites';

export function useTouristSites() {
  const [sites, setSites] = useState<TouristSite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSites = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSites(sitesData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load tourist sites');
        setLoading(false);
      }
    };

    fetchSites();
  }, []);

  return { sites, loading, error };
}