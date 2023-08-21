import { useState } from "react";
import "./qualificationStyles/qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container ">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${
              toggleState === 1 ? "qualification__active" : ""
            }`}
            onClick={() => setToggleState(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={`qualification__button button--flex ${
              toggleState === 2 ? "qualification__active" : ""
            }`}
            onClick={() => setToggleState(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              toggleState === 1 ? "qualification__content-active" : ""
            }`}
          >
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">Software Engineering</h3>
                <span className="qualification__subtitle">
                  American Univercity of Central Asia
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2022
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>

              <div className="">
                <h3 className="qualification__title">New Generation Academy</h3>
                <span className="qualification__subtitle">
                  American Univercity of Central Asia
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017 - 2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">School No:65</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> - 2017
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={`qualification__content ${
              toggleState === 2 ? "qualification__content-active" : ""
            }`}
          >
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">Full-Stack Developer</h3>
                <span className="qualification__subtitle">Freelancer</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - present
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="">
                <h3 className="qualification__title">Robotics</h3>
                <span className="qualification__subtitle">Private Company</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">Robotics</h3>
                <span className="qualification__subtitle">OcOO Деском</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - 2022
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="">
                <h3 className="qualification__title">Mechanical Engineering</h3>
                <span className="qualification__subtitle">OcOO Деском</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>- 26.07.2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
