import EnviadoCTA from "@/_components/EnviadoCTA";
import EnviadoOurWorksHeader from "@/_components/EnviadoOurWorksHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <EnviadoOurWorksHeader />
      {children}
      <EnviadoCTA />
    </>
  );
}
