import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images (adjust paths as needed)
import drNidhi from "../assets/images/dr.jpeg";
import vehicleSolution from "../assets/images/vehicleman.jpeg";
import herveda from "../assets/images/herman.jpeg";
import aghorAkhada from "../assets/images/baba.png";
import visionTechEnviro from "../assets/images/vision.jpeg";
import myFreety from "../assets/images/asha.jpeg";
import asha from "../assets/images/rohit.jpeg";

import star from "../assets/svg/star.svg";
import cl1 from "../assets/svg/cl1.svg";
import cl2 from "../assets/svg/cl2.svg";
import cl3 from "../assets/svg/cl3.svg";

const testimonials = [
  {
    name: "Dr. Nidhi Choudhary",
    title: "Dermatologist",
    image: drNidhi,
    quote: "Cynctech transformed my digital presence with a modern, user-friendly website and effective SEO that brought in more visitors than expected.",
    services: ["Website Design", "SEO", "Social Media Marketing"],
  },
  {
    name: "Vehicle Solution",
    title: "Vehicle Repairing Garage",
    image: vehicleSolution,
    quote: "Cynctech has completely changed the way my car garage business connects with customers. Their creative social media content has helped me reach more people.",
    services: ["Social Media Strategy", "Content Creation"],
  },
  {
    name: "Herveda Ayurveda",
    title: "Ayurvedic Personal Care Brand",
    image: herveda,
    quote: "Cynctech has truly transformed how we connect with our customers. Their creative approach to social media and website design has helped us reach a much larger audience.",
    services: ["Branding", "Website Design", "Social Media"],
  },
  {
    name: "Aghor Akhada Ujjain",
    title: "Astrology Center",
    image: aghorAkhada,
    quote: "Cynctech helped us expand our online presence with cutting-edge content creation and digital strategy that truly resonates with our audience.",
    services: ["Content Creation", "Digital Strategy"],
  },
  {
    name: "Vision Tech Enviro",
    title: "Web Design Solutions",
    image: visionTechEnviro,
    quote: "Cynctech designed a website that perfectly captures our brand essence, creating a professional and intuitive digital experience.",
    services: ["Website Design", "Branding"],
  },
  {
    name: "MyFreety",
    title: "E-commerce Development",
    image: myFreety,
    quote: "An exceptional e-commerce website that not only looks stunning but dramatically improves our customer's shopping experience.",
    services: ["E-commerce Design", "User Experience"],
  },
  {
    name: "Asha Pathak",
    title: "Astrologer",
    image: asha,
    quote: " Cynctech Unlocked the secrets of your star with expert guidence from my astrology in digital world",
    services: ["Astrology"],
  },
];

const TestimonialCard = ({ testimonial, className = "" }) => {
  return (
    <div className={`relative w-full max-w-[407px] h-[410px] 
      hover:shadow-xl transition-all duration-300 transform rounded-[29px] 
      mx-auto overflow-hidden ${className}`}>
      {/* Border overlay */}
      <div className='absolute inset-0 border-orange-500 border border-t-0 
        bottom-1 rounded-b-[29px] transition-all duration-300 
        transform hover:shadow-2xl z-0'></div>
      
      {/* Profile Image Container */}
      <div className="w-full flex justify-center absolute z-10">
        <div className="rounded-b-full absolute top-0 w-[135px] h-36 
          bg-gradient-to-b from-transparent to-orange-400 
          transform animate-slide-in-right">
          <div className="w-[135px] h-[135px] bg-white absolute bottom-0 
            rounded-full overflow-hidden">
            <img
              src={testimonial.image}
              className="w-full h-full object-cover"
              alt={`${testimonial.name} profile`}
            />
          </div>
        </div>
      </div>
      
      {/* Testimonial Content */}
      <div className="relative top-48 px-4">
        <p className="text-center font-bold text-orange-500 text-xl">{testimonial.name}</p>
        <p className="text-center text-slate-600 py-2 font-bold">{testimonial.title}</p>
        <p className="text-center text-slate-500 line-clamp-3">{testimonial.quote}</p>
        <p className="text-center mt-2">
          <img src={star} alt="Rating" className="mx-auto" />
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const containerRef = useRef(null);

  // Responsive card count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonials = () => {
    if (currentIndex + visibleCards < testimonials.length) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevTestimonials = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const maxPossibleIndex = Math.max(0, testimonials.length - visibleCards);

  return (
    <div className="container mx-auto px-4 mt-16 md:mt-24">
      <h1 className="text-3xl md:text-5xl font-bold text-center">What Our Clients Say</h1>
      <div className="w-32 md:w-52 h-1 bg-red-600 m-auto my-3 rounded-lg"></div>
      
      <div className="relative flex items-center justify-center">
        {/* Previous Button */}
        <button 
          onClick={prevTestimonials} 
          className="absolute left-0 md:left-10 z-10 bg-orange-500 text-white p-2 rounded-full 
          hover:bg-orange-600 transition disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Testimonial Cards Container */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 
          w-full max-w-[1300px] overflow-hidden my-14"
        >
          {testimonials.slice(currentIndex, currentIndex + visibleCards).map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              className="justify-self-center"
            />
          ))}
        </div>

        {/* Next Button */}
        <button 
          onClick={nextTestimonials} 
          className="absolute right-0 md:right-10 z-10 bg-orange-500 text-white p-2 rounded-full 
          hover:bg-orange-600 transition disabled:opacity-50"
          disabled={currentIndex >= maxPossibleIndex}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.slice(0, maxPossibleIndex + 1).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;