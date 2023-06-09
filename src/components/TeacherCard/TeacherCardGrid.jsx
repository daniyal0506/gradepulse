import React from "react";
import { Row } from "react-bootstrap";
import TeacherCard from "./TeacherCard";

const TeacherCardGrid = ({ teachers }) => {
  return (
    <Row className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
      {teachers.map((teacher) => (
        <TeacherCard
          key={teacher.PrimaryInstructor}
          name={teacher.PrimaryInstructor}
          dep={teacher.DEPTNAME}
          teacher={teacher}
          teachers={teachers}
        />
      ))}
    </Row>
  );
};

export default TeacherCardGrid;
