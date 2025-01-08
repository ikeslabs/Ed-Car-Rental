
import { useState } from "react";
import { Car, MapPin, Users, Shield, Clock, CreditCard } from "lucide-react";

export default function Services() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      icon: <Car className="h-12 w-12 text-blue-600" />,
      title: "Personal Car Rental",
      description: "Rent quality vehicles for your personal use with flexible duration options.",
    },
    {
      icon: <MapPin className="h-12 w-12 text-blue-600" />,
      title: "Tourist Site Visits",
      description: "Explore Ghana's beautiful tourist destinations with our comfortable vehicles.",
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Rent Your Car to Us",
      description: "Partner with us by renting your vehicle to our trusted company.",
    },
  ];

  const additionalFeatures = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Full Insurance",
      description: "Comprehensive coverage for peace of mind.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "24/7 Support",
      description: "Always available to assist you.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
      title: "Flexible Payment",
      description: "Multiple payment options available.",
    },
  ];

  const handleBook = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} onBook={handleBook} />
          ))}
        </div>

        {/* Additional Features Section */}
        <FeaturesGrid features={additionalFeatures} />
      </div>

      {/* Modal */}
      {showModal && (
        <Modal
          selectedService={selectedService}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

const ServiceCard = ({
  service,
  onBook,
}: {
  service: { icon: JSX.Element; title: string; description: string };
  onBook: (title: string) => void;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex justify-center mb-4">{service.icon}</div>
    <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
    <p className="text-gray-600 text-center mb-4">{service.description}</p>
    <div className="text-center">
      <button
        onClick={() => onBook(service.title)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Book Now
      </button>
    </div>
  </div>
);

const FeaturesGrid = ({
  features,
}: {
  features: { icon: JSX.Element; title: string; description: string }[];
}) => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Additional Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
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
);

const Modal = ({
  selectedService,
  onClose,
}: {
  selectedService: string | null;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
      <h3 className="text-xl font-bold mb-4">Contact Us</h3>
      <p className="mb-6">
        How would you like to proceed for <strong>{selectedService}</strong>?
      </p>
      <div className="flex justify-between">
        <a
          href="mailto:info@edcarrental.com"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Email
        </a>
        <a
          href="https://wa.me/233244378724"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          WhatsApp
        </a>
      </div>
      <button
        onClick={onClose}
        className="mt-6 text-gray-600 hover:text-gray-800 text-sm"
      >
        Cancel
      </button>
    </div>
  </div>
);
