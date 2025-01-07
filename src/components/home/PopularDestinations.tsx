import { useState, useEffect } from 'react';
import { fetchTouristSites } from '../../services/firebase';
import TouristSiteCard from '../tourist-sites/TouristSiteCard';
import LoadingSpinner from '../common/LoadingSpinner';
import { Link } from 'react-router-dom';
import type { TouristSite } from '../../types';

export default function PopularDestinations() {
  const [sites, setSites] = useState<TouristSite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSites = async () => {
      try {
        const data = await fetchTouristSites();
        setSites(data);
      } catch (err) {
        setError('Error loading destinations. Please try again later.');
        console.error('Error fetching tourist sites:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSites();
  }, []);

  const popularSites = sites.slice(0, 3); // Show only first 3 sites

  if (error) {
    return (
      <div className="text-center text-red-600 py-20">
        {error}
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Popular Destinations</h2>
          <Link
            to="/tourist-sites"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View All →
          </Link>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularSites.map((site) => (
              <TouristSiteCard key={site.id} site={site} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}