import React from "react";
import Arrow from "/Arrow.svg";
import Card_Illustration from "/Card_Illustration.svg";
import Card_2_Illustration from "/Card_2_Illustration.svg"
const Services = () => {
  return (
    <div className="mt-[8.75rem]">
      <div className=" flex gap-10 ">
        <h2 className="bg-primary inline px-[7px] rounded-[7px]">Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to{" "}
          <br /> help businesses grow and succeed online. These services
          include:
        </p>
      </div>
      <div className="mt-20 flex-wrap flex justify-between">
        {/* Card */}
        <div className="w-[37.5rem] p-[50px] flex border-b-[5px] bg-[#F3F3F3] justify-between h-[19.375rem] rounded-[2.813rem] border-[#191A23] border-[1px]">
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
            <div className="space-x-[0.938rem] flex mt-[5.813rem] items-center">
              <img src={Arrow} alt="" />
              <h4>Learn more</h4>
            </div>
          </div>
          <div className="flex items-center justify-start"> 
            <img src={Card_Illustration} alt="" srcset="" />
          </div>
        </div>

        <div className="w-[37.5rem] p-[50px] border-b-[5px]  flex bg-primary justify-between h-[19.375rem] rounded-[2.813rem] border-[#191A23] border-[1px]">
          <div className="">
            <div className="items-center text-center flex w-[13.813rem] h-[2.35rem] bg-[#FFFFFF] px-[7px] rounded-[7px]">
            <h3>Pay-per-click</h3>
            </div>
            <div>
              <div className="text-center items-center flex w-[12.313rem] h-[2.35rem] bg-[#FFFFFF] px-[7px] rounded-[7px]">
                <h3>advertising</h3>
              </div>
            </div>
            {/* Learn */}
            <div className="space-x-[0.938rem] flex mt-[5.813rem] items-center">
              <img src={Arrow} alt="" />
              <h4>Learn more</h4>
            </div>
          </div>
          <div className="flex items-center justify-start"> 
            <img src={Card_2_Illustration} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
