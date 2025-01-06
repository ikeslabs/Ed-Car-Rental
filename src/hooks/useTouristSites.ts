import { useState, useEffect } from 'react';
import type { TouristSite } from '../types';
// import { touristSites as sitesData } from '../data/touristSites';

export function useTouristSites() {
  const [sites, setSites] = useState<TouristSite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSites = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        const sitesData = await import('../data/touristSites').then(module => module.touristSites);
        const formattedSitesData = sitesData.map(site => ({
          ...site,
          id: site.id.toString()
        }));
        setSites(formattedSitesData);
        setLoading(false);
      } catch {
        setError('Failed to load tourist sites');
        setLoading(false);
      }
    };

    fetchSites();
  }, []);

  return { sites, loading, error };
}