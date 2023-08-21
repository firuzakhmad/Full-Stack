import Backend from "./Backend";
import Frontend from "./Frontend";
import "./skillsStyles/skills.css";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Skills = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".frontend__contents", {
      origin: "left",
      duration: 1000,
      distance: "25rem",
      delay: 300,
    });

    sr.reveal(".backend__contents", {
      origin: "right",
      duration: 1000,
      distance: "25rem",
      delay: 300,
    });
  }, []);
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technnical level</span>

      <div className="skills__container container grid">
        <div className="frontend__contents">
          <Frontend />
        </div>

        <div className="backend__contents">
          <Backend />
        </div>
      </div>
    </section>
  );
};

export default Skills;
