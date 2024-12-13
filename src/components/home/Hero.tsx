import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay failure silently
      });
    }
  }, []);

  return (
    <div className="relative h-screen">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=2000"
      >
        <source
          src="https://cdn.pixabay.com/vimeo/133691/driver-car-transportation-chauffeur-1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience Ghana in Style
          </h1>
          <p className="text-xl text-white mb-8">
            Premium car rental services for your journey through Ghana's most beautiful destinations
          </p>
          <Link
            to="/booking"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book Your Ride Now
          </Link>
        </div>
      </div>
    </div>
  );
}
