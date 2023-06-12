import React from "react";
import "./BottomBar.css";
import logo from "../Images/linkedin.png"; // Import the logo image
import logo2 from "../Images/github-icon.png";

const BottomBar = () => {
  return (
    <footer>
      <b className="footer-text">
        Copyright © 2023 All Rights Reserved by GradePulse.
      </b>
      <hr className="divison-bar"></hr>
      <a
        className="linkedin-logo"
        href="https://www.linkedin.com/in/daniyal-siddiqui-a23171220"
      >
        <img src={logo} alt="Logo" className="linkedin-image" />
      </a>
      <a className="linkedin-logo" href="https://github.com/daniyal0506">
        <img src={logo2} alt="Logo" className="linkedin-image" />
      </a>
    </footer>
  );
};

export default BottomBar;
