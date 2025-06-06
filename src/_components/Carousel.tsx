"use client";

import { useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface CarouselSlide {
  //If you want to map over the items Define the properties of each slide
  //   id: number;
  //   title: string;
  //   amount: string;
  //   bgImage: string;
  //   location: string;
}

type TrendingFlightSwiperJsCarouselProps = {
  nextElClass: string;
  prevElClass: string;
  children: React.ReactNode;
  //   slides: CarouselSlide[];
  spaceBtw: string | number;
};

export const Carousel = ({
  nextElClass,
  prevElClass,
  //   slides,
  children,
  spaceBtw,
}: TrendingFlightSwiperJsCarouselProps) => {
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
    <Swiper
      className={`h-full`}
      slidesPerView={slidesToShow}
      spaceBetween={spaceBtw}
      modules={[Navigation]}
      navigation={{ nextEl: nextElClass, prevEl: prevElClass }}
    >
      {children}

      {/* {slides.map((sld) => (
        <SwiperSlide
          key={sld.id}
          className={`h-full rounded-2xl`}
          style={{
            backgroundImage: "url('${sld.bgImage}')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></SwiperSlide>
      ))} */}
    </Swiper>
  );
};
