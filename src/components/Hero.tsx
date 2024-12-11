export default function Hero() {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=2000"
      >
        <source
          src="https://player.vimeo.com/external/373839510.sd.mp4?s=8c14fe0b52e212ad1e6e0ed5d8bf2fb369c3d711&profile_id=164&oauth2_token_id=57447761"
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
          <a
            href="#booking"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book Your Ride Now
          </a>
        </div>
      </div>
    </div>
  );
}