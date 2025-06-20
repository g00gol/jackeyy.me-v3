"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitch() {
  const { setTheme } = useTheme();

  const handleThemeChange = (theme: string) => {
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.classList.add("!transition-colors");
    }
    setTheme(theme);
  };

  return (
    <>
      <Sun
        className="hidden cursor-pointer [html.light_&]:block"
        onClick={() => handleThemeChange("dark")}
      />
      <Moon
        className="hidden cursor-pointer [html.dark_&]:block"
        onClick={() => handleThemeChange("light")}
      />
    </>
  );
}
