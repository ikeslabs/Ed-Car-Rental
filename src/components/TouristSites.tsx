import { useEffect, useState } from 'react';
import { fetchTouristSites } from '../services/firebase';
import { TouristSite } from '../types';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from './common/ImageCarousel';

export default function TouristSites() {
  const [sites, setSites] = useState<TouristSite[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadSites = async () => {
      try {
        const data = await fetchTouristSites();
        setSites(data);
      } catch (error) {
        console.error('Error fetching tourist sites:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSites();
  }, []);

  const handleBooking = (site: TouristSite) => {
    navigate('/booking', {
      state: { 
        bookingType: 'tourist-site',
        selectedSite: site.id,
        siteName: site.name
      }
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <section id="tourist-sites" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Popular Tourist Sites</h2>
        <p className="text-center text-gray-700 mb-12">
          Explore the beauty of Ghana with our guided rides to iconic destinations.  
          From breathtaking landscapes to rich cultural landmarks, your adventure starts here!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sites.map((site) => (
            <div key={site.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <ImageCarousel
                images={site.images}
                alt={site.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
                <p className="text-gray-600 mb-4">{site.description}</p>
                <button
                  onClick={() => handleBooking(site)}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Book a Ride
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
