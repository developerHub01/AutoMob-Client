import React from "react";

import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const Brand = ({ id, bgLink, brandName, brandLogo }) => {
  return (
    <Link to="/">
      <figure className="w-full h-80 relative cursor-pointer group overflow-hidden select-none shadow-sm">
        <img
          src={bgLink}
          alt=""
          className="w-full h-full object-cover group-hover:scale-125 transition-all ease-in-out delay-75"
        />
        <figcaption
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900/80 from-10% via-transparent to-transparent p-5 flex justify-center items-end
      "
        >
          <div className="w-full flex justify-between items-center flex-wrap gap-3">
            <div className="flex justify-center items-center gap-2">
              <img
                src={brandLogo}
                alt=""
                className="w-10 h-10 aspect-square rounded-full object-cover"
              />
              <p className="text-xl text-white">{brandName}</p>
            </div>
            <FiEye className="text-white text-xl" />
          </div>
        </figcaption>
      </figure>
    </Link>
  );
};

export default Brand;
