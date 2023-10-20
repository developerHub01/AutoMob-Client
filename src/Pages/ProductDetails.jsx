import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../Components/Rating";
import { LoadingContext } from "../Context/LoadingProvider";
import { BsFillCartFill } from "react-icons/bs";

import Swal from 'sweetalert2'

const ProductDetails = () => {
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
    fetch(`https://automob-5azoln3v6-developerhub01.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductData((prev) => data);
        setIsLoading((prev) => false);
      })
      .catch((error) => console.log(error));
  }, [isLoading]);

  const handleAdToCart = () => {
    fetch(`https://automob-5azoln3v6-developerhub01.vercel.app/cartlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartProductId: _id,
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
        <h3 className="capitalize text-4xl font-semibold text-gray-900">
          {name}
          <span className="ml-2 text-base text-gray-600">({brandName})</span>
        </h3>
        <p className="text-gray-700 font-medium text-xl">${price}</p>
        <Rating rating={rating} />
        <Link to={`http://localhost:5173/category/${productCategory}`}>
          <p className="capitalize text-base rounded-full py-2 px-4 bg-gray-900 text-white">
            {productCategory}
          </p>
        </Link>
        <p className="text-gray-700">{shortDescription}</p>
        <button className="button2" onClick={handleAdToCart}>
          <BsFillCartFill className="text-2xl" /> Add To Cart
        </button>
      </figcaption>
    </div>
  );
};

export default ProductDetails;
