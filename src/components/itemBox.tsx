import { transformMarkdown } from "@/utils/functions/transformMarkdown";
import clsx from "clsx";
import Link from "next/link";

interface ItemBoxProps {
  label?: string;
  activeItemLabel?: string;
  items: {
    label: string;
    link?: (arg: string | null) => void;
  }[];
}

export const ItemBox = ({ label, activeItemLabel, items }: ItemBoxProps) => {
  return (
    <fieldset className="flex flex-col  border border-white">
      {label && <legend className="p-2">{label}</legend>}
      {items.map((el) => {
        console.log(el);
        if (el.link && typeof el.link === "function") {
          return (
            <div
              key={el.label}
              onClick={() => {
                if (el.link) {
                  el.link(el.label);
                }
              }}
              className={clsx("p-4 cursor-pointer hover:bg-[#FFFFFF20]", {
                "bg-amber-800": activeItemLabel && el.label === activeItemLabel,
              })}
            >
              {transformMarkdown(el.label)}
            </div>
          );
        } else {
          return (
            <div
              key={el.label}
              className={clsx("p-4", {
                "bg-amber-800": activeItemLabel && el.label === activeItemLabel,
              })}
            >
              {transformMarkdown(el.label)}
            </div>
          );
        }
      })}
    </fieldset>
  );
};
