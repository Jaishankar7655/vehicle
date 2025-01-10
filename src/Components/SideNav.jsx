import React, { useState } from "react";
import { ChevronRight, ChevronDown, Home, Info, Settings, Phone, Calendar, Wrench, X } from "lucide-react";
import { Link } from "react-router-dom";

function SideNav({ navOpen, setNavOpen }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const currentYear = new Date().getFullYear();
console.log(currentYear)

  const links = [
    { title: "Home", route: "/", icon: <Home size={20} /> },
    { title: "About", route: "/AboutUs", icon: <Info size={20} /> },
    { title: "Services", route: "/Services", icon: <Settings size={20} /> },
    { title: "Contact", route: "/contact", icon: <Phone size={20} /> },
    { title: "Book Appointment", route: "/appointment", icon: <Calendar size={20} /> },
  ];

  // Handler for regular link clicks
  const handleLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <div className="fixed z-30 top-0 left-0 w-[300px] h-full bg-gradient-to-br from-red-500 to-red-400 text-white shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
        <h2 className="text-2xl font-bold tracking-wide">Menu</h2>
        <X
          onClick={() => setNavOpen(false)}
          size={28}
          className="cursor-pointer hover:scale-110 transition-transform"
          title="Close Menu"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col mt-6 space-y-2">
     
        {links.map((link, index) => (
          <li key={index}>
            {link.submenu ? (
              <div>
                {/* Main Service Link */}
                <div
                  className="flex items-center justify-between px-6 py-3 cursor-pointer group hover:bg-white/10 transition-all duration-300 rounded-lg"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <div className="flex items-center space-x-4">
                    {link.icon}
                    <span className="text-lg font-medium">{link.title}</span>
                  </div>
                  {isServicesOpen ? (
                    <ChevronDown size={20} className="group-hover:scale-110 transition-transform" />
                  ) : (
                    <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
                  )}
                </div>

                {/* Submenu */}
                {isServicesOpen && (
                  <ul className="ml-6 mt-2 space-y-2">
                    {link.submenu.map((sublink, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={sublink.route}
                          className="flex items-center px-6 py-2 hover:bg-white/10 transition-all duration-300 rounded-lg"
                          onClick={handleLinkClick}
                        >
                          <Wrench size={16} className="mr-3" />
                          <span className="text-sm font-medium">{sublink.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                to={link.route}
                className="flex items-center px-6 py-3 space-x-4 hover:bg-white/10 transition-all duration-300 rounded-lg"
                onClick={handleLinkClick}
              >
                {link.icon}
                <span className="text-lg font-medium">{link.title}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full px-6 py-4 bg-white/10 text-sm text-center">
        <p className="opacity-80">© {currentYear} Your Company</p>
      </div>
    </div>
  );
}

export default SideNav;