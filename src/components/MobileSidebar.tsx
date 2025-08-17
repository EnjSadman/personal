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
        "transition-transform duration-300 ease-in-out h-full p-4 max-h-[90vh]",
        {
          "-translate-x-full": !isMenuOpened,
          "translate-x-0": isMenuOpened,
        }
      )}
    >
      <div className="h-full grid grid-rows-[auto_auto_1fr] gap-4 overflow-hidden pb-2">
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
    </div>
  );
};
