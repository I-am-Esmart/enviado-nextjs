"use client";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import Nav from "@/_components/EnviadoNav";
import Image from "next/image";
import ArrowImage from "/public/assets/arrow.png";
import ButtonImage from "/public/assets/ButtonImage.png";

export default function Home() {
  return (
    <div className={``}>
      <div
        className={`min-h-screen bg-[url('/assets/landingImage.png')] bg-center bg-cover bg-no-repeat py-20`}
      >
        <div className={`w-full px-10 py-5 flex justify-center items-center`}>
          <div
            className={`w-full flex flex-col items-center text-white font-bold`}
          >
            <h1
              className={`w-full ${libre.className} font-extrabold text-5xl md:w-[50%] md:text-7xl  text-start`}
            >
              Your 360º{" "}
            </h1>
            <h1
              className={`w-full ${libre.className} text-5xl md:w-[50%] md:text-7xl  text-end`}
            >
              marketing
            </h1>
            <h1
              className={`w-full ${libre.className} text-5xl md:w-[50%] md:text-7xl  text-center`}
            >
              solution
            </h1>
            <span
              className={`${spaceGrotesk.className}text-sm -rotate-20 mt-3`}
            >
              Starts here
            </span>

            <Image
              src={ArrowImage}
              alt="arrow"
              width={0}
              height={0}
              className={`w-20 my-2 ml-4 rotate-15`}
            />
          </div>
        </div>

        <div
          className={`w-full px-5 mt-2 py-5 flex flex-col-reverse text-[1rem]  md:flex-row md:items-start `}
        >
          <div className={`w-full ${spaceGrotesk.className} text-white `}>
            <p>
              We don't just come up with ideas, products or experiences that
              push boundaries and challenge the status quo – we also bring in
              the results!
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
              Let's talk
            </button>
          </div>
        </div>
      </div>

      <div className={`min-h-screen`}>Hero 2</div>
    </div>
  );
}
