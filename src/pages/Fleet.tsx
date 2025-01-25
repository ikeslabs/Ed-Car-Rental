import { useState, useEffect } from 'react';
import { fetchVehicles } from '../services/firebase';
import VehicleCard from '../components/fleet/VehicleCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import type { Vehicle, VehicleType } from '../types';

export default function Fleet() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<VehicleType | 'all'>('all');

  const vehicleTypes: (VehicleType | 'all')[] = ['all', 'SUV', 'Van', 'Mini-Bus', 'Compact', 'Sedan', 'Luxury', 'Pickup'];

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const data = await fetchVehicles();
        setVehicles(data);
      } catch (err) {
        setError('Error loading vehicles. Please try again later.');
        console.error('Error fetching vehicles:', err);
      } finally {
        setLoading(false);
      }
    };

    loadVehicles();
  }, []);

  const filteredVehicles = selectedType === 'all'
    ? vehicles
    : vehicles.filter(vehicle => vehicle.type === selectedType);

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
          <div className="flex flex-wrap gap-2 justify-center">
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
          </div>
        </div>
      </div>

      {/* Vehicles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}