"use client";

import { Content } from "@/components/Content";
import { Footer } from "@/components/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import { DATA, TDataItem } from "@/constants/data";

export default function Home() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [activeItem, setActiveItem] = useState<TDataItem | null>(null);

  return (
    <div className="relative lg:h-screen flex flex-col justify-between px-4 py-4">
      <MobileMenu isMenuOpened={isMenuOpened} setMenuOpened={setMenuOpened} />
      <main className="flex gap-[32px] row-start-2 items-center sm:items-start h-full mb-4">
        <Sidebar
          setActiveItem={setActiveItem}
          activeItem={activeItem}
          data={DATA}
        />
        <Content activeItem={activeItem || DATA.introduction.items[0]}/>
      </main>
      <Footer />
    </div>
  );
}
