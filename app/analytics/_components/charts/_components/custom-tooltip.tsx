import { TooltipProps } from "recharts";
import { getFormattedDate } from "../charts.utils";

const CustomTooltip = ({
  payload,
  label,
  active,
}: TooltipProps<number, string>) => {
  if (active) {
    return (
      <div className="bg-white/90 border-2 border-slate-200 p-4 rounded-lg">
        <h3 className="w-full text-center text-lg mb-2 font-bold">
          {getFormattedDate(label)}
        </h3>
        {payload?.map((item) => (
          <div key={item.value} className="flex gap-2 text-lg font-semibold">
            <p style={{ color: item.color }}>{item.name}</p>:<p>{item.value}</p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
