import { useState } from 'react';

interface BookingTypeSelectorProps {
  onTypeChange: (type: 'vehicle' | 'tourist-site') => void;
}

export default function BookingTypeSelector({ onTypeChange }: BookingTypeSelectorProps) {
  const [selectedType, setSelectedType] = useState<'vehicle' | 'tourist-site'>('vehicle');

  const handleTypeChange = (type: 'vehicle' | 'tourist-site') => {
    setSelectedType(type);
    onTypeChange(type);
  };

  return (
    <div className="flex gap-4 mb-6">
      <button
        type="button"
        onClick={() => handleTypeChange('vehicle')}
        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
          selectedType === 'vehicle'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Rent a Vehicle
      </button>
      <button
        type="button"
        onClick={() => handleTypeChange('tourist-site')}
        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
          selectedType === 'tourist-site'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Visit Tourist Site
      </button>
    </div>
  );
}