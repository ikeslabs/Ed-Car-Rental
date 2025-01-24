import { SpotCategory } from '../../types';
import ImageCarousel from '../common/ImageCarousel';

interface SpotCardProps {
  spot: SpotCategory;
}

export default function SpotCard({ spot }: SpotCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      <ImageCarousel
        images={spot.images}
        alt={spot.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{spot.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{spot.description}</p>
        <div className="text-center mt-auto">
          <a
            href="#booking"
            className="w-full sm:w-auto inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
} 