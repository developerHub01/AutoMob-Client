import React from "react";
import { Link } from "react-router-dom";

const BannerSlide = ({ id, title, description, bgLink, redirectPath }) => {
  return (
    <div
      className="w-full p-3 min-h-[90vh] grid place-items-center relative before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-gray-900/70 before:mix-blend-multiply"
      style={{
        background: `url('${bgLink}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container max-w-2xl flex flex-col gap-4 text-center justify-center items-center relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-black font-headingFont">
          {title}
        </h1>
        <p className="text-base">{description}</p>
        <Link to={redirectPath}>
          <button className="py-3 px-5 border-2 border-white text-white hover:text-gray-900 transition-all duration-75 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-white before:-z-10 before:scale-x-0 hover:before:scale-x-105 before:duration-100 before:origin-left overflow-hidden text-base">
            View Collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BannerSlide;
