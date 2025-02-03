import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+233552904080" className="hover:text-blue-400">+233552904080</a>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:edcarrentalsgh@gmail.com" className="hover:text-blue-400">edcarrentalsgh@gmail.com</a>
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span> shiashie shell, Accra</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
              <li><Link to="/tourist-sites" className="hover:text-blue-400">Tourist Sites</Link></li>
              <li><Link to="/booking" className="hover:text-blue-400">Book a Ride</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Ed Car Rental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}