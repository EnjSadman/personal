"use client";

import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import { ItemBox } from "./itemBox";
import { TDataItem } from "@/constants/data";

interface DataItem {
  label: string;
  heading?: string;
  period?: string;
  description?: string;
  nonInteractable?: boolean;
}

interface DataStructure {
  introduction: {
    items: DataItem[];
  };
  experience: {
    items: DataItem[];
  };
  skills: {
    items: DataItem[];
  };
}

interface SidebarProps {
  activeItem: TDataItem | null;
  setActiveItem: (arg: TDataItem | null) => void;
  data: DataStructure | null;
}

export const Sidebar = ({ activeItem, setActiveItem, data }: SidebarProps) => {
  const theme = useCurrentTheme();

  if (!data) {
    return (
      <div className="max-w-80 max-h-screen hidden lg:flex lg:flex-col lg:gap-4">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-80 max-h-screen hidden lg:flex lg:flex-col lg:gap-4">
      <ItemBox
        theme={theme}
        items={data.introduction.items}
        setActiveItem={setActiveItem}
      />
      <ItemBox
        theme={theme}
        label="Experience"
        items={data.experience.items}
        setActiveItem={setActiveItem}
        activeItemLabel={activeItem?.label}
      />
      <ItemBox
        theme={theme}
        label="Skills"
        isLastBox={true}
        items={data.skills.items}
        setActiveItem={setActiveItem}
        activeItemLabel={activeItem?.label}
      />
    </div>
  );
};
