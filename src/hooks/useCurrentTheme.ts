"use client";

import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export const useCurrentTheme = (): Theme => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const htmlElement = document.documentElement;
    const currentTheme =
      (htmlElement.getAttribute("data-theme") as Theme) || "dark";
    setTheme(currentTheme);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          setTheme(htmlElement.getAttribute("data-theme") as Theme);
        }
      });
    });

    observer.observe(htmlElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return theme;
};
