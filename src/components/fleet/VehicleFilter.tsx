import type { VehicleType } from '../../types';

interface VehicleFilterProps {
  selectedType: VehicleType | 'all';
  onTypeChange: (type: VehicleType | 'all') => void;
}

const vehicleTypes: (VehicleType | 'all')[] = ['all', 'SUV', 'Van', 'Mini-Bus', 'Compact', 'Sedan', 'Luxury', 'Pickup'];

export default function VehicleFilter({ selectedType, onTypeChange }: VehicleFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {vehicleTypes.map((type) => (
        <button
          key={type}
          onClick={() => onTypeChange(type)}
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
  );
}