import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "next-themes";
import { AdvertiserData } from "@/types/advertiser-data";
import { getCtrByAdvertiser, getFormattedDate } from "../../charts.utils";
import { CHART_COLORS } from "../../charts.constants";
import CustomTooltip from "../custom-tooltip";

const BarChartPlot = ({
  advertiserData,
}: {
  advertiserData: AdvertiserData[];
}) => {
  const { theme } = useTheme();

  const { data, advertisers } = getCtrByAdvertiser(advertiserData);
  if (!data.length) {
    return (
      <div className="size-full text-lg flex items-center justify-center">
        No data, please adjust filters
      </div>
    );
  }
  const renderCustomLabel = ({
    payload,
    x,
    y,
  }: {
    payload: { value: string };
    x: string | number;
    y: string | number;
  }) => {
    const date = getFormattedDate(payload.value);
    return (
      <text
        x={x}
        y={y}
        fill={theme === "dark" ? "#ccc" : "#000"}
        textAnchor="middle"
        dy={16}
      >{`${date}`}</text>
    );
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={730}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="date"
            tick={renderCustomLabel}
            strokeWidth={2}
            stroke={theme === "dark" ? "#ccc" : "#000"}
          />
          <YAxis strokeWidth={2} stroke={theme === "dark" ? "#ccc" : "#000"} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {advertisers.map((advertiser, index) => (
            <Bar
              key={advertiser}
              dataKey={advertiser}
              fill={CHART_COLORS[index % CHART_COLORS.length]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartPlot;
