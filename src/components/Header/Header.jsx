import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Search from "../Search/Search";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { CartState } from "../../context/Context";
import Button from "react-bootstrap/esm/Button";
import LogoutButton from "../Authentication/LogoutButton";
import LoginButton from "../Authentication/LoginButton";
import Authmain from "../Authentication/Authmain";

const Header = () => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);

  const { cartCount } = CartState();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <header className={`main-header ${scroll ? "sticky-header" : ""}`}>
      <div className="header-content">
        <ul className="left">
          <Link className="link" to="/">
            <li>Home</li>
          </Link>

          <Link className="link" to="/products">
            <li>Products</li>
          </Link>
        </ul>

        <div className="center">EcomSTORE.</div>

        <div className="right">
          <Authmain />

          <AiOutlineHeart onClick={() => navigate("/wishlist")} />
          <span className="cart-icon">
            <CgShoppingCart onClick={() => navigate("/cart")} />
            <span>{cartCount}</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
