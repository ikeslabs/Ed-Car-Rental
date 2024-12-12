import Hero from '../components/home/Hero';
import FeaturedServices from '../components/home/FeaturedServices';
import FeaturedVehicles from '../components/home/FeaturedVehicles';
import PopularDestinations from '../components/home/PopularDestinations';
import CallToAction from '../components/home/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <FeaturedVehicles />
      <PopularDestinations />
      <CallToAction />
    </>
  );
}