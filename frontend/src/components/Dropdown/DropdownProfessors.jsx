import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";

const DropDownProfessor = ({ selected, setDropdown, options, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleReset = () => {
    setDropdown("");
    setIsActive(false);
    onChange("Select Professor");
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selected ? selected : "Select Professor"}
        {!selected && <i className="ri-arrow-down-s-fill"></i>}
        {selected && <i className="ri-close-line" onClick={handleReset}></i>}
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-options">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  setDropdown(option);
                  setIsActive(false);
                  onChange(option.PrimaryInstructor);
                }}
                className="dropdown-item"
              >
                <span>{option.PrimaryInstructor}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownProfessor;
