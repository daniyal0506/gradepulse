import React from "react";
import "./CourseList.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const CourseList = ({ courses, selectedOption }) => {
  const navigate = useNavigate();

  const groupedCourses = {};

  Object.values(courses).forEach((categoryCourses) => {
    categoryCourses.forEach((course) => {
      const firstLetter = course.DEPTNAME.charAt(0).toUpperCase();
      if (!groupedCourses[firstLetter]) {
        groupedCourses[firstLetter] = new Set();
      }
      groupedCourses[firstLetter].add(course.DEPTNAME);
    });
  });

  const sortedLetters = Object.keys(groupedCourses).sort();

  if (sortedLetters[0] === " ") {
    sortedLetters.shift();
  }

  const listOnClick = (deptName) => {
    const encodedDeptName = encodeURIComponent(deptName);
    const deptData = courses[deptName];

    const uniqueDeptData = deptData.reduce((accumulator, currentItem) => {
      const existingItem = accumulator.find(
        (item) => item.CRSTITLE === currentItem.CRSTITLE
      );
      if (!existingItem) {
        accumulator.push(currentItem);
      }
      return accumulator;
    }, []);

    navigate(`/CourseInfo/${encodedDeptName}`, {
      state: { deptData: uniqueDeptData, selectedOption },
    });
  };

  return (
    <div className="course-alphabet-column">
      <div className="row">
        {sortedLetters.map((letter) => (
          <div className="col-md-4" key={letter}>
            <div className="category-container">
              <h2 className="category-title">{letter}</h2>
              <ul className="course-list">
                {[...groupedCourses[letter]].map((deptName, index) => (
                  <li
                    className="course-item"
                    key={index}
                    onClick={() => listOnClick(deptName)}
                  >
                    {deptName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
