import React, { useState, useEffect } from "react";
import "./Greetings.scss";

const Greetings = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="greetings-container">
      <div className="background">
        <div className="animated-background"></div>
      </div>
      <div
        className={showMessage ? "greetings-message show" : "greetings-message"}
      >
        <h2>Thank you for your order!</h2>
        <p>We will ship it soon.</p>
      </div>
    </div>
  );
};

export default Greetings;
