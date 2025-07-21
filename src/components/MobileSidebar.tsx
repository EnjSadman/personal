import clsx from "clsx";

interface MobileSidebarProps {
  isMenuOpened: boolean;
  setMenuOpened: (arg: boolean) => void;
}

export const MobileSidebar = ({
  isMenuOpened,
  setMenuOpened,
}: MobileSidebarProps) => {
  return (
    <div
      className={clsx("-translate-x-full transition-all", {
        "translate-x-0": isMenuOpened,
      })}
    >
      123
    </div>
  );
};
