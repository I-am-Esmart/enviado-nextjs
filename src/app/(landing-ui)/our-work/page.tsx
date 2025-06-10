"use client";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import DeepspaceImage from "/public/assets/Deepspace.png";
import EridianImage from "/public/assets/Eridian.png";
import LolaImage from "/public/assets/Lola.png";
import WebDesignImage from "/public/assets/WebDesignImage.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import WineKite from "/public/assets/WineKite.png";
import EnviadoOurWorksHeader from "@/_components/EnviadoOurWorksHeader";

export default function OurWork() {
  const pathName = usePathname();

  const links = [
    { name: "All Projects", route: "/our-works" },
    { name: "Branding", route: "/our-works/branding" },
    { name: "Marketing", route: "/our-works/marketing" },
    { name: "Motion Design", route: "/our-works/motion-design" },
    { name: "Graphics", route: "/our-works/graphics" },
  ];

  const workExamples = [
    {
      id: "deepspace",
      image: DeepspaceImage,
      title: "DEEPSPACE",
      desc: "A Bold Leap For Advanced Manufacturing In Africa",
      webdesignImage: WebDesignImage,
    },
    {
      id: "eridian",
      image: EridianImage,
      title: "Eridian",
      desc: "A Higher Calling: Building Ventures With Purpose",
      webdesignImage: WebDesignImage,
    },
    {
      id: "lola",
      image: LolaImage,
      title: "LOLA",
      desc: "Banking Nigeria’s Unbanked Grassroots",
      webdesignImage: WebDesignImage,
    },
  ];

  return (
    <div className={``}>
      <EnviadoOurWorksHeader />

      <div className={`min-h-screen w-full flex flex-col items-center mt-5`}>
        <div className="w-[90%] flex flex-col items-center">
          <div className={``}></div>

          <div className={``}>
            {workExamples.map(
              ({ id, image, title, desc, webdesignImage }, index) => (
                <Link key={id} href={`/our-work/${id}`}>
                  <div
                    className={`w-full flex flex-col items-center justify-between gap-2 mt-10`}
                  >
                    <div className={`w-full`}>
                      <Image
                        src={image}
                        alt=""
                        width={0}
                        height={0}
                        className={`w-full h-full object-cover`}
                      />
                    </div>

                    <div
                      className={`w-full flex flex-col md:flex-row md:gap-10 items-center justify-center`}
                    >
                      <div className={` flex flex-col`}>
                        <h2
                          className={`${libre.className} text-[#FF0000] font-[700] text-[2rem]`}
                        >
                          {title}
                        </h2>
                        <p
                          className={`${spaceGrotesk.className} font-[400] text-[1rem] `}
                        >
                          {desc}
                        </p>
                      </div>

                      <Image
                        src={webdesignImage}
                        alt=""
                        width={0}
                        height={0}
                        className={`w-full h-full object-cover`}
                      />
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>

          <div className={``}></div>
        </div>
      </div>
    </div>
  );
}
