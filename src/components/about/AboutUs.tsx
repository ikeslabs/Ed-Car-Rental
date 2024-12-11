export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome to Ed Car Rental, your trusted partner for seamless car rental services in Ghana. 
            We specialize in delivering reliable, flexible, and personalized transportation solutions 
            for individuals, families, and groups.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional car rental experiences through reliable vehicles, 
                professional service, and a commitment to customer satisfaction.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Convenience in every booking</li>
                <li>• Versatility in vehicle options</li>
                <li>• Expert guidance and support</li>
                <li>• Customer satisfaction focus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}