import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useTheme } from "next-themes";

import { CountryData } from "@/types/country-data";

import CustomPieLabel from "./custom-label-pie-chart";

import { CHART_COLORS } from "../../charts.constants";
import { getImpressionsByCountry } from "../../charts.utils";

const PieChartPlot = ({ countryData }: { countryData: CountryData[] }) => {
  const data = getImpressionsByCountry(countryData);
  const { theme } = useTheme();

  if (!data.length) {
    return (
      <div className="flex size-full items-center justify-center text-lg">
        No data, please adjust filters
      </div>
    );
  }
  return (
    <>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart width={730} height={250}>
          <Pie
            data={data}
            dataKey="impressions"
            nameKey="country"
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={-270}
            labelLine={false}
            paddingAngle={1}
            fontSize={13}
            isAnimationActive={false}
            label={(props) => <CustomPieLabel {...props} theme={theme} />}
            fill="#8884d8"
            minAngle={2}
          >
            {data.map((_, index) => (
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
