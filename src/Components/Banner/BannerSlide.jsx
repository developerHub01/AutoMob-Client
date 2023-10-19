import React from "react";
import { Link } from "react-router-dom";

const BannerSlide = ({ id, title, description, bgLink }) => {
  return (
    <div
      className="bannerSlide"
      style={{
        background: `url('${bgLink}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[90%] max-w-xl flex flex-col gap-4 text-center justify-center items-center relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-black font-headingFont">
          {title}
        </h1>
        <p className="text-base">{description}</p>
        <Link to={`/category/${id}`}>
          <button className="button1">View Collection</button>
        </Link>
      </div>
    </div>
  );
};

export default BannerSlide;
