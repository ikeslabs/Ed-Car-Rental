import { Car, MapPin, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Car className="h-12 w-12 text-blue-600" />,
      title: "Personal Car Rental",
      description: "Rent quality vehicles for your personal use with flexible duration options."
    },
    {
      icon: <MapPin className="h-12 w-12 text-blue-600" />,
      title: "Tourist Site Visits",
      description: "Explore Ghana's beautiful tourist destinations with our comfortable vehicles."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Rent Your Car to Us",
      description: "Partner with us by renting your vehicle to our trusted company."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}