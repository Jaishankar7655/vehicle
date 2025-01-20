import React, { useState } from "react";
import frontbumfer from "../assets/bodyimages/frontbumfer.png";
import frontfunder from "../assets/bodyimages/frontfunder.png";
import frontdoor from "../assets/bodyimages/frontdoor.png";
import rareroof from "../assets/bodyimages/rareroof.png";
import roof from "../assets/bodyimages/roof.png";
import bonut from "../assets/bodyimages/bonut.png";
import runningboard from "../assets/bodyimages/runningboard.png";
import quarterpannel from "../assets/bodyimages/quarterpannel.png";
import sideviewmirror from "../assets/bodyimages/sideviewmirror.png";
import diccky from "../assets/bodyimages/diccky.png";
import Searchitem from "./Searchitem";

function BodyServices() {
  // Array containing the service data, including title, price, and corresponding image.
  const bodyservices = [
    {
      title: "Front Bumper Repair",
      price: "₹2,250",
      image: frontbumfer,
    },
    {
      title: "Front Fender Service",
      price: "₹2,350",
      image: frontfunder,
    },
    {
      title: "Front Door Service",
      price: "₹2,600",
      image: frontdoor,
    },
    {
      title: "Rear Roof Repair",
      price: "₹2,600",
      image: rareroof,
    },
    {
      title: "Roof Service",
      price: "₹4,000",
      image: roof,
    },
    {
      title: "Bonnet Service",
      price: "₹3,800",
      image: bonut,
    },
    {
      title: "Running Board Repair",
      price: "₹1,800",
      image: runningboard,
    },
    {
      title: "Quarter Panel Service",
      price: "₹2,600",
      image: quarterpannel,
    },
    {
      title: "Diccky Repair",
      price: "₹500",
      image: diccky,
    },
    {
      title: "Side Mirror Repair",
      price: "₹500",
      image: sideviewmirror,
    },
  ];

  // State for search query
  const [query, setquery] = useState("");

  // Filter function based on search query
  const filterSearch = () => {
    return bodyservices.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="bg-gradient-to-b from-slate-100 to-slate-300 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Body Repairs
        </h1>

        {/* Search input */}
        <Searchitem setquery={setquery} query={query}  />

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {filterSearch().length > 0 ? (
            filterSearch().map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-4">
                  {/* Product Name */}
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                    {product.title}
                  </h3>

                  {/* Image Container */}
                  <div className="aspect-square overflow-hidden mb-4 bg-white rounded-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-green-600 font-bold text-lg">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <p className="text-xl text-gray-600">No Services Found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BodyServices;
