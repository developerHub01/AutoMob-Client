import React, { useState } from "react";

const ProductUpdate = () => {
  const [productData, setProductData] = useState({
    name: "",
    brandName: "",
    price: "",
    productImg: "",
    productCategory: "toyota",
    shortDescription: "",
    rating: "",
  });

  const handleInputChange = (e) => {
    setProductData((prev) => ({
      ...productData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(productData);

    setProductData((prev) => ({
      name: "",
      brandName: "",
      price: "",
      productImg: "",
      productCategory: "toyota",
      shortDescription: "",
      rating: "",
    }));
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
        />
        <input
          type="text"
          name="brandName"
          placeholder="Brand name"
          className="inputField"
          value={productData.brandName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          className="inputField"
          value={productData.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="productImg"
          placeholder="Product Image"
          className="inputField"
          value={productData.productImg}
          onChange={handleInputChange}
        />
        <select
          id="productCategory"
          className="inputField"
          onChange={handleInputChange}
          value={productData.productCategory}
        >
          <option value="toyota">Toyota</option>
          <option value="ford">Ford</option>
          <option value="mercedes-benz">Mercedes-Benz</option>
          <option value="tesla">Tesla</option>
          <option value="Honda">Honda</option>
        </select>
        <textarea
          name="shortDescription"
          placeholder="Product Description"
          className="inputField resize-none"
          value={productData.shortDescription}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Product Rating"
          className="inputField"
          value={productData.rating}
          onChange={handleInputChange}
        />
        <button className="button2">Update</button>
      </form>
    </div>
  );
};

export default ProductUpdate;
