import React from "react";
import { Calendar, Clock, Car, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function Cardentingandpainting() {
  const businessHours = [
    { day: "FRI",  time: "10:00 am - 7:00 pm", isToday: true },
    { day: "SAT", time: "10:00 am - 7:00 pm" },
    { day: "SUN", time: "10:00 am - 7:00 pm" },
    { day: "MON", time: "10:00 am - 7:00 pm" },
    { day: "TUE", time: "10:00 am - 7:00 pm" },
    { day: "WED", time: "10:00 am - 7:00 pm" },
    { day: "THU", time: "10:00 am - 7:00 pm" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8">
          <h1 className="text-3xl font-bold mb-4">Car Denting and Painting Service</h1>
          <div className="flex items-center text-2xl font-bold">
            <span className="text-4xl">₹</span>
            <span className="text-4xl ml-1">1,000</span>
            <span className="ml-2 text-lg font-normal">onwards / service</span>
          </div>
          <p className="text-sm mt-2 text-red-100">
            Note: These prices are indicative, and actual charges may vary.
          </p>
        </div>

        {/* Description Section */}
        <div className="p-8">
          <p className="text-gray-600 leading-relaxed mb-8">
          Car denting and painting is a crucial service that restores a vehicle's appearance and protects its body from further damage. Whether caused by accidents, weather, or parking mishaps, dents and scratches not only affect the look of the vehicle but also expose it to rust and corrosion. This service involves two major processes: denting which repairs the structural damage on the car body and painting, which restores the original or desired finish.</p>

          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
              <Car className="w-6 h-6 text-red-600" />
              <div>
                <span className="font-semibold">Type:</span>
                <span className="ml-2 text-gray-600">Car Denting and Painting</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
              <Clock className="w-6 h-6 text-red-600" />
              <div>
                <span className="font-semibold">Duration:</span>
                <span className="ml-2 text-gray-600">2-5 days (varies with service type and vehicle condition)</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
              <MapPin className="w-6 h-6 text-red-600" />
              <div>
                <span className="font-semibold">Cost Estimate:</span>
                <span className="ml-2 text-gray-600">Varies based on damage</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
              <Car className="w-6 h-6 text-red-600" />
              <div>
                <span className="font-semibold">Vehicle Type:</span>
                <span className="ml-2 text-gray-600">All Type of Cars</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-red-600" />
              Business Hours
            </h2>
            <div className="space-y-4">
              {businessHours.map((schedule, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between items-center p-3 rounded-lg ${
                    schedule.isToday ? 'bg-red-50 border border-red-200' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="font-semibold w-12">{schedule.day}</span>
                    {schedule.label && (
                      <span className="ml-2 text-sm text-red-600 font-medium">
                        ({schedule.label})
                      </span>
                    )}
                  </div>
                  <span className="text-gray-600">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Book Now Button */}
          <div className="mt-8 text-center">
           <Link to="/contact" > <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Book Service Now
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardentingandpainting;