"use client";

import React, { useRef, useState } from "react";
import { bannerMainDescription } from "@/constant";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/components/Swiper.css";

// import required modules
import { Autoplay } from "swiper/modules";

const MainBanner = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {bannerMainDescription.map((items, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-[380px] w-full">
              <Image
                src={`/${items.img}`}
                fill
                className="object-cover object-center"
              />
              <div className=" absolute top-0 left-0 w-full h-full">
                <div className="flex flex-col justify-center items-start h-full w-full text-left px-8 gap-y-8">
                  <h2 className="text-3xl font-bold  text-gray-50 sm:text-4xl md:text-[45px]">
                    {items.title}
                  </h2>
                  <p className="text-base text-gray-50 md:text-lg ">
                    {items.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainBanner;
