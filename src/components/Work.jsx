import React, { useState } from "react";
import plusIcon from "../assets/Icon/plus.svg"
import minusIcon from "../assets/Icon/min.svg"
const Work = () => {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      number: "01",
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      content:
        "Our team conducts thorough market research and develops comprehensive strategies aligned with your business objectives. We analyze competitors, identify opportunities, and create actionable plans.",
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="lg:mt-[6.313rem] mt-[2.471rem]">
      <div className="flex flex-col text-center items-center md:flex-row md:gap-10">
        {/* Mobile View Headings */}
        <div className="block md:hidden">
          <h2 className="bg-primary inline-block rounded-[7px] px-[7px] ">
            Our Working
          </h2>
          <h2 className="bg-primary inline-block rounded-[7px] px-[7px]">
            Process
          </h2>
        </div>

        {/* Desktop */}
        <h2 className="hidden md:block md:text-left bg-primary  rounded-[7px] px-[7px]">
          Our Working Process
        </h2>

        <p className="text-center my-[1.875rem] lg:w-[18.25rem] md:text-left">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className=" md:mt-20 space-y-5">
        {sections.map((section, index) => (
          <div
            key={index}
            className="rounded-[45px] border border-[#191A23] border-b-[5px] overflow-hidden"
          >
            <div
              className={`transition-colors ${
                openSection === index ? "bg-primary" : "bg-tertiary"
              }`}
            >
              {openSection === index && (
                <div className="px-4 md:px-[3.75rem] text-lg leading-[1.436rem] pt-5 pb-[1.875rem] text-gray-800">
                  <hr className="border-t border-[#191A23] mb-[1.875rem]" />
                  <div>{section.content}</div>
                </div>
              )}

              <div
                className="px-4 md:px-[3.75rem] py-6 md:py-[2.563rem] cursor-pointer flex items-center justify-between"
                onClick={() => toggleSection(index)}
              >
                <div className="flex md:flex-row md:items-center items-center  px-2 gap-[2.063rem] md:gap-4">
                  <h1 className="text-3xl md:text-6xl">{section.number}</h1>
                  <h3 className="text-lg tracking-tight md:text-3xl">
                    {section.title}
                  </h3>
                </div>
                <div>
                  <button
                    className="w-[1.875rem] h-[1.875rem] md:w-[3.625rem] md:h-[3.625rem] flex items-center justify-center bg-tertiary rounded-full  border border-[#191A23]"
                    aria-label={
                      openSection === index ? "Close section" : "Open section"
                    }
                  >
                    <img
                      src={
                        openSection === index
                          ? minusIcon
                          : plusIcon
                      }
                      className={
                        openSection === index
                          ? "w-[0.811rem] md:w-[1.563rem] h-[0.811rem]"
                          : "w-[0.811rem] md:w-[1.563rem]"
                      }
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
