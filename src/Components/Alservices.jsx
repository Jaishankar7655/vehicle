import React from "react";
import {
  Car,
  Wrench,
  Settings,
  Disc,
  Battery,
  ChevronRight,
} from "lucide-react";
import { title } from "motion/react-client";

function Alservices() {
  const serviceMenu = [
    {
      title: "Car Wash & Spa",
      route: "/services/CarWashService",
      description: "Professional car washing and detailing services",
      icon: Car,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Mechanical Repair",
      route: "/services/MechanicalRepairService",
      description: "Expert mechanical repair and maintenance",
      icon: Wrench,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "General Services",
      route: "/services/GeneralServices",
      description: "Comprehensive automotive care services",
      icon: Settings,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Tires & Wheel Services",
      route: "/services/TireServices",
      description: "Complete tire and wheel maintenance",
      icon: Disc,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Electrical Repairs",
      route: "/services/ElectricalRepairService",
      description: "Professional electrical system repairs",
      icon: Battery,
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  return (
    <>
      <div className="w-full bg-slate-100 ">
        <div className="md:w-[80%] m-auto w-[97%]">
          <div>
            <h1 className="font-bold text-3xl">Car Services</h1>
            <p className="text-slate-500 text-xl">
              Choose from our range of professional automotive services
            </p>
          </div>

          <div className="flex flex-wrap gap-10 mt-10">
            {serviceMenu.map((service, index) => {
              const Icons = service.icon;
              return (
                <div className=" relative mx-w-[400px] bg-white px-5 py-3 rounded-md  shadow-xl transition-transform hover:-translate-y-3 md:w-[400px] w-full">
                  <div className="w-[50px] h-[50px]  mt-4 rounded-full flex justify-center items-center">
                    <div
                      className={`w-12 h-12 ${service.bgColor} ${service.iconColor} rounded-full flex items-center justify-center mb-4`}
                    >
                      <Icons size={24} />
                    </div>
                  </div>
                  <p className="py-3 text-xl font-bold">{service.title}</p>
                  <p className="text-gray-500" >{service.description}</p>
                  <div className="flex my-3 text-red-600" ><div><p>Learn more </p></div>  <ChevronRight/>  </div>
                
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Alservices;
