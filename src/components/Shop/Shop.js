import React, { useState } from "react";
import fakeData from "./../../fakeData/index";
import Product from "./../Product/Product";
import "./Shop.css";
import Cart from "./../Cart/Cart";
const Shop = () => {
  const product = fakeData;
  const productList = product.slice(0, 10);
  const [products, setData] = useState(productList);
  const [cart, setCart] = useState([]);

  const addEventHandle = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="twin-container">
      <div className="product-container">
        {" "}
        {products.map((data) => (
          <Product
            key={data.key}
            product={data}
            addEventHandler={addEventHandle}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart carts={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
