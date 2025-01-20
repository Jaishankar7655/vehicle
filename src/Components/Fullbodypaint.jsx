import React from "react";
import { Car, ArrowRight, Paintbrush } from "lucide-react";
import Notice from "./Notice";

function FullBodyPaint() {
  const services = [
    {
      title: "Small Size Car",
      price: "₹28,000 - ₹30,000",
      description: "Perfect for compact cars and hatchbacks",
      icon: <Car size={24} className="text-red-800" />
    },
    {
      title: "Medium Size Car",
      price: "₹30,000 - ₹38,000",
      description: "Ideal for sedans and family cars",
      icon: <Car size={28} className="text-red-800" />
    },
    {
      title: "Large Size Car",
      price: "₹35,000 - ₹38,000",
      description: "Best for SUVs and luxury vehicles",
      icon: <Car size={32} className="text-red-800" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Paintbrush className="text-red-800 h-8 w-8" />
            <h1 className="text-4xl font-bold text-red-800">Full Body Paint Service</h1>
            <Paintbrush className="text-red-800 h-8 w-8" />
          </div>
          <div className="bg-red-800 h-1 rounded-full w-48 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">
            Professional auto painting services for all vehicle sizes
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-center h-16 mb-4">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-green-600 mb-4">
                  {service.price}
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <Notice />
      </div>
    </div>
  );
}

export default FullBodyPaint;
