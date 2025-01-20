import React, { useState } from "react";
import castrol from "../assets/image/castrol.png";
import gtoil from "../assets/image/gtoil.png";
import oilfilter from "../assets/image/oilfilter.png";
import airfilter from "../assets/image/airfilter.png";
import acfilter from "../assets/image/acfilter.png";
import wheel from "../assets/image/wheel.png";
import carvaccume from "../assets/image/carvaccume.png";
import carwipershampo from "../assets/image/carwipershampo.png";
import carbattery from "../assets/image/carbattery.png";
import carcooland from "../assets/image/carcooland.png";
import Searchitem from "./Searchitem";
import { Link } from "react-router-dom";
import Notice from "./Notice";
function CarProducts() {
  const products = [
    {
      id: 1,
      name: "Castrol Engine Oil",
      description: "Synthetic Engine Oil 5W-40",
      image: castrol,
      price: "₹2,999",
      category: "Engine Oil",
    },
    {
      id: 2,
      name: "GT Oil",
      description: "Premium Synthetic Oil",
      image: gtoil,
      price: "₹2,999",
      category: "Engine Oil",
    },
    {
      id: 3,
      name: "Oil Filter",
      description: "High Performance Filter",
      image: oilfilter,
      price: "₹2,999",
      category: "Filters",
    },
    {
      id: 4,
      name: "Air Filter",
      description: "Premium Air Filtration",
      image: airfilter,
      price: "₹2,999",
      category: "Filters",
    },
    {
      id: 5,
      name: "AC Filter",
      description: "Cabin Air Filter",
      image: acfilter,
      price: "₹2,999",
      category: "Filters",
    },
    {
      id: 6,
      name: "Wheel Service",
      description: "Alignment & Balancing",
      image: wheel,
      price: "₹2,999",
      category: "Services",
    },
    {
      id: 7,
      name: "Car Vacuum",
      description: "Interior Cleaning",
      image: carvaccume,
      price: "₹2,999",
      category: "Cleaning",
    },
    {
      id: 8,
      name: "Car Shampoo",
      description: "Premium Wash Solution",
      image: carwipershampo,
      price: "₹2,999",
      category: "Cleaning",
    },
    {
      id: 9,
      name: "Car Battery",
      description: "Long Life Battery",
      image: carbattery,
      price: "₹2,999",
      category: "Electronics",
    },
    {
      id: 10,
      name: "Coolant",
      description: "Engine Cooling Solution",
      image: carcooland,
      price: "₹2,999",
      category: "Fluids",
    },
  ];

  const [query, setquery] = useState("");

  const filtersearch = () => {
    return products.filter((product) => {
      return (
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
    });
  };

  return (
    <div className="bg-slate-100 min-h-screen py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Small Car Services
          </h2>
          <h2 className="text-2xl font-bold text-green-700" >Only at price of the ₹2,999 </h2>
          <p className="text-gray-600">
            Premium quality products for your vehicle maintenance
          </p>
        </div>
        <Searchitem setquery={setquery} query={query} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filtersearch().length>0? (
            <>
              {filtersearch().map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-4">
                    {/* Category Tag */}
                    <div className="mb-3">
                      <span className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                      {product.name}
                    </h3>

                    {/* Image Container */}
                    <div className="aspect-square overflow-hidden mb-4 bg-white rounded-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="text-center space-y-2">
                      <p className="text-gray-600 text-sm">
                        {product.description}
                      </p>

                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
             <div>
                <p className="" >No Services Found</p>
             </div>
            </>
          )}
        </div>
      </div>
          
      <Notice />
     
    </div>
  );
}

export default CarProducts;
