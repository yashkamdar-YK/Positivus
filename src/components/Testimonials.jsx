// import React from "react";
// import TestoCard from "./TestoCard";
// import { Swiper, SwiperSlide } from 'swiper/react';

// const Testimonials = () => {
//   return (
//     <div className="mt-[8.625rem] overflow-hidden">
//       <div className=" flex gap-10 ">
//         <h2 className="bg-primary inline px-[7px] rounded-[7px]">
//           Testimonials{" "}
//         </h2>
//         <p>
//           Hear from Our Satisfied Clients: Read Our Testimonials <br /> to Learn
//           More about Our Digital Marketing Services
//         </p>
//       </div>
//       {/* Carousel section */}
//       <div className="w-full h-[39.063rem] relative bg-[#191A23] rounded-[2.813rem] mt-20">
//         {/* <div className="flex relative top-[5.25rem] -left-40 gap-[40vw]">
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React, { useRef, useState } from "react";
import { CiStar } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import testimonialBg from "/Bubble.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence",
    author: "John Smith",
    company: "Marketing Director at XYZ Corp.",
  },
  {
    id: 2,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence",
    author: "John Smith",
    company: "Marketing Director at XYZ Corp",
  },
  {
    id: 3,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence",
    author: "John Smith",
    author: "Alex Rodriguez",
    company: "Marketing Director at XYZ Corp",
  },
  {
    id: 4,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence",
    author: "John Smith",
    author: "Alex Rodriguez",
    company: "Marketing Director at XYZ Corp",
  },{
    id: 5,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence",
    author: "John Smith",
    author: "Alex Rodriguez",
    company: "Marketing Director at XYZ Corp",
  },
];

const Testimonials = () => {
  // Add swiperRef
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-[8.625rem] overflow-hidden">
      <div className="flex gap-10">
        <h2 className="bg-primary inline px-[7px] rounded-[7px]">
          Testimonials
        </h2>
        <p>
          Hear from Our Satisfied Clients: Read Our Testimonials <br /> to Learn
          More about Our Digital Marketing Services
        </p>
      </div>

      {/* Carousel section */}
      <div className="w-full h-[39.063rem] relative bg-[#191A23] rounded-[2.813rem] mt-20">
        <div className="pt-20">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={2}
            centeredSlides={true}
            loop={true}
            initialSlide={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            navigation={false}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            className="testimonial-swiper"
            slideToClickedSlide={true}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="px-4 transition-all duration-300 scale-90 swiper-slide-content">
                  <div className="relative">
                    {/* Replace SVG with your image */}
                    <div className="relative w-full">
                      <img
                        src={testimonialBg}
                        alt="testimonial background"
                        className="w-full"
                      />
                      <div className="absolute inset-0 p-8 flex flex-col justify-center">
                        <p className="text-white leading-[22px] text-lg mb-4">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-20 mt-4">
                    <h4 className="text-primary font-semibold">
                      {testimonial.author}
                    </h4>
                    <p className="text-white">{testimonial.company}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation and Pagination in one line */}
          <div className="flex items-center justify-center space-x-60 mt-16">
            <button
              className="custom-prev-button p-1 hover:bg-gray-800 rounded-full transition-colors"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaArrowLeft className="w-6 h-6 text-white" />
            </button>

            {/* <div className="custom-pagination"></div> */}
            <div className="custom-pagination inline-block gap-2">
              {testimonials.map((_, index) => (
                <CiStar
                  key={index} // Unique key for React mapping
                  size={24} // Icon size
                  className={`cursor-pointer transition-all ${
                    activeIndex === index ? "text-green-500" : "text-gray-500"
                  }`} // Change color based on active slide
                  onClick={() => swiperRef.current?.slideToLoop(index)} // Navigate to the respective slide
                />
              ))} 
            </div>

            <button
              className="custom-next-button p-1 hover:bg-gray-800 rounded-full transition-colors"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
