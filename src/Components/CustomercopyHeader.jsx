import React from 'react';

function CustomercopyHeader() {
  return (
    <header className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Customer Copy Section */}
        <div className="space-y-4">
          <span className="inline-block bg-black text-white px-4 py-1.5 text-sm font-medium rounded-md">
            Customer Copy
          </span> 
          <div className="space-y-2">
            <p className="text-gray-600 font-medium">Customer Details:</p>
            <h3 className="text-2xl font-bold text-gray-800">
              Make Model:
              <span className="text-gray-600 text-lg ml-2 font-normal">
                Enter vehicle details
              </span>
            </h3>
          </div>
        </div>

        {/* Workshop Details */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 border rounded-lg flex items-center justify-center mx-auto">
            {/* Replace with your actual logo path */}
            <img
              src="/path-to-your-logo.png"
              alt="Workshop Logo"
              className="w-full h-full object-contain p-2"
            />
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-xl text-gray-800 border-b border-gray-300 pb-2">
              Multi Brand Workshop & BodyShop
            </h1>
            <p className="text-sm text-gray-600">
              26/A Near Surjeet Hyundai, J.K. Road
              <br />
              Bhopal-887112111
            </p>
            <p className="text-sm text-gray-600">
              Tel: 0755-4862244
              <br />
              Mob: 887112211, 958442211
            </p>
          </div>
        </div>
   
        {/* Bill Details */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Bill Number
            </label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter bill number"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>


      </div>
    </header>
  );
}

export default CustomercopyHeader;