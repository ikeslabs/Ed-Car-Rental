import { useVehicles } from '../../hooks/useVehicles';
import VehicleCard from '../vehicles/VehicleCard';
import LoadingSpinner from '../common/LoadingSpinner';
import { Link } from 'react-router-dom';

export default function FeaturedVehicles() {
  const { vehicles, loading, error } = useVehicles();
  const featuredVehicles = vehicles.slice(0, 4); // Show only first 4 vehicles

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
          <div className="grid md:grid-cols-3  gap-8">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}