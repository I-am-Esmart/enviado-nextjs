"use client";
// import { motion } from "framer-motion";
import { motion } from "framer-motion";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import Nav from "@/_components/EnviadoNav";
import Image from "next/image";
import ArrowImage from "/public/assets/Arrow.png";
import ButtonImage from "/public/assets/ButtonImage.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function EnviadoOurWorksHeader() {
  const pathname = usePathname();

  const textTransition = {
    duration: 1,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };
  const textInitial = { x: -100, opacity: 0 };
  const textAnimate = { x: 0, opacity: 1 };

  const resultTransition = {
    duration: 2,
    delay: 0.8,
    ease: [0, 0.71, 0.2, 1.01],
  };
  const resultInitial = { opacity: 0 };
  const resultAnimate = { opacity: 1 };

  const links = [
    { name: "All Projects", route: "/our-work" },
    { name: "Branding", route: "/our-work/branding" },
    { name: "Marketing", route: "/our-work/marketing" },
    { name: "Motion Design", route: "/our-work/motion-design" },
    { name: "Graphics", route: "/our-work/graphics" },
  ];

  return (
    <>
      <div
        className={
          'h-screen bg-[url("/assets/landingImage.png")] bg-center bg-cover bg-no-repeat py-10'
        }
      >
        <div className="w-full overflow-hidden h-screen flex flex-col justify-center items-center">
          <div
            className={`w-[80%] 2xl:w-[65%] h-screen flex flex-col justify-center items-center`}
          >
            <div className="w-full flex justify-center items-center">
              <div className="w-full flex flex-col gap-10 text-white font-bold uppercase">
                <motion.h1
                  initial={textInitial}
                  animate={textAnimate}
                  transition={textTransition}
                  className={`${libre.className} w-full font-extrabold text-6xl md:text-7xl lg:text-8xl`}
                >
                  Our 360º
                </motion.h1>

                <div className={`flex flex-col md:flex-row`}>
                  <motion.h1
                    initial={resultInitial}
                    animate={resultAnimate}
                    transition={resultTransition}
                    className={`w-full ${libre.className} text-6xl  md:text-7xl lg:text-8xl md:w-[50%] lg:w-[30%]`}
                  >
                    results
                  </motion.h1>

                  <div className="w-[50%] flex items-end justify-end">
                    <Image
                      src={ArrowImage}
                      alt="arrow image"
                      width={0}
                      height={0}
                      className="w-[7rem] rotate-[20deg] md:rotate-0 md:w-[12rem] ml-2 xl:ml-5"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-2 py-5 flex flex-col-reverse md:flex-row md:items-start text-[1rem]">
              <motion.div
                initial={textInitial}
                animate={textAnimate}
                transition={textTransition}
                className={`w-full ${spaceGrotesk.className} text-white text-[1.2rem] md:text-[1.5rem] font-[400]`}
              >
                <p>
                  We do great work!!! <br />
                  See below some of the work we have done and landmark we have
                  achieved.
                </p>
              </motion.div>
              <div className="w-full flex items-center justify-end py-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("links")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`w-2/4 ${spaceGrotesk.className} flex items-center justify-center gap-2 bg-white text-[#970029] hover:bg-[#970029] hover:text-white text-[1rem] md:text-[1.7rem] font-normal p-[0.8rem] `}
                >
                  <Image src={ButtonImage} alt="arrow" width={0} height={0} />
                  <p>Explore</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="links"
        className={`w-full md:w-[80%] flex items-center justify-center md:justify-end mt-15`}
      >
        <div
          className={`w-[90%] md:w-[80%] 2xl:w-[65%] flex flex-wrap gap-x-2 md:gap-x-10 items-center justify-start`}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.route}
              className={`${
                pathname === link.route
                  ? "bg-[#93002A] text-white font-[700]"
                  : "text-[#000000] font-[400]"
              } text-[1rem] p-2 font-[400]`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
