import React, { useState } from "react";
import "./Popup.css";

const Popup = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={`popup ${isVisible ? "visible" : ""}`}>
      <div className="card">
        <span className="message">{message}</span>
      </div>
    </div>
  );
};

export default Popup;
