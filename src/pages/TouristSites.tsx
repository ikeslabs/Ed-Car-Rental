import { useTouristSites } from '../hooks/useTouristSites';
import TouristSiteCard from '../components/tourist-sites/TouristSiteCard';
import LoadingSpinner from '../components/common/LoadingSpinner';

export default function TouristSites() {
  const { sites, loading, error } = useTouristSites();

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
            Explore Ghana's most beautiful destinations with our comfortable and reliable vehicles.
          </p>
        </div>
      </div>

      {/* Sites Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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