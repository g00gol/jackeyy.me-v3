import { SquareArrowOutUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type OutlinkProps = {
  href?: string;
  newTab?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Outlink({
  href = "",
  newTab = true,
  className = "",
  children,
}: OutlinkProps) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={cn("inline-flex items-center gap-1", className)}
    >
      {children}
      <SquareArrowOutUpRight className="text-primary size-3" />
    </a>
  );
}
