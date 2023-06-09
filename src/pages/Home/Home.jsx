import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { fetchData } from "../../components/scripts/DataFetcher";
import TopBar from "../../components/TopBar/TopBar";
import TeacherCardGrid from "../../components/TeacherCard/TeacherCardGrid";
import BottomBar from "../../components/BottomBar/BottomBar";
import SideBar from "../../components/SideBar/SideBar";
import Backdrop from "../../components/BackDrop/BackDrop";
import Dropdown from "../../components/Dropdown/Dropdown";
import DropdownClasses from "../../components/Dropdown/DropdownClasses";
import "./Home.css";

const Home = () => {
  const termNames = [
    { label: "Fall 2020", value: "Fall2020" },
    { label: "Fall 2021", value: "Fall2021" },
    { label: "Fall 2022", value: "Fall2022" },
    { label: "Spring 2021", value: "Spring2021" },
    { label: "Spring 2022", value: "Spring2022" },
    { label: "Summer 2021", value: "Summer2021" },
    { label: "Summer 2022", value: "Summer2022" },
  ];

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [data, setData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  const [sidebar, setSideBar] = useState(false);

  const handleOptionChange1 = (event) => {
    setSelectedOption2("");
    setTeacherData([]);
    setData([]);
  };

  const handleOptionChange2 = (option) => {
    const selectedValue = option;

    setSelectedOption2(selectedValue);

    const filteredTeacherData = data.filter((item) => {
      const optionValue = `${item.CRSSUBJCD} ${item.CRSNBR} - ${item.CRSTITLE}`;
      return optionValue === selectedValue;
    });

    setTeacherData(filteredTeacherData);
  };

  useEffect(() => {
    setSelectedOption1("");
  }, []);

  useEffect(() => {
    const fetchDataAsync = async () => {
      if (selectedOption1) {
        const jsonData = await fetchData(selectedOption1);
        setData(jsonData);
      }
    };

    fetchDataAsync();
  }, [selectedOption1]);

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  return (
    <>
      <TopBar openSideBar={toggleSideBar} />
      <Backdrop back sidebar={sidebar} closeSideBar={toggleSideBar} />
      <SideBar sidebar={sidebar} toggleSideBar={toggleSideBar} />
      <div className="content-wrapper">
        <Container className="styled-container">
          <h5 className="white-text">Search for a class below!</h5>
          <Dropdown
            selected={selectedOption1}
            setDropdown={setSelectedOption1}
            options={termNames}
            onChange={handleOptionChange1}
          />
          <DropdownClasses
            selected={selectedOption2}
            setDropdown={setSelectedOption2}
            options={data}
            onChange={handleOptionChange2}
          />
        </Container>

        <div className="content-container">
          <TeacherCardGrid teachers={teacherData} />
        </div>
      </div>
      <div className="bottom-bar-wrapper">
        <BottomBar className="bottom-bar" />
      </div>
    </>
  );
};

export default Home;
