import React, { useState } from 'react';

const BoardingSection = () => {
  const [activeType, setActiveType] = useState('annex');

  // Sample boarding data - replace with actual data from your backend
  const boardings = {
    annex: [
        {
            id: 1,
            title: "Modern 2 Bedroom Annex",
            location: "Near University of Colombo",
            price: "Rs. 35,000/month",
            type: "Mixed",
            facilities: ["Kitchen", "Separate Entrance", "Private Bathroom", "WiFi", "Hot Water"],
            image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
            available: true
          },
          {
            id: 2,
            title: "Luxury Family Annex",
            location: "Kohuwala Junction",
            price: "Rs. 45,000/month",
            type: "Family",
            facilities: ["Fully Furnished", "Car Park", "Hot Water", "Garden", "CCTV"],
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
            available: true
          },
          {
            id: 3,
            title: "Compact Studio Annex",
            location: "Bambalapitiya",
            price: "Rs. 28,000/month",
            type: "Single",
            facilities: ["AC", "Mini Kitchen", "Private Entrance", "Internet"],
            image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
            available: false
          },
          {
            id: 4,
            title: "Deluxe 3 Bedroom Annex",
            location: "Rajagiriya",
            price: "Rs. 55,000/month",
            type: "Family",
            facilities: ["Modern Kitchen", "Balcony", "24/7 Security", "Parking", "Generator"],
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
            available: true
          },
          {
            id: 5,
            title: "Student Friendly Annex",
            location: "Mount Lavinia",
            price: "Rs. 32,000/month",
            type: "Mixed",
            facilities: ["Study Area", "WiFi", "Washing Machine", "Backup Power"],
            image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
            available: true
          },
          {
            id: 6,
            title: "Executive Annex Suite",
            location: "Nawala",
            price: "Rs. 48,000/month",
            type: "Professional",
            facilities: ["Furnished", "AC", "Private Parking", "Security", "Rooftop Access"],
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
            available: true
          }
    ],
    rooms: [
        {
            id: 1,
            title: "Male Student Room",
            location: "Nugegoda",
            price: "Rs. 12,000/month",
            type: "Male",
            facilities: ["Shared Bathroom", "Common Kitchen", "Study Table", "WiFi"],
            image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff",
            available: true
          },
          {
            id: 2,
            title: "Female Sharing Room",
            location: "Mount Lavinia",
            price: "Rs. 8,000/month",
            type: "Female",
            facilities: ["Shared Bathroom", "WiFi", "Common Living Area", "Laundry"],
            image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
            available: true
          },
          {
            id: 3,
            title: "Premium Single Room",
            location: "Wellawatte",
            price: "Rs. 15,000/month",
            type: "Mixed",
            facilities: ["Private Bathroom", "AC", "Mini Fridge", "Study Area"],
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
            available: false
          },
          {
            id: 4,
            title: "Student Dormitory",
            location: "Bambalapitiya",
            price: "Rs. 6,000/month",
            type: "Female",
            facilities: ["Bunk Beds", "Shared Kitchen", "Security", "WiFi"],
            image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff",
            available: true
          },
          {
            id: 5,
            title: "Executive Room",
            location: "Colombo 07",
            price: "Rs. 20,000/month",
            type: "Professional",
            facilities: ["En-suite Bathroom", "AC", "Work Desk", "Room Service", "TV"],
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
            available: true
          },
          {
            id: 6,
            title: "Standard Single Room",
            location: "Dehiwala",
            price: "Rs. 10,000/month",
            type: "Male",
            facilities: ["Fan", "Shared Bathroom", "Common Kitchen", "Cupboard"],
            image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff",
            available: true
          }
    ]
  };

  return (
    <div id="boardingsection">
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Available Boarding Places
          </h2>
          <p className="mt-3 text-xl text-gray-500">
            Find your next home away from home
          </p>
          
          {/* Type Selection Tabs */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setActiveType('annex')}
              className={`px-6 py-2 rounded-full ${
                activeType === 'annex'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              Annex
            </button>
            <button
              onClick={() => setActiveType('rooms')}
              className={`px-6 py-2 rounded-full ${
                activeType === 'rooms'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              Rooms
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boardings[activeType].map((boarding) => (
            <div
              key={boarding.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={boarding.image}
                  alt={boarding.title}
                  className="w-full h-full object-cover"
                />
                {!boarding.available && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                    Occupied
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{boarding.title}</h3>
                <p className="mt-2 text-gray-600">{boarding.location}</p>
                
                {/* Facilities */}
                <div className="mt-3">
                  <div className="flex flex-wrap gap-2">
                    {boarding.facilities.map((facility, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-blue-600 font-bold">{boarding.price}</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {boarding.type}
                  </span>
                </div>
                <button
                  className={`mt-4 w-full py-2 px-4 rounded-md ${
                    boarding.available
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-300 cursor-not-allowed text-gray-500'
                  }`}
                  disabled={!boarding.available}
                >
                  {boarding.available ? 'View Details' : 'Not Available'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default BoardingSection;