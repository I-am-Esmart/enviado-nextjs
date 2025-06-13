"use client";

import EnviadoFooter from "@/_components/EnviadoFooter";
import EnviadoNav from "@/_components/EnviadoNav";
import MobileMenu from "@/_components/MobileMenu";
import EnviadoModal from "@/_components/EnviadoModal";
import { libre, spaceGrotesk } from "@/utilities/customFonts";
import { GoArrowRight } from "react-icons/go";
import { useModalContext } from "@/context/ModalContext";

export default function LandingUiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isModalOpen, handleCloseModal } = useModalContext();

  const closeModal = () => {
    handleCloseModal();
  };

  return (
    <section className={``}>
      <div className={`relative w-full`}>
        <EnviadoNav />

        <div className={``}>{children}</div>

        <EnviadoModal
          isEnviadoModalOpen={isModalOpen}
          onClose={closeModal}
          modalWidth={80}
          modalMdWidth={50}
        >
          <div className={"w-full flex md:justify-center md:items-center"}>
            <form
              // onSubmit={handleSendEmail}
              className={`w-[95%]  flex flex-col my-5`}
            >
              <div className={`w-[90%] text-[#101010]`}>
                <p className={`${spaceGrotesk.className} text-xl`}>Hiya</p>
                <h2 className={`${libre.className} text-[2rem] font-bold`}>
                  GOT AN IDEA?
                </h2>
                <p className={`${libre.className} text-[1rem]`}>
                  Let’s start with your idea and create that result you desire
                </p>
              </div>

              <section className={`w-full h-[50vh]`}>
                <div
                  className={`w-[98%] max-h-full overflow-y-auto 
                [&::-webkit-scrollbar]:w-1.5
                [&::-webkit-scrollbar-track]:bg-gray-200
                [&::-webkit-scrollbar-thumb]:bg-[#93002A]
                [&::-webkit-scrollbar-thumb]:rounded`}
                >
                  <div
                    className={`${spaceGrotesk.className} w-[98%] flex flex-col items-center justify-center gap-4 mt-5 text-[1rem] font-400`}
                  >
                    <div className="w-full flex flex-col md:flex-row gap-2">
                      <div className="w-full md:w-1/2 bg-[#f8f8f8] flex items-center gap-2 p-2">
                        <input type="checkbox" />
                        <p>Branding</p>
                      </div>

                      <div className="w-full md:w-1/2 bg-[#FCCF00] flex items-center gap-2 p-2">
                        <input type="checkbox" />
                        <p>Product Video Ads</p>
                      </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row gap-2">
                      <div className="w-full md:w-1/2 bg-[#f8f8f8] flex items-center gap-2 p-2">
                        <input type="checkbox" />
                        <p>Motion Graphics</p>
                      </div>

                      <div className="w-full md:w-1/2 bg-[#FCCF00] flex items-center gap-2 p-2">
                        <input type="checkbox" />
                        <p>Marketing Ads</p>
                      </div>
                    </div>
                  </div>

                  <p
                    className={`${spaceGrotesk.className} mt-5 text-[2rem] font-medium`}
                  >
                    Hello,
                  </p>

                  <div
                    className={`${spaceGrotesk.className} py-4 w-full flex flex-col gap-y-5 mt-5 text-[1rem] font-400 `}
                  >
                    <div className={`w-full flex flex-col gap-y-5`}>
                      <p className={`text-[#000000] text-3xl font-light`}>
                        My name is
                      </p>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className={`w-full md:w-2/3 p-3 text-xl md:text-3xl opacity-20 font-medium border-2 border-[#c1c1c1] outline-none focus:outline-none`}
                      />
                    </div>

                    <div className={`flex flex-col gap-y-5`}>
                      <p className={` text-[#000000] text-3xl font-light`}>
                        I work for
                      </p>
                      <input
                        type="text"
                        placeholder="Company name"
                        className={`w-full md:w-2/3 p-3 text-xl md:text-3xl opacity-20 font-medium border-2 border-[#c1c1c1] outline-none focus:outline-none`}
                      />
                    </div>

                    <div className={`flex flex-col gap-y-5`}>
                      <p className={` text-[#000000] text-3xl font-light`}>
                        Here is my email
                      </p>
                      <input
                        type="text"
                        placeholder="example@gmail.com"
                        className={`w-full md:w-2/3 p-3 text-xl md:text-3xl opacity-20 font-medium border-2 border-[#c1c1c1] outline-none focus:outline-none`}
                      />
                    </div>

                    <div className={`w-[98%] flex flex-col gap-y-5`}>
                      <p className={`text-[#000000] text-3xl font-light`}>
                        And I have a message for you
                      </p>
                      <textarea
                        name="message"
                        placeholder="Enter your message"
                        className={`w-full md:w-2/3 p-3 text-xl md:text-3xl opacity-20 font-medium border-2 border-[#c1c1c1] outline-none focus:outline-none`}
                      />
                    </div>
                  </div>
                </div>
              </section>

              <button
                type="submit"
                className={`w-[8rem] flex justify-center items-center ml-5 mt-8 bg-[#101010] text-white p-2  gap-1`}
              >
                <span>Submit</span> <GoArrowRight />
              </button>
            </form>
          </div>
        </EnviadoModal>

        <EnviadoFooter />
      </div>

      <MobileMenu />
    </section>
  );
}
