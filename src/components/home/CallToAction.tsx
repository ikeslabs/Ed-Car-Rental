import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Book your ride now and experience Ghana in comfort and style with Ed Car Rental.
        </p>
        <Link
          to="/booking"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Book Your Ride
        </Link>
      </div>
    </section>
  );
}