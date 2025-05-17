"use client";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import Nav from "@/_components/EnviadoNav";
import Image from "next/image";
import ArrowImage from "/public/assets/arrow.png";
import ButtonImage from "/public/assets/ButtonImage.png";
import FourBoxesImage from "/public/assets/FourBoxesImage.png";

export default function Home() {
  const whatWeDoItems = [
    {
      id: 1,
      letter: "I",
      title: "IMAGINATION",
      desc: "We work closely with you to understand your brand's unique voice and goals. Together, we dream big and build the foundation for something extraordinary.",
    },
    {
      id: 2,
      letter: "D",
      title: "DISCOVERY",
      desc: "We dive into market trends, audience behaviors, and competitive analysis to uncover unique opportunities that will give your brand the edge it needs to stand out.",
    },
    {
      id: 3,
      letter: "e",
      title: "EXECUTE",
      desc: "We dive into market trends, audience behaviors, and competitive analysis to uncover unique opportunities that will give your brand the edge it needs to stand out.",
    },
    {
      id: 4,
      letter: "a",
      title: "AMPLIFY",
      desc: "Through targeted amplification strategies, we ensure your message reaches the right audience at the right time, expanding your brand’s presence and driving sustained growth.",
    },
  ];

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

      <div className={`min-h-screen w-full flex flex-col items-center mt-5`}>
        <div className="w-[90%] flex flex-col items-center">
          <div
            className={`${spaceGrotesk.className} text-center text-[#970029] text-[1rem] leading-[-1rem] font-[400]`}
          >
            <p className={`text-[1rem] md:text-[2rem] font-[400]`}>
              Boldly turning your
            </p>
            <h2 className={`text-[2.2rem] md:text-[3.2rem] font-[700]`}>
              vision into reality
            </h2>

            <Image
              src={FourBoxesImage}
              alt=""
              width={0}
              height={0}
              className={`border`}
            />
          </div>

          <div
            className={`${libre.className} w-full font-[700] text-[#000000] text-[2rem] md:text-[3rem] mt-5`}
          >
            <h2>What We </h2>
            <h2>
              <span className={`text-[#970029] font-[500]`}>Really</span> Do??
            </h2>
          </div>

          <div className="w-full overflow-x-auto scrollbar-hide ">
            <div className="flex gap-12 py-8 px-4">
              {whatWeDoItems.map(({ id, letter, title, desc }, index) => (
                <div
                  key={id}
                  className={`flex-none w-[80%] md:w-[30%] bg-[#faeceb] p-6 md:p-12   mt-10 transition-all duration-300 ${
                    index % 2 === 0 ? "rotate-[-10deg]" : "translate-y-20"
                  }`}
                >
                  <div className="font-spaceGrotesk font-medium text-[3rem] uppercase text-white bg-[#93002a]  w-20 h-18 flex px-2">
                    <p>{letter}</p>
                  </div>
                  <p className="font-neueRegrade font-bold text-[1.5rem] uppercase mt-4">
                    {title}
                  </p>
                  <p className="font-spaceGrotesk font-normal text-[1rem] mt-4">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={``}></div>
          <div className={``}></div>
        </div>
      </div>
    </div>
  );
}
