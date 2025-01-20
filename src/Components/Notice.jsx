import React from "react";
import { Link } from "react-router-dom";

function Notice() {
  return (
    <>
     <div>
     <div className="mt-12 text-center">
        <p className="text-gray-600">
          * Prices may vary based on vehicle condition and specific requirements
        </p>
        <div className="">
          <Link to="/Appointment">
            <div className="bg-red-500 md:w-[200px] w-full  p-2 text-center text-white m-auto mt-10 rounded-full ">
              Book your services now
            </div>
          </Link>
        </div>
      </div>
     </div>
    </>
  );
}

export default Notice;
