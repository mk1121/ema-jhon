import React from "react";
const Cart = (props) => {
  const formatNumber = (nums) => {
    const precision = nums.toFixed(2);
    return Number(precision);
  };

  const cart = props.carts;
  let total = 0;
  for (let i = 0, len = cart.length; i < len; i++) {
    const product = cart[i];
    total = total + product.price;
  }
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }
  let tax = (total + shipping) / 10;
  let grandTotal = total + shipping + tax;
  //  const total = cart.reduce((total, cart) => total + cart.price, 0);
  return (
    <div className="cart-contain">
      <h4>Order Summary{}</h4>
      <p>Items Orderd: {cart.length}</p>
      <p>
        <small>items: ${formatNumber(total)}</small>
        <br />
        <small>Shipping & Handling:${shipping}</small>
        <br />
        <small>Total before tax:${formatNumber(total + shipping)}</small>
        <br />
        <small>Estimated Tax:${formatNumber(tax)}</small>
      </p>
      <h4>Order Total:${formatNumber(grandTotal)}</h4>
    </div>
  );
};
export default Cart;
