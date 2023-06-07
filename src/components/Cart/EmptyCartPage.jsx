import React from "react";
import "./EmptyCartPage.css";

const EmptyCartPage = () => {
  return (
    <div className="empty-cart-page">
      <div className="cart-image-container">
        <img
          src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg?w=740"
          alt="Empty Cart"
          className="cart-image"
        />
      </div>
      <h2>Your Cart is Empty</h2>
      <p className="p-text">Add some items to your cart and start shopping!</p>
    </div>
  );
};

export default EmptyCartPage;
