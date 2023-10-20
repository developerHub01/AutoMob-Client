import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandPageAd from "../Components/BrandPageAd/BrandPageAd";
import BrandProducts from "../Components/BrandProducts";
import { LoadingContext } from "../Context/LoadingProvider";

const BrandPage = () => {
  const { id } = useParams();
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [brandDataList, setBrandDataList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/brandDataList/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBrandDataList((prev) => data);
        setIsLoading((prev) => false);
      })
      .catch((error) => console.log(error));
  }, [isLoading]);

  const shuffleArray = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  return (
    <div>
      {!isLoading && brandDataList && (
        <>
          <BrandPageAd
            brandDataList={shuffleArray(brandDataList).slice(0, 3)}
          />
          <BrandProducts brandDataList={brandDataList} />
        </>
      )}
    </div>
  );
};

export default BrandPage;
