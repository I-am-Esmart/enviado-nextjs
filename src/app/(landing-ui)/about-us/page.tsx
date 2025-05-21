import EnviadoCTA from "@/_components/EnviadoCTA";
import Nav from "@/_components/EnviadoNav";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import JohnDoeImage from "/public/assets/JohnDoe.jpg";
import { div } from "motion/react-client";
import Image from "next/image";

type Props = {};

export default function AboutUs(props: Props) {
  const team = [
    {
      name: "John Doe",
      role: "CEO",
      image: JohnDoeImage,
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: JohnDoeImage,
    },
    {
      name: "Alice Johnson",
      role: "Designer",
      image: JohnDoeImage,
    },
    {
      name: "Bob Brown",
      role: "Developer",
      image: JohnDoeImage,
    },
  ];

  const expertise = [
    { element1: "Motion Graphics", element2: "Motion Graphics" },
    { element1: "Motion Graphics", element2: "Motion Graphics" },
    { element1: "Motion Graphics", element2: "Motion Graphics" },
    { element1: "Motion Graphics", element2: "Motion Graphics" },
    { element1: "Motion Graphics", element2: "Motion Graphics" },
  ];

  return (
    <div className={``}>
      <div
        className={`relative min-h-screen pt-20 bg-[url('/assets/landingImage.png')] bg-center bg-cover bg-no-repeat`}
      >
        <div className="w-full h-screen px-10 py-5 flex flex-col justify-center items-center">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-10 text-white font-bold uppercase">
              <h1
                className={`${libre.className} w-full md:w-[90%] text-[2rem] md:text-[3rem] font-extrabold`}
              >
                We specialize in digital experience for a better product
              </h1>
            </div>
          </div>
          <div className="w-full mt-2 py-5 flex flex-col-reverse md:flex-row md:items-start text-[1rem]">
            <div
              className={`${spaceGrotesk.className} w-full md:w-[60%] text-white text-[1.2rem] font-[400]`}
            >
              <p>
                We don't just come up with ideas, products or experiences that
                push boundaries and challenge the status quo.
              </p>
            </div>
          </div>
        </div>

        <Nav />
      </div>

      <section className={`w-full min-h-screen`}>
        <div
          className={`w-[90%] md:w-[80%] items-center md:items-start mx-auto py-10 flex flex-col gap-10`}
        >
          <h1
            className={`${libre.className} font-[700] text-[#970029] text-[2rem] md:text-[3rem]`}
          >
            Meet our Team
          </h1>

          <div
            className={`w-full flex flex-col md:flex-row gap-10 items-center md:items-stretch`}
          >
            {team.map((member) => (
              <div
                key={member.name}
                className={`${spaceGrotesk.className} w-1/2 md:w-1/4 flex flex-col  shadow-lg`}
              >
                <div className={``}>
                  <Image
                    src={member.image}
                    alt="member image"
                    width={0}
                    height={0}
                    className={`w-full object-cover`}
                  />
                </div>
                <div className="">
                  <p className={`text-[1.2rem] font-[300]`}>{member.name}</p>
                  <p className={`text-[1rem] font-[300]`}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`w-full min-h-screen`}>
        <div className={`w-[90%] md:w-[80%] mx-auto flex flex-col gap-10`}>
          <h1
            className={`${libre.className} font-[700] text-[2rem] md:text-[3rem]`}
          >
            Our Expertise
          </h1>

          <div className={`w-full`}>
            {expertise.map((item, index) => (
              <div key={index} className={`flex align-center justify-between `}>
                <p>{item.element1}</p>
                <div className={`w-1/3 text-[#00000033]`}></div>
                <p>{item.element2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnviadoCTA />
    </div>
  );
}
