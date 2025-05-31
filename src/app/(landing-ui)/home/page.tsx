"use client";
import { motion } from "framer-motion";
import Nav from "@/_components/EnviadoNav";
// import Slider from "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import { useEffect, useState } from "react";
import Image from "next/image";
import ArrowImage from "/public/assets/Arrow.png";
import ButtonImage from "/public/assets/ButtonImage.png";
import FourBoxesImage from "/public/assets/FourBoxesImage.png";
import { FaArrowRightLong } from "react-icons/fa6";
import DeepspaceImage from "/public/assets/Deepspace.png";
import EridianImage from "/public/assets/Eridian.png";
import LolaImage from "/public/assets/Lola.png";
import WebDesignImage from "/public/assets/WebDesignImage.png";
import CircleImage from "/public/assets/CircleImage.png";
import CoiledArrow from "/public/assets/CoiledArrow.png";
import ArrowUp from "/public/assets/ArrowUp.png";
import Link from "next/link";

export default function Home() {
  // const [isScrolledY, setIsScrolledY] = useState<boolean>(false);
  const [ideas, setIdeas] = useState<boolean>(false);
  const [creates, setCreates] = useState<boolean>(false);
  const [results, setResults] = useState<boolean>(false);

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

  //scroll function to handle the scroll event
  const handleScroll = () => {
    const scrollY = window.scrollY;
    console.log("scrolled", window.scrollY);
    if (scrollY >= 3070 && scrollY <= 3265) {
      setIdeas(true);
      setCreates(false);
      setResults(false);
    } else if (scrollY >= 3267 && scrollY <= 3476) {
      setIdeas(false);
      setCreates(true);
      setResults(false);
      // setIsScrolledY(true);
    } else if (scrollY >= 3478 && scrollY <= 3678) {
      setIdeas(false);
      setCreates(false);
      setResults(true);

      // setIsScrolledY(false);
    } else {
      setIdeas(false);
      setCreates(false);
      setResults(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // caroulsel autoplay settings
  // function AutoPlay() {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     speed: 2000,
  //     autoplaySpeed: 2000,
  //     cssEase: "linear",
  //   };
  // }

  return (
    <div className={``}>
      <div
        className={`min-h-screen bg-[url('/assets/landingImage.png')] bg-center bg-cover bg-no-repeat py-20`}
      >
        <div className={`w-full px-10 py-10 flex justify-center items-center`}>
          <div
            className={`w-full flex flex-col items-center text-white font-bold`}
          >
            <motion.h1
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className={`w-full ${libre.className} font-extrabold text-5xl md:w-[50%] md:text-7xl  text-start`}
            >
              Your 360º{" "}
            </motion.h1>
            <h1
              className={`w-full ${libre.className} text-5xl md:w-[50%] md:text-7xl  text-end`}
            >
              marketing
            </h1>
            <motion.h1
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className={`w-full ${libre.className} text-5xl md:w-[50%] md:text-7xl  text-center`}
            >
              solution
            </motion.h1>
            <span
              className={`${spaceGrotesk.className}text-sm -rotate-20 mt-3`}
            >
              Starts here
            </span>
            <div className={`w-[50%] flex items-center justify-end`}>
              <Image
                src={ArrowImage}
                alt="arrow image"
                width={0}
                height={0}
                className={`w-[7rem] rotate-[20deg] md:rotate-0 md:w-[12rem] md:text-start ml-2 mt-2 `}
              />
            </div>
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
              className={`w-2/4 ${spaceGrotesk.className} cursor-pointer flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#970029] text-[1rem] font-normal p-[0.8rem]`}
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
            className={`${spaceGrotesk.className} leading-[3rem] text-center text-[#970029] text-[1rem] leading-[-1rem] font-[400]`}
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
              className={` `}
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

          <div className="w-full overflow-x-auto custom-scrollbar ">
            <div className="flex gap-12 py-8 px-4">
              {whatWeDoItems.map(({ id, letter, title, desc }, index) => (
                <div
                  key={id}
                  className={`flex-none w-[80%] md:w-[30%] bg-[#faeceb] p-6 md:p-12 mt-10 transition-all duration-300 ${
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

          <section
            className={`${spaceGrotesk.className} relative w-full h-screen mt-10 px-20 md:px-40`}
          >
            <div className={`w-full h-[32%]`}>
              <h1
                className={`w-full text-6xl text-left text-[#000000] font-bold ${
                  ideas ? "opacity-100" : "opacity-20"
                }  `}
              >
                IDEAS
              </h1>
            </div>

            <div className={`w-full h-[32%]`}>
              <h1
                className={`w-full text-6xl text-center text-[#93002A] font-bold ${
                  creates ? "opacity-100" : "opacity-20"
                } `}
              >
                CREATES
              </h1>
            </div>

            <div className={`w-full h-[32%]`}>
              <h1
                className={`w-full text-6xl text-right text-[#000000] font-bold ${
                  results ? "opacity-100" : "opacity-20"
                } `}
              >
                RESULTS
              </h1>
            </div>

            <div
              className={`absolute top-10 right-40 rotate-45 md:w-[200px] md:h-[200px] transition-all duration-75 ease-in ${
                creates ? "bg-[#FF3F56] rotate-180" : "bg-[#020CB1]"
              } `}
            ></div>
            <div
              className={`absolute bottom-30 left-40 rotate-45 md:w-[200px] md:h-[200px] transition-all duration-75 ease-in ${
                creates ? "bg-[#007AFF] rotate-270 " : "bg-[#F7DE67]"
              }  `}
            ></div>
          </section>

          <div className={`w-full`}>
            <div className={``}>
              <h2
                className={`${libre.className} leading-[3rem] uppercase font-[700] text-[2rem]  text-[#970029] md:leading-[5rem] md:text-[4rem] `}
              >
                Talking <br /> about results
              </h2>
            </div>

            <div
              className={`${libre.className} w-full flex justify-between items-center`}
            >
              <button
                className={`flex items-center gap-2 bg-[#000000] text-white font-[700] p-3 md:p-4`}
              >
                <span>Our Work</span> <FaArrowRightLong />
              </button>
              <p className={`hidden md:block w-1/3 font-[400] text-[1rem]`}>
                We do great work!!! See below some of the work we have done and
                landmark we have achieved.
              </p>
            </div>
          </div>

          <div className={`mb-10`}>
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

      <section
        className={`${spaceGrotesk.className} relative w-full h-screen flex flex-col gap-20 px-10 md:px-40`}
      >
        <div className={`w-full flex  align-center justify-between`}>
          <div className={``}>
            <h1
              className={`${libre.className} font-[700] text-5xl md:text-7xl text-[#000000]`}
            >
              5k+
            </h1>
            <p
              className={`${spaceGrotesk.className} font-[400] text-[1rem] md:text-2xl text-[#000000]`}
            >
              Brands
            </p>
          </div>

          <div className={""}>
            <Image
              src={CircleImage}
              alt="circle"
              width={0}
              height={0}
              className={`hidden md:block`}
            />
          </div>
        </div>

        <div
          className={`w-2/3 flex flex-col md:flex-row gap-2 align-center justify-between ml-auto items-end`}
        >
          <div className={``}>
            <h1
              className={`${libre.className} font-[700] text-5xl md:text-7xl text-[#D83E36]`}
            >
              100k
            </h1>
            <p
              className={`${spaceGrotesk.className} font-[400] text-[1rem] md:text-2xl text-[#000000]`}
            >
              People reached
            </p>
          </div>
          <button
            className={`bg-[#000000] text-[#FFFFFF] p-4 flex items-center justify-center gap-2 md:font-[700]`}
          >
            <Link href={"/contact-us"}>
              <p>Send a Message </p>
            </Link>
            <div>
              <FaArrowRightLong />
            </div>
          </button>
        </div>

        <div className={`w-full md:w-1/2 ml-auto text-right`}>
          <h1
            className={`${libre.className} font-[700] text-5xl md:text-7xl text-[#000000]`}
          >
            Let’s Work with <span className={`text-[#D83E36]`}>YOU</span>
          </h1>
        </div>

        <div className={`absolute top-30`}>
          <Image
            src={CoiledArrow}
            alt="coiled arrow"
            width={0}
            height={0}
            className={`bottom-10 rotate-[30deg] md:rotate-0 w-[100px] h-[100px] md:w-[200px] md:h-[200px]`}
          />
          <Image
            src={ArrowUp}
            alt="arrow"
            width={0}
            height={0}
            className={`hidden md:block`}
          />
          <Image
            src={ArrowUp}
            alt="arrow"
            width={0}
            height={0}
            className={`hidden md:block`}
          />
        </div>
      </section>
    </div>
  );
}
