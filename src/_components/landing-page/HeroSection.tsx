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
      className={`relative h-screen bg-[url('/assets/landingImage.png')] bg-center bg-cover bg-no-repeat px-4 md:px-8 py-20`}
    >
      <div
        className={`${libre.className} w-full mx-auto md:w-[65%] text-white font-extrabold text-6xl py-5 md:text-8xl`}
      >
        <motion.h1
          initial={threeInitial}
          animate={threeAnimate}
          transition={threeTransition}
          className={`w-full `}
        >
          Your 360º
        </motion.h1>

        <motion.h1
          initial={marketingInitial}
          animate={marketingAnimate}
          transition={marketingTransition}
          className={`w-full pl-10 md:pl-0 text-right`}
        >
          marketing
        </motion.h1>

        <motion.h1
          initial={solutionInitial}
          animate={solutionAnimate}
          transition={solutionTransition}
          className={`w-full pl-5 md:pl-10`}
        >
          solution
        </motion.h1>
      </div>

      <div
        className={`${spaceGrotesk.className} relative font-normal text-base md:text-xl text-white text-center -rotate-12`}
      >
        <span className={`md:absolute md:-top-15 md:ml-5`}>start here</span>
      </div>

      <div
        className={`relative w-[40%] ml-[40%] rotate-12 md:rotate-0 md:w-[15%] md:ml-[60%]`}
      >
        <Image
          src={ArrowImage}
          alt="arrow image"
          width={0}
          height={0}
          className={`md:absolute md:-top-15 md:-ml-4`}
        />
      </div>

      <div
        className={`flex flex-col my-10 space-y-4 md:space-y-0 md:flex-row-reverse`}
      >
        <div className={`md:w-[25%] flex justify-end md:justify-start`}>
          <button
            className={`w-36 h-12 flex items-center justify-center bg-white space-x-2 text-base md:w-40 md:text-lg`}
          >
            <span className={`w-[20%] bg-[#93002A] text-white font-extrabold`}>
              -
            </span>

            <span className={`text-[#93002A]`}>Let's talk</span>
          </button>
        </div>

        <div className={`md:w-[75%]`}>
          <p
            className={`${spaceGrotesk.className} md:w-[65%] text-white text-base md:text-xl font-normal`}
          >
            We don't just come up with ideas, products or experiences that push
            boundaries and challenge the status quo – we also bring in the
            results!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
