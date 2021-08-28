import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/review">Order Review</a>
          </li>
          <li>
            <a href="/inventory">Manage Inventorey here</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
