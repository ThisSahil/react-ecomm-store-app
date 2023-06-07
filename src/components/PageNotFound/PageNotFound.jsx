import React from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1 className="heading-not-found">404</h1>
      <p className="subheading-not-found">Page Not Found</p>
      <p className="message-not-found">
        The page you are looking for does not exist.
      </p>
      <div className="image-container-not-found">
        <img
          className="image-not-found"
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1686089775~exp=1686090375~hmac=200dfc7ec12e5cf686a6d57edd0cfe8fe74a9e1f875a353319fea7eacae7d76b"
          alt="404"
        />
      </div>
    </div>
  );
};

export default PageNotFound;
