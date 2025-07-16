"use client";
import React, { ReactNode } from "react";
import { PowerUpProvider } from "./powerUp";

export function ContextProvider({ children }: { children: ReactNode }) {
  return <PowerUpProvider>{children}</PowerUpProvider>;
}
