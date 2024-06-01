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
        <BarChart
          width={730}
          height={250}
          data={advertiser_data}
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
          <Bar dataKey="ctr" fill="#350a6c" />
          <Bar dataKey="ctr" fill="#951a6c" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartPlot;
