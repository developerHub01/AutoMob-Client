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
    fetch(
      `https://automob-5azoln3v6-developerhub01.vercel.app/brandDataList/${id}`
    )
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
          {brandDataList.length ? (
            <>
              <BrandPageAd
                brandDataList={shuffleArray(brandDataList).slice(0, 3)}
              />
              <BrandProducts brandDataList={brandDataList} />
            </>
          ) : (
            <div className="min-h-[50vh] flex justify-center items-center">
              <h2 className="capitalize text-white text-3xl font-bold bg-gray-900 center p-4 shadow-2xl select-none">
                No available products
              </h2>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BrandPage;
