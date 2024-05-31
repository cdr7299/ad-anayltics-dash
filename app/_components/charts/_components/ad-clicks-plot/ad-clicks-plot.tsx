import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import advertiser_data from "@/app/_data/advertiser_data.json";
const colors = [
  "#8884d8",
  "#82ca9d",
  "#ff7300",
  "#387908",
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#ff00ff",
  "#00ffff",
];
export interface AdvertiserData {
  advertiser: string;
  date: string;
  impressions: number;
  clicks: number;
  ctr: number;
}

const LineChartPlot = () => {
  const data: AdvertiserData[] = advertiser_data;
  const advertisers = [...new Set(data.map((item) => item.advertiser))];
  const dates = [...new Set(data.map((item) => item.date))];

  const combinedData = dates.map((date) => {
    let dateEntry = { date };
    data.forEach((item) => {
      if (item.date === date) {
        dateEntry[item.advertiser] = item.clicks;
      }
    });
    return dateEntry;
  });

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={combinedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <YAxis />
          <Tooltip />
          <Legend />

          {advertisers.map((advertiser, index) => (
            <Line
              key={advertiser}
              type="monotone"
              dataKey={advertiser}
              stroke={colors[index % colors.length]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChartPlot;
