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
