import Link from "next/link";

import { ThemeSwitch } from "@/components/theme";

export function Nav() {
  return (
    <nav className="border-muted-foreground top-0 flex justify-between border-b py-4">
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
