import { Nav } from "@/components/shared";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto min-h-screen max-w-7xl space-y-8 px-4">
      <Nav />
      {children}
    </main>
  );
}
