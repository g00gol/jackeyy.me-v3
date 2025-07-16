import { EasterEgg } from "@/components/easterEgg";
import { Outlink } from "@/components/shared";

export function Footer() {
  return (
    <footer className="text-muted-foreground sticky bottom-0 flex w-full max-w-7xl flex-col items-center justify-center space-y-4 py-8">
      <p>congrats, you've reached the end!</p>
      <EasterEgg />
      <p>
        © {new Date().getFullYear()} jackey yang | sauce on{" "}
        <Outlink href="https://github.com/g00gol/jackeyy.me-v3">github</Outlink>
        .
      </p>
    </footer>
  );
}
