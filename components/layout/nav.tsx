import { ThemeSwitch } from "@/components/theme";

export function Nav() {
  return (
    <nav className="border-muted-foreground top-0 flex justify-between border-b py-4">
      <h1>jackey yang</h1>
      <ThemeSwitch />
    </nav>
  );
}
