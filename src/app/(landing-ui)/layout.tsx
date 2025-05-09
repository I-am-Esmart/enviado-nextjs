"use client";

import MobileMenu from "@/_components/MobileMenu";
import { useState } from "react";

export default function LandingUiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

  const handleClickLink = () => {
    if (isNavDropdownOpen === true) {
      setIsNavDropdownOpen(false);
    } else {
      setIsNavDropdownOpen(true);
    }
  };

  return (
    <>
      <div className={`w-full`}>{children}</div>;
      <MobileMenu
        handleClickLink={handleClickLink}
        isNavDropdownOpen={isNavDropdownOpen}
      />
    </>
  );
}
