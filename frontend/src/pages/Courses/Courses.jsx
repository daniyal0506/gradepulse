import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import TopBar from "../../components/TopBar/TopBar";
import Backdrop from "../../components/BackDrop/BackDrop";
import SideBar from "../../components/SideBar/SideBar";
import BottomBar from "../../components/BottomBar/BottomBar";
import Dropdown from "../../components/Dropdown/Dropdown";
import CourseList from "../../components/CourseList/CourseList";
import "./Courses.css";

const Courses = () => {
  const [data, setData] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState("");
  const [sidebar, setSideBar] = useState(false);

  const handleOptionChange1 = (event) => {
    setData([]);
  };

  useEffect(() => {
    if (selectedOption1) {
      const sanitizedTerm = selectedOption1.replace(/\s/g, "");
      fetch(`/${sanitizedTerm}/DEP`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedOption1]);

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  const termNames = [
    { label: "Fall 2012", value: "Fall2012" },
    { label: "Fall 2013", value: "Fall2013" },
    { label: "Fall 2014", value: "Fall2014" },
    { label: "Fall 2015", value: "Fall2015" },
    { label: "Fall 2016", value: "Fall2016" },
    { label: "Fall 2020", value: "Fall2020" },
    { label: "Fall 2019", value: "Fall2019" },
    { label: "Fall 2018", value: "Fall2018" },
    { label: "Fall 2017", value: "Fall2017" },
    { label: "Fall 2021", value: "Fall2021" },
    { label: "Fall 2022", value: "Fall2022" },
    { label: "Spring 2013", value: "Spring2013" },
    { label: "Spring 2014", value: "Spring2014" },
    { label: "Spring 2015", value: "Spring2015" },
    { label: "Spring 2016", value: "Spring2016" },
    { label: "Spring 2017", value: "Spring2017" },
    { label: "Spring 2018", value: "Spring2018" },
    { label: "Spring 2019", value: "Spring2019" },
    { label: "Spring 2020", value: "Spring2020" },
    { label: "Spring 2021", value: "Spring2021" },
    { label: "Spring 2022", value: "Spring2022" },
    { label: "Summer 2013", value: "Summer2013" },
    { label: "Summer 2014", value: "Summer2014" },
    { label: "Summer 2015", value: "Summer2015" },
    { label: "Summer 2016", value: "Summer2016" },
    { label: "Summer 2017", value: "Summer2017" },
    { label: "Summer 2018", value: "Summer2018" },
    { label: "Summer 2019", value: "Summer2019" },
    { label: "Summer 2020", value: "Summer2020" },
    { label: "Summer 2021", value: "Summer2021" },
    { label: "Summer 2022", value: "Summer2022" },
  ];

  return (
    <>
      <div className="page-container">
        <TopBar openSideBar={toggleSideBar} />
        <Backdrop back sidebar={sidebar} closeSideBar={toggleSideBar} />
        <SideBar sidebar={sidebar} toggleSideBar={toggleSideBar} />
        <Container className="dropdown-container">
          <Dropdown
            selected={selectedOption1}
            setDropdown={setSelectedOption1}
            options={termNames}
            onChange={handleOptionChange1}
          />
        </Container>
        <CourseList courses={data} selectedOption={selectedOption1} />
      </div>

      <div className="bottom-bar-wrapper">
        <BottomBar className="bottom-bar" />
      </div>
    </>
  );
};

export default Courses;
