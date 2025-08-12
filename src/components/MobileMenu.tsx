import { Cross } from "@/icons/cross";
import { HorizThreeLines } from "@/icons/horizThreeLines";
import { MobileSidebar } from "./MobileSidebar";
import clsx from "clsx";
import { TDataItem } from "@/constants/data";

interface MobileMenuProps {
  isMenuOpened: boolean;
  setMenuOpened: (arg: boolean) => void;
  setActiveItem: (arg: TDataItem | null) => void;
  activeItem: TDataItem | null;
}

export const MobileMenu = ({
  isMenuOpened,
  setMenuOpened,
  setActiveItem,
  activeItem,
}: MobileMenuProps) => {
  return (
    <header className="sticky top-0 left-0 lg:hidden z-10">
      <div className="flex justify-end">
        <button
          type="button"
          className="w-[60px] h-[45px] relative transition-all flex justify-center items-center"
          onClick={() => {
            setMenuOpened(!isMenuOpened);
          }}
        >
          {isMenuOpened ? <Cross /> : <HorizThreeLines />}
        </button>
      </div>
      <div
        className={clsx(
          "absolute top-full left-0 w-full h-screen bg-background z-20 transition-opacity duration-300",
          {
            "opacity-100 pointer-events-auto": isMenuOpened,
            "opacity-0 pointer-events-none": !isMenuOpened,
          }
        )}
      >
        <MobileSidebar
          isMenuOpened={isMenuOpened}
          setMenuOpened={setMenuOpened}
          setActiveItem={setActiveItem}
          activeItem={activeItem}
        />
      </div>
    </header>
  );
};
