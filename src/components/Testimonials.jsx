import React, { useRef, useState } from "react";
import { CiStar } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import testimonialBg from "/Bubble.svg";
import testimonialMobileBg from "/Union.svg";
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
    },
    {
      id: 5,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence",
      author: "John Smith",
      author: "Alex Rodriguez",
      company: "Marketing Director at XYZ Corp",
    },
  ];

const Testimonials = () => {
  const desktopSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="lg:mt-[8.625rem] mt-[4.375rem] overflow-hidden">
      {/* MOBILE HEADER */}
      <div className="flex flex-col md:hidden items-center">
        <h2 className="bg-primary w-fit px-[7px] mb-[1.875rem] rounded-[7px]">Testimonials</h2>
        <p className="text-center px-4">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      {/* DESKTOP HEADER */}
      <div className="hidden md:flex gap-10">
        <h2 className="bg-primary inline px-[7px] rounded-[7px]">Testimonials</h2>
        <p>
          Hear from Our Satisfied Clients: Read Our Testimonials <br /> to Learn
          More about Our Digital Marketing Services
        </p>
      </div>

      {/* DESKTOP CAROUSEL */}
      <div className="hidden md:block w-full h-[39.063rem] relative bg-[#191A23] rounded-[2.813rem] mt-20">
        <div className="pt-20">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={2}
            centeredSlides={true}
            loop={true}
            onSwiper={(swiper) => {
              desktopSwiperRef.current = swiper;
              swiper.on("slideChange", () => setActiveIndex(swiper.realIndex));
            }}
            navigation={false}
            pagination={{
              clickable: true,
              el: ".desktop-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="px-4 transition-all duration-300 scale-90 swiper-slide-content">
                <div className="relative">
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

          {/* PAGINICATION */}
          <div className="flex items-center justify-center gap-60 mt-8">
            <button
              onClick={() => desktopSwiperRef.current?.slidePrev()}
              className="p-2"
            >
              <FaArrowLeft className="text-white w-5 h-5" />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <CiStar
                  key={index}
                  size={20}
                  className={`cursor-pointer transition-all ${
                   activeIndex === index ? "text-[#CCFF66]" : "text-gray-500"
                 }`}
                  onClick={() => {
                    desktopSwiperRef.current?.slideToLoop(index);
                    setActiveIndex(index);
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => desktopSwiperRef.current?.slideNext()}
              className="p-2"
            >
              <FaArrowRight className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="md:hidden mt-8 bg-[#191A23] rounded-[2.813rem] p-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => {
            mobileSwiperRef.current = swiper;
            swiper.on("slideChange", () => setActiveIndex(swiper.realIndex));
          }}
          className="mobile-testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="relative">
                <img
                  src={testimonialMobileBg}
                  alt="testimonial background"
                  className="w-full"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-center">
                  <p className="text-white text-base leading-tight mb-6">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
              <div className="ml-[3.6rem]">
                <h4 className="text-primary font-semibold">
                  {testimonial.author}
                </h4>
                <p className="text-white text-sm">{testimonial.company}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => mobileSwiperRef.current?.slidePrev()}
            className="p-2"
          >
            <FaArrowLeft className="text-white w-5 h-5" />
          </button>
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <CiStar
                key={index}
                size={20}
                className={
                  activeIndex === index ? "text-primary" : "text-white"
                }
                onClick={() => mobileSwiperRef.current?.slideToLoop(index)}
              />
            ))}
          </div>
          <button
            onClick={() => mobileSwiperRef.current?.slideNext()}
            className="p-2"
          >
            <FaArrowRight className="text-white w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

