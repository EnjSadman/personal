import { TDataItem } from "@/constants/data";
import { transformMarkdown } from "@/utils/functions/transformMarkdown";

type TContentProps = {
  activeItem: TDataItem;
};

export const Content = ({ activeItem }: TContentProps) => {
  const { heading, period, description } = activeItem;
  return (
    <div className="w-full h-full border border-gray-400 p-4 space-y-4">
      {heading && <h1 className="text-2xl">{transformMarkdown(heading)}</h1>}
      {period && <h2 className="text-xl">{transformMarkdown(period)}</h2>}
      {description && (
        <div className="mt-8 flex flex-col gap-1">
          {transformMarkdown(description)}
        </div>
      )}
    </div>
  );
};
