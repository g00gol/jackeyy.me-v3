"use client";

import Link from "next/link";

import { ThemeSwitch } from "@/components/theme";

export function Nav() {
  return (
    <nav className="border-muted-foreground bg-background sticky top-0 z-100 flex h-16 items-center justify-between border-b transition-colors">
      <Link href="/">jackey yang</Link>
      <div className="flex items-center space-x-2">
        <Link href="/blog" className="mr-4">
          blog
        </Link>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
