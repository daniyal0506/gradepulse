import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import BottomBar from "../../components/BottomBar/BottomBar";
import SideBar from "../../components/SideBar/SideBar";
import Backdrop from "../../components/BackDrop/BackDrop";
import LoadingBar from "../../components/LoadingBar/LoadingBar";
import "./CourseInfo.css";

const CourseInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { deptData, selectedOption } = location.state || {};
  const [data, setData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  const [sidebar, setSideBar] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  useEffect(() => {
    if (selectedOption) {
      setLoading(true);
      const sanitizedTerm = selectedOption.replace(/\s/g, "");
      fetch(`https://gradepulse-backend.onrender.com/${sanitizedTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [selectedOption]);

  useEffect(() => {
    if (teacherData.length > 0) {
      const teachers = teacherData;
      const teacher = teacherData[0];

      navigate(`/InstructorData/${teacher.PrimaryInstructor}`, {
        state: { teacher, teachers },
      });
    }
  }, [teacherData, navigate]);

  const handleOptionChange2 = (option) => {
    const selectedValue = option;

    if (data.length > 0) {
      const filteredTeacherData = data.filter((item) => {
        const optionValue = `${item.CRSTITLE}`;
        return optionValue === selectedValue;
      });

      setTeacherData(filteredTeacherData);
    }
  };

  return (
    <>
      <div className="page-container">
        <TopBar openSideBar={toggleSideBar} />
        <Backdrop back sidebar={sidebar} closeSideBar={toggleSideBar} />
        <SideBar sidebar={sidebar} toggleSideBar={toggleSideBar} />
        {loading && <LoadingBar className="loading-bar" />}
        <div className="course-column col-md-4">
          <div className="category-container">
            <h2 className="category-title">{deptData[0].DEPTNAME}</h2>
            <ul className="course-list">
              {deptData.map((item, index) => (
                <li
                  className="course-item"
                  key={index}
                  onClick={() => handleOptionChange2(item.CRSTITLE)}
                >
                  {item.CRSTITLE}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom-bar-wrapper">
        <BottomBar className="bottom-bar"></BottomBar>
      </div>
    </>
  );
};

export default CourseInfo;
