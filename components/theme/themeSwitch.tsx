"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitch() {
  const { setTheme } = useTheme();

  const handleThemeChange = (theme: string) => {
    // workaround to avoid transition flicker and still allow color transitions
    // manually add transition classes to elements to bypass disableTransitionOnChange
    const elements = document.querySelectorAll("[class*='transition-colors']");
    const body = document.querySelector("body");
    elements.forEach((element) => {
      element.classList.add("!transition-colors");
    });
    if (body) {
      body.classList.add("!transition-colors");
    }
    setTheme(theme);
  };

  return (
    <span>
      <Sun
        className="hidden cursor-pointer [html.light_&]:block"
        onClick={() => handleThemeChange("dark")}
      />
      <Moon
        className="hidden cursor-pointer [html.dark_&]:block"
        onClick={() => handleThemeChange("light")}
      />
    </span>
  );
}
