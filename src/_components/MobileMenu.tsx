"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

type MobileMenuProps = {
  isNavDropdownOpen: boolean;
  handleClickLink: () => void;
};

const transition = {
  duration: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};
const initial = { left: 0 };
const animate = { left: "-100vw" };

export default function MobileMenu({
  isNavDropdownOpen,
  handleClickLink,
}: MobileMenuProps) {
  const path = usePathname();

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
    {
      id: 3,
      linkName: "Services",
      linkRoute: "/service",
    },
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
    {
      id: 6,
      linkName: "Contact",
      linkRoute: "/contact",
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
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.linkRoute}
              className={`text-lg ${
                path === link.linkRoute
                  ? "text-[#E4B34E] font-semibold"
                  : "text-[#FFFFFF] font-medium"
              }`}
              onClick={handleClickLink}
            >
              {link.linkName}
            </Link>
          ))}
        </div>

        <div className={``}>
          <Link
            href={"/sign-up"}
            className={`flex items-center justify-center text-base py-2 px-5 rounded-lg bg-[#E4B34E] text-[#FFFFFF]`}
            onClick={handleClickLink}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
