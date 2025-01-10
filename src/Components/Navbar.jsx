import React, { useRef, useState } from "react";
import vlogo from "../assets/image/logo.png";
import Navcontent from "./Navcontent";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import SideNav from "./SideNav";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const navToggle = () => {
    setNavOpen(!navOpen);
  };

  const navRef = useRef();
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      delay: 0.3,
    });
  });

  return (
    <>
      <nav
        ref={navRef}
        className="10 backdrop-blur-md flex w-full bg-white  justify-between px-10 items-center  z-50"
      >
        <div className="flex  justify-center items-center lg:gap-4 gap-1" >
          <div className="w-[50px] h-[50px] rounded-full my-3 ">
            <img src={vlogo} alt="logo" />
          </div>{" "}
          <div className="lg:text-4xl font-bold bg-gradient-to-r from-red-500 to-blue-300 bg-clip-text text-transparent " >
            Vehicle solution Bhopal 
          </div>
        </div>
        <Navcontent />
        <div className="lg:hidden" onClick={navToggle}>
          {navOpen ? (
            <X
              size={30}
              className={`${navOpen ? "block" : "hidden"} text-white`}
            />
          ) : (
            <Menu size={30} className="text-red-500" />
          )}
        </div>
      </nav>

      {navOpen && <SideNav navOpen={navOpen} setNavOpen={setNavOpen} />}
    </>
  );
}

export default Navbar;
