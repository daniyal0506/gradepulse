import React, { useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import Backdrop from "../../components/BackDrop/BackDrop";
import SideBar from "../../components/SideBar/SideBar";
import BottomBar from "../../components/BottomBar/BottomBar";
import logo from "../../components/Images/about-logo.JPG";
import logo2 from "../../components/Images/linkedin.png";
import logo3 from "../../components/Images/github-icon.png";
import "./About.css";

const About = () => {
  const [sidebar, setSideBar] = useState(false);

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  return (
    <>
      <div className="page-container">
        <TopBar openSideBar={toggleSideBar} />
        <Backdrop back sidebar={sidebar} closeSideBar={toggleSideBar} />
        <SideBar sidebar={sidebar} toggleSideBar={toggleSideBar} />
        <section className="section about-section gray-bg" id="about">
          <div className="about-container">
            <div className="row align-items-center justify-content-around flex-row-reverse">
              <div className="col-lg-6">
                <div className="about-text">
                  <h3 className="dark-color">Daniyal Siddiqui</h3>
                  <h4 className="theme-color">
                    Aspiring Software Engineer / Student 👋 👋
                  </h4>
                  <p>
                    Hi! I'm currently a Computer Science student at the
                    University of Illinois - Chicago and like to program things
                    in my free time. From building websites to creating mobile
                    applications, I'm passionate about all things relating to
                    software engineering!
                  </p>
                  <p>
                    I built this website as I was tired of having to go through
                    the tedious process of looking for classes at my school. The
                    goal was to create a simple and efficient process to look at
                    the grade distribution for any course at my university,
                    making the scheduling process easier for all UIC students.
                    Hope this helps!
                  </p>
                  <p>
                    Feel free to connect with me on my Linkedin and check out my
                    GitHub to see other projects I'm working on.
                  </p>
                  <div className="btn-bar">
                    <a
                      className="px-btn theme"
                      href="https://www.linkedin.com/in/daniyal-siddiqui-a23171220"
                    >
                      <img
                        src={logo2}
                        className="linkedin-image"
                        alt="linkedin-logo"
                      />
                      Linkedin
                    </a>
                    <a
                      className="px-btn theme-t"
                      href="https://github.com/daniyal0506"
                    >
                      <img
                        src={logo3}
                        className="github-image"
                        alt="github-logo"
                      />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="about-img-container col-lg-4 text-center">
                <div className="grow">
                  <div className="about-img">
                    <img src={logo} alt="about-logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bottom-bar-wrapper">
        <BottomBar className="bottom-bar"></BottomBar>
      </div>
    </>
  );
};

export default About;
