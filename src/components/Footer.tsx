"use client";

import { defaultColor, lightThemeIconColor } from "@/constants/icons";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import { GithubIcon } from "@/icons/github";
import { LinkedinIcon } from "@/icons/linkedin";
import { TelegramIcon } from "@/icons/telegram";
import Link from "next/link";

export const Footer = () => {
  const theme = useCurrentTheme();
  const currentColor = theme === "dark" ? defaultColor : lightThemeIconColor;
  return (
    <div className="flex justify-between max-w-[64rem] w-full">
      <Link
        href="https://www.linkedin.com/in/roman-pavlenko-664674242/"
        target="_blank"
        className="flex gap-2 items-center"
      >
        <LinkedinIcon color={currentColor} />
        LinkedIn
      </Link>
      <Link
        href="https://github.com/EnjSadman/"
        target="_blank"
        className="flex gap-2 items-center"
      >
        <GithubIcon color={currentColor} />
        Github
      </Link>
      <Link
        href="https://t.me/EnjSadman"
        target="_blank"
        className="flex gap-2 items-center"
      >
        <TelegramIcon color={currentColor} />
        Telegram
      </Link>
    </div>
  );
};
