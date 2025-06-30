"use client"

import EnviadoFooter from "@/_components/EnviadoFooter"
import EnviadoNav from "@/_components/EnviadoNav"
import MobileMenu from "@/_components/MobileMenu"
import EnviadoModal from "@/_components/EnviadoModal"
import { libre, spaceGrotesk } from "@/utilities/customFonts"
import { GoArrowRight } from "react-icons/go"
import SuccessModalImage from "/public/assets/SuccessModalImage.png"
import toast from "react-hot-toast"

import { useModalContext } from "@/context/ModalContext"
import { useState } from "react"
import Image from "next/image"

export default function LandingUiLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isModalOpen, handleCloseModal } = useModalContext()
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    services: {
      branding: false,
      productVideoAds: false,
      motionGraphics: false,
      marketingAds: false,
    },
  })

  const closeModal = () => handleCloseModal()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (service: keyof typeof formData.services) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service],
      },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await res.json()

      if (result.success) {
        // alert("Message sent successfully!");
        // toast.success("fform submitted successfully.");
        setShowSuccessModal(true)
        closeModal()
        setFormData({
          name: "",
          company: "",
          email: "",
          message: "",
          services: {
            branding: false,
            productVideoAds: false,
            motionGraphics: false,
            marketingAds: false,
          },
        })
      } else {
        toast.error("Failed to send. Please try again later.")
      }
    } catch (error) {
      console.error("Form submit error:", error)
      toast.error("An unexpected error occurred.")
    }
  }

  return (
    <section>
      <div className="relative w-full">
        <EnviadoNav />
        <div>{children}</div>

        {/* Contact form modal  */}
        <EnviadoModal
          isEnviadoModalOpen={isModalOpen}
          onClose={closeModal}
          modalWidth={100}
          modalMdWidth={50}
        >
          <div className="w-full flex md:justify-center md:items-center">
            <form
              onSubmit={handleSubmit}
              className="w-[95%] flex flex-col my-5"
            >
              <div className="w-[90%] text-[#101010]">
                <p className={`${spaceGrotesk.className} text-xl`}>Hiya</p>
                <h2 className={`${libre.className} text-[2rem] font-bold`}>
                  GOT AN IDEA?
                </h2>
                <p className={`${libre.className} text-[1rem]`}>
                  Let’s start with your idea and create that result you desire
                </p>
              </div>

              <section className="w-full h-[50vh]">
                <div className="w-[98%] max-h-full overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:bg-[#93002A] [&::-webkit-scrollbar-thumb]:rounded">
                  <div
                    className={`${spaceGrotesk.className} w-[98%] flex flex-col items-center justify-center gap-4 mt-5 text-[1rem] font-400`}
                  >
                    <div className="w-full flex flex-col md:flex-row gap-2">
                      <label className="w-full md:w-1/2 bg-[#f8f8f8] flex items-center gap-2 p-2">
                        <input
                          type="checkbox"
                          checked={formData.services.branding}
                          onChange={() => handleCheckboxChange("branding")}
                        />
                        <p>Branding</p>
                      </label>
                      <label className="w-full md:w-1/2 bg-[#FCCF00] flex items-center gap-2 p-2">
                        <input
                          type="checkbox"
                          checked={formData.services.productVideoAds}
                          onChange={() =>
                            handleCheckboxChange("productVideoAds")
                          }
                        />
                        <p>Product Video Ads</p>
                      </label>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-2">
                      <label className="w-full md:w-1/2 bg-[#f8f8f8] flex items-center gap-2 p-2">
                        <input
                          type="checkbox"
                          checked={formData.services.motionGraphics}
                          onChange={() =>
                            handleCheckboxChange("motionGraphics")
                          }
                        />
                        <p>Motion Graphics</p>
                      </label>
                      <label className="w-full md:w-1/2 bg-[#FCCF00] flex items-center gap-2 p-2">
                        <input
                          type="checkbox"
                          checked={formData.services.marketingAds}
                          onChange={() => handleCheckboxChange("marketingAds")}
                        />
                        <p>Marketing Ads</p>
                      </label>
                    </div>
                  </div>

                  <p
                    className={`${spaceGrotesk.className} mt-5 text-[1.5rem] md:text-[2rem] font-medium`}
                  >
                    Hello,
                  </p>

                  <div
                    className={`${spaceGrotesk.className} py-4 w-full flex flex-col gap-y-5 mt-5 text-sm md:text-[1rem] font-400`}
                  >
                    <div className="w-full flex flex-col gap-y-5">
                      <p className="text-[#000000] text-xl md:text-3xl font-light">
                        My name is
                      </p>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-[98%] md:w-2/3 p-3 text-2xl md:text-3xl opacity-20 font-medium border-2 border-[#c1c1c1]"
                      />
                    </div>

                    <div className="flex flex-col gap-y-5">
                      <p className="text-[#000000] text-xl md:text-3xl font-light">
                        I work for
                      </p>
                      <input
                        name="company"
                        type="text"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-[98%] md:w-2/3 p-3 text-xl md:text-3xl opacity-20 font-medium border-2 border-[#c1c1c1]"
                      />
                    </div>

                    <div className="flex flex-col gap-y-5">
                      <p className="text-[#000000] text-xl md:text-3xl font-light">
                        Here is my email
                      </p>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-[98%] md:w-2/3 p-3 text-xl md:text-3xl opacity-20 font-medium border-2 border-[#c1c1c1]"
                      />
                    </div>

                    <div className="w-[98%] flex flex-col gap-y-5">
                      <p className="text-[#000000] text-xl md:text-3xl font-light">
                        And I have a message for you
                      </p>
                      <textarea
                        required
                        name="message"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full md:w-2/3 p-3 text-xl md:text-3xl opacity-20 font-medium border-2 border-[#c1c1c1]"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <button
                type="submit"
                className="w-[8rem] flex justify-center items-center ml-5 mt-8 bg-[#101010] text-white p-2 gap-1"
              >
                <span>Submit</span> <GoArrowRight />
              </button>
            </form>
          </div>
        </EnviadoModal>

        {/* success modal */}
        <EnviadoModal
          isEnviadoModalOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          modalWidth={80}
          modalMdWidth={40}
        >
          <div className="w-full flex flex-col items-center justify-center py-10 gap-5">
            <Image
              src={SuccessModalImage}
              alt="Success"
              width={200}
              height={200}
              className="w-40 h-40 object-cover"
            />

            <p
              className={`${spaceGrotesk.className} text-lg md:text-2xl text-center font-normal`}
            >
              Thank you! We’ve gotten your message and we will reach out to you
              shortly.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-5 px-6 py-2 bg-[#101010] text-white"
            >
              Close
            </button>
          </div>
        </EnviadoModal>

        <EnviadoFooter />
      </div>
      <MobileMenu />
    </section>
  )
}
