import { libre, spaceGrotesk } from "@/utilities/customFonts";
import { div } from "motion/react-client";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const EnviadoFooter = () => {
  const socialLinks = [
    {
      id: 1,
      linkName: "Instagram",
      //   linkRoute: "/",
      img: <FaArrowUp />,
    },
    {
      id: 2,
      linkName: "Twitter",
      //   linkRoute: "/about-us",
      img: <FaArrowUp />,
    },
    {
      id: 3,
      linkName: "LinkedIn",
      //   linkRoute: "/service",
      img: <FaArrowUp />,
    },
    {
      id: 4,
      linkName: "Facebook",
      //   linkRoute: "/our-work",
      img: <FaArrowUp />,
    },
  ];

  return (
    <footer
      className={`${spaceGrotesk.className} overflow-hidden bg-[#0D0909] min-h-[80vh] w-full text-white p-4 flex flex-col justify-between`}
    >
      <div className={`w-[70%] md:w-[40%] flex justify-between text-[1rem]`}>
        <div className={``}>
          <p>
            <Link href={"/about-us"}>About Us </Link>
          </p>
          <p>
            <Link href={"/our-work"}>Our Work</Link>
          </p>
        </div>
        <div className={``}>
          <p>
            <Link href={"/service"}>Service</Link>
          </p>
          <p>
            <Link href={"/contact-us"}>Contact Us</Link>
          </p>
        </div>
      </div>

      <div
        className={`${libre.className}  text-[5rem] md:text-[10rem] font-[700] italic`}
      >
        <p>Enviado</p>
      </div>

      <div className={`w-full`}>
        <div className={`w-[70%] flex gap-5 `}>
          {socialLinks.map((link) => (
            <div className={` `} key={link.id}>
              <Link key={link.id} href={""} className={``}>
                {link.linkName}
              </Link>
              {/* fix this later */}
              {/* <span className={`text-[1rem]`}>{link.img}</span> */}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${libre.className} w-full flex flex-col justify-between gap-4 mt-auto`}
      >
        <hr />

        <div className={`flex flex-col gap-4`}>
          <div className="w-full flex justify-between  text-[1rem] font-[500]">
            <p>Privacy Policy</p>
            <p>Terms and conditions</p>
          </div>

          <div className="w-full flex justify-center text-[1rem] font-[500]">
            <p>© 2024 Enviado Global Brand Company. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnviadoFooter;
