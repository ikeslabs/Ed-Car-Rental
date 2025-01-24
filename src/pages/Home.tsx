import Hero from '../components/home/Hero';
import FeaturedServices from '../components/home/FeaturedServices';
import FeaturedVehicles from '../components/home/FeaturedVehicles';
import PopularDestinations from '../components/home/PopularDestinations';
import CallToAction from '../components/home/CallToAction';
import SpotSection from '../components/spots/SpotSection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <FeaturedVehicles />
      <PopularDestinations />
      <SpotSection
        title="Beautiful Beaches"
        description="Discover Ghana's stunning coastlines and pristine beaches."
        type="beach"
      />
      
      <SpotSection
        title="Popular Hotels"
        description="Find the perfect accommodation for your stay."
        type="hotel"
      />
      
      <SpotSection
        title="Popular Studios"
        description="Explore professional photography and recording studios."
        type="studio"
      />
      
      <SpotSection
        title="Vibrant Nightclubs"
        description="Experience Ghana's exciting nightlife."
        type="nightclub"
      />
      <CallToAction />
    </>
  );
}