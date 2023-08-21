import React, { useState } from "react";
import "./servicesStyles/services.css";
import { servicesData } from "./servicesData";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const splitBreakString = (string) => {
    const parts = string.split(" ");
    const modifiedString = parts.map((part, index) => (
      <React.Fragment key={index}>
        {index > 0 && <br />}
        {part}
      </React.Fragment>
    ));

    return modifiedString;
  };

  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {servicesData.map((item, index) => {
          return (
            <div className="services__content" key={index}>
              <div className="">
                <i className={`${item.icon} services__icon`}></i>
                <h3 className="services__title">
                  {splitBreakString(item.title)}
                </h3>
              </div>

              <span
                className="services__button"
                onClick={() => toggleTab(item.id)}
              >
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
              </span>

              <div
                className={`services__modal ${
                  toggleState === item.id ? "active-modal" : ""
                }`}
              >
                <div className="services__modal-content">
                  <i
                    className="uil uil-times services__modal-close"
                    onClick={() => toggleTab(0)}
                  ></i>

                  <h3 className="services__modal-title">{item.title}</h3>
                  <p className="services__modal-description">
                    Service with more than 3 years of experience. Providing
                    quality work to clients and companies.
                  </p>

                  <ul className="services__modal-services grid">
                    {item.desc.map((descItem, index) => {
                      return (
                        <li className="services__modal-service" key={index}>
                          <i className="uil uil-check-circle services__modal-icon"></i>
                          <p className="services__modal-info">{descItem}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
