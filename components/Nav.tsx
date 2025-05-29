import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = ["resume", "projects", "contact", "blog"];

export function Navbar() {
  return (
    <header className="border-border bg-background w-full border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-foreground font-serif text-lg font-bold">jy</div>

        <nav className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link}
              variant="ghost"
              className="text-foreground hover:bg-muted"
            >
              {link}
            </Button>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="text-foreground h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <nav className="mt-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Button
                    key={link}
                    variant="ghost"
                    className="text-foreground justify-start"
                  >
                    {link}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
