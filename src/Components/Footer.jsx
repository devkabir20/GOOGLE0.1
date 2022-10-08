import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="homeFooter">
        <div className="homeFooter__left">
          <Link to="./about">About</Link>
          <Link to="./advertising">Advertising</Link>
          <Link to="./business">Business</Link>
          <Link to="./howsearchworks">How Search works</Link>
        </div>
        <div className="homeFooter__right">
          <Link to="">Privacy</Link>
          <Link to="">Terms</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
