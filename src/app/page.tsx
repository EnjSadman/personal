"use client";

import { Footer } from "@/components/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  return (
    <div className="relative max-h-screen">
      {!isDesktop && (
        <MobileMenu isMenuOpened={isMenuOpened} setMenuOpened={setMenuOpened} />
      )}
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {isDesktop && <Sidebar setActiveItem={setActiveItem} activeItem={activeItem} />}
      </main>
      <Footer />
    </div>
  );
}
