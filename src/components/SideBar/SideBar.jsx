import React from "react";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";

const SideBar = ({ sidebar, toggleSideBar }) => {
  const navigate = useNavigate();

  const homeClick = () => {
    navigate("/");
  };

  const aboutClick = () => {
    navigate("/About");
  };

  const coursesClick = () => {
    navigate("/Courses");
  };

  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <div className="close-sidebar">
        <i onClick={toggleSideBar} className="close-icon ri-close-line"></i>
      </div>
      <span className="font-link">
        <li onClick={homeClick}>
          <i className="ri-home-line"></i>Home
        </li>
        <li onClick={coursesClick}>
          <i className="ri-book-line"></i>Courses
        </li>
        <li onClick={aboutClick}>
          <i className="ri-creative-commons-by-fill"></i>About
        </li>
      </span>
    </div>
  );
};

export default SideBar;
