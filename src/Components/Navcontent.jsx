import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Allservices from "./Allservices";

function Navcontent({ servicemenu }) {
  const [serviceMouse, setServiceMouse] = useState(false);
  const [mouseHover, setMouseHovered] = useState(false);
  const serviceRef = useRef(null);

  // Toggle the service dropdown
  const serviceMouseToggle = (e) => {
    e.stopPropagation();
    setServiceMouse((prev) => !prev);
  };

  // Close the service dropdown when clicking outside
  const closeServiceContainer = (e) => {
    if (serviceRef.current && !serviceRef.current.contains(e.target)) {
      setServiceMouse(false);
    }
  };

  useEffect(() => {
    // Add event listener when dropdown is open
    if (serviceMouse) {
      document.addEventListener("mousedown", closeServiceContainer);
    } else {
      document.removeEventListener("mousedown", closeServiceContainer);
    }

    // Cleanup listener
    return () => {
      document.removeEventListener("mousedown", closeServiceContainer);
    };
  }, [serviceMouse]);

  return (
    <div className="lg:flex gap-10 items-center hidden">
      {/* Navigation Links */}
      <div className="active:scale-95">
        <Link
          className="text-red-500 text-[19px] hover:text-red-700 transition-colors"
          to="/"
        >
          Home
        </Link>
      </div>
      <div className="active:scale-95">
        <Link
          className="text-red-500 text-[19px] hover:text-red-700 transition-colors"
          to="/Testimonials"
        >
          Testimonial
        </Link>
      </div>
      <div className="active:scale-95">
        <Link
          className="text-red-500 text-[19px] hover:text-red-700 transition-colors"
          to="/AboutUs"
        >
          About
        </Link>
      </div>
      <div className="active:scale-95">
        <Link
          className="text-red-500 text-[19px] hover:text-red-700 transition-colors"
          to="/Services"
        >
          services
        </Link>
      </div>
      <div className="active:scale-95">
        <Link
          className="text-red-500 text-[19px] hover:text-red-700 transition-colors"
          to="/Contact"
        >
          Contact
        </Link>
      </div>
      {/* Book Appointment Button */}
      <div
        className="active:scale-95 p-0.5 rounded-full transition-all"
        style={{
          backgroundImage:
            "linear-gradient(to right, red, blue, green, purple, yellow, orange, pink)",
          boxShadow: mouseHover ? "0px 0px 9px red" : "none",
        }}
        onMouseEnter={() => setMouseHovered(true)}
        onMouseLeave={() => setMouseHovered(false)}
      >
        {" "}
        <div className="text-red-600 px-5 text-center font-semibold bg-white w-full rounded-full py-1 hover:text-red-700">
          {" "}
          <Link to="/Appointment">Book Appointment</Link>{" "}
        </div>{" "}
      </div>{" "}
   
    </div>
  );
}

export default Navcontent;
