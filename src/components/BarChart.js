// BarChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = ({ data, labels, isDarkMode }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Bar Chart",
            data: data,
            backgroundColor: "rgba(75, 192, 192, 0.7)",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels]);

  return (
    <>
      <canvas ref={chartRef} style={{ width: "100%", height: "288px" }} />
    </>
  );
};

export default BarChart;
