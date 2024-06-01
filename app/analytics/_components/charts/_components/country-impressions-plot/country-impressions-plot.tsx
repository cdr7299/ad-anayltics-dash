import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
const colors = [
  "#8884d8", // Existing color
  "#82ca9d", // Existing color
  "#ff7300", // Existing color
  "#387908", // Existing color
  "#ff0000", // Existing color
  "#00ff00", // Existing color
  "#0000ff", // Existing color
  "#ffff00", // Existing color
  "#ff00ff", // Existing color
  "#00ffff", // Existing color
  "#8b0000", // Dark Red
  "#ffa500", // Orange
  "#006400", // Dark Green
  "#00008b", // Dark Blue
  "#ff1493", // Deep Pink
  "#00ced1", // Dark Turquoise
];
import country_data from "@/app/_data/country_data.json";
const parseData = () => {
  const countries = [...new Set(country_data.map((item) => item.country))];

  let dict = {};

  country_data.forEach((row) => {
    if (dict[row.country]) {
      dict[row.country] += row.impressions;
    } else {
      dict[row.country] = row.impressions;
    }
  });

  let res = [];

  Object.keys(dict).forEach((item) => {
    res.push({ country: item, impressions: dict[item] });
  });
  return res;
};
const PieChartPlot = () => {
  const data = parseData();
  console.log(data.length);
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={730} height={250}>
          <Pie
            data={data}
            dataKey="impressions"
            nameKey="country"
            cx="50%"
            cy="50%"
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};
export default PieChartPlot;
