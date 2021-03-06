import React, { useContext } from "react";
import { SQLContext } from "../Context";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { SvgIcon } from "@material-ui/core";
import LogoSvg from "../assets/logo.svg";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BuildIcon from "@material-ui/icons/Build";
import CodeIcon from "@material-ui/icons/Code";
import HomeIcon from "@material-ui/icons/Home";
import ListAltIcon from "@material-ui/icons/ListAlt";

function Navigation() {
  const { setNavToggle } = useContext(SQLContext);

  return (
    <NavigationStyled>
      <div className="nav-logo">
        <NavLink to="/">
          <div className="navbar-brand">
            <SvgIcon className="brand-icon">
              <path
                fill="currentColor"
                d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"
              />
            </SvgIcon>

            <p className="navbar-text">SQL EDITOR</p>
          </div>
        </NavLink>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink
            to="/"
            activeClassName="active-class"
            exact
            onClick={() => setNavToggle(false)}
          >
            <span>
              {" "}
              <HomeIcon className="nav-item-icon" /> Home
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/editor"
            activeClassName="active-class"
            exact
            onClick={() => setNavToggle(false)}
          >
            <span>
              {" "}
              <CodeIcon className="nav-item-icon" /> Editor
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/editor" onClick={() => setNavToggle(false)}>
            <span>
              {" "}
              <DashboardIcon className="nav-item-icon" /> Dashboard
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/editor" onClick={() => setNavToggle(false)}>
            <span>
              {" "}
              <BuildIcon className="nav-item-icon" /> Instance
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/editor" onClick={() => setNavToggle(false)}>
            <span>
              {" "}
              <ListAltIcon className="nav-item-icon" /> Schema
            </span>
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>
          <span>Made for </span>
          <a
            href="https://atlan.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="atlan-link2"
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
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .nav-logo {
    height: 10vh;
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    .navbar-brand {
      display: flex;
      .brand-icon {
        font-size: 1.5rem;
        margin-right: 0.4rem;
        @media screen and (max-width: 576px) {
          font-size: 1.4rem;
          margin-right: 0.3rem;
        }
      }
      .navbar-text {
        font-size: 1.2rem;
        @media screen and (max-width: 576px) {
          font-size: 1.1rem;
        }
      }
    }
  }

  .nav-items {
    width: 100%;
    .active-class {
      background-color: var(--primary-color-light);
      color: white;
      box-shadow: 1rem 0px 0px 0px var(--navigation-link-color) inset;
    }
    .nav-item-icon {
      margin-right: 0.2rem;
      vertical-align: bottom;
      font-size: 1.2rem;
    }
    li {
      display: block;
      span {
        margin-left: 20%;
        font-size: 1rem;
        @media screen and (max-width: 576px) {
          margin-left: 15%;
        }
      }
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
          z-index: -1;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 1rem;
      display: block;
      text-align: center;
      span {
        vertical-align: middle;
        font-size: 1rem;
      }
    }
    .footer-logo {
      vertical-align: middle;
      margin-left: 0.2rem;
    }
  }
`;
export default Navigation;
