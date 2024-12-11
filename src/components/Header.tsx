import { Car } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-blue-600">Ed Car Rental</span>
          </div>
          
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-600 hover:text-blue-600 px-3 py-2">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2">About Us</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 px-3 py-2">Services</a>
              <a href="#tourist-sites" className="text-gray-600 hover:text-blue-600 px-3 py-2">Tourist Sites</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2">Contact</a>
            </nav>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block text-gray-600 hover:text-blue-600 px-3 py-2">Home</a>
              <a href="#about" className="block text-gray-600 hover:text-blue-600 px-3 py-2">About Us</a>
              <a href="#services" className="block text-gray-600 hover:text-blue-600 px-3 py-2">Services</a>
              <a href="#tourist-sites" className="block text-gray-600 hover:text-blue-600 px-3 py-2">Tourist Sites</a>
              <a href="#contact" className="block text-gray-600 hover:text-blue-600 px-3 py-2">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}