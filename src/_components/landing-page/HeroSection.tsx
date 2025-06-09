import { motion } from "framer-motion";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import Image from "next/image";
import ArrowImage from "/public/assets/Arrow.png";

const HeroSection = () => {
  const threeTransition = {
    duration: 1,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };
  const threeInitial = { x: -100, opacity: 0 };
  const threeAnimate = { x: 0, opacity: 1 };

  const marketingTransition = {
    duration: 2,
    delay: 0.8,
    ease: [0, 0.71, 0.2, 1.01],
  };
  const marketingInitial = { opacity: 0 };
  const marketingAnimate = { opacity: 1 };

  const solutionTransition = {
    duration: 1,
    delay: 1,
    ease: [0, 0.71, 0.2, 1.01],
  };
  const solutionInitial = { x: 100, opacity: 0 };
  const solutionAnimate = { x: 0, opacity: 1 };

  return (
    <section
      className={`relative h-screen bg-[url('/assets/landingImage.png')] bg-center bg-cover bg-no-repeat`}
    >
      <div
        className={`w-full h-screen flex flex-col justify-center items-center`}
      >
        <div
          className={`w-[90%] 2xl:w-[70%] h-screen flex flex-col justify-center items-center`}
        >
          <div
            className={`${libre.className} w-full pt-30 mx-auto text-white font-extrabold text-6xl md:w-[70%] 2xl:w-[70%] md:pt-40 md:text-[5rem] lg:text-[7rem]`}
          >
            <motion.h1
              initial={threeInitial}
              animate={threeAnimate}
              transition={threeTransition}
              className={`w-full`}
            >
              Your 360º
            </motion.h1>

            <motion.h1
              initial={marketingInitial}
              animate={marketingAnimate}
              transition={marketingTransition}
              className={`w-full md:pl-0 text-right`}
            >
              marketing
            </motion.h1>

            {/* <div className={``}> */}
            <div className="pl-0 flex flex-col md:pl-10">
              <motion.h1
                initial={solutionInitial}
                animate={solutionAnimate}
                transition={solutionTransition}
                className="pl-3 text-left flex flex-col md:flex-row"
              >
                <span className="">solution</span>
                <span
                  className={`${spaceGrotesk.className} -rotate-12 font-normal text-base text-white text-center md:translate-y-[50%] md:text-xl md:text-left md:ml-2`}
                >
                  start here
                </span>
              </motion.h1>
            </div>

            {/* </div> */}
          </div>
          {/* <div className={``}></div> */}
          <div
            className={`relative w-[40%] ml-[40%] rotate-12 md:rotate-0 md:w-[15%] md:ml-[60%]`}
          >
            <Image
              src={ArrowImage}
              alt="arrow image"
              width={0}
              height={0}
              className={`-ml-5 md:absolute md:-top-12 md:-ml-30`}
            />
          </div>
          <div
            className={`2xl:w-[70%] flex flex-col my-10 space-y-4 md:my-5 md:space-y-0 md:flex-row-reverse`}
          >
            <div className={`md:w-[30%] flex justify-end md:justify-start`}>
              <button
                className={`w-36 h-12 flex items-center justify-center bg-white space-x-2 text-base md:w-40 md:text-lg`}
              >
                <span
                  className={`w-[20%] bg-[#93002A] text-white font-extrabold`}
                >
                  -
                </span>

                <span className={`text-[#93002A]`}>Let's talk</span>
              </button>
            </div>

            <div className={`md:w-[80%]`}>
              <p
                className={`${spaceGrotesk.className} md:w-[65%] text-white text-base md:text-xl font-normal`}
              >
                We don't just come up with ideas, products or experiences that
                push boundaries and challenge the status quo – we also bring in
                the results!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
