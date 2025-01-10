import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Car, Shield, ArrowRight } from 'lucide-react';

import Slideimage from "../assets/image/hero3.png";
import Slideimage2 from "../assets/image/hero2.png";
import Slideimage3 from "../assets/image/hero3.png";
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      bgImage: Slideimage,
      title: "Rev Up Your Vehicle with Our Expert Garage Services",
      description: "Professional repairs, maintenance, and tuning to keep your vehicle running smoothly.",
      features: [
        { icon: Clock, text: "24/7 Emergency Service" },
        { icon: Car, text: "Certified Mechanics" },
        { icon: Shield, text: "100% Satisfaction Guaranteed" },
      ]
    },
    {
      bgImage: Slideimage2,
      title: "Quality Service You Can Trust",
      description: "State-of-the-art equipment and certified technicians for all your automotive needs.",
      features: [
        { icon: Clock, text: "Quick Turnaround" },
        { icon: Car, text: "Modern Equipment" },
        { icon: Shield, text: "Warranty Protected" },
      ]
    },
    {
      bgImage: Slideimage3,
      title: "Complete Auto Care Solutions",
      description: "From routine maintenance to major repairs, we've got you covered.",
      features: [
        { icon: Clock, text: "Scheduled Maintenance" },
        { icon: Car, text: "Expert Diagnostics" },
        { icon: Shield, text: "Genuine Parts Only" },
      ]
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative Z-0 h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full transition-all duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-center transform transition-transform duration-[2000ms]"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-red-900/70 to-black/90" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  {/* Animated Line */}
                  <div className="flex justify-center">
                    <div className="w-24 h-1 bg-red-600 rounded-full mb-4 animate-pulse" />
                  </div>
                  
                  {/* Title */}
                  <div className="overflow-hidden">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transform transition-transform duration-1000 animate-fade-in-up">
                      {slide.title}
                    </h1>
                  </div>
                  
                  {/* Description */}
                  <div className="overflow-hidden">
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 transform transition-transform duration-1000 delay-200">
                      {slide.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="grid grid-cols-3 gap-8 mb-8">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="flex flex-col items-center space-y-3 group">
                        <div className="p-4 bg-red-600/20 rounded-full group-hover:bg-red-600/30 transition-colors duration-300">
                          <feature.icon className="w-6 h-6 text-red-500" />
                        </div>
                        <span className="text-white text-sm md:text-base">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Buttons */}
                 <Link to ="/Contact"> <div className="flex justify-center space-x-4">
                    <button className="group relative overflow-hidden bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30">
                      <span className="relative z-10 flex items-center">
                        Get a Free Quote
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </button>
                  </div></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600/10 hover:bg-red-600/20 p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 group"
      >
        <ChevronLeft className="w-8 h-8 text-white group-hover:text-red-200 transition-colors duration-300" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600/10 hover:bg-red-600/20 p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 group"
      >
        <ChevronRight className="w-8 h-8 text-white group-hover:text-red-200 transition-colors duration-300" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 ease-in-out rounded-full 
              ${index === currentSlide 
                ? 'w-12 h-2 bg-red-600' 
                : 'w-2 h-2 bg-white/50 hover:bg-red-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;