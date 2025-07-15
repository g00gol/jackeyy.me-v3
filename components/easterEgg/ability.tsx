"use client";
import { AnimateSprite } from "@/components/easterEgg";
import { usePowerUp } from "@/contexts";

export function Ability() {
  const { activePowerUp } = usePowerUp();

  if (!activePowerUp) return null;

  if (activePowerUp === "cat") {
    return (
      <div className="fixed right-0 bottom-0 z-[100]">
        <AnimateSprite src="cat_box.png" />
      </div>
    );
  }

  return (
    <div className="fixed right-24 bottom-24 z-[100]">{activePowerUp}</div>
  );
}
