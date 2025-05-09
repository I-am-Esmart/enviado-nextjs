import Nav from "@/_components/EnviadoNav";
import React from "react";

type Props = {};

export default function Service(props: Props) {
  return (
    <div className={``}>
      {/* <Nav /> */}

      <div
        className={`relative min-h-screen pt-20 bg-[url('/assets/landingImage.png')] bg-center bg-cover bg-no-repeat`}
      >
        Service
      </div>

      <div className={`min-h-screen`}>Service 2</div>
    </div>
  );
}
