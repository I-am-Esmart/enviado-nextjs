import Nav from "@/_components/EnviadoNav";
import React from "react";

type Props = {};

export default function OurWork(props: Props) {
  return (
    <div className={``}>
      {/* <Nav /> */}

      <div
        className={`relative min-h-screen pt-20 bg-[url('/assets/landingImage.png')] bg-center bg-cover bg-no-repeat`}
      >
        Our work
      </div>

      <div className={`min-h-screen`}>Our work 2</div>
    </div>
  );
}
