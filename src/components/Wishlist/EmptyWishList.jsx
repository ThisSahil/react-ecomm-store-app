import React from "react";
import "./EmptyWishList.css";

const EmptyWishList = () => {
  return (
    <div className="empty-wishlist-page">
      <div className="wishlist-image-container">
        <img
          src="https://img.freepik.com/free-vector/group-customers-shopping-online-store-huge-tablet-sale-internet-shop-buyer-with-purchases-cart-flat-illustration_74855-18344.jpg?w=900&t=st=1686048648~exp=1686049248~hmac=b5ca7e5fc4fbed96687b5b37779c7935cd84012eb29a8531afddc04480600357"
          alt="Empty wishlist"
          className="wishlist-image"
        />
      </div>
      <h2>Your Wishlist is Empty</h2>
      <p className="p-text">
        Add some of your favourite items that you are planning to buy!!
      </p>
    </div>
  );
};

export default EmptyWishList;
