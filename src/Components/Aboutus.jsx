import React from "react";
import { Check, ArrowRight, Clock, Users, Award } from "lucide-react";
import about from "../assets/image/about.png";
import about2 from "../assets/image/about2.png";

const Aboutus = () => {
  const stats = [
    { icon: Clock, value: "20+", label: "Years Experience" },
    { icon: Users, value: "5000+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Awards Won" }
  ];

  const features = [
    { title: "Professional Services", description: "Expert team delivering excellence" },
    { title: "Modern Equipment", description: "Latest technology and tools" },
    { title: "Dedicated Support", description: "24/7 customer assistance" },
    { title: "Quality Assurance", description: "100% satisfaction guaranteed" }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-medium mb-4">ABOUT OUR COMPANY</h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto">
            We Provide Quality Services Since 2004
          </h1>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-red-600 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={about2}
                alt="Main service"
                className="rounded-lg shadow-xl w-full"
              />
              {/* Floating Stats Card */}
              <div className="absolute -bottom-10 -right-10 bg-red-600 text-white p-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-3xl font-bold mb-2">2000+</p>
                <p className="text-sm">Projects Completed</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-100 rounded-full -z-10"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Professional Team With Excellence In Service Delivery
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              With over two decades of experience, we've built a reputation for 
              excellence in service delivery. Our commitment to quality and 
              customer satisfaction has made us a trusted partner for thousands 
              of clients worldwide.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <Check className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-semibold">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm pl-9">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;