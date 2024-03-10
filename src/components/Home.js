<<<<<<< HEAD
// Navbar.js
import React from "react";
import logo from "../profile icon.png";
=======
// Home.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import BarCharts from "./BarCharts";
import PieCharts from "./PieCharts";
// import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
>>>>>>> 6fc9892e772eb4a9363951084061bd97f1420d97

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div
      className={`bg-gray-800 text-white p-4 xxl:p-5 flex justify-between items-center  ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
      s
    >
<<<<<<< HEAD
      <div className="text-xl font-bold xxl:text-xl">Dashboard</div>
      <div className="flex items-center">
        <div className="mr-2 2xl:mr-5">
          <button
            onClick={toggleDarkMode}
            className="text-sm xxl:text-lg font-bold border-2 border-white md:px-5 px-2 md:py-3 py-2  rounded-full hover:bg-white hover:text-black"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        {/* <div className="mr-2 xxs:hidden">Yashika Agrawal</div> */}
        <img
          src={logo}
          alt="User Profile"
          className="cursor-pointer w-8 h-8 rounded-full xxl:w-11 xxl:h-11 "
        />
=======
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* <EditText showEditButton /> */}
      {/* <EditTextarea /> */}

      <div className="flex flex-col md:flex-row   items-center justify-around mt-24 bg-yellow-400">
        <div>
          <PieCharts isDarkMode={isDarkMode} />
        </div>
        <div>
          <BarCharts isDarkMode={isDarkMode} />
        </div>
>>>>>>> 6fc9892e772eb4a9363951084061bd97f1420d97
      </div>
    </div>
  );
};

export default Navbar;
