// Navbar.js
import React from "react";
import logo from "../profile icon.png";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div
      className={`bg-gray-800 text-white p-4 flex justify-between items-center ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="text-2xl font-bold">Dashboard</div>
      <div className="flex items-center">
        <div className="mr-2">Yashika Agrawal</div>
        <img
          src={logo}
          alt="User Profile"
          className="cursor-pointer w-8 h-8 rounded-full"
          
        />
        <div className="ml-2">
          <button
            onClick={toggleDarkMode}
            className="text-sm font-bold border-2 border-white px-5 py-3 rounded-full hover:bg-white hover:text-black"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
