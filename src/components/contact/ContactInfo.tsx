import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Phone className="h-6 w-6 text-blue-600" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p>
              <a href="tel:+233244378724" className="text-blue-600 hover:text-blue-700">
                +233 27 677 6610
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Mail className="h-6 w-6 text-blue-600" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>
              <a href="mailto:info@edcarrental.com" className="text-blue-600 hover:text-blue-700">
                info@edcarrental.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <MapPin className="h-6 w-6 text-blue-600" />
          <div>
            <h3 className="font-semibold">Location</h3>
            <p>Accra, Ghana</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Business Hours</h3>
        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
        <p>Saturday: 9:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
}