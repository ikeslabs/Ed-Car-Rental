import { Link } from 'react-router-dom';
import type { Vehicle } from '../../types';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative flex flex-col h-full">
      <img
        src={vehicle.image}
        alt={vehicle.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{vehicle.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {vehicle.type}
          </span>
        </div>
        <p className="text-gray-600 mb-4 hidden md:block">{vehicle.description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
          <div className="flex flex-wrap gap-2">
            {vehicle.features.map((feature: string, index: number) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <Link
            to={`/booking?vehicle=${vehicle.id}`}
            className="inline-block w-full bg-blue-600 text-white text-center px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Request This Car
          </Link>
        </div>
      </div>
    </div>
  );
}