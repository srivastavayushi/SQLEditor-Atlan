import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SvgIcon } from "@material-ui/core";
import PrimaryButton from "../components/PrimaryButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LogoSvg from "../assets/logo.svg";

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
          Perform <span>Queries</span> with us
        </h1>
        <h2>
          A simple sql editor for performing queries on
          <br />
          sql tables with the help of suggestions
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
      <footer className="footer">
        <p>
          Made for{" "}
          <a
            href="https://atlan.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="atlan-link"
          >
            <img
              src={LogoSvg}
              alt="atlan"
              width="60"
              height="60"
              className="footer-logo"
            />
          </a>
        </p>
      </footer>
    </LandingStyled>
  );
};

const LandingStyled = styled.header`
  width: 100%;
  height: 100vh;
  .navbar {
    height: 10vh;
    padding: 2rem;
    @media screen and (max-width: 1300px) {
      padding: 1rem;
    }
    @media screen and (max-width: 576px) {
      padding: 1.5rem 1rem;
    }
    .navbar-brand {
      display: flex;
      .brand-icon {
        font-size: 1.7rem;
        margin: 0 0.5rem;
        vertical-align: middle;
        @media screen and (max-width: 576px) {
          font-size: 1.5rem;
          margin: 0 0.3rem;
        }
      }
      .navbar-text {
        font-size: 1.5rem;
        vertical-align: middle;
        @media screen and (max-width: 576px) {
          font-size: 1.3rem;
        }
      }
    }
  }
  .typography {
    height: 85vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    h1 {
      margin: 1rem;
      @media screen and (max-width: 576px) {
        margin: 0.5rem;
      }
    }
    h2 {
      font-size: 1.4rem;
      margin: 1rem;
      @media screen and (max-width: 576px) {
        font-size: 1rem;
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
  footer {
    width: 100%;

    p {
      font-size: 1rem;
      display: block;
      text-align: center;
      span {
        vertical-align: middle;
        font-size: 1rem;
      }
    }
    .footer-logo {
      height: 1.1rem;
      vertical-align: top;
      margin-left: 0.2rem;
    }
  }
`;

export default Landing;
