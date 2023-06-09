import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { fetchDataDep } from "../../components/scripts/DataFetcherDep";
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
    const fetchDataAsync = async () => {
      if (selectedOption1) {
        const jsonData = await fetchDataDep(selectedOption1);
        setData(jsonData);
      }
    };

    fetchDataAsync();
  }, [selectedOption1]);

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  const termNames = [
    { label: "Fall 2020", value: "Fall2020" },
    { label: "Fall 2021", value: "Fall2021" },
    { label: "Fall 2022", value: "Fall2022" },
    { label: "Spring 2021", value: "Spring2021" },
    { label: "Spring 2022", value: "Spring2022" },
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
