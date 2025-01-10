import React from "react";
import { Settings, Paintbrush, Car } from "lucide-react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-center text-red-700 text-lg font-medium mb-2">Our Services</h1>
          <h1 className="text-center text-4xl font-extrabold mb-8">
            Our premium Auto services
          </h1>
          <div className="flex justify-center">
            <div className="w-52 h-1 bg-red-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="w-full gap-10 justify-around flex-wrap flex mt-12">
          <Link to="/ServiceContainer" className="lg:w-[20%] w-[96%] transform transition-all duration-300 hover:-translate-y-1" >
               
          <div >
            <div className="p-6 bg-white h-[300px] text-center border hover:border-red-700 rounded-lg shadow-md hover:shadow-xl">
              <div className="flex justify-center mb-6">
                <Car className="w-12 h-12 text-red-600" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Car services</h1>
              <p className="text-gray-600">
                Experience top-notch car maintenance and repair services to keep
                your vehicle in perfect condition.
              </p>
            </div>
          </div>
          </Link>

          <div className="lg:w-[20%] w-[96%] transform transition-all duration-300 hover:-translate-y-1">
           <Link to="/Services/BodyServices" >
           
           <div className="p-6 bg-white h-[300px] text-center border hover:border-red-700 rounded-lg shadow-md hover:shadow-xl">
              <div className="flex justify-center mb-6">
                <Paintbrush className="w-12 h-12 text-red-600" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Body services</h1>
              <p className="text-gray-600">
                Enjoy a premium body wash that restores your car's shine and
                protects its exterior.
              </p>
            </div></Link>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Services;