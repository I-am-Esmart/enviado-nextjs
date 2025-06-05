"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";
import { useState } from "react";
import { useUserContext } from "@/context/UserContext";
import EnviadoModal from "./EnviadoModal";
import { LiaTimesSolid } from "react-icons/lia";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const transition = {
  duration: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};
const initial = { left: 0 };
const animate = { left: "-100vw" };

export default function MobileMenu() {
  const [isModalOPen, setIsModalOpen] = useState<boolean>(false);
  const [isScrolledY, setIsScrolledY] = useState<boolean>(false);
  const pathName = usePathname();

  const { handleCloseNavDropdown, isNavDropdownOpen } = useUserContext();

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your server or API
    // For demonstration, we'll just log it to the console
    const response = await fetch("/api/resend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // You can include form data here
        message: "You have a new contact form submission.",
      }),
    });

    if (response.ok) {
      console.log("Email sent successfully!");
      setIsModalOpen(false);
    } else {
      console.log("Failed to send email.");
    }
    // Reset the form or perform any other actions after sending the email
    e.currentTarget.reset(); // Reset the form fields
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const links = [
    {
      id: 1,
      linkName: "Home",
      linkRoute: "/",
    },
    {
      id: 2,
      linkName: "About Us",
      linkRoute: "/about-us",
    },
    // {
    //   id: 3,
    //   linkName: "Services",
    //   linkRoute: "/service",
    // },
    {
      id: 4,
      linkName: "Our Works",
      linkRoute: "/our-work",
    },
    {
      id: 5,
      linkName: "Contact Us",
      linkRoute: "/contact-us",
    },
  ];

  return (
    <motion.div
      initial={isNavDropdownOpen ? initial : animate}
      animate={isNavDropdownOpen ? initial : animate}
      transition={transition}
      className={`bg-[#101010] w-full h-screen fixed top-[80px] z-10 md:hidden sm:hidden`}
    >
      <div className={`h-full flex justify-between py-10 px-5`}>
        <div className={`flex flex-col space-y-7`}>
          {links.map((link) => {
            if (link.linkRoute === "/contact-us") {
              return (
                <div
                  onClick={() => setIsModalOpen(true)}
                  key={link.id}
                  className="mx-4 text-base font-medium py-2 px-4 cursor-pointer text-[#93002A]"
                >
                  {link.linkName}
                </div>
              );
            } else {
              return (
                <Link
                  key={link.id}
                  href={link.linkRoute}
                  className={`mx-4 text-base font-medium py-2 px-4 ${
                    pathName === link.linkRoute
                      ? "bg-[#93002A] text-white font-bold"
                      : "text-[#93002A]"
                  }`}
                >
                  {link.linkName}
                </Link>
              );
            }
          })}
        </div>
      </div>

      <EnviadoModal
        isEnviadoModalOpen={isModalOPen}
        onClose={closeModal}
        modalWidth={100}
      >
        <div className={"w-full flex md:justify-center md:items-center"}>
          <form
            onSubmit={handleSendEmail}
            className={`w-[95%]  flex flex-col  my-5`}
          >
            <div className={`w-[90%]  ml-5 text-[#101010]`}>
              <p className={`${spaceGrotesk.className} text-xl`}>Hiya</p>
              <h2 className={`${libre.className} text-[2rem] font-bold`}>
                GOT AN IDEA?
              </h2>
              <p className={`${libre.className} text-[1rem]`}>
                Let’s start with your idea and create that result you desire
              </p>
            </div>
            <section className={`h-[50vh]`}>
              <div
                className={`w-full max-h-full overflow-auto 
                      [&::-webkit-scrollbar]:w-1.5
                      [&::-webkit-scrollbar-track]:bg-gray-200
                      [&::-webkit-scrollbar-thumb]:bg-[#93002A]
                      [&::-webkit-scrollbar-thumb]:rounded`}
              >
                <div
                  className={`${spaceGrotesk.className} w-[95%] flex flex-col gap-4 ml-5 mt-5 text-[1rem] font-400`}
                >
                  <div className={`w-full flex-col md:flex-row`}>
                    <div
                      className={`w-full md:w-1/2 bg-[#f8f8f8] flex gap-2 p-2`}
                    >
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
                    <div
                      className={`w-full md:w-1/2 bg-[#F8F8F8] flex gap-2  p-2`}
                    >
                      <input type="checkbox" name="" id="" />{" "}
                      <p>Motion Graphics</p>
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
                    <p className={` text-[#000000] font-light`}>
                      Here is my email
                    </p>
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
              </div>
            </section>

            <button
              type="submit"
              className={`w-[8rem] flex justify-center items-center ml-5 mt-8 bg-[#101010] text-white p-2  gap-1`}
            >
              <span>Submit</span> <GoArrowRight />
            </button>
          </form>
        </div>
      </EnviadoModal>
    </motion.div>
  );
}
