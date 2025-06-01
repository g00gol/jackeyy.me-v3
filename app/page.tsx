import { Navbar } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}
