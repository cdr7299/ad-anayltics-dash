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
  "#0000ff",
  "#387908",
  "#ff0000",
  "#ff7300",
  "#ff00ff",
  "#ffff00",
  "#00ff00",
  "#00ffff",
];
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
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
  const renderCustomLabel = ({ payload, x, y, width, height, value }) => {
    const formattedDate = new Date(payload.value);
    const day = formattedDate.getDate();

    const month = monthNames[formattedDate.getMonth()];

    const finalDate = `${day} ${month}`;
    return (
      <text
        x={x}
        y={y}
        fill="#494545"
        textAnchor="middle"
        dy={16}
      >{`${finalDate}`}</text>
    );
  };
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
          <XAxis
            dataKey="date"
            tick={renderCustomLabel}
            strokeWidth={2}
            stroke="#494545"
          />
          <YAxis strokeWidth={2} stroke="#494545" />
          <Tooltip />
          <Legend align="right" verticalAlign="top" />

          {advertisers.map((advertiser, index) => (
            <Line
              key={advertiser}
              type="monotone"
              dataKey={advertiser}
              stroke={colors[index % colors.length]}
              strokeWidth="3"
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChartPlot;
