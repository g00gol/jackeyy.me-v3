import { Ability } from "@/components/easterEgg";
import { Nav, Footer } from "@/components/shared";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto flex min-h-screen max-w-[90rem] flex-col px-4">
      <Ability />
      <Nav />
      <section className="bg-background z-10 flex-1 space-y-8 border-b py-8 transition-colors">
        {children}
      </section>
      <Footer />
    </main>
  );
}
