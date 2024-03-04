import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
const data = [
  { name: "Facebook", value: 10000000000 },
  { name: "Instagram", value: 20000000000 },
  { name: "Whatsapp", value: 6000000000 },
  { name: "Linkedin", value: 5000000000 },
];
const PieCharts = ({ isDarkMode }) => {
  return (
    <div>
      <h1
        className={`${
          isDarkMode ? "text-white" : "text-black"
        }  font-bold text-2xl`}
      >
        Pie Chart
      </h1>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />

        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieCharts;
