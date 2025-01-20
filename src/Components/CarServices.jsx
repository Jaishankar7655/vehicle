import React from "react";

import small from "../assets/image/sm.png";
import medium from "../assets/image/md.png";
import large from "../assets/image/lg.png";
import { Route } from "lucide-react";
import { Link } from "react-router-dom";
const CarServices = () => {
  const carServices = [
    {
      id: 1,
      title: "Small Size Car",
      description: "Perfect for city driving and small families",
      image: small,
      features: ["4 Seats", "2 Bags", "Fuel Efficient"],
      Route: "/Servies/CarServices/SmallSizeCar",
    },
    {
      id: 2,
      title: "Medium Size Car",
      description: "Ideal for families and longer trips",
      image: medium,
      features: ["5 Seats", "3 Bags", "Balanced Performance"],
      Route: "/Servies/CarServices/MediumSizecar",
    },
    {
      id: 3,
      title: "Large Size Car",
      description: "Spacious comfort for larger groups",
      image: large,
      features: ["7 Seats", "4 Bags", "Premium Comfort"],
      Route: "/Servies/CarServices/LargeSizeCar",
    },
  ];

  return (
    <div className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Car Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of vehicles to match your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carServices.map((service) => (
            <Link to={service.Route}>
              <div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-center text-red-600 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-center mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {service.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-50 text-red-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarServices;
