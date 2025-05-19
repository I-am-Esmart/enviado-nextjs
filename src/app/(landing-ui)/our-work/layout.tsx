import EnviadoOurWorksHeader from "@/_components/EnviadoOurWorksHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <EnviadoOurWorksHeader />
      {children}
    </>
  );
}
