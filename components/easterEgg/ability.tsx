"use client";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

import { AnimateSprite } from "@/components/easterEgg";
import { usePowerUp } from "@/contexts";

type CatChargeData = {
  clicks: number;
  lastResetDate: string;
  isCharged: boolean;
};

export function Ability() {
  const { activePowerUp } = usePowerUp();
  const [catChargeData, setCatChargeData] = useState<CatChargeData>({
    clicks: 0,
    lastResetDate: new Date().toDateString(),
    isCharged: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("catChargeData");
      if (savedData) {
        const parsedData: CatChargeData = JSON.parse(savedData);
        const today = new Date().toDateString();

        if (parsedData.lastResetDate !== today) {
          const resetData = {
            clicks: 0,
            lastResetDate: today,
            isCharged: false,
          };
          setCatChargeData(resetData);
          localStorage.setItem("catChargeData", JSON.stringify(resetData));
        } else {
          setCatChargeData(parsedData);
        }
      }
    }
  }, []);

  const handleCatClick = () => {
    if (catChargeData.isCharged) return;

    const newClicks = catChargeData.clicks + 1;
    const isCharged = newClicks >= 10;

    const newData: CatChargeData = {
      ...catChargeData,
      clicks: newClicks,
      isCharged,
    };

    setCatChargeData(newData);

    if (typeof window !== "undefined") {
      localStorage.setItem("catChargeData", JSON.stringify(newData));
    }
  };

  if (!activePowerUp) return null;

  if (activePowerUp === "cat") {
    const chargePercentage = Math.min((catChargeData.clicks / 10) * 100, 100);

    return (
      <div className="fixed right-0 bottom-0 z-[100] flex flex-col items-center justify-center">
        {!catChargeData.isCharged && (
          <div className="flex w-3/4 items-center space-x-1">
            <Heart className="text-foreground fill-destructive" />

            <div className="bg-card border-foreground h-2 w-full rounded-sm border">
              <div
                className="bg-destructive h-full rounded-sm transition-all duration-300 ease-out"
                style={{ width: `${chargePercentage}%` }}
              />
            </div>
          </div>
        )}

        <AnimateSprite
          src={catChargeData.isCharged ? "cat_idle.png" : "cat_box.png"}
          onClick={!catChargeData.isCharged ? handleCatClick : undefined}
        />
      </div>
    );
  }

  return (
    <div className="fixed right-24 bottom-24 z-[100]">{activePowerUp}</div>
  );
}
