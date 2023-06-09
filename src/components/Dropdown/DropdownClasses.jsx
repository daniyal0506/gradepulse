import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";

const DropdownClasses = ({ selected, setDropdown, options, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

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

  useEffect(() => {
    const filtered = options.filter(
      (option) =>
        option.CRSTITLE.toLowerCase().includes(searchTerm.toLowerCase()) ||
        `${option.CRSSUBJCD} ${option.CRSNBR}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );

    const uniqueFiltered = filtered.reduce((unique, option) => {
      // Check if the course already exists in the unique array
      const isDuplicate = unique.some(
        (item) =>
          item.CRSSUBJCD === option.CRSSUBJCD && item.CRSNBR === option.CRSNBR
      );

      if (!isDuplicate) {
        unique.push(option);
      }

      return unique;
    }, []);

    setFilteredOptions(uniqueFiltered);
  }, [searchTerm, options]);

  const handleReset = () => {
    setDropdown("");
    setIsActive(false);
    onChange("");
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selected ? selected : "Select Course"}
        {selected && <i className="ri-close-line" onClick={handleReset}></i>}
        {!selected && <i className="ri-arrow-down-s-fill"></i>}
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="search">
            <i className="uil uil-search"></i>
            <input
              spellCheck="false"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
          <div className="dropdown-options">
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  setDropdown(option);
                  setIsActive(false);
                  onChange(
                    `${option.CRSSUBJCD} ${option.CRSNBR} - ${option.CRSTITLE}`
                  );
                }}
                className="dropdown-item"
              >
                <span>{`${option.CRSSUBJCD} ${option.CRSNBR} - ${option.CRSTITLE}`}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownClasses;
