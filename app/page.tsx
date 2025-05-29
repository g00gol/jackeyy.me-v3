import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Nav";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-foreground font-playfair">Hello World</h1>
      <Button>Hello World</Button>
    </div>
  );
}
