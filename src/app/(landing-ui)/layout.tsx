"use client";

import EnviadoFooter from "@/_components/EnviadoFooter";
import EnviadoNav from "@/_components/EnviadoNav";
import MobileMenu from "@/_components/MobileMenu";
import { useState } from "react";

export default function LandingUiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={``}>
      <div className={`relative w-full`}>
        <EnviadoNav />
        <div className={``}>{children}</div>
        <EnviadoFooter />
      </div>

      <MobileMenu />
    </section>
  );
}
