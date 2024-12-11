import { useState } from 'react';
import { vehicles } from '../../data/vehicles';
import type { VehicleType } from '../../types';
import VehicleCard from './VehicleCard';
import VehicleFilter from './VehicleFilter';

export default function FleetShowcase() {
  const [selectedType, setSelectedType] = useState<VehicleType | 'all'>('all');

  const filteredVehicles = selectedType === 'all'
    ? vehicles
    : vehicles.filter(vehicle => vehicle.type === selectedType);

  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Fleet</h2>
        
        <VehicleFilter
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}