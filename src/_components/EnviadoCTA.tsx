"use client";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import WineKite from "/public/assets/WineKite.png";

type Props = {};

const EnviadoCTA = (props: Props) => {
  return (
    <>
      <div
        className={`w-full bg-[#FFE1E1] mt-10 flex flex-col items-center justify-center`}
      >
        <div
          className={`w-full md:w-[60%] p-10 flex flex-col md:flex-row items-center justify-between gap-9 md:gap-15`}
        >
          <div className={``}>
            <Image
              src={WineKite}
              alt="kite image"
              width={0}
              height={0}
              className={`w-[10rem] md:w-[15rem] h-auto`}
            />
          </div>

          <div className={` flex flex-col items-center justify-center`}>
            <Link href={"/contact-us"}>
              <button
                className={`${libre.className} bg-[#000000] flex items-center justify-center gap-2 p-4 text-[#FFFFFF]`}
              >
                <span>Send a Message </span> <FaArrowRightLong />
              </button>
            </Link>
            <h2
              className={`${libre.className} text-[#000000] font-[600] text-[2rem] md:text-[3rem]`}
            >
              Let’s Work with
              <span className={`uppercase text-[#B0001E]`}> YOU</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnviadoCTA;
