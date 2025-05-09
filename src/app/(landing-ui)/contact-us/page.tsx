import Nav from "@/_components/EnviadoNav";
import { LiaTimesSolid } from "react-icons/lia";

type Props = {};

export default function ContactUs(props: Props) {
  return (
    <div className={`w-full h-full bg-white`}>
      {/* <Nav /> */}

      {/* <div
        className={`relative min-h-screen pt-20 bg-[url('/assets/landingImage.png')] bg-center bg-cover bg-no-repeat`}
      >
        Contact Us
      </div> */}

      <div className={`w-[95%] flex flex-col my-5`}>
        <div className={`w-full flex justify-end`}>
          <button
            className={`bg-[#93002A] flex flex items-center gap-1 p-2 text-white `}
          >
            <span>Cancel</span>
            <LiaTimesSolid />
          </button>
        </div>

        <div className={`w-[90%] ml-5`}>
          <p>Hiya</p>
          <h2>GOT AN IDEA?</h2>
          <p>Let’s start with your idea and create that result you desire</p>
        </div>

        <div className={``}></div>
        <div className={``}></div>
        <div className={``}></div>
      </div>
    </div>
  );
}
