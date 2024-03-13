import React, { useState } from "react";
import logo from "../profile icon.png";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`bg-gray-800 text-white p-4 xxl:p-5 flex justify-between items-center ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="text-xl font-bold xxl:text-xl">Dashboard</div>
      <div className="flex items-center relative">
        <div className="mr-2 2xl:mr-5">
          <button
            onClick={toggleDarkMode}
            className="text-sm xxl:text-lg font-bold border-2 border-white md:px-5 px-2 md:py-3 py-2 rounded-full hover:bg-white hover:text-black"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <img
          src={logo}
          alt="User Profile"
          className="cursor-pointer w-8 h-8 rounded-full xxl:w-11 xxl:h-11"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md">
            <button className="block w-full py-2 px-4 text-left text-gray-800 hover:bg-gray-200">
              Login
            </button>
            <button className="block w-full py-2 px-4 text-left text-gray-800 hover:bg-gray-200">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
