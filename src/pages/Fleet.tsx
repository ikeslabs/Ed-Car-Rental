import { useState } from 'react';
import { useVehicles } from '../hooks/useVehicles';
import VehicleCard from '../components/vehicles/VehicleCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { SearchBar } from '../components/fleet/Searchbar'; // Adjust the import path as needed
import type { VehicleType } from '../types';

export default function Fleet() {
  const { vehicles, loading, error } = useVehicles();
  const [selectedType, setSelectedType] = useState<VehicleType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const vehicleTypes: (VehicleType | 'all')[] = ['all', 'SUV', 'Van', 'Mini-Bus', 'Compact', 'Sedan', 'Luxury', 'Pickup'];

  // Filter vehicles by type
  const filteredByType = selectedType === 'all'
    ? vehicles
    : vehicles.filter((vehicle) => vehicle.type === selectedType);

  // Further filter by search query
  const filteredVehicles = filteredByType.filter((vehicle) =>
    vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) // Assuming vehicles have a `name` property
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Fleet</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our diverse range of vehicles, from compact cars to luxury SUVs, perfect for any occasion.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Vehicle Type Filters */}
            {vehicleTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedType === type
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type === 'all' ? 'All Vehicles' : type}
              </button>
            ))}

            {/* Search Bar */}
            <SearchBar value={searchQuery} onChange={setSearchQuery}
            placeholder="Search vehicles..."  />
          </div>
        </div>
      </div>

      {/* Vehicles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredVehicles.length > 0 ? (
                filteredVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))
              ) : (
                <div className="text-center col-span-full text-gray-600">
                  No vehicles match your search criteria.
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
