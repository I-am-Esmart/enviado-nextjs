"use client"
import { useUserContext } from "@/context/UserContext"
import { RiMenu3Fill } from "react-icons/ri"
import { libre, spaceGrotesk } from "@/utilities/customFonts"
import { GoArrowLeft, GoArrowRight } from "react-icons/go"
import Link from "next/link"
import Logo from "/public/assets/EnviadoLogo.png"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { LiaTimesSolid } from "react-icons/lia"
import { useModalContext } from "@/context/ModalContext"

const EnviadoNav = () => {
  const [isScrolledY, setIsScrolledY] = useState<boolean>(false)
  const pathName = usePathname()

  const { handleCloseModal, handleOPenModal } = useModalContext()

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await fetch("/api/resend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "You have a new contact form submission.",
      }),
    })

    if (response.ok) {
      console.log("Email sent successfully!")
      handleCloseModal()
    } else {
      console.log("Failed to send email.")
    }
    e.currentTarget.reset()
  }

  const { handleOPenNavDropdown, isNavDropdownOpen, handleCloseNavDropdown } =
    useUserContext()

  const links = [
    {
      id: 1,
      linkName: "Home",
      linkRoute: "/home",
    },
    {
      id: 2,
      linkName: "About Us",
      linkRoute: "/about-us",
    },
    // {
    //   id: 3,
    //   linkName: "Services",
    //   linkRoute: "/service",
    // },
    {
      id: 4,
      linkName: "Our Works",
      linkRoute: "/our-work",
    },
    {
      id: 5,
      linkName: "Contact Us",
      linkRoute: "contact-us",
    },
  ]

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsScrolledY(true)
    } else {
      setIsScrolledY(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <nav
        className={`w-full h-20 px-4 md:px-8 fixed top-0 left-0 z-20 flex items-center justify-between transition-all duration-100 ease-in-out ${
          isScrolledY ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className={``}>
          <Link className={``} href={`/`}>
            <Image
              alt="logo"
              src={Logo}
              width={0}
              height={0}
              className={`w-32 md:w-40 lg:w-48`}
            />
          </Link>
        </div>

        <div
          className={`hidden bg-white h-[80%] md:inline-flex items-center justify-between space-x-8`}
        >
          {links.map((link) => {
            if (link.linkRoute === "contact-us") {
              return (
                <div
                  onClick={handleOPenModal}
                  key={link.id}
                  className="mx-4 text-base font-medium py-2 px-4 cursor-pointer text-[#93002A]"
                >
                  {link.linkName}
                </div>
              )
            } else {
              return (
                <Link
                  key={link.id}
                  href={link.linkRoute}
                  className={`mx-4 text-base font-medium py-2 px-4 ${
                    pathName === link.linkRoute
                      ? "bg-[#93002A] text-white font-bold"
                      : "text-[#93002A]"
                  }`}
                >
                  {link.linkName}
                </Link>
              )
            }
          })}
        </div>

        <div
          onClick={
            isNavDropdownOpen ? handleCloseNavDropdown : handleOPenNavDropdown
          }
          className={`md:hidden flex item-center space-x-2 cursor-pointer text-white bg-[#93002A] py-2 px-4`}
        >
          <span className={`flex item-center justify-center text-lg`}>
            Menu
          </span>
          {isNavDropdownOpen ? (
            <LiaTimesSolid className={`flex item-center justify-center mt-2`} />
          ) : (
            <RiMenu3Fill className={`flex item-center justify-center mt-2`} />
          )}
        </div>
      </nav>
    </>
  )
}

export default EnviadoNav
