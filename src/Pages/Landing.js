import React from "react";
import { Link } from "react-router-dom";
import DatabaseSvg from "../assets/icons/database.svg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Landing = () => {
  return (
    <div className="container">
      <div className={`home__topbar p-4 text-lg`}>
        <div className="navbar__brand">
          <div className="brand__icon">
            <img src={DatabaseSvg} alt="" />
          </div>
          <p className={`text-xl`}>SQL EDITOR</p>
        </div>
      </div>
      <div className="hero">
        <h1 className="title">
          Do <span className="success">Query</span> like never before.
        </h1>
        <p className="text">
          A small sql editor where you can do queries
          <br /> on sql tables effortlessly :)
        </p>
        <Link to="/editor">
          <div className="btn">
            <p className="btn__text">Get started</p>
            <ArrowForwardIcon className="icon" />
          </div>
        </Link>
      </div>
      <div className="product__container">
        <Link to="/editor">
          <img
            src={`${process.env.PUBLIC_URL}/sqlBanner.png`}
            alt="sql editor"
            className="product"
          />
        </Link>
      </div>

      <div className="footer__container">
        <p className="footer">
          Made with <span className="warning"></span>
        </p>
      </div>
    </div>
  );
};

export default Landing;
