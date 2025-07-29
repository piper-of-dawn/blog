# Four Years of Running

Here's a quarterly view of your cumulative running distance over four years:

/// echarts
    renderer: "canvas"
    attrs:
        style: "width:100%;height:60vh;"

const option = {
  title: {
    left: "center",
    text: "Quarterly Running Distance (km)"
  },
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "shadow" }
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      "2020-Q1","2020-Q2","2020-Q3","2020-Q4",
      "2021-Q1","2021-Q2","2021-Q3","2021-Q4",
      "2022-Q1","2022-Q2","2022-Q3","2022-Q4",
      "2023-Q1","2023-Q2","2023-Q3","2023-Q4"
    ]
  },
  yAxis: {
    type: "value",
    axisLabel: { formatter: "{value} km" }
  },
  dataZoom: [
    { type: "inside", start: 0, end: 100 },
    { start: 0, end: 100 }
  ],
  series: [
    {
      name: "Distance",
      type: "line",
      smooth: true,
      symbol: "none",
      sampling: "lttb",
      itemStyle: { color: "#42A5F5" },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "rgba(66,165,245,0.5)" },
          { offset: 1, color: "rgba(66,165,245,0)" }
        ])
      },
      data: [300,650,1000,1350,1700,2050,2400,2750,3100,3450,3800,4150,4500,4850,5200,5550]
    }
  ]
};

///