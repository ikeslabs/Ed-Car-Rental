import { useState, useEffect } from 'react';
import { fetchVehicles } from '../../services/firebase';
import VehicleCard from '../fleet/VehicleCard';
import LoadingSpinner from '../common/LoadingSpinner';
import type { Vehicle } from '../../types';
import { Link } from 'react-router-dom';

export default function FeaturedVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const data = await fetchVehicles();
        setVehicles(data.slice(0, 4)); // Show only first 4 vehicles
      } catch (err) {
        setError('Error loading vehicles. Please try again later.');
        console.error('Error fetching vehicles:', err);
      } finally {
        setLoading(false);
      }
    };

    loadVehicles();
  }, []);

  if (error) {
    return (
      <div className="text-center text-red-600 py-20">
        {error}
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Vehicles</h2>
          <Link
            to="/fleet"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View All →
          </Link>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}