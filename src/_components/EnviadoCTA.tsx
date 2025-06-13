"use client";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import HandPointing from "/public/assets/HandPointing.png";
import { useModalContext } from "@/context/ModalContext";

type Props = {};

const EnviadoCTA = (props: Props) => {
  const { handleOPenModal } = useModalContext();

  return (
    <>
      <div
        className={`w-full bg-[#FFE1E1] mt-10 flex flex-col items-center justify-center`}
      >
        <div
          className={`w-full md:w-[80%] 2xl:[70%] p-10 2xl:p-5 flex flex-col md:flex-row items-center justify-between gap-9 md:gap-15`}
        >
          <div className={``}>
            <Image
              src={HandPointing}
              alt="hand pointing image"
              width={0}
              height={0}
              className={`w-[10rem] md:w-[15rem] h-auto`}
            />
          </div>

          <div
            className={`w-[80%] flex flex-col items-end justify-center md:gap-y-0`}
          >
            <button
              onClick={handleOPenModal}
              className={`${libre.className} text-end bg-[#000000] flex items-center justify-center gap-2 p-4 mr-10 md:mr-0 text-[#FFFFFF]`}
            >
              <span>Send a Message </span> <FaArrowRightLong />
            </button>

            <h2
              className={`${libre.className} text-right text-[#000000] font-[600] text-[2rem] md:text-[4rem] mr-10 md:mr-0`}
            >
              Let’s Work <br /> with
              <span className={`uppercase text-[#B0001E]`}> YOU</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnviadoCTA;
