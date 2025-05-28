import EnviadoCTA from "@/_components/EnviadoCTA";
import Nav from "@/_components/EnviadoNav";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import JohnDoeImage from "/public/assets/JohnDoe.jpg";
import { desc, div } from "motion/react-client";
import Image from "next/image";
import DeepspaceImage from "/public/assets/Deepspace.png";
import EridianImage from "/public/assets/Eridian.png";
import Person1Image from "/public/assets/Person1.png";
import SolomonPassport from "/public/assets/SolomonPassport.png";
import Person3Image from "/public/assets/Person3.png";

type Props = {};

export default function AboutUs(props: Props) {
  const team = [
    {
      name: "John Doe",
      role: "CEO",
      image: Person1Image,
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: SolomonPassport,
    },
    {
      name: "Alice Johnson",
      role: "Designer",
      image: Person3Image,
    },
  ];

  const expertise = [
    { element1: "Motion Graphics", element2: "Motion Graphics" },
    { element1: "Motion Graphics", element2: "Motion Graphics" },
    { element1: "Motion Graphics", element2: "Motion Graphics" },
    { element1: "Motion Graphics", element2: "Motion Graphics" },
    { element1: "Motion Graphics", element2: "Motion Graphics" },
  ];

  const projects = [
    {
      name: "Deepspace",
      image: DeepspaceImage,
      description: "A Bold Leap For Advanced Manufacturing In Africa.",
    },
    {
      name: "Eridian",
      image: EridianImage,
      description: "A Higher Calling: Building Ventures With Purpose.",
    },
    {
      name: "Eridian",
      image: EridianImage,
      description: "A Higher Calling: Building Ventures With Purpose.",
    },
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
                <div className={`px-1`}>
                  <p className={`text-[1.2rem] font-[300]`}>{member.name}</p>
                  <p className={`text-[0.8rem] font-[300]`}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`w-full min-h-screen`}>
        <div className={`w-[90%] md:w-[80%] mx-auto flex flex-col gap-10`}>
          <h1
            className={`${libre.className} font-[700] text-[#000000] text-[2rem] md:text-[3rem]`}
          >
            Our Expertise
          </h1>

          <div className={`relative w-full flex flex-col gap-10`}>
            <div
              className={`hidden md:block absolute w-[130px] h-[163px] bg-[#E4554B] left-1/2  -top-10 -translate-x-1/2`}
            ></div>
            {expertise.map((item, index) => (
              <div
                key={index}
                className={` flex align-center justify-between gap-5 ${spaceGrotesk.className} text-base md:text-2xl font-[400]`}
              >
                <p>{item.element1}</p>
                <div className={`w-1/3 h-0.5 bg-[#00000033]`}></div>
                <p>{item.element2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`w-full min-h-screen`}>
        <div className={`w-[90%] md:w-[80%] mx-auto flex flex-col gap-10`}>
          <div className={`w-3/4 md:w-1/2 `}>
            <h1
              className={`${libre.className} text-[#93002A] font-[700] text-[2rem] md:text-[3rem]`}
            >
              A process that delivers
            </h1>
            <p
              className={`${spaceGrotesk.className} mt-5 font-[400] text-[1.2rem]`}
            >
              We don't just come up with ideas, products or experiences that
              push boundaries and challenge the status quo– we also bring in the
              results! We don't just come up with ideas, products or experiences
              that push boundaries and challenge the status quo we also bring in
              the results!
            </p>
          </div>

          <div className={``}>
            <h1
              className={`${libre.className} text-[#000000] font-[700] text-[2rem] md:text-[3rem]`}
            >
              Explore our solutions
            </h1>

            <div className={`w-full flex flex-col md:flex-row gap-5 mt-5`}>
              {projects.map((project, index) => (
                <div key={index} className={`w-full flex flex-col`}>
                  <div className={`w-full h-[200px]`}>
                    <Image
                      src={project.image}
                      alt="project image"
                      width={0}
                      height={0}
                      className={`w-full h-full object-cover`}
                    />
                  </div>
                  <h1
                    className={`${libre.className} text-[#000000] font-[700] text-[1.5rem] text-[#FF0000]`}
                  >
                    {project.name}
                  </h1>
                  <p
                    className={`${spaceGrotesk.className} font-[400] text-[1rem] `}
                  >
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EnviadoCTA />
    </div>
  );
}
