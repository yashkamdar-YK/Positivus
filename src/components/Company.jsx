import React from 'react';

const Company = () => {
  const logos = [
    "/public/logos/amazon.svg",
    "/public/logos/Dribble.svg", 
    "/public/logos/Hubspot.svg",
    "/public/logos/Netflix.svg",
    "/public/logos/Notion.svg",
    "/public/logos/Zoom.svg"
  ];

  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden lg:flex justify-between">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="" className="h-12 object-contain" />
        ))}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">
        {/* First Slider */}
        <div className="overflow-hidden relative">
          <div className="flex gap-12 animate-scroll px-8">
            {[...logos.slice(0, 3), ...logos.slice(0, 3)].map((logo, index) => (
              <div key={index} className="min-w-[33.33%] flex justify-center">
                <img src={logo} alt="" className="h-12 object-contain lg:filter lg:grayscale" />
              </div>
            ))}
          </div>
        </div>

        {/* Second Slider */}
        <div className="overflow-hidden relative mt-8">
          <div className="flex gap-12 animate-scroll-reverse px-8">
            {[...logos.slice(3), ...logos.slice(3)].map((logo, index) => (
              <div key={index} className="min-w-[33.33%] flex justify-center">
                <img src={logo} alt="" className="h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;