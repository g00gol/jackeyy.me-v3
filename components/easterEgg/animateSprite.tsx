"use client";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type AnimateSpriteProps = {
  src: "cat_box.png" | "cat_idle.png";
  onClick?: () => void;
  className?: string;
};

export function AnimateSprite({
  src,
  onClick,
  className = "",
}: AnimateSpriteProps) {
  const spriteVariants = cva(
    `overflow-hidden bg-no-repeat pixelated cursor-pointer`,
    {
      variants: {
        src: {
          "cat_box.png":
            "animate-[animateSprite_1s_steps(4)_infinite] bg-[url('/sprites/cat_box.png')] w-24 h-24 bg-[length:384px_96px] [--sprite-width:384px]",
          "cat_idle.png":
            "animate-[animateSprite_1s_steps(10)_infinite] bg-[url('/sprites/cat_idle.png')] w-24 h-24 bg-[length:960px_96px] [--sprite-width:960px]",
        },
      },
    }
  );

  return (
    <div className={cn(spriteVariants({ src }), className)} onClick={onClick} />
  );
}
