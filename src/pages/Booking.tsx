// import { useState, useEffect } from 'react';
// import type { BookingFormData } from '../types';
// import BookingTypeSelector from '../components/booking/BookingTypeSelector';
// import VehicleSelector from '../components/booking/VehicleSelector';
// import TouristSiteSelector from '../components/booking/TouristSiteSelector';
// import { useVehicles } from '../hooks/useVehicles';
// import { useTouristSites } from '../hooks/useTouristSites';
// import { useLocation } from 'react-router-dom';

// export default function Booking() {
//   const location = useLocation();
//   const bookingState = location.state as { 
//     bookingType: 'vehicle' | 'tourist-site';
//     selectedSite: string;
//     siteName: string;
//   } | null;

//   const [bookingType, setBookingType] = useState<'vehicle' | 'tourist-site'>(
//     bookingState?.bookingType || 'vehicle'
//   );
//   const [selectedVehicle, setSelectedVehicle] = useState('');
//   const [selectedSite, setSelectedSite] = useState(bookingState?.selectedSite || '');
//   const { vehicles } = useVehicles();
//   const { sites } = useTouristSites();
  
//   const [formData, setFormData] = useState<BookingFormData>({
//     name: '',
//     phone: '',
//     pickup: '',
//     dropoff: '',
//     date: '',
//     time: '',
//   });

//   // Set initial booking type and selected site if navigated from tourist sites
//   useEffect(() => {
//     if (bookingState) {
//       setBookingType(bookingState.bookingType);
//       setSelectedSite(bookingState.selectedSite);
//     }
//   }, [bookingState]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     let selectedDetails = '';
//     if (bookingType === 'vehicle' && selectedVehicle) {
//       const vehicle = vehicles.find(v => v.id.toString() === selectedVehicle);
//       if (vehicle) {
//         selectedDetails = `\nSelected Vehicle: ${vehicle.name} (${vehicle.type})`;
//       }
//     } else if (bookingType === 'tourist-site' && selectedSite) {
//       const site = sites.find(s => s.id.toString() === selectedSite);
//       if (site) {
//         selectedDetails = `\nSelected Destination: ${site.name}`;
//       }
//     }

//     const message = `Hello Ed Car Rental, I want to book a ride:${selectedDetails}\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPickup: ${formData.pickup}\nDrop-off: ${formData.dropoff}\nDate: ${formData.date}\nTime: ${formData.time}`;
//     window.open(`https://wa.me/233244378724?text=${encodeURIComponent(message)}`, "_blank");
//   };

//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <div className="bg-blue-600 text-white py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Ride</h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             Fill out the form below and we'll connect with you on WhatsApp to confirm your booking.
//           </p>
//         </div>
//       </div>

//       {/* Booking Form */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <BookingTypeSelector onTypeChange={setBookingType} />
              
//               {bookingType === 'vehicle' ? (
//                 <VehicleSelector
//                   selectedVehicle={selectedVehicle}
//                   onVehicleChange={setSelectedVehicle}
//                 />
//               ) : (
//                 <TouristSiteSelector
//                   selectedSite={selectedSite}
//                   onSiteChange={setSelectedSite}
//                 />
//               )}

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//                 <input
//                   type="tel"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   value={formData.pickup}
//                   onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Drop-off Location</label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   value={formData.dropoff}
//                   onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
//                 />
//               </div>
              
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
//                   <input
//                     type="date"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     value={formData.date}
//                     onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
//                   <input
//                     type="time"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     value={formData.time}
//                     onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//                   />
//                 </div>
//               </div>
              
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
//               >
//                 Continue on WhatsApp
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { BookingFormData } from '../types';
import BookingTypeSelector from '../components/booking/BookingTypeSelector';
import VehicleSelector from '../components/booking/VehicleSelector';
import TouristSiteSelector from '../components/booking/TouristSiteSelector';
import { useVehicles } from '../hooks/useVehicles';
import { useTouristSites } from '../hooks/useTouristSites';

export default function Booking() {
  const location = useLocation();
  const bookingState = location.state as {
    bookingType: 'vehicle' | 'tourist-site';
    selectedSite?: string;
    siteName?: string;
  } | null;

  const [bookingType, setBookingType] = useState<'vehicle' | 'tourist-site'>(
    bookingState?.bookingType || 'vehicle'
  );
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedSite, setSelectedSite] = useState(bookingState?.selectedSite || '');
  const { vehicles } = useVehicles();
  const { sites } = useTouristSites();

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    if (bookingState) {
      setBookingType(bookingState.bookingType);
      setSelectedSite(bookingState.selectedSite || '');
    }
  }, [bookingState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let selectedDetails = '';
    if (bookingType === 'vehicle' && selectedVehicle) {
      const vehicle = vehicles.find((v) => v.id.toString() === selectedVehicle);
      if (vehicle) {
        selectedDetails = `\nSelected Vehicle: ${vehicle.name} (${vehicle.type})`;
      }
    } else if (bookingType === 'tourist-site' && selectedSite) {
      const site = sites.find((s) => s.id.toString() === selectedSite);
      if (site) {
        selectedDetails = `\nSelected Destination: ${site.name}`;
      }
    }

    const message = `Hello Ed Car Rental, I want to book a ride:${selectedDetails}\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPickup: ${formData.pickup}\nDrop-off: ${formData.dropoff}\nDate: ${formData.date}\nTime: ${formData.time}`;
    window.open(`https://wa.me/233244378724?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Ride</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Fill out the form below and we'll connect with you on WhatsApp to confirm your booking.
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <BookingTypeSelector onTypeChange={setBookingType} currentType={bookingType} />

              {bookingType === 'vehicle' ? (
                <VehicleSelector
                  selectedVehicle={selectedVehicle}
                  onVehicleChange={setSelectedVehicle}
                />
              ) : (
                <TouristSiteSelector
                  selectedSite={selectedSite}
                  onSiteChange={setSelectedSite}
                />
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.pickup}
                  onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Drop-off Location</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.dropoff}
                  onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <input
                    type="time"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Continue on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
