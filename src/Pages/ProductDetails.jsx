import React from "react";
import { useParams } from "react-router-dom";
import Rating from "../Components/Rating";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <figure className="w-full shadow-2xl">
        <img
          src="https://i.ibb.co/PznCsjZ/car5.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </figure>
      <figcaption className="flex flex-col justify-center items-start gap-3">
        <h3 className="text-4xl font-semibold text-gray-900">Product Title</h3>
        <p className="text-gray-700 font-medium text-xl">$8000</p>
        <Rating rating={4.5} />
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          cupiditate quas nam consequuntur corporis sapiente omnis repudiandae
          iste reiciendis expedita fugiat, perspiciatis mollitia aspernatur
          sequi, incidunt maxime culpa voluptatem nostrum quod iure officia
          eveniet? Deserunt, odio facilis. Quam distinctio at consectetur
          tempore asperiores cupiditate maiores aliquid dolor. Explicabo,
          aliquid dolor.
        </p>
        <button className="button2">Add To Cart</button>
      </figcaption>
    </div>
  );
};

export default ProductDetails;
