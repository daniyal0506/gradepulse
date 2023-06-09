import React, { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar.jsx";
import Graph from "../../components/Graphs/Graph.jsx";
import BottomBar from "../../components/BottomBar/BottomBar.jsx";
import ButtonOptions from "../../components/ButtonOption/ButtonOptions.jsx";
import PieGraph from "../../components/Graphs/PieGraph.jsx";
import MiscGraph from "../../components/Graphs/MiscGraph.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";
import Backdrop from "../../components/BackDrop/BackDrop.jsx";
import DropDownProfessor from "../../components/Dropdown/DropdownProfessors.jsx";
import "./InstructorData.css";

const InstructorData = () => {
  const location = useLocation();
  const { teacher, teachers } = location.state || {};

  const [data, setData] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState("");
  const [buttonOption, setButtonOption] = useState("bar");
  const ref = useRef(null);

  useEffect(() => {
    setData(teachers);
  }, [teachers]);

  useEffect(() => {
    if (selectedOption1 !== "Select Professor") {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedOption1]);

  const handleOptionClick = (selectedOption) => {
    setButtonOption(selectedOption);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navigate = useNavigate();

  const handleOptionChange1 = (option) => {
    const selectedValue = option;
    setSelectedOption1(selectedValue);

    const selectedTeacher = teachers.find(
      (teacher) => teacher.PrimaryInstructor === selectedValue
    );

    if (selectedTeacher) {
      navigate(`/InstructorData/${selectedTeacher.PrimaryInstructor}`, {
        state: { teacher: selectedTeacher, teachers },
      });
    }
  };

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

        <Container className="container-style">
          {teacher && (
            <h2 className="container-text">{teacher.PrimaryInstructor}</h2>
          )}
          {teacher && (
            <h4 className="container-text">
              {teacher.CRSSUBJCD +
                " " +
                teacher.CRSNBR +
                " - " +
                teacher.CRSTITLE}
            </h4>
          )}
          <DropDownProfessor
            selected={selectedOption1}
            setDropdown={setSelectedOption1}
            options={data}
            onChange={handleOptionChange1}
          />
        </Container>

        <Container className="container-button" ref={ref}>
          <ButtonOptions
            text1={"Bar Chart"}
            text2={"Pie Graph"}
            onClick={handleOptionClick}
          />
        </Container>

        <Container>
          {teacher && buttonOption === "bar" && <Graph chartData={teacher} />}
          {teacher && buttonOption === "pie" && (
            <PieGraph chartData={teacher} />
          )}
        </Container>

        <Container className="misc-data-graph">
          {teacher && <MiscGraph chartData={teacher} />}
        </Container>

        <BottomBar className="bottom-bar" />
      </div>
    </>
  );
};

export default InstructorData;
