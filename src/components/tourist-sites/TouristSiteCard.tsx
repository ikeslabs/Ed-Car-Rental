import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import type { TouristSite } from '../../types';

interface TouristSiteCardProps {
  site: TouristSite;
}

export default function TouristSiteCard({ site }: TouristSiteCardProps) {
  const handleViewOnMap = () => {
    const searchQuery = encodeURIComponent(`${site.name}, Ghana`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${searchQuery}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img
        src={site.image}
        alt={site.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
        <p className="text-gray-600 mb-4">{site.description}</p>
        <div className="flex gap-2">
          <button
            onClick={handleViewOnMap}
            className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors"
          >
            <MapPin className="h-4 w-4" />
            View on Map
          </button>
          <Link
            to="/booking"
            className="flex-1 inline-block bg-blue-600 text-white text-center px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Book a Ride
          </Link>
        </div>
      </div>
    </div>
  );
}