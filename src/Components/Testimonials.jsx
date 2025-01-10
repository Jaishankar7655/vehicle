import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VideoCarousel = () => {
  const videoIds = [
    "/f-t_IkcKB1M",
    "58VZ1r8D7eA",
    "U6sEP8m95jI",
    "bfHwoTzYR1o",
    "dK_MB8s8tdM",
  ];

  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-[98%] max-w-[1600px] mx-auto p-4  z-0">
      <h1 className="text-red-700 text-4xl font-bold pb-4 text-center">
        Our Client Testimonials
      </h1>

      <div className="relative">
        {/* Left Button */}
        {showLeftButton && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                     bg-white/80 hover:bg-white
                     p-2 rounded-full shadow-lg
                     transform transition-all duration-200 hover:scale-110"
            aria-label="Previous videos"
          >
            <ChevronLeft className="w-6 h-6 text-red-700" />
          </button>
        )}

        {/* Right Button */}
        {showRightButton && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                     bg-white/80 hover:bg-white
                     p-2 rounded-full shadow-lg
                     transform transition-all duration-200 hover:scale-110"
            aria-label="Next videos"
          >
            <ChevronRight className="w-6 h-6 text-red-700" />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
        >
          <div className="flex space-x-4 md:space-x-6 lg:space-x-8 pb-4">
            {videoIds.map((id, index) => (
              <div
                key={index}
                className="flex-none w-[280px] rounded-lg shadow-lg overflow-hidden
                          transform hover:scale-105 transition-transform duration-300
                          bg-white aspect-[4/5]"
              >
                <iframe
                  className="w-full h-full object-cover"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
