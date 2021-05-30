import { ResponsiveBump } from "@nivo/bump";
import React from "react";

const theme = {
  textColor: "#eee",
  fontSize: 11,
  axis: {
    domain: {
      line: {
        stroke: "#333",
        strokeWidth: 1,
      },
    },
    ticks: {
      line: {
        stroke: "#333",
        strokeWidth: 1,
      },
    },
  },
  grid: {
    line: {
      stroke: "#444",
      strokeWidth: 1,
    },
  },
};

const Bump = ({ data, height }) => {
  return (
    <div style={{ height: height }}>
      <ResponsiveBump
        data={data}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        colors={{ scheme: "yellow_orange_red" }}
        theme={theme}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        startLabelTextColor={{ from: "color", modifiers: [] }}
        inactivePointSize={0}
        pointColor={{ theme: "background" }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: "serie.color" }}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -36,
        }}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "ranking",
          legendPosition: "middle",
          legendOffset: -40,
        }}
      />
    </div>
  );
};

export default Bump;
