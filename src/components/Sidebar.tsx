"use client";

import { ItemBox } from "./itemBox";

interface SidebarProps {
  activeItem: string | null;
  setActiveItem: (arg: string | null) => void;
}

export const Sidebar = ({ activeItem, setActiveItem }: SidebarProps) => {
  return (
    <div className="max-w-80 max-h-screen overflow-scroll">
      <ItemBox
        items={[
          {
            label:
              "Hello! I'm Roman Pavlenko, a <green>passionate</green> software engineer from Ukraine",
          },
        ]}
      />
      <ItemBox
        label="Experience"
        items={[
          {
            label: "Sinova.dev",
            link: setActiveItem,
          },
          {
            label: "NCDev agency",
            link: setActiveItem,
          },
          {
            label: "Freelance",
            link: setActiveItem,
          },
        ]}
      />
    </div>
  );
};
