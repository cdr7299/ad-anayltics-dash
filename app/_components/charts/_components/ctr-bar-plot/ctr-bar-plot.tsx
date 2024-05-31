import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import advertiser_data from "@/app/_data/advertiser_data.json";

const BarChartPlot = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={730} height={250} data={advertiser_data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ctr" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartPlot;
