import React from "react";
import BrandProduct from "../Components/BrandProduct";

const MyCart = () => {
  return (
    <div className="container">
      <h2 className="heading1 text-center">Cart List</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <BrandProduct />
        <BrandProduct />
        <BrandProduct />
        <BrandProduct />
      </div>
    </div>
  );
};

export default MyCart;
