import React from "react";
import Brand from "./Banner/Brand";

const brandList = [
  {
    id: 1,
    bgLink: "https://i.ibb.co/ngNfTrn/toyotaBg.jpg",
    brandName: "Toyota",
    brandLogo: "https://i.ibb.co/gSkwTQV/toyota.jpg",
  },
  {
    id: 2,
    bgLink: "https://i.ibb.co/gW3L3C1/fordBg.jpg",
    brandName: "Ford",
    brandLogo: "https://i.ibb.co/ZKJ74NC/ford.jpg",
  },
  {
    id: 3,
    bgLink: "https://i.ibb.co/GVCTcqh/bmwBg.jpg",
    brandName: "BMW",
    brandLogo: "https://i.ibb.co/dGS327s/bmw.jpg",
  },
  {
    id: 4,
    bgLink: "https://i.ibb.co/vjktwpy/mercedes-Bg.jpg",
    brandName: "Mercedes-Benz",
    brandLogo: "https://i.ibb.co/k8xBFc9/mercedes.jpg",
  },
  {
    id: 5,
    bgLink: "https://i.ibb.co/DkL2sLc/teslaBg.jpg",
    brandName: "Tesla",
    brandLogo: "https://i.ibb.co/QX3VRPg/tesla.jpg",
  },
  {
    id: 6,
    bgLink: "https://i.ibb.co/x3KTcW9/hondaBg.jpg",
    brandName: "Honda",
    brandLogo: "https://i.ibb.co/ft5f1Bd/honda.jpg",
  },
];

const Brands = () => {
  return (
    <div className="container max-w-6xl min-h-screen mx-auto py-20 flex flex-col justify-center items-center gap-8">
      <h2 className="text-5xl font-bold text-gray-900 font-headingFont">
        Our Brands Are
      </h2>
      <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {brandList.map((brand) => (
          <Brand key={brand.id} {...brand} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
