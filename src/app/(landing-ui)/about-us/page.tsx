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

      <section className={`min-h-screen`}>
        <div className={``}>
          <h1>Meet our Team</h1>

          <div className={``}>
            {team.map((member, index) => (
              <div key={member.name}>
                <div className={``}>
                  <Image src={member.image} alt="member image" />
                </div>
                <div className={``}>
                  <p> {member.name} </p>
                  <p> {member.role} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnviadoCTA />
    </div>
  );
}
