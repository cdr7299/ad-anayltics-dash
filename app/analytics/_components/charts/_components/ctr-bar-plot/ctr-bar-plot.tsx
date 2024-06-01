import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { AdvertiserData } from "@/types/advertiser-data";
import { getCtrByAdvertiser } from "../../charts.utils";
import { CHART_COLORS } from "../../charts.constants";

const BarChartPlot = ({
  advertiserData,
}: {
  advertiserData: AdvertiserData[];
}) => {
  const { data, advertisers } = getCtrByAdvertiser(advertiserData);
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={730}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
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
