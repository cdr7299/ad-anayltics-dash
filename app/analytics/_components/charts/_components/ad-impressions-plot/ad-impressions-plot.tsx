import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useTheme } from "next-themes";
import { AdvertiserData } from "@/types/advertiser-data";
import {
  getFormattedDate,
  getParsedImpressionsByAdvertiser,
} from "../../charts.utils";
import { CHART_COLORS } from "../../charts.constants";
import CustomTooltip from "../custom-tooltip";

const LineChartPlot = ({
  advertiserData,
}: {
  advertiserData: AdvertiserData[];
}) => {
  const { theme } = useTheme();

  const { data, advertisers } =
    getParsedImpressionsByAdvertiser(advertiserData);

  if (!data.length) {
    return (
      <div className="flex size-full items-center justify-center text-lg">
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
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="date"
            strokeWidth={2}
            stroke={theme === "dark" ? "#ccc" : "#000"}
            tick={renderCustomLabel}
          />
          <YAxis
            strokeWidth={2}
            stroke={theme === "dark" ? "#ccc" : "#000"}
          ></YAxis>
          <Tooltip content={<CustomTooltip />} />
          <Legend align="right" verticalAlign="top" />
          {advertisers.map((advertiser, index) => (
            <Line
              key={advertiser}
              type="monotone"
              dataKey={advertiser}
              stroke={CHART_COLORS[index % CHART_COLORS.length]}
              strokeWidth="3"
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChartPlot;
