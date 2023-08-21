import React, { useState } from "react";
import "./headerStyles/header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (this.scrollY >= 80) header.classList.add("header-scroll");
    else header.classList.remove("header-scroll");
  });

  //  links
  const navData = [
    { name: "Home", path: "#home" },
    {
      name: "About",
      path: "#about",
    },
    { name: "Skills", path: "#skills" },
    { name: "Services", path: "#services" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Firuz Akhmad
        </a>

        <div className={`nav__menu ${toggle ? "show-menu" : ""}`}>
          <ul className="nav__list grid">
            {navData.map((item, index) => {
              return (
                <li className="nav__item" key={index}>
                  <a
                    href={item.path}
                    className={`${
                      activeNav === item.path
                        ? "nav__link active-link"
                        : "nav__link"
                    }`}
                    onClick={() => setActiveNav(item.path)}
                  >
                    <i className="uil uil-estate nav__icon "></i>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
