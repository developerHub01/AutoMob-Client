import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../Components/Rating";
import { LoadingContext } from "../Context/LoadingProvider";
import { BsFillCartFill } from "react-icons/bs";

import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";
import { serverAPI } from "../Constants/data";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const {
    _id,
    name,
    brandName,
    price,
    productImg,
    productCategory,
    shortDescription,
    rating,
  } = productData;

  useEffect(() => {
    fetch(`${serverAPI}/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductData((prev) => data);
        setIsLoading((prev) => false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading((prev) => false);
      });
  }, [isLoading]);

  const handleAdToCart = () => {
    fetch(`${serverAPI}/cartlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartProductId: _id,
        email: user.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            icon: "success",
            title: "Done",
            text: "Added To Cart Successfully!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Aded To Cart Successfully!",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  return (
    <div className="container">
      <figure className="w-full shadow-2xl">
        <img
          src={productImg}
          alt={name}
          className="w-full h-full object-cover"
        />
      </figure>
      <figcaption className="flex flex-col justify-center items-start gap-3">
        <h3 className="capitalize text-4xl font-semibold text-gray-900 dark:text-white">
          {name}
          <span className="ml-2 text-base text-gray-600 dark:text-gray-200">
            ({brandName})
          </span>
        </h3>
        <p className="text-gray-700 dark:text-gray-200 font-medium text-xl">
          ${price}
        </p>
        <Rating rating={rating} />
        <Link to={`/category/${productCategory}`}>
          <p className="capitalize text-base rounded-full py-2 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg">
            {productCategory}
          </p>
        </Link>
        <p className="text-gray-700 dark:text-gray-100">{shortDescription}</p>
        <button className="button2" onClick={handleAdToCart}>
          <BsFillCartFill className="text-2xl" /> Add To Cart
        </button>
      </figcaption>
    </div>
  );
};

export default ProductDetails;
