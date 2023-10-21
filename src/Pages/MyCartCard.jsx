import React, { useContext, useEffect, useState } from "react";
import BrandProduct from "../Components/BrandProduct";
import { LoadingContext } from "../Context/LoadingProvider";
import { serverAPI } from "../Constants/data";

const MyCartCard = ({ cartProductId }) => {
  const [productData, setProductData] = useState({});
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  useEffect(() => {
    fetch(`${serverAPI}/product/${cartProductId}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData((prev) => data);
        setIsLoading((prev) => false);
      })
      .catch((error) => {
        setIsLoading((prev) => false);
      });
  }, []);
  return (
    <div>{!isLoading && productData && <BrandProduct {...productData} />}</div>
  );
};

export default MyCartCard;
