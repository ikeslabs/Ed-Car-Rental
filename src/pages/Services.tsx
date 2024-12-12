import { Car, MapPin, Users, Shield, Clock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const mainServices = [
    {
      icon: <Car className="h-12 w-12 text-blue-600" />,
      title: "Personal Car Rental",
      description: "Flexible rental options for individuals and families with a wide range of vehicles to choose from.",
      features: ["24/7 support", "Flexible duration", "Insurance included"]
    },
    {
      icon: <MapPin className="h-12 w-12 text-blue-600" />,
      title: "Tourist Site Visits",
      description: "Guided tours to Ghana's most beautiful destinations with experienced drivers and comfortable vehicles.",
      features: ["Expert guides", "Custom routes", "Comfortable vehicles"]
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Rent Your Car to Us",
      description: "Partner with us by renting your vehicle and earn consistent income with our trusted management.",
      features: ["Regular income", "Professional management", "Flexible terms"]
    }
  ];

  const additionalFeatures = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Full Insurance",
      description: "Comprehensive coverage for peace of mind"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "24/7 Support",
      description: "Always available to assist you"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
      title: "Flexible Payment",
      description: "Multiple payment options available"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our comprehensive range of car rental services designed to meet your transportation needs in Ghana.
          </p>
        </div>
      </div>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-center mb-4">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Shield className="h-5 w-5 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  <Link
                    to="/booking"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}