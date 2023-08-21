import { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./projectData";
import ProjectItem from "./ProjectItem";
import "./portfolioStyles/portfolio.css";

const Portfolio = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.currentTarget.textContent || "" });
    setActive(index);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
              onClick={(e) => {
                handleClick(e, index);
              }}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <ProjectItem item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
