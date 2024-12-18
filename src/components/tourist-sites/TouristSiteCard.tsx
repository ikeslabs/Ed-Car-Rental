import { Link } from 'react-router-dom';
import type { TouristSite } from '../../types';

interface TouristSiteCardProps {
  site: TouristSite;
}

export default function TouristSiteCard({ site }: TouristSiteCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      <img
        src={site.image}
        alt={site.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
        <p className="text-gray-600 mb-4">{site.description}</p>
        <div className="text-center">
        <Link
          to="/booking"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Book a Ride
        </Link>
        </div>
      </div>
    </div>
  );
}
