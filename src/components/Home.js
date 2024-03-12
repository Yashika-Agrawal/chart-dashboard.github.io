// Home.js
import React, { useState } from "react";
import Navbar from "./Navbar";
// import BarCharts from "./BarCharts";
// import PieCharts from "./PieCharts";
// import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import PieChart from "./Piechart";
import BarChart from "./BarChart";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const chartData = [30, 50, 20]; // Example data
  const chartLabels = ["Label 1", "Label 2", "Label 3"]; // Example labels

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? " bg-black" : " bg-white"
      }`}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* <EditText showEditButton /> */}
      {/* <EditTextarea /> */}

      <div className="flex flex-col md:flex-row items-center justify-around mt-24">
        <div className=" mb-12 md:mb-0">
          {" "}
          {/* Add margin-bottom for mobile screens */}
          <PieChart
            data={chartData}
            labels={chartLabels}
            isDarkMode={isDarkMode}
          />
        </div>
        <div>
          <BarChart
            data={chartData}
            labels={chartLabels}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
