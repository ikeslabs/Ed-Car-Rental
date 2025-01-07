import { useEffect, useState } from 'react';
import { fetchServices } from '../services/firebase';
import { Service } from '../types';

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img 
                src={service.image}
                alt={service.title}
                className="w-16 h-16 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-center mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {service.description}
              </p>
              <div className="text-center">
                <a
                  href="#booking"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
