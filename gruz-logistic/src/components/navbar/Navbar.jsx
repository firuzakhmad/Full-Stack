import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";
import { AiOutlineAppstore, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/truck.png";
import Dropdown from "../dropDown/DropDown";
import { useTranslation } from "react-i18next";
import "./navbarStyles/navbar.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  //  links
  const navData = [
    { name: t("home"), path: "/", icon: <HiHome /> },
    {
      name: t("partnership"),
      path: "/partnership",
      icon: <HiRectangleGroup />,
    },
    { name: t("services"), path: "/services", icon: <HiRectangleGroup /> },
    { name: t("why_us"), path: "/whyUs", icon: <HiViewColumns /> },
    { name: t("about"), path: "/about", icon: <HiUser /> },
    {
      name: t("contact"),
      path: "/contact",
      icon: <HiEnvelope />,
    },
  ];

  const selectedLanguage = i18n.language; // Get the selected language
  const [selectedOption, setSelectedOption] = useState(selectedLanguage);
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "ru",
      name: "Russian",
      country_code: "ru",
    },
    {
      code: "tr",
      name: "Turkey",
      country_code: "tr",
    },
    // {
    //   code: "af",
    //   name: "Dari",
    //   country_code: "af",
    // },
  ];

  return (
    <div className="header__div container">
      <div className="language__navbar-container">
        <div className="language__navbar container">
          <div className="navbar__language-mobile">
            <Dropdown
              initialSelectedOption={selectedLanguage}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              languages={languages}
              className="language__icon"
            />
          </div>
        </div>
      </div>
      <header className="header">
        <nav className="navbar container">
          {/* Logo */}

          <Link className="navbar__logo-div" to="/">
            <span className="navbar__logo">Gruz Logistic</span>
            <img src={Logo} alt="" className="logo" />
          </Link>

          <div className={`navbar__menu ${toggle ? "show-menu" : ""}`}>
            <ul className="navbar__list">
              {navData.map((item, index) => {
                return (
                  <li className="navbar__item" key={index}>
                    <Link
                      to={item.path}
                      className={`${
                        location.pathname === item.path
                          ? "navbar__link active-link"
                          : "navbar__link"
                      }`}
                      onClick={() => setToggle(!toggle)}
                    >
                      <i className="navbar__icon">{item.icon}</i>
                      <span className="navbar__name">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
              <div className="navbar__language">
                <Dropdown
                  initialSelectedOption={selectedLanguage}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  languages={languages}
                  className="language__icon"
                />
              </div>
            </ul>
            <AiOutlineClose
              className="navbar__close"
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <div className="navbar__toggle" onClick={() => setToggle(!toggle)}>
            <AiOutlineAppstore />
          </div>
        </nav>
        <div className="navbar__underline container"></div>
      </header>
    </div>
  );
};

export default Navbar;
