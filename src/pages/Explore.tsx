import { useState } from 'react';
import SpotSection from '../components/spots/SpotSection';
import type { SpotCategoryType } from '../types';

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState<SpotCategoryType>('beach');

  const categories: { type: SpotCategoryType; title: string; description: string }[] = [
    {
      type: 'beach',
      title: 'Beautiful Beaches',
      description: "Discover Ghana's stunning coastlines and pristine beaches."
    },
    {
      type: 'hotel',
      title: 'Popular Hotels',
      description: 'Find the perfect accommodation for your stay.'
    },
    {
      type: 'studio',
      title: 'Popular Studios',
      description: 'Explore professional photography and recording studios.'
    },
    {
      type: 'nightclub',
      title: 'Vibrant Nightclubs',
      description: "Experience Ghana's exciting nightlife."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Ghana</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the best locations and experiences Ghana has to offer.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(({ type, title }) => (
              <button
                key={type}
                onClick={() => setSelectedCategory(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === type
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Display selected category */}
      {categories.map(({ type, title, description }) => (
        type === selectedCategory && (
          <SpotSection
            key={type}
            title={title}
            description={description}
            type={type}
          />
        )
      ))}
    </div>
  );
} 