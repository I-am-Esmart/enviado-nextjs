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
      className={`${spaceGrotesk.className} bg-[#0D0909] h-[80vh] w-full text-white`}
    >
      <div className={`p-8 w-[70%] flex justify-between text-[1rem]`}>
        <div className={``}>
          <p>About Us</p>
          <p>Our Work</p>
        </div>
        <div className={``}>
          <p>About Us</p>
          <p>Our Work</p>
        </div>
      </div>

      <div className={`${libre.className} text-[5rem] font-[700] italic`}>
        <p>Enviado</p>
      </div>

      <div className={`w-full border`}>
        <div className={`w-[70%] p-4 flex gap-5 `}>
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
        className={`${libre.className} mt-25 p-4 w-full flex justify-between text-[1rem] font-[500]`}
      >
        <p>Privacy Policy</p>
        <p>Terms and conditions</p>
      </div>

      <div
        className={`${libre.className} px-4 w-full flex justify-between text-[1rem] font-[500]`}
      >
        <p>© 2024 Enviado Global Brand Company. All Rights Reserved. </p>
      </div>
    </footer>
  );
};

export default EnviadoFooter;
