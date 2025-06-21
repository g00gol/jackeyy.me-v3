"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeSwitch } from "@/components/theme";
import { ConfettiButton } from "@/components/ui/confetti";
import { useEffect, useState } from "react";

export function Nav() {
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(pathname === "/");
  }, [pathname]);

  return (
    <nav className="border-muted-foreground top-0 flex justify-between border-b py-4">
      {isHomePage ? (
        <ConfettiButton
          className="hover:text-secondary h-fit cursor-pointer bg-transparent p-0 text-base font-normal hover:bg-transparent"
          options={{
            get angle() {
              return 295;
            },
          }}
        >
          jackey yang
        </ConfettiButton>
      ) : (
        <Link href="/">jackey yang</Link>
      )}
      <div className="flex items-center space-x-2">
        <Link href="/blog" className="mr-4">
          blog
        </Link>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
