import Link from "next/link";

import { ThemeSwitch } from "@/components/theme";

export function Nav() {
  return (
    <nav className="border-muted-foreground top-0 flex justify-between border-b py-4">
      <Link href="/">jackey yang</Link>
      <ThemeSwitch />
    </nav>
  );
}
