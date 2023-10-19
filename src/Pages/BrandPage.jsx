import React from "react";
import { useParams } from "react-router-dom";
import BrandPageAd from "../Components/BrandPageAd/BrandPageAd";
import BrandProducts from "../Components/BrandProducts";

const BrandPage = () => {
  const { id } = useParams();
  return (
    <div>
      <BrandPageAd />
      <BrandProducts />
    </div>
  );
};

export default BrandPage;
