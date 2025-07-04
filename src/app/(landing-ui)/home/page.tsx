"use client"
import { motion } from "framer-motion"
import Nav from "@/_components/EnviadoNav"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { libre, spaceGrotesk } from "@/utilities/customFonts"
import { useEffect, useState } from "react"
import { useRef } from "react"
import Image from "next/image"
import ArrowImage from "/public/assets/Arrow.png"
import ButtonImage from "/public/assets/ButtonImage.png"
import FourBoxesImage from "/public/assets/FourBoxesImage.png"
import { FaArrowRightLong } from "react-icons/fa6"
import GospelKonnectImage from "/public/assets/GospelKonnectImage.png"
import DeeprImage from "/public/assets/DeeprImage.png"

import WebDesignImage from "/public/assets/WebDesignImage.png"
import CircleImage from "/public/assets/CircleImage.png"
import CoiledArrow from "/public/assets/CoiledArrow.png"
import Pentagon_Image from "/public/assets/PentagonImage.png"
import LoveImage from "/public/assets/LoveImage.png"
import ArrowUp from "/public/assets/ArrowUp.png"
import LeftPointedArrow from "/public/assets/LeftPointedArrow.png"
import Link from "next/link"
import WhatWeDoSection from "@/_components/landing-page/WhatWeDoSection"
import HeroSection from "@/_components/landing-page/HeroSection"

import { useModalContext } from "@/context/ModalContext"

export default function Home() {
  // const [isScrolledY, setIsScrolledY] = useState<boolean>(false);
  const [ideas, setIdeas] = useState<boolean>(false)
  const [creates, setCreates] = useState<boolean>(false)
  const [results, setResults] = useState<boolean>(false)

  const ideasRef = useRef<HTMLDivElement | null>(null)
  const createsRef = useRef<HTMLDivElement | null>(null)
  const resultsRef = useRef<HTMLDivElement | null>(null)

  const { handleOPenModal } = useModalContext()

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
  ]

  const workExamples = [
    {
      id: 1,
      image: GospelKonnectImage,
      title: "GospelKonect Global",
      desc: "Proclaiming the good news all over the earth.",
      work1: "web design",
      work2: "seo optimisation",
      work3: "content creation",
      link: "https://www.instagram.com/gospelkonnectglobal?igsh=cGhtdnQ1NDhnczRh",
    },
    {
      id: 2,
      image: DeeprImage,
      title: "Deepr App",
      desc: "A better way to listen to sermon",
      work1: "web design",
      work2: "brand design",
      work3: "app design & dev",
      link: "http://getdeepr.co",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const refs = [
        { ref: ideasRef, setter: setIdeas },
        { ref: createsRef, setter: setCreates },
        { ref: resultsRef, setter: setResults },
      ]

      const middle = window.innerHeight / 2
      let activeFound = false

      refs.forEach(({ ref, setter }) => {
        const isVisible =
          ref.current &&
          ref.current.getBoundingClientRect().top <= middle &&
          ref.current.getBoundingClientRect().bottom >= middle

        if (isVisible && !activeFound) {
          setter(true)
          activeFound = true
        } else {
          setter(false)
        }
      })
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true })
      handleScroll()
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={``}>
      <HeroSection />

      <div className={`min-h-screen w-full flex flex-col items-center mt-5`}>
        <div className="w-[90%] flex flex-col items-center">
          <div
            className={`${spaceGrotesk.className}  text-center text-[#970029] leading-[-1rem] font-[400] xl:leading-[-2rem]`}
          >
            <p className={`text-[1rem] md:text-[3rem] font-[400]`}>
              Boldly turning your
            </p>
            <h2 className={`uppercase text-[2.4rem] md:text-[5rem] font-[700]`}>
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

          {/* WHAT We Do Section */}
          <WhatWeDoSection />

          <section
            className={`${spaceGrotesk.className} flex flex-col justify-center items-center relative w-full h-screen px-5 md:mt-20 md:px-30`}
          >
            <div className="w-full relative">
              <Image
                src={Pentagon_Image}
                alt="Pentagon"
                width={0}
                height={0}
                className="w-[58px] h-[57px] md:w-[135px] md:h-[134px] mt-5 left-0 top-0"
              />
            </div>

            <div
              ref={ideasRef}
              className={`w-full h-[20%] md:h-[32%] flex justify-between items-center`}
            >
              <div>
                <h1
                  className={`w-full text-4xl md:text-6xl text-left text-[#000000] font-bold ${
                    ideas ? "opacity-100" : "opacity-20"
                  }`}
                >
                  IDEAS
                </h1>
              </div>

              <div
                className={`rotate-45 w-[90px] h-[90px] md:w-[200px] md:h-[200px] transition-all duration-75 ease-in ${
                  creates ? "bg-[#FF3F56] rotate-180" : "bg-[#020CB1]"
                }`}
              ></div>
            </div>

            <div
              ref={createsRef}
              className={`h-[20%] md:h-[32%] w-full flex justify-between items-center`}
            >
              <h1
                className={`w-full text-4xl md:text-6xl text-center text-[#93002A] font-bold ${
                  creates ? "opacity-100" : "opacity-20"
                }`}
              >
                CREATES
              </h1>

              <div className="absolute right-0">
                <Image
                  src={LoveImage}
                  alt="heart image"
                  width={0}
                  height={0}
                  className="w-[45px] h-[43px] md:w-[87px] md:h-[84px]"
                />
              </div>
            </div>

            <div
              ref={resultsRef}
              className={`w-full h-[20%] md:h-[32%] flex justify-between items-center`}
            >
              <div
                className={`rotate-45 w-[90px] h-[90px] md:w-[200px] md:h-[200px] transition-all duration-75 ease-in ${
                  creates ? "bg-[#007AFF] rotate-270" : "bg-[#F7DE67]"
                }`}
              ></div>

              <div>
                <h1
                  className={`ml-8 w-full text-4xl md:text-6xl text-right text-[#000000] font-bold ${
                    results ? "opacity-100" : "opacity-20"
                  }`}
                >
                  RESULTS
                </h1>
              </div>
            </div>

            <div className={`w-full flex justify-start items-center`}>
              <Image
                src={LeftPointedArrow}
                alt="left pointed arrow"
                width={0}
                height={0}
                className={`h-[85px] w-[100px] md:h-[110px] md:w-[130px] ml-10 md:ml-25 xl:ml-40`}
              />
            </div>
          </section>
          <div className={`w-[90%] md:w-[80%] md:mt-30`}>
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
              <Link href={"/our-work"}>
                <button
                  className={`flex items-center gap-2 bg-[#000000] text-white font-[700] p-3 md:p-4 rounded-none`}
                >
                  <span>Our Work</span> <FaArrowRightLong />
                </button>
              </Link>
              <p className={`hidden md:block w-1/3 font-[400] text-[1rem]`}>
                We do great work!!! See below some of the work we have done and
                landmark we have achieved.
              </p>
            </div>
          </div>
          <div className={`w-[90%] md:w-[80%] xl-[60%] mx-auto mb-20`}>
            {workExamples.map(
              ({ id, image, title, desc, work1, work2, work3, link }) => (
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  <div
                    key={id}
                    className={`w-full flex flex-col items-center justify-between gap-2 mt-10`}
                  >
                    <div className={`w-full`}>
                      <Image
                        src={image}
                        alt="project image"
                        width={0}
                        height={0}
                        className={`w-full h-full object-cover`}
                      />
                    </div>

                    <div
                      className={`w-full flex flex-col md:flex-row md:gap-10 items-start justify-center md:items-center`}
                    >
                      <div className="flex flex-col md:flex-row w-full items-stretch">
                        <div className={`w-full md:w-[45%] flex flex-col`}>
                          <h2
                            className={`${libre.className} text-[#FF0000] font-[700] text-[1.5rem] md:text-[2rem]`}
                          >
                            {title}
                          </h2>
                          <p
                            className={`${spaceGrotesk.className} font-[400] text-[1rem]`}
                          >
                            {desc}
                          </p>
                        </div>

                        <div
                          className={`w-full md:w-[55%] flex items-stretch `}
                        >
                          <div
                            className={`${libre.className} font-[500] text-[1rem] flex w-full uppercase`}
                          >
                            <div
                              className={`w-1/3 bg-[#B4E2FF] flex items-center justify-center`}
                            >
                              <p className={`text-[#000000]`}>{work1}</p>
                            </div>
                            <div
                              className={`w-1/3 bg-[#FCD0B9] flex items-center justify-center`}
                            >
                              <p className={`text-[#000000]`}>{work2}</p>
                            </div>
                            <div
                              className={`w-1/3 bg-[#E7C0FF] flex items-center justify-center`}
                            >
                              <p className={`text-[#000000]`}>{work3}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
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
            onClick={handleOPenModal}
            className={`bg-[#000000] text-[#FFFFFF] p-4 flex items-center justify-center gap-2 md:font-[700]`}
          >
            <p>Send a Message </p>

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
  )
}
