import { Shield, Star, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About Ed Car Rental</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Your trusted partner for seamless car rental services in Ghana, delivering reliable and personalized transportation solutions.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional car rental experiences through reliable vehicles, professional service, 
                and an unwavering commitment to customer satisfaction. We aim to make every journey 
                memorable and hassle-free.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Values</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Reliability in service delivery</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Excellence in customer experience</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Community-focused approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Reliable</h3>
              <p className="text-gray-600">
                Well-maintained vehicles and comprehensive insurance coverage for your peace of mind.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
              <p className="text-gray-600">
                Professional and courteous service with attention to every detail.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Ghana's roads and tourist destinations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}