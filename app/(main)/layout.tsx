import { Nav, Footer } from "@/components/shared";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4">
      <Nav />
      <section className="bg-background z-10 border-b py-8">{children}</section>
      <Footer />
    </main>
  );
}
