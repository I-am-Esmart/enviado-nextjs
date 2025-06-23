import { libre, spaceGrotesk } from "@/utilities/customFonts"
import { div } from "motion/react-client"
import Link from "next/link"
import { FaArrowUp } from "react-icons/fa"
import FooterBackground from "/public/assets/FooterBackground.png"
import { useModalContext } from "@/context/ModalContext"

const EnviadoFooter = () => {
  const socialLinks = [
    {
      id: 1,
      linkName: "Instagram",
      linkRoute: "https://www.instagram.com/enviadohq/",
      img: <FaArrowUp />,
    },
    {
      id: 2,
      linkName: "Twitter",
      linkRoute: "https://x.com/enviadohq?s=21",
      img: <FaArrowUp />,
    },
    {
      id: 3,
      linkName: "LinkedIn",
      linkRoute: "https://www.linkedin.com/company/enviado-global-media/",
      img: <FaArrowUp />,
    },
    {
      id: 4,
      linkName: "Facebook",
      linkRoute: "https://www.facebook.com/profile.php?id=61575266797322",
      img: <FaArrowUp />,
    },
  ]
  const { handleOPenModal } = useModalContext()

  return (
    <footer
      className={`${spaceGrotesk.className} bg-[url('/assets/FooterBackground.png')] bg-center bg-cover bg-no-repeat overflow-hidden min-h-[80vh] h-full w-full text-white p-4 flex flex-col justify-between`}
    >
      <div
        className={`w-[70%] md:w-[40%] lg-[30%] mt-15 flex justify-between text-[1rem] cursor-pointer`}
      >
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
          <p onClick={handleOPenModal}>Contact Us</p>
        </div>
      </div>

      <div
        className={`${libre.className}  text-[5rem] md:text-[12rem] xl:text-[15rem] font-[700] italic`}
      >
        <p>Enviado</p>
      </div>

      <div
        className={`w-full justify-center items-center cursor-pointer md:mb-3`}
      >
        <div className={`w-[70%] flex gap-2 md:gap-10 lg:gap-15 `}>
          {socialLinks.map((link) => (
            <div
              className={`flex items-center justify-center gap-x-1`}
              key={link.id}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                key={link.id}
                href={link.linkRoute}
                className={`text-[0.8rem] md:text-[1.3rem]`}
              >
                {link.linkName}
              </Link>
              <FaArrowUp
                className={`rotate-45 text-white text-[1rem] md:text-[1.3rem]`}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${libre.className} w-full flex flex-col justify-between gap-4 mt-auto`}
      >
        <hr />

        <div className={`flex flex-col gap-4`}>
          <div className="w-full flex justify-between  text-[0.759rem] md:text-[1rem] font-[500]">
            <p>Privacy Policy</p>
            <p>Terms and conditions</p>
          </div>

          <div className="w-full flex justify-center text-[0.759rem] md:text-[1rem] font-[500]">
            <p>
              © {new Date().getFullYear()} Enviado Global Brand Company. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default EnviadoFooter
