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
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{site.description}</p>
        <div className="text-center mt-auto">
          <Link
            to="/booking"
            className="w-full sm:w-auto inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Book a Ride
          </Link>
        </div>
      </div>
    </div>
  );
}
