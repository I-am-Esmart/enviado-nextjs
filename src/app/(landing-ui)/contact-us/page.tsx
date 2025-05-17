"use client";
import Nav from "@/_components/EnviadoNav";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

type Props = {};

export default function ContactUs(props: Props) {
  const [page, setPage] = useState(1);

  return (
    <div className={`w-full h-full bg-white`}>
      {/* <Nav /> */}
      {/* <div
        className={`relative min-h-screen pt-20 bg-[url('/assets/landingImage.png')] bg-center bg-cover bg-no-repeat`}
      >
        Contact Us
      </div> */}
      {/* PAGE 1   */}
      {page === 1 && (
        <div className={`w-[95%] flex flex-col my-5`}>
          <div className={`w-full flex justify-end`}>
            <button
              className={`${libre.className} bg-[#93002A] flex flex items-center gap-1 p-2 text-white`}
            >
              <span>Cancel</span>
              <LiaTimesSolid />
            </button>
          </div>

          <div className={`w-[90%]  ml-5 text-[#101010]`}>
            <p className={`${spaceGrotesk.className} text-xl`}>Hiya</p>
            <h2 className={`${libre.className} text-[2rem] font-bold`}>
              GOT AN IDEA?
            </h2>
            <p className={`${libre.className} text-[1rem]`}>
              Let’s start with your idea and create that result you desire
            </p>
          </div>

          <div
            className={`${spaceGrotesk.className} w-[95%] flex flex-col gap-4 ml-5 mt-5 text-[1rem] font-400`}
          >
            <div className={`w-full flex-col md:flex-row`}>
              <div className={`w-full md:w-1/2 bg-[#f8f8f8] flex gap-2 p-2`}>
                <input type="checkbox" name="" id="" className={``} />
                <p>Branding</p>
              </div>

              <div
                className={`w-full md:w-1/2 bg-[#FCCF00] mt-2 flex gap-2 p-2`}
              >
                <input type="checkbox" name="" id="" className={``} />
                <p className={``}>Product Video Ads</p>
              </div>
            </div>

            <div className={`flex-col md:flex-row gap-2`}>
              <div className={`w-full md:w-1/2 bg-[#F8F8F8] flex gap-2  p-2`}>
                <input type="checkbox" name="" id="" /> <p>Motion Graphics</p>
              </div>
              <div
                className={`w-full md:w-1/2 bg-[#FCCF00] mt-2 flex gap-2 p-2`}
              >
                <input type="checkbox" name="" id="" />
                <p className={``}>Marketing Ads</p>
              </div>
            </div>
          </div>

          <p
            className={`${spaceGrotesk.className} ml-5 mt-5 text-[1.5rem] font-medium`}
          >
            Hello,
          </p>

          <div
            className={`${spaceGrotesk.className} ml-5 mt-5 text-[1rem] font-400 `}
          >
            <div className={``}>
              <p className={` text-[#000000] font-light`}>My name is</p>
              <input
                type="text"
                placeholder="John Doe"
                className={`w-full md:w-1/2`}
              />
            </div>

            <div className={`mt-2`}>
              <p className={` text-[#000000] font-light`}>I work for</p>
              <input
                type="text"
                placeholder="Company / Business name"
                className={`w-full md:w-1/2`}
              />
            </div>

            <div className={`mt-2`}>
              <p className={` text-[#000000] font-light`}>Here is my email</p>
              <input
                type="text"
                placeholder="example@gmail.com"
                className={`w-full md:w-1/2`}
              />
            </div>

            <div className={`mt-2`}>
              <p className={` text-[#000000] font-light`}>
                And I have a message for you
              </p>
              <textarea
                rows={10}
                name="message"
                placeholder="Enter your message"
                className={`w-full md:w-1/2`}
              />
            </div>
          </div>

          <button
            onClick={() => setPage(2)}
            className={`w-[8rem] flex justify-center items-center ml-5 mt-8 bg-[#101010] text-white p-2  gap-1`}
          >
            <span>Next</span> <GoArrowRight />
          </button>
        </div>
      )}

      {/* PAGE 2 */}
      {page === 2 && (
        <div className={`w-[95%] flex flex-col my-5`}>
          <div className={`w-full flex justify-end`}>
            <button
              className={`${libre.className} bg-[#93002A] flex flex items-center gap-1 p-2 text-white`}
            >
              <span>Cancel</span>
              <LiaTimesSolid />
            </button>
          </div>

          <div className={`w-[90%]  ml-5 text-[#101010]`}>
            <p className={`${spaceGrotesk.className} text-xl`}>Hiya</p>
            <h2 className={`${libre.className} text-[2rem] font-bold`}>
              SUMMARY
            </h2>
          </div>

          <div
            className={`${spaceGrotesk.className} ml-5 mt-5 text-[1rem] font-400 `}
          >
            <div className={``}>
              <p className={` text-[#000000] font-light`}>My name is</p>
              <input
                type="text"
                placeholder="Priase Ade"
                className={`w-full md:w-1/2`}
              />
            </div>

            <div className={`mt-2`}>
              <p className={` text-[#000000] font-light`}>I work for</p>
              <input
                type="text"
                placeholder="Enviado"
                className={`w-full md:w-1/2`}
              />
            </div>

            <div className={`mt-2`}>
              <p className={` text-[#000000] font-light`}>Here is my email</p>
              <input
                type="text"
                placeholder="Praise@12ht@gmail.com"
                className={`w-full md:w-1/2`}
              />
            </div>

            <div className={`mt-2`}>
              <p className={` text-[#000000] font-light`}>
                And I have a message for you
              </p>
              <textarea
                rows={10}
                name="message"
                id="message"
                placeholder="Lorem ipsum dolor sit amet consectetur. Ipsum sed egestas elementum adipiscing neque. Sed integer consectetur lorem posuere massa adipiscing dolor tincidunt quis. Congue semper amet quisque nibh. Pellentesque accumsan pellentesque malesuada condimentum amet elementum nulla."
                className={`w-full md:w-1/2`}
              />
            </div>
          </div>

          <div className={`flex justify-between items-center ml-5`}>
            <div
              onClick={() => setPage(1)}
              className={`flex justify-center items-center gap-1`}
            >
              <GoArrowLeft /> <span>Back</span>
            </div>

            <button
              onClick={() => setPage(3)}
              className={`w-[8rem] flex justify-center items-center bg-[#101010] text-white p-2  gap-1`}
            >
              <span>Submit</span> <GoArrowRight />
            </button>
          </div>
        </div>
      )}

      {/* PAGE 3 */}
      {page === 3 && (
        <div className={`w-[95%] flex flex-col my-5`}>
          <div className={`w-full flex justify-end`}>
            <button
              className={`${libre.className} bg-[#93002A] flex flex items-center gap-1 p-2 text-white`}
            >
              <span>Cancel</span>
              <LiaTimesSolid />
            </button>
          </div>

          <div className={`w-full flex flex-col  justify-center items-center`}>
            <div className={`bg-[#93002A] w-[8rem] h-[8rem] mt-20`}></div>

            <div
              className={`${spaceGrotesk.className} w-[80%] mt-5 text-[1.2rem] font-400 `}
            >
              <p>
                Thank you! We’ve gotten your message and we will reach out to
                you shortly.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
