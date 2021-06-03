import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SQLContext } from "../Context";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { SvgIcon } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import TurnedInNotOutlinedIcon from "@material-ui/icons/TurnedInNotOutlined";

const Navbar = () => {
  const { navToggle, setNavToggle } = useContext(SQLContext);
  const [dropdown, setDropdown] = useState(null);
  const handleClick = (event) => {
    setDropdown(event.currentTarget);
  };
  const handleClose = () => {
    setDropdown(null);
  };

  return (
    <NavbarStyled>
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
        <div className="navbar-buttons">
          <Button
            aria-controls="navbar-menu"
            aria-haspopup="true"
            onMouseOver={handleClick}
          >
            <PermIdentityOutlinedIcon className="navbar-item-color" />
            <p className="navbar-item">shivanshpahwa</p>
            <KeyboardArrowDownOutlinedIcon className="navbar-item-color" />
          </Button>
          <Menu
            id="navbar-menu"
            anchorEl={dropdown}
            keepMounted
            elevation={0}
            getContentAnchorEl={null}
            open={Boolean(dropdown)}
            onClose={handleClose}
            className="navbar-menu"
            MenuListProps={{ onMouseLeave: handleClose }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MenuItem>
              <AccountBalanceWalletOutlinedIcon /> My account
            </MenuItem>
            <MenuItem>
              <TurnedInNotOutlinedIcon /> Saved
            </MenuItem>
            <MenuItem>
              <HelpOutlineIcon /> Help
            </MenuItem>
            <MenuItem>
              <ExitToAppOutlinedIcon /> Logout
            </MenuItem>
          </Menu>
          <div className="ham-burger-menu">
            <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
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
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-color);
    .navbar-brand {
      display: flex;
      justify-content: center;
      align-items: center;
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
    .navbar-buttons {
      display: flex;
      .navbar-item {
        font-size: 1rem;
        text-transform: none;
        color: var(--font-light-color);
        margin: 0 0.4rem;
        @media screen and (max-width: 576px) {
          font-size: 0.8rem;
        }
      }
      .navbar-item-color {
        color: var(--font-light-color);
      }
    }
  }
`;
