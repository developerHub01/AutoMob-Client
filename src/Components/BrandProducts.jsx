import React from "react";
import BrandProduct from "./BrandProduct";

const BrandProducts = () => {
  return (
    <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      <BrandProduct />
      <BrandProduct />
      <BrandProduct />
      <BrandProduct />
    </div>
  );
};

export default BrandProducts;
