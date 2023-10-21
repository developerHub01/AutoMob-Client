import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="select-none text-gray-900 dark:text-white font-bold text-base sm:text-xl md:text-2xl border-b-4 border-gray-900 dark:border-white border-l-4 p-2"
    >
      AutoMob
    </Link>
  );
};

export default Logo;
