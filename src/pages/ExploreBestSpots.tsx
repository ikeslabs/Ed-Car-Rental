import { useState, useEffect, useMemo } from 'react';
import { fetchSpotsByCategory } from '../services/firebase';
import { SpotCategory, CategorySection } from '../types';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { FiSearch } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const CategorySectionComponent: React.FC<{
  title: string;
  items: SpotCategory[];
  loading: boolean;
}> = ({ title, items, loading }) => {
  const handleWhatsAppClick = (item: SpotCategory) => {
    const message = `Hi, I'm interested in booking ${item.title}.\n\nDetails:\n${item.description}\nLocation: ${item.location}\n\nPlease provide more information.`;
    const whatsappUrl = `https://wa.me/+233244378724?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-duration-300 flex flex-col"
              >
                <div className="relative h-48 sm:h-40 md:h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 flex-grow">
                    {item.description}
                  </p>
                  {item.location && (
                    <p className="text-sm text-gray-500 mb-2">
                      📍 {item.location}
                    </p>
                  )}
                  {item.rating && (
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`text-lg ${
                            index < item.rating! ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => handleWhatsAppClick(item)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default function ExploreBestSpots() {
  const [categoryData, setCategoryData] = useState<Record<string, SpotCategory[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo<CategorySection[]>(() => [
    { title: 'Popular Hotels', type: 'hotel', description: 'Find your perfect stay' },
    { title: 'Beautiful Beaches', type: 'beach', description: 'Discover paradise' },
    { title: 'Popular Studios', type: 'studio', description: 'Unleash your creativity' },
    { title: 'Vibrant Nightclubs', type: 'nightclub', description: 'Experience the nightlife' },
    { title: 'Top Restaurants', type: 'restaurant', description: 'Savor local flavors' },
  ], []);

  const filteredCategoryData = useMemo(() => {
    if (!searchQuery.trim()) return categoryData;

    const filtered: Record<string, SpotCategory[]> = {};
    Object.entries(categoryData).forEach(([type, spots]) => {
      filtered[type] = spots.filter(spot => 
        spot.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.location?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    return filtered;
  }, [categoryData, searchQuery]);

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const promises = categories.map(async (category) => {
          const data = await fetchSpotsByCategory(category.type);
          return { type: category.type, data };
        });

        const results = await Promise.all(promises);
        const newData: Record<string, SpotCategory[]> = {};
        results.forEach(({ type, data }) => {
          newData[type] = data;
        });

        setCategoryData(newData);
      } catch (err) {
        setError('Failed to load spots. Please try again later.');
        console.error('Error fetching spots:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCategories();
  }, [categories]);

  const totalResults = Object.values(filteredCategoryData).reduce(
    (sum, spots) => sum + spots.length,
    0
  );

  if (error) {
    return (
      <div className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <header className="bg-blue-600 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Explore the Best Spots
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Discover the most popular destinations, all in one place. Select a category to explore more.
          </p>
          
          <div className="max-w-2xl mx-auto px-4">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search for hotels, beaches, restaurants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            {searchQuery && (
              <div className="mt-4 text-left text-gray-200 px-2">
                Found {totalResults} result{totalResults !== 1 ? 's' : ''}
              </div>
            )}
          </div>
        </div>
      </header>

      <main>
        {categories.map((category) => {
          const items = filteredCategoryData[category.type] || [];
          if (searchQuery && items.length === 0) return null;
          
          return (
            <CategorySectionComponent
              key={category.type}
              title={category.title}
              items={items}
              loading={loading}
            />
          );
        })}
        
        {searchQuery && totalResults === 0 && !loading && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No results found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search terms or explore our categories below
            </p>
          </div>
        )}
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Explore The Best Spots. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
} 