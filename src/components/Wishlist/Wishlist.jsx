import React from "react";
import { CartState } from "../../context/Context";

import "./Wishlist.scss";
import EmptyWishList from "./EmptyWishList";

const Wishlist = () => {
  const { products, setProducts, cartCount, setCartCount } = CartState();

  let wishlistCount = 0;

  products.map((prod) => {
    if (prod.inWishList === true) {
      wishlistCount++;
    }
  });

  if (wishlistCount === 0) {
    return <EmptyWishList />;
  }

  const handleWishlistClick = (id) => {
    const updated = products.map((elem) => {
      if (elem._id === id) {
        elem.inWishList = false;
      }
      return { ...elem };
    });

    setProducts(updated);
  };

  const handleCartClick = (id) => {
    const updated = products.map((elem) => {
      if (elem._id === id) {
        elem.inCart = true;
      }
      return { ...elem };
    });

    setCartCount(cartCount + 1);
    handleWishlistClick(id);
  };

  return (
    <div className="wishlist-products">
      <div className="wishlist-container">
        <div className="wishlist-heading">My Wishlist</div>
        <div className="products">
          {products.map(
            (prod) =>
              prod.inWishList && (
                <div className="container">
                  <div className="wishlist-card">
                    <div
                      // onClick={() => handleImgClick(prod.prod._id)}
                      className="thumbnail"
                    >
                      <img src={prod.img} alt="" />
                    </div>
                    <div className="wishlist-details">
                      <span className="name">{prod.name}</span>
                      <span className="price">&#x20B9;{prod.price}</span>
                    </div>
                  </div>
                  <div className="wishlist-button-container">
                    <button
                      onClick={() => handleWishlistClick(prod._id)}
                      className="wishlist-button buttons"
                    >
                      Remove From Wishlist
                    </button>
                    <button
                      disabled={prod.inCart}
                      className="cart-button buttons"
                      onClick={() => handleCartClick(prod._id)}
                    >
                      {!prod.inCart ? "Add to Cart" : "Already in Cart"}
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
