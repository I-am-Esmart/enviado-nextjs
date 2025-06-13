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
import { useModalContext } from "@/context/ModalContext";

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

    const response = await fetch("/api/resend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "You have a new contact form submission.",
      }),
    });

    if (response.ok) {
      console.log("Email sent successfully!");
      setIsModalOpen(false);
    } else {
      console.log("Failed to send email.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      linkRoute: "contact-us",
    },
  ];

  const { handleOPenModal } = useModalContext();

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
            if (link.linkRoute === "contact-us") {
              return (
                <div
                  onClick={handleOPenModal}
                  key={link.id}
                  className="mx-4 text-2xl font-medium py-2 px-4 cursor-pointer text-[#FFFFFF] opacity-25"
                >
                  {link.linkName}
                </div>
              );
            } else {
              return (
                <Link
                  onClick={handleCloseNavDropdown}
                  key={link.id}
                  href={link.linkRoute}
                  className={`mx-4 text-2xl font-medium py-2 px-4 ${
                    pathName === link.linkRoute
                      ? "text-white font-extrabold"
                      : "text-[#FFFFFF] opacity-25"
                  }`}
                >
                  {link.linkName}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </motion.div>
  );
}
