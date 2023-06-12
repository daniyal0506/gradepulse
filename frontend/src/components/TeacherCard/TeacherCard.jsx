import React from "react";
import { Card } from "react-bootstrap";
import logo from "../Images/user-logo.png";
import "./TeacherCard.css";
import { useNavigate } from "react-router-dom";

const TeacherCard = ({ name, dep, teacher, teachers }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/InstructorData/${teacher.PrimaryInstructor}`, {
      state: { teacher, teachers },
    });
  };

  return (
    <Card className="teacher-card" onClick={handleClick}>
      <img src={logo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Department: {dep}</p>
      </div>
    </Card>
  );
};

export default TeacherCard;
