import React from "react";

import "./Banner.scss";
import BannerImg from "../../assets/Banner2-product3_c714c12a-ec7d-47ff-807c-7f68bf4ccae8.webp";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Experience the magic</h1>
          <p>
            Over-ear wireless headset that has been ergonomically designed to
            meet the needs of music lovers. The headphones come equipped with
            the latest Bluetooth v5.0 for instant wireless connectivity.
          </p>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
