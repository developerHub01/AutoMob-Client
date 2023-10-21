import React, { useState } from "react";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const DarkModeSwitch = () => {
  const initialMode = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
    return localStorage.getItem("theme");
  };
  const handleDarkMode = () => {
    if (localStorage.getItem("theme")) {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    setModeState(localStorage.getItem("theme"));
  };
  const [modeState, setModeState] = useState(initialMode);
  return (
    <button
      className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 w-11 h-11 border-2 border-white dark:border-gray-900 grid place-items-center shadow-2xl rounded-full text-2xl fixed right-2 bottom-2 z-50"
      onClick={handleDarkMode}
    >
      {modeState ? <BsFillSunFill /> : <BsFillMoonFill />}
    </button>
  );
};

export default DarkModeSwitch;
