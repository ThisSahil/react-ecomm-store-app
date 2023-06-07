import React, { useEffect, useState } from "react";

// import prod from "../../../assets/grey_2250x.webp";
import "./Product.scss";
import { useNavigate } from "react-router-dom";
import { CartState } from "../../../context/Context";
import Popup from "./Popup";

const Product = (prod) => {
  const { products, setProducts, cartCount, setCartCount } = CartState();

  const [showPopup, setShowPopup] = useState(false);
  const [showWishlistPopup, setshowWishlistPopup] = useState(false);

  const navigate = useNavigate();

  const handleWishlistClick = (id) => {
    if (prod.prod.inWishList === true) {
      navigate("/wishlist");
    } else {
      const updated = products.map((elem) => {
        if (elem._id === id) {
          elem.inWishList = true;
        }
        return { ...elem };
      });

      setProducts(updated);
    }

    setshowWishlistPopup(true);

    setTimeout(() => {
      setshowWishlistPopup(false);
    }, 2000);
  };

  const handleCartClick = (id) => {
    if (prod.prod.inCart === true) {
      navigate("/cart");
    } else {
      const updated = products.map((elem) => {
        if (elem._id === id) {
          elem.inCart = true;
        }

        setCartCount(cartCount + 1);

        return { ...elem };
      });

      setProducts(updated);
    }

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const handleImgClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card">
      <div onClick={() => handleImgClick(prod.prod._id)} className="thumbnail">
        <img src={prod.prod.img} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">{prod.prod.name}</span>
        <span className="price">&#x20B9;{prod.prod.price}</span>
      </div>
      <div className="button-container">
        <button
          onClick={() => handleWishlistClick(prod.prod._id)}
          className="wishlist-button buttons"
        >
          {prod.prod.inWishList ? "Go to Wishlist" : "Add to Wishlist"}
        </button>

        {showWishlistPopup && <Popup message="Item added to Wishlist!" />}
        <button
          className="cart-button buttons"
          onClick={() => handleCartClick(prod.prod._id)}
        >
          {prod.prod.inCart ? "Go to Cart" : "Add to Cart"}
        </button>

        {showPopup && <Popup message="Item added to cart!" />}
      </div>
    </div>
  );
};

export default Product;
