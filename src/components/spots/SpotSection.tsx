import { useEffect, useState } from 'react';
import { fetchSpotsByCategory } from '../../services/firebase';
import { SpotCategory, SpotCategoryType } from '../../types';
import SpotCard from './SpotCard';
import LoadingSpinner from '../common/LoadingSpinner';

interface SpotSectionProps {
  title: string;
  description: string;
  type: SpotCategoryType;
}

export default function SpotSection({ title, description, type }: SpotSectionProps) {
  const [spots, setSpots] = useState<SpotCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSpots = async () => {
      try {
        const data = await fetchSpotsByCategory(type);
        setSpots(data);
      } catch (err) {
        setError(`Error loading ${type}s. Please try again later.`);
        console.error(`Error fetching ${type}s:`, err);
      } finally {
        setLoading(false);
      }
    };

    loadSpots();
  }, [type]);

  if (error) {
    return (
      <div className="text-center text-red-600 py-20">
        {error}
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center text-gray-700 mb-12">
          {description}
        </p>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spots.map((spot) => (
              <SpotCard key={spot.id} spot={spot} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 