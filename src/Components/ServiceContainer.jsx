import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceSearch from "./ServiceSearch"
import {
  Wrench,
  Settings,
  Disc,
  Zap,
  Battery,
  Cog,
  AirVent,
  InspectionPanel,
} from "lucide-react";

const ServicesShowcase = () => {
  const navigate = useNavigate();

  const enhancedServices = [
    {
      title: "Expert Mechanical Services",
      description:
        "Professional diagnostic and repair services for all vehicle makes and models",
      icon: <Wrench className="w-8 h-8 text-red-500" />,
      route: "/services/MechanicalRepairService",
    },
    {
      title: "Comprehensive Car Care",
      description:
        "Complete maintenance services to keep your vehicle running at peak performance",
      icon: <Settings className="w-8 h-8 text-red-500" />,
      route: "/services/GeneralServices",
    },
    {
      title: "Wheel & Tire Solutions",
      description:
        "Expert wheel alignment, tire services, and maintenance for optimal vehicle handling",
      icon: <Disc className="w-8 h-8 text-red-500" />,
      route: "/services/TiresWheelService",
    },
    {
      title: "Electrical System Repairs",
      description:
        "Advanced diagnostics and repairs for all automotive electrical systems",
      icon: <Zap className="w-8 h-8 text-red-500" />,
      route: "/services/ElectricalRepairService",
    },

    {
      title: "Car Battery Repair & Services",
      description:
        "Car Battery Repair & Services provide a comprehensive solution for diagnosing, repairing, and maintaining your vehicle's battery.",
      icon: <Battery className="w-8 h-8 text-red-500" />,
      route: "/services/CarBatteryRepairandServices",
    },
    {
      title: "Car Clutch & Body Parts Services",
      description:
        "Car clutch and body parts services involve the repair, replacement, and maintenance of critical components that ensure a vehicle operates smoothly.",
      icon: <Cog className="w-8 h-8 text-red-500" />,
      route: "/services/Carclutchservices",
    },
    {
      title: "Car AC Repair & Services",
      description:
        "Car AC repair and services are essential for maintaining comfort during drives, especially in extreme weather conditions",
      icon: <AirVent className="w-8 h-8 text-red-500" />,
      route: "/services/CarACRepairs",
    },
    {
      title: "Car Suspension & Fitment Services",
      description:
        "Car Suspension & Fitment Services offer expert maintenance and repair of vehicle suspension systems. These services focus on ensuring a smooth and safe ride by checking and replacing worn-out shock absorbers, struts, and other suspension components",
      icon: <AirVent className="w-8 h-8 text-red-500" />,
      route: "/services/CarsuspenceandFitness",
    },
    {
      title: "Car Inspections",
      description:
        "Car inspections are a crucial aspect of vehicle maintenance, ensuring safety and compliance with local regulations.",
      icon: <InspectionPanel className="w-8 h-8 text-red-500" />,
      route: "/services/CarInspections",
    },
  ];

  const [query, setQuery] = useState("");

  const searchTerm = enhancedServices.filter((service) => {
    return (
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <div className="w-[95%] mx-auto py-16">
      <div className="text-center ">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive range of automotive services designed to
          keep your vehicle in perfect condition
        </p>
      </div>
     <ServiceSearch query={query}  setQuery={setQuery}/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  border ">
        {searchTerm.length > 0 ? (
          searchTerm
           
            .map((service, index) => (
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
          <p className="text-center item-center border w-full">
            {" "}
            Sorry, we couldn't find any services matching your search. Try
            refining your query or explore our range of services..{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServicesShowcase;
