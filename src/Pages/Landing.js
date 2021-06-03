import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SvgIcon } from "@material-ui/core";
import PrimaryButton from "../components/PrimaryButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

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

      <div className="typography">
        <h1>
          Do <span>Query</span> like never before.
        </h1>
        <h2>
          A small sql editor where you can do queries
          <br /> on sql tables effortlessly :)
        </h2>
        <div>
          <Link to="/editor">
            <PrimaryButton>
              <div>
                Try it for free
                <ArrowForwardIosIcon className="icon" />
              </div>
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </LandingStyled>
  );
};

const LandingStyled = styled.header`
  width: 100%;
  height: 100vh;
  .navbar {
    height: 10vh;
    padding: 1rem;
    .navbar-brand {
      display: flex;
      .brand-icon {
        font-size: 2rem;
        margin: 0 1rem;
        @media screen and (max-width: 576px) {
          font-size: 1.7rem;
          margin: 0 0.5rem;
        }
      }
      .navbar-text {
        font-size: 1.8rem;
        @media screen and (max-width: 576px) {
          font-size: 1.4rem;
        }
      }
    }
  }
  .typography {
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    h1 {
      margin: 1rem;
    }
    h2 {
      font-size: 1.4rem;
      margin: 1rem;
      @media screen and (max-width: 576px) {
        font-size: 1.1rem;
      }
    }
    div {
      margin: 1rem;
      div {
        display: flex;
        font-weight: bold;
      }
      .icon {
        margin-left: 0.5rem;
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
`;

export default Landing;
