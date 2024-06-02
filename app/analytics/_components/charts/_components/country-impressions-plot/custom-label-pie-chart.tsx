import { PieLabelRenderProps } from "recharts";

const CustomPieLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  name,
  fontSize,
  index = 0,
  theme,
}: PieLabelRenderProps) => {
  if (outerRadius && percent) {
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(RADIAN * midAngle);
    const cos = Math.cos(RADIAN * midAngle);
    const startX = (cx as number) + (outerRadius as number) * cos;
    const startY = (cy as number) + (outerRadius as number) * -sin;
    const middleY =
      (cy as number) + ((outerRadius as number) + 50 * Math.abs(sin)) * -sin;
    let endX = startX + (cos >= 0 ? 1 : -1) * 90;
    let textAnchor = cos >= 0 ? "start" : "end";
    const mirrorNeeded =
      midAngle > -270 && midAngle < -210 && percent < 0.04 && index % 2 === 1;
    if (mirrorNeeded) {
      endX = startX + (outerRadius as number) * -cos * 2 + 100;
      textAnchor = "start";
    }
    return (
      <g>
        <path
          d={`M${startX},${startY}L${startX},${middleY}L${endX},${middleY}`}
          fill="none"
          stroke={theme === "dark" ? "#fff" : "#000"}
          strokeWidth={2}
        />
        <text
          x={endX + (cos >= 0 || mirrorNeeded ? 1 : -1) * 12}
          y={middleY + fontSize / 2}
          textAnchor={textAnchor}
          fontSize={fontSize}
          fill={theme === "dark" ? "#fff" : "#000"}
        >{`${name || ""} ${(percent * 100).toFixed(1)}%`}</text>
      </g>
    );
  }
  return null;
};

export default CustomPieLabel;
