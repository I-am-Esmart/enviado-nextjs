"use client";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import Image from "next/image";

import DeepspaceImage from "/public/assets/Deepspace.png";
import EridianImage from "/public/assets/Eridian.png";
import LolaImage from "/public/assets/Lola.png";
import WebDesignImage from "/public/assets/WebDesignImage.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Home() {
  const pathName = usePathname();

  const links = [
    { name: "All Projects", route: "/our-works" },
    { name: "Branding", route: "/our-works/branding" },
    { name: "Marketing", route: "/our-works/marketing" },
    { name: "Motion Design", route: "/our-works/motion-design" },
    { name: "Graphics", route: "/our-works/graphics" },
  ];

  const workExamples = [
    {
      id: 1,
      image: DeepspaceImage,
      title: "DEEPSPACE",
      desc: "A Bold Leap For Advanced Manufacturing In Africa",
      webdesignImage: WebDesignImage,
    },
    {
      id: 2,
      image: EridianImage,
      title: "Eridian",
      desc: "A Higher Calling: Building Ventures With Purpose",
      webdesignImage: WebDesignImage,
    },
    {
      id: 3,
      image: LolaImage,
      title: "LOLA",
      desc: "Banking Nigeria’s Unbanked Grassroots",
      webdesignImage: WebDesignImage,
    },
  ];

  return (
    <div className={``}>
      {/* <div
        className={`min-h-screen bg-[url('/assets/landingImage.png')] bg-center bg-cover bg-no-repeat py-20`}
      >
        <div
          className={`w-full h-screen px-10 py-5 flex flex-col justify-center items-center`}
        >
          <div className={`w-full flex justify-center items-center`}>
            <div
              className={`w-full flex flex-col gap-10 text-white font-bold uppercase`}
            >
              <h1
                className={`w-full ${libre.className} font-extrabold text-5xl md:w-[50%] md:text-7xl`}
              >
                Our 360º
              </h1>
              <h1
                className={`w-full ${libre.className} text-5xl md:w-[50%] md:text-7xl`}
              >
                results
              </h1>
            </div>
          </div>
          <div className={`w-[50%] flex items-center justify-end`}>
            <Image
              src={ArrowImage}
              alt="arrow image"
              width={0}
              height={0}
              className={`w-[7rem] rotate-[20deg] md:rotate-0 md:w-[12rem] md:text-start ml-2 `}
            />
          </div>

          <div
            className={`w-full mt-2 py-5 flex flex-col-reverse text-[1rem]  md:flex-row md:items-start `}
          >
            <div
              className={`w-full ${spaceGrotesk.className} text-white text-[1.2rem] font-[400] `}
            >
              <p>
                We do great work!!! See below some of the work we have done and
                landmark we have achieved.
              </p>
            </div>
            <div className={`w-full flex items-center justify-end py-4`}>
              <button
                className={`w-2/4 mr-0 ${spaceGrotesk.className} cursor-pointer flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#970029] text-[1rem] font-normal p-[0.8rem]`}
              >
                <Image
                  src={ButtonImage}
                  alt="arrow"
                  width={0}
                  height={0}
                  className={``}
                />
                Explore
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className={`w-full flex items-center justify-center mt-15`}>
        <div
          className={`w-[80%] md:w-1/2 flex flex-wrap items-center justify-between`}
        >
          {links.map(({ name, route }) => (
            <p key={name} className={`w-full md:w-auto`}>
              <Link
                href={route}
                className={`p-2 cursor-pointer ${
                  pathName === route
                    ? "text-red-600 font-bold border-b-2 border-red-600"
                    : "text-white"
                }`}
              >
                {name}
              </Link>
            </p>
          ))}
        </div>
      </div> */}

      <div className={`min-h-screen w-full flex flex-col items-center mt-5`}>
        <div className="w-[90%] flex flex-col items-center">
          <div className={``}></div>

          <div className={``}>
            {workExamples.map(
              ({ id, image, title, desc, webdesignImage }, index) => (
                <div
                  key={id}
                  className={`w-full flex flex-col items-center justify-between gap-2 mt-10`}
                >
                  <div className={`w-full`}>
                    <Image
                      src={image}
                      alt=""
                      width={0}
                      height={0}
                      className={`w-full h-full object-cover`}
                    />
                  </div>

                  <div
                    className={`w-full flex flex-col md:flex-row md:gap-10 items-center justify-center`}
                  >
                    <div className={` flex flex-col`}>
                      <h2
                        className={`${libre.className} text-[#FF0000] font-[700] text-[2rem]`}
                      >
                        {title}
                      </h2>
                      <p
                        className={`${spaceGrotesk.className} font-[400] text-[1rem] `}
                      >
                        {desc}
                      </p>
                    </div>

                    <Image
                      src={webdesignImage}
                      alt=""
                      width={0}
                      height={0}
                      className={`w-full h-full object-cover`}
                    />
                  </div>
                </div>
              )
            )}
          </div>

          <div className={``}></div>
        </div>
      </div>
    </div>
  );
}
