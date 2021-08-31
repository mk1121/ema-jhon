import React, { useState } from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

function ProductDetails() {
  const { pdKey } = useParams();
  const product = fakeData.find((pd) => pd.key === pdKey);
  return (
    <div>
      <Product product={product} showAddToCart={false}></Product>
    </div>
  );
}

export default ProductDetails;
