import React from "react";
import Illustration from "/Illustration.svg";

const Hero = () => {
  return (
    <div className="lg:mt-[4.375rem] mt-8 sm:mt-[2.5rem] mb-[4.375rem]">
      <div className="flex flex-col lg:flex-row justify-between">
        <h1 className="lg:hidden leading-[3.429rem] mb-8">
          Navigating the digital&nbsp;landscape for success
        </h1>

        <div className="mb-8 lg:mb-0 lg:order-2">
          <img
            src={Illustration}
            alt="Digital landscape illustration"
            className="w-full lg:w-auto"
          />
        </div>

        {/* Content div */}
        <div className="md:w-[33.188rem] lg:order-1">
          <h1 className="hidden lg:block lg:leading-[4.785rem] mb-[2.188rem]">
            Navigating the digital landscape for success
          </h1>

          <h4 className="mb-[2.188rem] font-normal text-sm md:text-base lg:text-xl">
            Our digital marketing agency helps businesses{" "}
            <br className="hidden lg:block" />
            grow and succeed online through a range of{" "}
            <br className="hidden lg:block" />
            services including SEO, PPC, social media marketing, and content
            creation.
          </h4>

          <button className="w-full lg:w-[16.5rem] h-[4.25rem] text-[#FFFFFF] text-xl font-normal rounded-[0.875rem] bg-[#191A23]">
            Book a consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
