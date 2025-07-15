import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type AnimateSpriteProps = {
  src: "cat_box.png" | "cat_idle.png";
};

export function AnimateSprite({ src }: AnimateSpriteProps) {
  const spriteVariants = cva(`overflow-hidden bg-no-repeat pixelated`, {
    variants: {
      src: {
        "cat_box.png":
          "animate-[animateSprite_1s_steps(4)_infinite] bg-[url('/sprites/cat_box.png')] w-24 h-24 bg-[length:384px_96px] [--sprite-width:384px]",
        "cat_idle.png":
          "animate-[animateSprite_1s_steps(10)_infinite] bg-[url('/sprites/cat_idle.png')] w-24 h-24 bg-[length:960px_96px] [--sprite-width:960px]",
      },
    },
  });

  return <div className={cn(spriteVariants({ src }))} />;
}
