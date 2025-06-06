"use client";
import { useUserContext } from "@/context/UserContext";
import { RiMenu3Fill } from "react-icons/ri";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Link from "next/link";
import Logo from "/public/assets/EnviadoLogo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LiaTimesSolid } from "react-icons/lia";
import EnviadoModal from "./EnviadoModal";

const EnviadoNav = () => {
  const [isScrolledY, setIsScrolledY] = useState<boolean>(false);
  const [isModalOPen, setIsModalOpen] = useState<boolean>(false);
  const pathName = usePathname();

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

  const { handleOPenNavDropdown, isNavDropdownOpen, handleCloseNavDropdown } =
    useUserContext();

  const links = [
    {
      id: 1,
      linkName: "Home",
      linkRoute: "/home",
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

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsScrolledY(true);
    } else {
      setIsScrolledY(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full h-20 px-4 md:px-8 fixed top-0 left-0 z-20 flex items-center justify-between transition-all duration-100 ease-in-out ${
          isScrolledY ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className={``}>
          <Link className={``} href={`/`}>
            <Image
              alt="logo"
              src={Logo}
              width={0}
              height={0}
              className={`w-32 md:w-40 lg:w-48`}
            />
          </Link>
        </div>

        <div
          className={`hidden bg-white h-[80%] md:inline-flex items-center justify-between space-x-8`}
        >
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

        <div
          onClick={
            isNavDropdownOpen ? handleCloseNavDropdown : handleOPenNavDropdown
          }
          className={`md:hidden flex item-center space-x-2 cursor-pointer text-white bg-[#93002A] py-2 px-4`}
        >
          <span className={`flex item-center justify-center text-lg`}>
            Menu
          </span>
          {isNavDropdownOpen ? (
            <LiaTimesSolid className={`flex item-center justify-center mt-2`} />
          ) : (
            <RiMenu3Fill className={`flex item-center justify-center mt-2`} />
          )}
        </div>
      </nav>

      <EnviadoModal
        isEnviadoModalOpen={isModalOPen}
        onClose={closeModal}
        modalWidth={50}
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
    </>
  );
};

export default EnviadoNav;
