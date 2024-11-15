import React from "react";
import Illustration from "/Illustration.svg";
const Hero = () => {
  return (
    <div className="lg:mt-[4.375rem] mt-10 sm:mt-[2.5rem] flex-wrap mb-[4.375rem] flex justify-between">
      <div className="md:w-[33.188rem] flex-wrap  md:h-[30.063rem] ">
        <h1 className="lg:leading-[4.785rem] leading-[3.429rem] mb-[2.188rem] ">
          Navigating the digital landscap for success 
        </h1>
        <h4 className="mb-[2.188rem] font-normal">
          Our digital marketing agency helps businesses <br /> grow and succeed
          online through a range of <br /> services including SEO, PPC, social
          media marketing, and content creation.
        </h4>
        <button className="w-[16.5rem] h-[4.25rem] text-[#FFFFFF] text-xl font-normal rounded-[0.875rem] bg-[#191A23]">
          Book a consultation
        </button>
      </div>
      <div>
        <img src={Illustration} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Hero;


