import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartState } from "../../context/Context";

import "./SingleProduct.scss";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { products, setProducts, cartCount, setCartCount } = CartState();

  const curProd = products.find((prod) => prod._id === id);

  const handleWishlistClick = (id) => {
    if (curProd.inWishList === true) {
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
  };

  const handleCartClick = (id) => {
    if (curProd.inCart === true) {
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
  };

  if (!curProd) {
    return <h3>Loading !!!</h3>;
  }

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={curProd.img} alt="" />
          </div>
          <div className="right">
            <span className="name">{curProd.name}</span>
            <span className="price">₹{curProd.price}</span>
            <span className="desc">{curProd.description}</span>

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>{curProd.categoryName}</span>
              </span>
            </div>
          </div>

          <div className="button-container">
            <button
              onClick={() => handleWishlistClick(id)}
              className="wishlist-button buttons"
            >
              {curProd.inWishList ? "Go to Wishlist" : "Add to Wishlist"}
            </button>
            <button
              onClick={() => handleCartClick(id)}
              className="cart-button buttons"
            >
              {curProd.inCart ? "Go to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
