import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = ["resume", "projects", "contact", "blog"];

export function Navbar() {
  return (
    <nav className="text-foreground fixed hidden w-screen justify-between px-16 py-8 text-lg md:flex">
      <Link href="/" className="font-playfair font-bold">
        jy
      </Link>
      <span className="space-x-4">
        {navLinks.map((link) => (
          <Link href="/" key={link}>
            {link}
          </Link>
        ))}
      </span>
    </nav>
  );
}
