import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, img, price, stock, seller, key } = props.product;
  return (
    <div className="main-container">
      <div className="product-img">
        <img src={img} alt={name} />
      </div>
      <div className="product-detail">
        <h3>
          <Link to={"/product/" + key}>{name} </Link>
        </h3>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <br />
        <p>${price}</p>
        <br />
        <p>
          <small>only {stock} left in stock - order soon </small>
        </p>{" "}
        <br />
        <button onClick={() => props.addEventHandler(props.product)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
