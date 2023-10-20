import React, { useCallback, useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import Select from "react-select";
import { useParams } from "react-router-dom";
import { LoadingContext } from "../Context/LoadingProvider";

const categorySelectOption = [
  { value: "toyota", label: "Toyota" },
  { value: "ford", label: "Ford" },
  { value: "bmw", label: "BMW" },
  { value: "mercedes", label: "Mercedes-Benz" },
  { value: "tesla", label: "Tesla" },
  { value: "honda", label: "Honda" },
];

const brandList = ["toyota", "ford", "bmw", "mercedes", "tesla", "honda"];

const AddProduct = () => {
  const { id } = useParams();
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [productData, setProductData] = useState({
    name: "",
    brandName: "",
    price: "",
    productImg: "",
    shortDescription: "",
    rating: "",
  });

  const [productCategory, setProductCategory] = useState("toyota");

  useEffect(() => {
    fetch(`https://automob-5azoln3v6-developerhub01.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const {
          name,
          brandName,
          price,
          productImg,
          shortDescription,
          rating,
          productCategory,
        } = data;
        setProductData((prev) => ({
          name,
          brandName,
          price,
          productImg,
          shortDescription,
          rating,
        }));
        setProductCategory((prev) => productCategory);
        setIsLoading((prev) => false);
      });
  }, []);

  const handleInputChange = (e) => {
    setProductData((prev) => ({
      ...productData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    productData.brandName = productData.brandName.toLowerCase();
    productData.brandName = productData.brandName.toLowerCase();

    const { name, brandName, price, productImg, shortDescription, rating } =
      productData;

    if (!brandList.includes(brandName)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }

    // console.log(productData, productCategory["value"]);

    fetch(`https://automob-5azoln3v6-developerhub01.vercel.app/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...productData,
        productCategory: productCategory["value"],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            title: name,
            text: "Updated Successfully",
            imageUrl: productImg,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: name,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="px-5 container w-full max-w-md text-center">
      <h2 className="heading1">Update Product</h2>
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product name"
          className="inputField"
          value={productData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="brandName"
          placeholder="Brand name"
          className="inputField"
          value={productData.brandName}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="inputField"
          value={productData.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="productImg"
          placeholder="Product Image"
          className="inputField"
          value={productData.productImg}
          onChange={handleInputChange}
          required
        />
        <Select
          defaultValue={productCategory}
          onChange={setProductCategory}
          options={categorySelectOption}
          required
        />
        <textarea
          name="shortDescription"
          placeholder="Product Description"
          className="inputField resize-y min-h-[150px]"
          value={productData.shortDescription}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Product Rating"
          className="inputField"
          value={productData.rating}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="button2">
          Update
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
