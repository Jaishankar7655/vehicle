import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Car, Paintbrush } from "lucide-react";
import ServiceSearch from "./ServiceSearch";

const ServicesShowcase = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const enhancedServices = [
    {
      title: "Car wash and spa",
      description:
        "Comprehensive cleaning and restoration services to maintain your vehicle's pristine condition",
      icon: <Car className="w-8 h-8 text-red-500" />,
      route: "/services/CarWashService",
    },
    {
      title: "Car Denting and Painting Service",
      description:
        "Car denting and painting is a crucial service that restores a vehicle's appearance and protects its body from further damage",
      icon: <Paintbrush className="w-8 h-8 text-red-500" />,
      route: "/services/Cardentingandpainting",
    },
  ];

  const searchTerm = enhancedServices.filter((service) =>
    service.title.toLowerCase().includes(query.toLowerCase()) ||
    service.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-[95%] mx-auto py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive range of automotive services designed to
          keep your vehicle in perfect condition
        </p>
      </div>
      <ServiceSearch query={query} setQuery={setQuery} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchTerm.length > 0 ? (
          searchTerm.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(service.route)}
              className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                     transform hover:-translate-y-1 transition-all duration-300 
                     cursor-pointer border border-gray-100 hover:border-red-200"
            >
              <div
                className="bg-red-50 rounded-xl p-4 w-16 h-16 flex items-center justify-center 
                          group-hover:bg-red-100 transition-colors duration-300 mb-4"
              >
                {service.icon}
              </div>

              <h3
                className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-red-600 
                         transition-colors duration-300"
              >
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-4 flex items-center text-red-600 font-medium">
                <span className="group-hover:mr-2 transition-all duration-300">
                  Learn More
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                  →
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-red-600">No services found</p>
        )}
      </div>
    </div>
  );
};

export default ServicesShowcase;
