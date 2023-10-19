import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const BrandProduct = () => {
  return (
    <div className="w-full shadow-xl cursor-pointer">
      <figure className="w-full relative">
        <p className="absolute inline-block top-2 right-2 px-2 py-1 rounded-full bg-gray-900 text-white z-10 text-sm">
          Tesla
        </p>
        <img
          src="https://i.ibb.co/PznCsjZ/car5.jpg"
          alt=""
          className="w-full"
        />
      </figure>
      <div className="p-5 flex flex-col justify-center items-start gap-2">
        <h3 className="text-2xl font-medium text-gray-900">Product Title</h3>
        <p className="text-gray-700 font-medium text-xl">$8000</p>
        <Rating rating={4.5} />
        <div className="w-full flex justify-between items-center gap-2">
          <Link to={`/product/update/${2}`} className="w-full">
            <button className="w-full button2">Update</button>
          </Link>
          <Link to={`/product/details/${2}`} className="w-full">
            <button className="w-full button2">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;
