import EnviadoCTA from "@/_components/EnviadoCTA";
import EnviadoOurWorksHeader from "@/_components/EnviadoOurWorksHeader";

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EnviadoOurWorksHeader />
      <div className={``}>{children}</div>
      <EnviadoCTA />
    </>
  );
}
