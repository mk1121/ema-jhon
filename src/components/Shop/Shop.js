import React, { useState } from "react";
import fakeData from "./../../fakeData/index";
import Product from "./../Product/Product";
import "./Shop.css";
const Shop = () => {
  const product = fakeData;
  const productList = product.slice(0, 10);
  const [products, setData] = useState(productList);
  return (
    <div className="twin-container">
      <div className="product-container">
        {" "}
        {products.map((data) => (
          <Product key={data.key} product={data}></Product>
        ))}
      </div>
      <div className="cart-container">
        <p>this is me cart</p>
      </div>
    </div>
  );
};

export default Shop;
