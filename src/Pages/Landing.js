import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { InnerLayout } from "../styles/Layouts";
import styled from "styled-components";
import { SvgIcon } from "@material-ui/core";
import PrimaryButton from "../components/PrimaryButton";
const Landing = () => {
  return (
    <LandingStyled>
      <div className="navbar">
        <div className="navbar-brand">
          <SvgIcon className="brand-icon">
            <path
              fill="currentColor"
              d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"
            />
          </SvgIcon>

          <p className="navbar-text">SQL EDITOR</p>
        </div>
      </div>
      <InnerLayout>
        <div className="typography">
          <h1>
            Do <span>Query</span> like never before.
          </h1>
          <p>
            A small sql editor where you can do queries
            <br /> on sql tables effortlessly :)
          </p>
          <Link to="/editor">
            <PrimaryButton>
              Get started
              <ArrowForwardIcon className="icon" />
            </PrimaryButton>
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
      </InnerLayout>
    </LandingStyled>
  );
};

const LandingStyled = styled.header`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  .navbar {
    height: 10vh;
    padding: 1rem;
    .navbar-brand {
      display: flex;
      .brand-icon {
        font-size: 2rem;
        margin: 0 1rem;
      }
      .navbar-text {
        font-size: 1.8rem;
      }
    }
  }
  .typography {
    text-align: center;
    .icon {
      margin-left: 0.5rem;
    }
  }
`;

export default Landing;
