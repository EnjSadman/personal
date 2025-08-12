import clsx from "clsx";
import { ItemBox } from "./itemBox";
import { DATA, TDataItem } from "../constants/data";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

interface MobileSidebarProps {
  isMenuOpened: boolean;
  setMenuOpened: (arg: boolean) => void;
  setActiveItem: (arg: TDataItem | null) => void;
  activeItem: TDataItem | null;
}

export const MobileSidebar = ({
  isMenuOpened,
  setMenuOpened,
  setActiveItem,
  activeItem,
}: MobileSidebarProps) => {
  const theme = useCurrentTheme();
  return (
    <div
      className={clsx(
        "transition-transform duration-300 ease-in-out h-full overflow-y-auto p-4",
        {
          "-translate-x-full": !isMenuOpened,
          "translate-x-0": isMenuOpened,
        }
      )}
    >
      <ItemBox
        theme={theme}
        items={DATA.introduction.items}
        setActiveItem={setActiveItem}
      />
      <ItemBox
        theme={theme}
        label="Experience"
        items={DATA.experience.items}
        setActiveItem={setActiveItem}
        activeItemLabel={activeItem?.label}
        additionalOnClick={() => setMenuOpened(false)}
      />
      <ItemBox
        theme={theme}
        label="Skills"
        isLastBox={true}
        items={DATA.skills.items}
        setActiveItem={setActiveItem}
        activeItemLabel={activeItem?.label}
        additionalOnClick={() => setMenuOpened(false)}
      />
    </div>
  );
};
