import React from "react";
import "./LoginFirst.css";

const LoginFirst = () => {
  return (
    <div className="login-page">
      <div className="content">
        <h1>Please Login First to Access Cart</h1>
        <div className="image-container">
          <img
            className="login-image"
            src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=740&t=st=1686042161~exp=1686042761~hmac=39fc77d0827ad2729f0b9d7116682acebdd58b34507ed0e6cf1322f1d64a8913"
            alt="Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginFirst;
