import * as echarts from "echarts";

// Generate date and data arrays
const base = +new Date(1968, 9, 3);
const oneDay = 24 * 3600 * 1000;
export const date = [];
export const data = [Math.random() * 300];

for (let i = 1; i < 20000; i++) {
  const now = new Date(base + oneDay * i);
  // date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}

// Define and export chart option
export const option = {
  tooltip: {
    trigger: "axis",
    position: (pt) => [pt[0], "10%"],
  },
  title: {
    left: "center",
    text: "Large Area Chart",
  },
  toolbox: {
    feature: {
      dataZoom: { yAxisIndex: "none" },
      restore: {},
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: date,
  },
  yAxis: {
    type: "value",
    boundaryGap: [0, "100%"],
  },
  dataZoom: [
    { type: "inside", start: 0, end: 10 },
    { start: 0, end: 10 },
  ],
  series: [
    {
      name: "Fake Data",
      type: "line",
      symbol: "none",
      sampling: "lttb",
      itemStyle: { color: "rgb(255, 70, 131)" },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "rgb(255, 158, 68)" },
          { offset: 1, color: "rgb(255, 70, 131)" },
        ]),
      },
      data: data,
    },
  ],
};
