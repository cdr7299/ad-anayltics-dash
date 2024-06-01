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
import { AdvertiserData } from "@/types/advertiser-data";
const colors = [
  "#ff7300",
  "#0000ff",
  "#ff00ff",
  "#387908",
  "#ff0000",
  "#ffff00",
  "#00ff00",
  "#00ffff",
];
const BarChartPlot = () => {
  const data: AdvertiserData[] = advertiser_data;
  const advertisers = [...new Set(data.map((item) => item.advertiser))];
  const dates = [...new Set(data.map((item) => item.date))];

  const combinedData = dates.map((date) => {
    let dateEntry = { date };
    data.forEach((item) => {
      if (item.date === date) {
        dateEntry[item.advertiser] = item.ctr;
      }
    });
    return dateEntry;
  });
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={730}
          height={250}
          data={combinedData}
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
              fill={colors[index % colors.length]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartPlot;
