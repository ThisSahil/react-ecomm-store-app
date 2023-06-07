import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Fotter.scss";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="social-icons">
        <div className="icon">
          <Link
            className="links"
            to="https://www.linkedin.com/in/sahil-chhabra-81b2571aa/"
            target="_blank"
          >
            <FaLinkedinIn size={25} />
          </Link>
        </div>
        <div className="icon">
          <Link
            className="links"
            to="https://github.com/ThisSahil"
            target="_blank"
          >
            <FaGithub size={25} />
          </Link>
        </div>

        <div className="icon">
          <Link
            className="links"
            to="https://www.instagram.com/this_sahill/"
            target="_blank"
          >
            <FaInstagram size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
