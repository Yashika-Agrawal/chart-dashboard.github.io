// Home.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import BarCharts from "./BarCharts";
import PieCharts from "./PieCharts";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? " bg-black" : " bg-white"
      }`}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* <EditText showEditButton /> */}
      {/* <EditTextarea /> */}

      <div className="flex flex-row items-center justify-around mt-24">
        <PieCharts isDarkMode={isDarkMode} />
        <BarCharts isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Home;
