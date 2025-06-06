"use client";
import { useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import Imagination_Brand_Icon from "/public/assets/imagination-brand.png";

import "swiper/css";
import "swiper/css/navigation";

import { libre, spaceGrotesk } from "@/utilities/customFonts";
import Image from "next/image";

const WhatWeDoSection = () => {
  const [slidesToShow, setSlidesToShow] = useState<number>(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(2.5);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`my-3 space-y-5 w-full h-[calc(105vh-5rem)]`}>
      <div
        className={`${libre.className} w-full font-bold text-[#000000] text-3xl md:text-5xl `}
      >
        <h2 className={`leading-10 md:leading-14`}>
          What We <br />
          <span className={`text-[#970029] italic font-medium`}>Really </span>
          Do??
        </h2>
      </div>

      <div className={`h-[75%] w-full flex items-center `}>
        <Swiper
          className={`h-full `}
          slidesPerView={slidesToShow}
          spaceBetween={`50px`}
          modules={[Navigation, Pagination]}
          navigation={{ enabled: true, nextEl: ".next", prevEl: ".prev" }}
          autoplay={{
            delay: 1000,
          }}
        >
          <SwiperSlide
            className={`-rotate-12 py-10 px-5 flex items-center justify-center`}
          >
            <div
              className={`relative h-full w-full shadow-lg bg-[#FAECEB] py-5 px-3 md:py-8 md:px-4`}
            >
              <div className={`w-[40%] bg-[#B0001E] py-2 px-8`}>
                <h3
                  className={`${spaceGrotesk.className} font-medium text-[#FFFFFF] text-5xl md:text-7xl `}
                >
                  I
                </h3>
              </div>

              <h4
                className={`${libre.className} font-bold uppercase text-2xl md:text-3xl mt-5`}
              >
                Imagination
              </h4>

              <p
                className={`${spaceGrotesk.className} mt-2 font-normal text-sm md:text-base`}
              >
                We work closely with you to understand your brand's unique voice
                and goals. Together, we dream big and build the foundation for
                something extraordinary.
              </p>

              <div className={`flex items-center justify-center`}>
                <Image
                  src={Imagination_Brand_Icon}
                  alt="imagination-brand"
                  width={0}
                  height={0}
                  className={`absolute size-15 -bottom-7 md:size-20 md:-bottom-12`}
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={`pt-20 px-5 flex items-center justify-center `}
          >
            <div className={`border h-full w-full`}>TWO</div>
          </SwiperSlide>

          <SwiperSlide
            className={` -rotate-12 pb-20 px-5 flex items-center justify-center `}
          >
            <div className={`border h-full w-full`}>THREE</div>
          </SwiperSlide>

          <SwiperSlide
            className={`pt-20 py-10 px-5 flex items-center justify-center `}
          >
            <div className={`border h-full w-full`}>FOUR</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
