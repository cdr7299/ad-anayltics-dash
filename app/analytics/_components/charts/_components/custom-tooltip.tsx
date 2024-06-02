import { TooltipProps } from "recharts";
import { getFormattedDate } from "../charts.utils";

const CustomTooltip = ({
  payload,
  label,
  active,
}: TooltipProps<number, string>) => {
  if (active) {
    return (
      <div className="bg-white/90 dark:bg-black/90 border-2 border-slate-200 dark:border-slate-500 p-4 rounded-lg">
        <h3 className="w-full text-md mb-2 font-bold">
          {getFormattedDate(label)}
        </h3>
        {payload?.map(({ value = "testName", name = "defaultName", color }) => (
          <div key={value + name} className="flex gap-2 text-sm font-semibold">
            <p style={{ color: color }}>{name}</p>:<p>{value}</p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
