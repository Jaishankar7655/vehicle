import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link,  } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white  pt-16 pb-8">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Vehicle solution bhopal</h3>
          <p className="text-slate-300 mb-4">
            Your trusted partner in complete automotive care and maintenance. Quality service guaranteed.
          </p>
          <div className="flex space-x-4">
           <Link to="https://www.facebook.com/p/Vehicle-Solution-Bhopal-61551880049632/" >  <Facebook className="w-5 h-5 text-slate-300 hover:text-red-400 cursor-pointer" /></Link>
           <Link to="https://www.instagram.com/vehiclesolution.in/" > <Instagram className="w-5 h-5 text-slate-300 hover:text-red-400 cursor-pointer" /></Link>
           
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-400 cursor-pointer">About Us</li>
            <li className="hover:text-red-400 cursor-pointer">Our Services</li>
            <li className="hover:text-red-400 cursor-pointer">Book Appointment</li>
            <li className="hover:text-red-400 cursor-pointer">Latest News</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-red-400" />
              <span className="text-slate-300">8871122111 , 9584422111 </span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-red-400" />
              <span className="text-slate-300" onClick={() => window.location.href = "mailto:vehiclesolution.vs@gmail.com"}>
  vehiclesolution.vs@gmail.com
</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-red-400" />
              <span className="text-slate-300">26/A , Near Surjeet Hundai , J.K road bhopal </span>
            </li>
           
          </ul>
        </div>  

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p className="text-slate-300 mb-4">Subscribe for updates and special offers</p>
          <div className="space-y-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-4 py-2 rounded bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="w-full bg-gradient-to-r from-red-400 to-red-600 px-4 py-2 rounded font-semibold hover:from-red-500 hover:to-red-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-[90%] mx-auto border-t border-slate-700 mt-12 pt-8">
        <p className="text-center text-slate-400">
          © {new Date().getFullYear()}Vehicle solution. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;