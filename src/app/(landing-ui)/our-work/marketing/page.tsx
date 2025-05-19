import EnviadoOurWorksHeader from "@/_components/EnviadoOurWorksHeader";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import Image from "next/image";
import DeepspaceImage from "/public/assets/Deepspace.png";
import EridianImage from "/public/assets/Eridian.png";
import LolaImage from "/public/assets/Lola.png";
import WebDesignImage from "/public/assets/WebDesignImage.png";

type Props = {};

const marketingPage = (props: Props) => {
  const workExamples = [
    {
      id: 1,
      image: DeepspaceImage,
      title: "DEEPSPACE",
      desc: "A Bold Leap For Advanced Manufacturing In Africa",
      webdesignImage: WebDesignImage,
    },
    {
      id: 2,
      image: EridianImage,
      title: "Eridian",
      desc: "A Higher Calling: Building Ventures With Purpose",
      webdesignImage: WebDesignImage,
    },
    {
      id: 3,
      image: LolaImage,
      title: "LOLA",
      desc: "Banking Nigeria’s Unbanked Grassroots",
      webdesignImage: WebDesignImage,
    },
  ];

  return (
    <div>
      <div className={`min-h-screen w-full flex flex-col items-center mt-5`}>
        <div className="w-[90%] flex flex-col items-center">
          <div className={``}></div>

          <div className={``}>
            {workExamples.map(
              ({ id, image, title, desc, webdesignImage }, index) => (
                <div
                  key={id}
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
              )
            )}
          </div>

          <div className={``}></div>
        </div>
      </div>
    </div>
  );
};

export default marketingPage;
