import { useEffect, useState } from 'react';
import { fetchTouristSites } from '../services/firebase';
import { TouristSite } from '../types';
import TouristSiteCard from '../components/tourist-sites/TouristSiteCard';
import LoadingSpinner from '../components/common/LoadingSpinner';

export default function TouristSites() {
  const [sites, setSites] = useState<TouristSite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSites = async () => {
      try {
        const data = await fetchTouristSites();
        setSites(data);
      } catch (err) {
        setError('Error loading tourist sites. Please try again later.');
        console.error('Error fetching tourist sites:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSites();
  }, []);

  if (error) {
    return (
      <div className="pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center text-red-600">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tourist Sites</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore Ghana's most beautiful and historic locations with our guided tours.
          </p>
        </div>
      </div>

      {/* Tourist Sites Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sites.map((site) => (
                <TouristSiteCard key={site.id} site={site} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
