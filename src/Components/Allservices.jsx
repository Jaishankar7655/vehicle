import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrench, Car, Settings, Disc, Zap } from 'lucide-react';
import ServiceSearch from './CarServices';

const ServicesShowcase = () => {
  const navigate = useNavigate();

  const enhancedServices = [
    {
      title: "Premium Auto Detailing",
      description: "Comprehensive cleaning and restoration services to maintain your vehicle's pristine condition",
      icon: <Car className="w-8 h-8 text-red-500" />,
      route: "/services/CarWashService"
    },
    {
      title: "Expert Mechanical Services",
      description: "Professional diagnostic and repair services for all vehicle makes and models",
      icon: <Wrench className="w-8 h-8 text-red-500" />,
      route: "/services/MechanicalRepairService"
    },
    {
      title: "Comprehensive Car Care",
      description: "Complete maintenance services to keep your vehicle running at peak performance",
      icon: <Settings className="w-8 h-8 text-red-500" />,
      route: "/services/GeneralServices"
    },
    {
      title: "Wheel & Tire Solutions",
      description: "Expert wheel alignment, tire services, and maintenance for optimal vehicle handling",
      icon: <Disc className="w-8 h-8 text-red-500" />,
      route: "/services/TiresWheelService"
    },
    {
      title: "Electrical System Repairs",
      description: "Advanced diagnostics and repairs for all automotive electrical systems",
      icon: <Zap className="w-8 h-8 text-red-500" />,
      route: "/services/ElectricalRepairService"
    }
  ];

  return (
    <div className="w-4/5 mx-auto py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive range of automotive services designed to keep your vehicle in perfect condition
        </p>
      </div>
      <ServiceSearch/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {enhancedServices.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate(service.route)}
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                     transform hover:-translate-y-1 transition-all duration-300 
                     cursor-pointer border border-gray-100 hover:border-red-200"
          >
            <div className="bg-red-50 rounded-xl p-4 w-16 h-16 flex items-center justify-center 
                          group-hover:bg-red-100 transition-colors duration-300 mb-4">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-red-600 
                         transition-colors duration-300">
              {service.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>

            <div className="mt-4 flex items-center text-red-600 font-medium">
              <span className="group-hover:mr-2 transition-all duration-300">Learn More</span>
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesShowcase;