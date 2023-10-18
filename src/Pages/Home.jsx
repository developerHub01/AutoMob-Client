import React from "react";
import Banner from "../Components/Banner/Banner";
import Brands from "../Components/Brands";
import GoogleMap from "../Components/GoogleMap";
import ShortInfoTab from "../Components/ShortInfoTab/ShortInfoTab";

const Home = () => {
  return (
    <>
      <Banner />
      <Brands />
      <ShortInfoTab />
      <GoogleMap />
    </>
  );
};

export default Home;
