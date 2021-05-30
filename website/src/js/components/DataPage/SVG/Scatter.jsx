import { ResponsiveScatterPlot } from "@nivo/scatterplot";
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

const Scatter = ({ data, height }) => {
  return (
    <div style={{ height: height }}>
      <ResponsiveScatterPlot
        data={data}
        margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
        theme={theme}
        xScale={{ type: "linear", min: 0, max: "auto" }}
        xFormat={function (e) {
          return e + " kg";
        }}
        yScale={{ type: "linear", min: 0, max: "auto" }}
        yFormat={function (e) {
          return e + " cm";
        }}
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "weight",
          legendPosition: "middle",
          legendOffset: 46,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "size",
          legendPosition: "middle",
          legendOffset: -60,
        }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 130,
            translateY: 0,
            itemWidth: 100,
            itemHeight: 12,
            itemsSpacing: 5,
            itemDirection: "left-to-right",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Scatter;
