import EnviadoOurWorksHeader from "@/_components/EnviadoOurWorksHeader"
import { spaceGrotesk, libre } from "@/utilities/customFonts"
import Image from "next/image"
import Link from "next/link"
import GospelKonnectImage from "/public/assets/GospelKonnectImage.png"
import DeeprImage from "/public/assets/DeeprImage.png"

type Props = {}

const MarketingPage = (props: Props) => {
  const workExamples = [
    {
      id: 1,
      image: GospelKonnectImage,
      title: "GospelKonect Global",
      desc: "Proclaiming the good news all over the earth.",
      work1: "web design",
      work2: "seo optimisation",
      work3: "content creation",
      link: "https://www.instagram.com/gospelkonnectglobal?igsh=cGhtdnQ1NDhnczRh",
    },
    {
      id: 2,
      image: DeeprImage,
      title: "Deepr App",
      desc: "A better way to listen to sermon",
      work1: "web design",
      work2: "brand design",
      work3: "app design & dev",
      link: "http://getdeepr.co",
    },
  ]

  return (
    <div>
      <EnviadoOurWorksHeader />

      <div className={`min-h-screen w-full flex flex-col items-center mt-5`}>
        <div className="w-full flex flex-col items-center">
          <div className={`w-[90%] md:w-[80%] xl-[60%] mx-auto mb-20`}>
            {workExamples.map(
              (
                { id, image, title, desc, work1, work2, work3, link },
                index
              ) => (
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  <div
                    key={id}
                    className={`${
                      index % 2 === 0 ? "md:ml-10" : "md:mr-10"
                    } w-full flex flex-col items-center justify-between gap-2 mt-10`}
                  >
                    <div className={`w-full`}>
                      <Image
                        src={image}
                        alt="project image"
                        width={0}
                        height={0}
                        className={`w-full h-full object-cover`}
                      />
                    </div>

                    <div
                      className={`w-full flex flex-col md:flex-row md:gap-10 items-start justify-center md:items-center`}
                    >
                      <div className="flex flex-col md:flex-row w-full items-stretch">
                        <div className={`w-full md:w-[45%] flex flex-col`}>
                          <h2
                            className={`${libre.className} text-[#FF0000] font-[700] text-[1.5rem] md:text-[2rem]`}
                          >
                            {title}
                          </h2>
                          <p
                            className={`${spaceGrotesk.className} font-[400] text-[1rem]`}
                          >
                            {desc}
                          </p>
                        </div>

                        <div
                          className={`w-full md:w-[55%] flex items-stretch `}
                        >
                          <div
                            className={`${libre.className} font-[500] text-[1rem] flex w-full uppercase`}
                          >
                            <div
                              className={`w-1/3 bg-[#B4E2FF] flex items-center justify-center`}
                            >
                              <p className={`text-[#000000]`}>{work1}</p>
                            </div>
                            <div
                              className={`w-1/3 bg-[#FCD0B9] flex items-center justify-center`}
                            >
                              <p className={`text-[#000000]`}>{work2}</p>
                            </div>
                            <div
                              className={`w-1/3 bg-[#E7C0FF] flex items-center justify-center`}
                            >
                              <p className={`text-[#000000]`}>{work3}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketingPage
