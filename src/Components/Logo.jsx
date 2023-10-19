import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="select-none text-gray-900 font-bold text-lg sm:text-2xl md:text-4xl border-b-4 border-gray-900 border-l-4 p-2"
    >
      AutoMob
    </Link>
  );
};

export default Logo;
