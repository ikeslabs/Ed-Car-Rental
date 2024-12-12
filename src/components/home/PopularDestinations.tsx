import { useTouristSites } from '../../hooks/useTouristSites';
import TouristSiteCard from '../tourist-sites/TouristSiteCard';
import LoadingSpinner from '../common/LoadingSpinner';
import { Link } from 'react-router-dom';

export default function PopularDestinations() {
  const { sites, loading, error } = useTouristSites();
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
          <div className="grid md:grid-cols-3 gap-8">
            {popularSites.map((site) => (
              <TouristSiteCard key={site.id} site={site} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}