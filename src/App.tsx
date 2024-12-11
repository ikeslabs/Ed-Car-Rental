import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/about/AboutUs';
import Services from './components/Services';
import FleetShowcase from './components/fleet/FleetShowcase';
import TouristSites from './components/TouristSites';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <FleetShowcase />
        <TouristSites />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}