import React from "react";
import Brand from "./Banner/Brand";

import { brandDataList } from "../Constants/data";

const Brands = () => {
  return (
    <div className="container">
      <h2 className="heading1 animate__fadeInUp">Our Brands Are</h2>
      <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {brandDataList.map((brand) => (
          <Brand key={brand.id} {...brand} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
