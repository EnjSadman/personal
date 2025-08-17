import { TDataItem } from "@/constants/data";
import { transformMarkdown } from "@/utils/functions/transformMarkdown";
import clsx from "clsx";

interface ItemBoxProps {
  label?: string;
  activeItemLabel?: string;
  theme: string;
  isLastBox?: boolean;
  setActiveItem?: (arg: TDataItem | null) => void;
  additionalOnClick?: (arg?: unknown) => unknown;
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
  additionalOnClick,
}: ItemBoxProps) => {
  const indexOfActiveItem = items.findIndex(
    (el) => el.label === activeItemLabel
  );
  const isItemInBox = indexOfActiveItem !== -1;
  const hasCounter = items.length > 1;

  return (
    <div
      className={clsx("flex flex-col relative py-4", {
        "h-full min-h-0": isLastBox,
      })}
    >
      <div
        className={clsx(
          "absolute inset-0 border pointer-events-none",
          isItemInBox ? "border-active" : "border-white"
        )}
      />

      {label && (
        <div
          className={clsx(
            "absolute top-0 left-2 -translate-y-1/2 p-1 z-10",
            { "bg-primary-bg-dark": theme === "dark" },
            { "bg-primary-bg-light": theme === "light" }
          )}
        >
          {label}
        </div>
      )}
      <div className={clsx("flex-1 relative overflow-auto min-h-0 pr-2")}>
        {items.map((el) => {
          if (!el.nonInteractable && setActiveItem) {
            return (
              <div
                key={el.label}
                onClick={() => {
                  setActiveItem(el);
                  additionalOnClick?.();
                }}
                className={clsx(
                  "p-1 ps-2 cursor-pointer hover:bg-[#FFFFFF20] break-words",
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
                className={clsx("p-2 select-none break-words", {
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

      {hasCounter && (
        <div
          className={clsx(
            "absolute bottom-0 right-2 translate-y-1/2 p-1 font-bold z-10 rounded",
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
