"use client";
import { useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import Imagination_Brand_Icon from "/public/assets/imagination-brand.png";
import Discovery_Motion_Design_Icon from "/public/assets/Discovery-motion-design.png";
import Execute_Design_Icon from "/public/assets/Execute-design.png";
import Amplify_Mentor_Icon from "/public/assets/Amplify-mentor.png";

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
    <section className={`mt-[4rem] my-3 space-y-5 w-full h-[calc(105vh-5rem)]`}>
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
            className={`py-10 px-5 flex items-center justify-center`}
          >
            <div
              className={`relative h-full w-full shadow-lg bg-[#FAECEB] py-5 px-3 md:py-8 md:px-4`}
            >
              <div className={`w-[40%] bg-[#B0001E] py-2 px-8`}>
                <h3
                  className={`${spaceGrotesk.className} font-medium text-[#FFFFFF] text-5xl md:text-7xl `}
                >
                  D
                </h3>
              </div>

              <h4
                className={`${libre.className} font-bold uppercase text-2xl md:text-3xl mt-5`}
              >
                DISCOVERY
              </h4>

              <p
                className={`${spaceGrotesk.className} mt-2 font-normal text-sm md:text-base`}
              >
                We dive into market trends, audience behaviors, and competitive
                analysis to uncover unique opportunities that will give your
                brand the edge it needs to stand out.
              </p>

              <div className={`flex items-center justify-end`}>
                <Image
                  src={Discovery_Motion_Design_Icon}
                  alt="imagination-brand"
                  width={0}
                  height={0}
                  className={`absolute size-15 -bottom-7 -right-5 md:size-20 md:-bottom-6`}
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={`-rotate-12 py-10 px-5 flex items-center justify-center`}
          >
            <div
              className={`relative h-full w-full shadow-lg bg-[#FFF8F4] py-5 px-3 md:py-8 md:px-4`}
            >
              <Image
                src={Execute_Design_Icon}
                alt="imagination-brand"
                width={0}
                height={0}
                className={`absolute size-15 -left-2 -top-10 md:size-20 md:-top-15`}
              />

              <div className={`w-[40%] bg-[#B0001E] py-2 px-8`}>
                <h3
                  className={`${spaceGrotesk.className} font-medium text-[#FFFFFF] text-5xl md:text-7xl `}
                >
                  E
                </h3>
              </div>

              <h4
                className={`${libre.className} font-bold uppercase text-2xl md:text-3xl mt-5`}
              >
                EXECUTE
              </h4>

              <p
                className={`${spaceGrotesk.className} mt-2 font-normal text-sm md:text-base`}
              >
                where strategy meets creativity, and ideas come to life. Our
                team of experts meticulously crafts and deploys campaigns that
                not only resonate with your audience but also drive measurable
                results.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={`py-10 px-5 flex items-center justify-center`}
          >
            <div
              className={`relative h-full w-full shadow-lg bg-[#F8F8F8] py-5 px-3 md:py-8 md:px-4`}
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
                AMPLIFY
              </h4>

              <p
                className={`${spaceGrotesk.className} mt-2 font-normal text-sm md:text-base`}
              >
                Through targeted amplification strategies, we ensure your
                message reaches the right audience at the right time, expanding
                your brand’s presence and driving sustained growth.
              </p>

              <div className={`flex items-center justify-start`}>
                <Image
                  src={Amplify_Mentor_Icon}
                  alt="imagination-brand"
                  width={0}
                  height={0}
                  className={`absolute size-12 -bottom-7 -left-8 md:size-20 md:-bottom-6`}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
