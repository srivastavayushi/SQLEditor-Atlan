import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SQLContext } from "../Context";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { SvgIcon } from "@material-ui/core";
import Button from "./Button";
const Navbar = () => {
  const { navToggle, setNavToggle } = useContext(SQLContext);

  return (
    <NavbarStyled>
      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>
      <div className="navbar">
        <Link to="/">
          <div className="navbar-brand">
            <SvgIcon className="brand-icon">
              <path
                fill="currentColor"
                d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"
              />
            </SvgIcon>

            <p className="navbar-text">SQL EDITOR</p>
          </div>
        </Link>
        <div>hi</div>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;

const NavbarStyled = styled.main`
  .navbar {
    height: 10vh;
    padding: 1rem;
    background-color: var(--background-dark-color);
    display: flex;
    justify-content: space-between;
    .navbar-brand {
      display: flex;
      .brand-icon {
        font-size: 1.6rem;
        margin: 0 0.4rem;
        @media screen and (max-width: 576px) {
          font-size: 1.4rem;
          margin: 0 0.3rem;
        }
      }
      .navbar-text {
        font-size: 1.4rem;
        @media screen and (max-width: 576px) {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
