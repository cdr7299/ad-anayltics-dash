import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  getFormattedDate,
  getParsedClicksByAdvertiser,
} from "../../charts.utils";
import { CHART_COLORS } from "../../charts.constants";
import CustomTooltip from "../custom-tooltip";

export interface AdvertiserData {
  advertiser: string;
  date: string;
  impressions: number;
  clicks: number;
  ctr: number;
}

const LineChartPlot = ({
  advertiserData,
}: {
  advertiserData: AdvertiserData[];
}) => {
  const { data, advertisers } = getParsedClicksByAdvertiser(advertiserData);
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
        fill="#494545"
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
            tick={renderCustomLabel}
            strokeWidth={2}
            stroke="#494545"
          />
          <YAxis strokeWidth={2} stroke="#494545" />
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
