import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

import { CHART_COLORS } from "../../charts.constants";
import { CountryData } from "@/types/country-data";
import { getImpressionsByCountry } from "../../charts.utils";

const PieChartPlot = ({ country_data }: { country_data: CountryData[] }) => {
  const data = getImpressionsByCountry(country_data);
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
              <Cell key={`cell-${index}`} fill={CHART_COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};
export default PieChartPlot;
