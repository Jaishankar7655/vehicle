 import React from "react";

  function ServiceSearch({setQuery , query}) {
    return (
    
    <>
      <div className="border border-red-500 w-full lg:w-[50%] m-auto my-9 flex positio ">
          <input
          value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Serch for the services"
            type="text"
            className=" p-2 w-full text-red-600 "
          />
          <div>
            {" "}
            <button
            
              className="p-2 bg-red-500 text-white"
            >
              Search{" "}
            </button>{" "}
          </div>
        </div>
      </>
  
    )
  }

  export default ServiceSearch;
