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
              <a href="tel:+233552904080" className="text-blue-600 hover:text-blue-700">
                +233552904080
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Mail className="h-6 w-6 text-blue-600" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>
              <a href="mailto:edcarrentalsgh@gmail.com" className="text-blue-600 hover:text-blue-700">
              edcarrentalsgh@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <MapPin className="h-6 w-6 text-blue-600" />
          <div>
            <h3 className="font-semibold">Location</h3>
            <p> shiashie shell,Accra</p>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}