import { touristSites } from '../data/touristSites';

export default function TouristSites() {
  return (
    <section id="tourist-sites" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Popular Tourist Sites</h2>
        <p className="text-center text-gray-700 mb-12">
          Explore the beauty of Ghana with our guided rides to iconic destinations.  
          From breathtaking landscapes to rich cultural landmarks, your adventure starts here!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {touristSites.map((site) => (
            <div key={site.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src={site.image}
                alt={site.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
                <p className="text-gray-600 mb-4">{site.description}</p>
                <a
                  href="#booking"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Book a Ride
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
