import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const testimonials = [
  {
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp"
  },
  {
    quote: "Positivus has been instrumental in our digital transformation journey. Their expertise and commitment have driven outstanding results.",
    name: "Jane Doe",
    title: "CEO at ABC Inc"
  },
  {
    quote: "Our collaboration with Positivus has been nothing short of amazing. We have seen tangible improvements in our engagement metrics.",
    name: "Michael Brown",
    title: "Head of Marketing at DEF Ltd"
  },
];

const TestimonialSlider = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full max-w-xl"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
              <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
              <p className="text-green-400 font-semibold text-lg">{testimonial.name}</p>
              <p className="text-green-300 text-sm">{testimonial.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation and Pagination container */}
      <div className="flex items-center justify-center space-x-4 mt-4 absolute bottom-0 left-1/2 transform -translate-x-1/2">
        {/* Previous Arrow */}
        <div className="swiper-button-prev text-green-400 hover:text-green-500"></div>
        
        {/* Pagination Dots */}
        <div className="swiper-pagination"></div>
        
        {/* Next Arrow */}
        <div className="swiper-button-next text-green-400 hover:text-green-500"></div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
