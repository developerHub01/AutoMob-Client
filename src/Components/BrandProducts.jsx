import React from "react";
import BrandProduct from "./BrandProduct";

const BrandProducts = ({ brandDataList }) => {
  return (
    <div className="container h-full grid md:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-5">
      {brandDataList.map((item) => (
        <BrandProduct key={item._id} {...item} />
      ))}
    </div>
  );
};

export default BrandProducts;
