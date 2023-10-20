import React, { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../Context/LoadingProvider";
import MyCartCard from "./MyCartCard";

const MyCart = () => {
  const [cartList, setCartList] = useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    fetch(`https://automob-5azoln3v6-developerhub01.vercel.app/cartlist`)
      .then((res) => res.json())
      .then((data) => {
        setCartList((prev) => data);
        setIsLoading((prev) => false);
      })
      .catch((error) => console.log(error));
  }, [isLoading]);

  return (
    <div className="container">
      <h2 className="heading1 text-center">Cart List</h2>
      {!isLoading && cartList && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cartList.map((item) => (
            <MyCartCard key={item._id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCart;
