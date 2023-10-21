import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

import { AiTwotoneEdit } from "react-icons/ai";
import { BiSolidDetail } from "react-icons/bi";

const BrandProduct = ({
  _id,
  name,
  brandName,
  price,
  productImg,
  productCategory,
  shortDescription,
  rating,
}) => {
  return (
    <div className="w-full shadow-2xl cursor-pointer bg-white dark:bg-gray-900">
      <figure className="w-full md:h-72 lg:h-52 relative bg-gray-900 dark:bg-white">
        <Link to={`/category/${productCategory}`}>
          <p className="capitalize absolute inline-block top-2 right-2 px-2 py-1 rounded-full bg-gray-900 text-white z-10 text-sm shadow-lg">
            {productCategory}
          </p>
        </Link>
        <img
          src={productImg}
          alt={name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="p-5 flex flex-col justify-center items-start gap-2">
        <h3 className="capitalize text-2xl font-semibold text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="text-gray-600 font-medium text-lg">${price}</p>
        <Rating rating={rating} />
        <div className="w-full flex-wrap flex justify-between items-center gap-2 relative z-0">
          <Link to={`/product/update/${_id}`} className="w-full">
            <button className="w-full button2">
              <AiTwotoneEdit className="text-2xl" />
              Update
            </button>
          </Link>
          <Link to={`/product/details/${_id}`} className="w-full">
            <button className="w-full button2">
              <BiSolidDetail className="text-2xl" />
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;
