import React, { useState } from "react";
import { BsGlobe } from "react-icons/bs";
// import "flag-icon-css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import i18next from "i18next";

const Dropdown = ({ selectedOption, setSelectedOption, languages }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleSelectClick = () => {
    setIsClicked(!isClicked);
  };

  const handleOptionClick = (optionText) => {
    setSelectedOption(optionText);
    i18next.changeLanguage(optionText);
    setIsClicked(false);
  };

  return (
    <div className="dropdown">
      <div
        className={`select ${isClicked ? "select-clicked" : ""}`}
        onClick={handleSelectClick}
      >
        <div className="header__language">
          <BsGlobe className="globe" />
        </div>
        <span className="selected">{selectedOption.toUpperCase()}</span>
        <div className={`caret ${isClicked ? "caret-rotate" : ""}`}></div>
      </div>
      <div className={`menu ${isClicked ? "menu-open" : ""}`}>
        <ul>
          {languages.map(({ code, name, country_code }) => (
            <li
              key={country_code}
              className={`menu-option ${
                selectedOption === code ? "active" : ""
              }`}
              onClick={() => handleOptionClick(code)}
            >
              <button className="btn__language">
                <span className={`fi fi-${country_code}`}></span>
                {code.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
