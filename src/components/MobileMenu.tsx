import { Cross } from "@/icons/cross";
import { HorizThreeLines } from "@/icons/horizThreeLines";
import { MobileSidebar } from "./MobileSidebar";
import clsx from "clsx";

interface MobileMenuProps {
  isMenuOpened: boolean;
  setMenuOpened: (arg: boolean) => void;
}

export const MobileMenu = ({
  isMenuOpened,
  setMenuOpened,
}: MobileMenuProps) => {
  return (
    <header
      className={clsx("sticky top-0 left-0 lg:hidden", {
        "h-screen": isMenuOpened,
      })}
    >
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
      <MobileSidebar
        isMenuOpened={isMenuOpened}
        setMenuOpened={setMenuOpened}
      />
    </header>
  );
};
