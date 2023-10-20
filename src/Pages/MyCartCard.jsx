import React, { useContext, useEffect, useState } from "react";
import BrandProduct from "../Components/BrandProduct";
import { LoadingContext } from "../Context/LoadingProvider";

const MyCartCard = ({ cartProductId }) => {
  const [productData, setProductData] = useState({});
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  useEffect(() => {
    fetch(`https://automob-5azoln3v6-developerhub01.vercel.app/product/${cartProductId}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData((prev) => data);
        setIsLoading((prev) => false);
      });
  }, []);
  return (
    <div>{!isLoading && productData && <BrandProduct {...productData} />}</div>
  );
};

export default MyCartCard;
