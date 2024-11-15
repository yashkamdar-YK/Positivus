import React from "react";
import Arrow from "/Arrow.svg";
import Card_Illustration from "/Card_Illustration.svg";
import Card_2_Illustration from "/Card_2_Illustration.svg";

const Services = () => {
  return (
    <div className="lg:mt-[8.75rem] mt-[3.75rem]">
      {/* Header Section */}
      <div className="flex items-center :justify-center flex-col md:flex-row md:gap-10">
        <h2 className="bg-primary inline-block px-[7px] rounded-[7px] mb-[1.875rem] md:mb-0 w-fit">
          Services
        </h2>
        <p className="text-center lg:w-[36.25rem] md:text-left">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-10 md:mt-20 flex flex-col md:flex-row gap-8 md:justify-between">
        {/* SEO Card */}
        <div className="w-full md:w-[37.5rem] p-[3.125rem] md:p-[50px] border-b-[5px] bg-[#F3F3F3] rounded-[2.813rem] border-[#191A23] border-[1px]">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex flex-col ">
              <div className="flex flex-col">
                <div className="w-fit h-[2.35rem] bg-[#CCFF66] px-[7px] rounded-[7px]">
                  <h3 className="text-center">Search engine</h3>
                </div>
                <div className="w-fit h-[2.35rem] bg-[#CCFF66] px-[7px] rounded-[7px]">
                  <h3 className="text-center">optimization</h3>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center mt-[5.5rem] gap-4">
                <img src={Arrow} alt="" />
              </div>
              <img
                src={Card_Illustration}
                alt=""
                className="w-[165px] h-[129px]"
              />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between ">
            {/* INFO */}
            <div className="">
              <div className="items-center text-center flex w-[13.813rem] h-[2.35rem] bg-[#CCFF66] px-[7px] rounded-[7px]">
                <h3>Search engine</h3>
              </div>
              <div>
                <div className="text-center items-center flex w-[12.313rem] h-[2.35rem] bg-[#CCFF66] px-[7px] rounded-[7px]">
                  <h3>optimization</h3>
                </div>
              </div>
              {/* Learn */}
              <div className="space-x-[0.938rem] flex mt-[5.5rem] items-center">
                <img src={Arrow} alt="" />
                <h4>Learn more</h4>
              </div>
            </div>
            {/* IMAGE */}
            <div className="flex items-center justify-start">
            <img src={Card_Illustration} alt="" srcset="" />
            </div>
          </div>

        </div>

        {/* PPC Card */}
        <div className="w-full md:w-[37.5rem] p-[3.125rem] md:p-[50px] border-b-[5px] bg-primary rounded-[2.813rem] border-[#191A23] border-[1px]">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="w-fit h-[2.35rem] bg-[#FFFFFF] px-[7px] rounded-[7px]">
                  <h3 className="text-center">Pay-per-click</h3>
                </div>
                <div className="w-fit h-[2.35rem] bg-[#FFFFFF] px-[7px] rounded-[7px]">
                  <h3 className="text-center">advertising</h3>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center mt-[5.5rem]  gap-4">
                <img src={Arrow} alt="" />
              </div>
              <img
                src={Card_2_Illustration}
                alt=""
                className="w-[165px] h-[129px]"
              />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between ">
            {/* INFO */}
            <div className="">
              <div className="items-center text-center flex w-[13.813rem] h-[2.35rem] bg-[#CCFF66] px-[7px] rounded-[7px]">
                <h3>Pay-per-click</h3>
              </div>
              <div>
                <div className="text-center items-center flex w-[12.313rem] h-[2.35rem] bg-[#CCFF66] px-[7px] rounded-[7px]">
                  <h3>optimization</h3>
                </div>
              </div>
              {/* Learn */}
              <div className="space-x-[0.938rem] flex mt-[5.5rem] items-center">
                <img src={Arrow} alt="" />
                <h4>Learn more</h4>
              </div>
            </div>
            {/* IMAGE */}
            <div className="flex items-center justify-start">
            <img src={Card_2_Illustration} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
