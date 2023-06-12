import React from "react";
import { Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TopBar.css"; // Import the CSS file
import logo from "../Images/logo.png"; // Import the logo image

const TopBar = ({ openSideBar }) => {
  return (
    <>
      <Nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="menu-icon" onClick={openSideBar}>
          <i className="ri-menu-line ri-2x"></i>
        </div>
        <Container className="navbar-container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="logo-image" />
          </a>
        </Container>
      </Nav>
    </>
  );
};

export default TopBar;
