import Nav from "@/_components/EnviadoNav";

type Props = {};

export default function AboutUs(props: Props) {
  return (
    <div className={``}>
      {/* <Nav /> */}

      <div
        className={`relative min-h-screen pt-20 bg-[url('/assets/landingImage.png')] bg-center bg-cover bg-no-repeat`}
      >
        About Us
      </div>

      <div className={`min-h-screen`}>About Us 2</div>
    </div>
  );
}
