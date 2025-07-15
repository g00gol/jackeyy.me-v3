import { SquareArrowOutUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type OutlinkProps = {
  href?: string;
  newTab?: boolean;
  className?: string;
  variant?: "default" | "ghost";
  children: React.ReactNode;
};

export function Outlink({
  href = "",
  newTab = true,
  className = "",
  variant = "default",
  children,
}: OutlinkProps) {
  const outlinkVariants = cva(
    "inline-flex items-center gap-1 transitions-colors",
    {
      variants: {
        variant: {
          default: "text-primary hover:text-primary/80 underline",
          ghost: "text-foreground hover:text-foreground/80",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  );

  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={cn(outlinkVariants({ variant, className }))}
    >
      {children}
      <SquareArrowOutUpRight className="text-primary size-3" />
    </a>
  );
}
