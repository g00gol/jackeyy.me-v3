import { SquareArrowOutUpRight } from "lucide-react";

type OutlinkProps = {
  href?: string;
  newTab?: boolean;
  children: React.ReactNode;
};

export function Outlink({ href = "", newTab = true, children }: OutlinkProps) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1"
    >
      {children}
      <SquareArrowOutUpRight className="text-primary size-3" />
    </a>
  );
}
