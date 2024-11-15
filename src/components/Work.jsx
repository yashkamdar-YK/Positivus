import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
    <div className="mt-[6.313rem]">
      <div className=" flex gap-10 ">
        <h2 className="bg-primary inline px-[7px] rounded-[7px]">
          Our Working Process{" "}
        </h2>
        <p>
          Step-by-Step Guide to Achieving <br /> Your Business Goals
        </p>
      </div>
      <div className="max-w-full mt-20 space-y-8">
        <div className="space-y-8">
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
                {/* Content appears above when expanded */}
                {openSection === index && (
                  <div className="px-[3.75rem] text-lg leading-[1.436rem] pt-10 pb-[1.875rem] text-gray-800">
                    <hr className="border-t border-[#191A23] mb-[1.875rem]" />
                    <div>{section.content}</div>
                  </div>
                )}

                {/* Heading section */}
                <div
                  className="px-[3.75rem] py-[2.563rem] cursor-pointer flex items-center justify-between"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center gap-4">
                    <h1>{section.number}</h1>
                    <h3>{section.title}</h3>
                  </div>
                  <button
                    className="w-[3.625rem] h-[3.625rem] flex items-center justify-center bg-tertiary rounded-full border border-[#191A23]"
                    aria-label={
                      openSection === index ? "Close section" : "Open section"
                    }
                  >
                    {openSection === index ? (
                      <img src="/public/Icon/min.svg" className="w-[17.76px] h-[5.64px]" alt="" />
                    ) : (
                      <img src="/public/Icon/plus.svg" className="w-[25.08px] " alt="" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
