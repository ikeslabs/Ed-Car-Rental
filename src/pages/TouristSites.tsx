import { useState } from 'react';
import { useTouristSites } from '../hooks/useTouristSites';
import TouristSiteCard from '../components/tourist-sites/TouristSiteCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { SearchBar } from '../components/fleet/Searchbar'; // Adjust import path as needed

export default function TouristSites() {
  const { sites, loading, error } = useTouristSites();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter tourist sites based on search query
  const filteredSites = sites.filter((site) =>
    site.name.toLowerCase().includes(searchQuery.toLowerCase()) // Assuming tourist sites have a `name` property
  );

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Search Tourist Sites</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore Ghana's most beautiful destinations with our comfortable and reliable vehicles.
          </p>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search tourist sites..." // Updated placeholder for specificity
          />
        </div>
      </div>

      {/* Tourist Sites Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSites.length > 0 ? (
                filteredSites.map((site) => (
                  <TouristSiteCard key={site.id} site={site} />
                ))
              ) : (
                <div className="text-center col-span-full text-gray-600">
                  No tourist sites match your search criteria.
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
