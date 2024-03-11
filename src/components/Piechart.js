// PieChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = ({ data, labels, isDarkMode }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    // Check if there's an existing chart instance
    if (chartInstance.current) {
      // Destroy the existing chart before creating a new one
      chartInstance.current.destroy();
    }

    // Get the canvas context
    const ctx = chartRef.current.getContext("2d");

    // Create a new chart
    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              // Add more colors as needed
            ],
          },
        ],
      },
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels]);

  return (
    <>
      <h1
        className={`text-center mx-auto ${
          isDarkMode ? "text-white" : "text-black"
        }  font-bold text-2xl`}
      >
        Pie Chart
      </h1>
      <canvas ref={chartRef} />
    </>
  );
};

export default PieChart;
