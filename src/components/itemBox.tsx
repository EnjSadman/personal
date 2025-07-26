import { TDataItem } from "@/constants/data";
import { transformMarkdown } from "@/utils/functions/transformMarkdown";
import clsx from "clsx";

interface ItemBoxProps {
  label?: string;
  activeItemLabel?: string;
  theme: string;
  isLastBox?: boolean;
  setActiveItem?: (arg: TDataItem | null) => void;
  items: {
    label: string;
    heading?: string;
    period?: string;
    description?: string;
    nonInteractable?: boolean;
  }[];
}

export const ItemBox = ({
  label,
  activeItemLabel,
  items,
  theme,
  isLastBox = false,
  setActiveItem,
}: ItemBoxProps) => {
  const indexOfActiveItem = items.findIndex(
    (el) => el.label === activeItemLabel
  );
  const isItemInBox = indexOfActiveItem !== -1;
  return (
    <div
      className={clsx("flex flex-col relative py-4", {
        "flex-grow": isLastBox,
      })}
    >
      <div
        className={clsx(
          "absolute inset-0 border  pointer-events-none",
          isItemInBox ? "border-active" : "border-white"
        )}
      ></div>
      {label && (
        <div
          className={clsx(
            "absolute top-0 left-2 -translate-y-1/2 p-1",
            { "bg-primary-bg-dark": theme === "dark" },
            { "bg-primary-bg-light": theme === "light" }
          )}
        >
          {label}
        </div>
      )}
      <div className="flex flex-col overflow-scroll">
        {items.map((el, index) => {
          if (!el.nonInteractable && setActiveItem) {
            return (
              <div
                key={el.label}
                onClick={() => setActiveItem(el)}
                className={clsx(
                  "p-1 ps-2 cursor-pointer hover:bg-[#FFFFFF20]",
                  {
                    "bg-active hover:bg-active":
                      activeItemLabel && el.label === activeItemLabel,
                  }
                )}
              >
                {transformMarkdown(el.label)}
              </div>
            );
          } else {
            return (
              <div
                key={el.label}
                className={clsx("p-2 select-none", {
                  "bg-amber-800":
                    activeItemLabel && el.label === activeItemLabel,
                })}
              >
                {transformMarkdown(el.label)}
              </div>
            );
          }
        })}
      </div>

      {items.length > 1 && (
        <div
          className={clsx(
            "absolute bottom-0 right-2 translate-y-1/2 p-1 font-bold",
            { "bg-primary-bg-dark": theme === "dark" },
            { "bg-primary-bg-light": theme === "light" },
            { "text-active": isItemInBox }
          )}
        >
          {isItemInBox ? indexOfActiveItem + 1 : 1}{" "}
          <span className="text-white">of</span> {items.length}
        </div>
      )}
    </div>
  );
};
