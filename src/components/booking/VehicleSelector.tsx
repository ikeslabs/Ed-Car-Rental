import { useVehicles } from '../../hooks/useVehicles';
import LoadingSpinner from '../common/LoadingSpinner';

interface VehicleSelectorProps {
  selectedVehicle: string;
  onVehicleChange: (vehicleId: string) => void;
}

export default function VehicleSelector({ selectedVehicle, onVehicleChange }: VehicleSelectorProps) {
  const { vehicles, loading, error } = useVehicles();

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Select Vehicle
      </label>
      <select
        value={selectedVehicle}
        onChange={(e) => onVehicleChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Select a vehicle</option>
        {vehicles.map((vehicle) => (
          <option key={vehicle.id} value={vehicle.id}>
            {vehicle.name} ({vehicle.type})
          </option>
        ))}
      </select>
    </div>
  );
}