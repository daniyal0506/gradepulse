import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";

const Dropdown = ({ selected, setDropdown, options, onChange }) => {
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
    onChange();
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selected ? selected : "Select Term"}
        {selected && <i className="ri-close-line" onClick={handleReset}></i>}
        {!selected && <i className="ri-arrow-down-s-fill"></i>}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setDropdown(option.label);
                setIsActive(false);
                onChange();
              }}
              className="dropdown-item"
            >
              <span>{`${option.label}`}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
