"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { PowerUp, PowerUpContext as TPowerUpContext } from "./types";

const PowerUpContext = createContext<TPowerUpContext | undefined>(undefined);

export function PowerUpProvider({ children }: { children: ReactNode }) {
  const [activePowerUp, setActivePowerUp] = useState<PowerUp>(null);
  const [refundPoints, setRefundPoints] = useState(3);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPowerUp = localStorage.getItem("powerUp") as PowerUp;
      if (
        savedPowerUp &&
        (savedPowerUp === "cat" || savedPowerUp === "confetti")
      ) {
        setActivePowerUp(savedPowerUp);
      }
    }
  }, []);

  const setPowerUp = (powerUp: PowerUp) => {
    setActivePowerUp(powerUp);
    if (typeof window !== "undefined") {
      if (powerUp) {
        localStorage.setItem("powerUp", powerUp);
      } else {
        localStorage.removeItem("powerUp");
      }
    }
  };

  const clearPowerUp = () => {
    setActivePowerUp(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("powerUp");
    }
  };

  const useRefundPoint = () => {
    setRefundPoints((prev) => Math.max(0, prev - 1));
  };

  const resetRefundPoints = () => {
    setRefundPoints(3);
  };

  const value: TPowerUpContext = {
    activePowerUp,
    refundPoints,
    setPowerUp,
    clearPowerUp,
    useRefundPoint,
    resetRefundPoints,
  };

  return (
    <PowerUpContext.Provider value={value}>{children}</PowerUpContext.Provider>
  );
}

export function usePowerUp() {
  const context = useContext(PowerUpContext);
  if (context === undefined) {
    throw new Error("usePowerUp must be used within a PowerUpProvider");
  }
  return context;
}
