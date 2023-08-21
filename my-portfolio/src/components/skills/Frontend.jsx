const Frontend = () => {
  const skillsData = [
    { id: 1, name: "JavaScript", level: "Experienced" },
    { id: 2, name: "C++", level: "Experienced" },
    { id: 3, name: "TypeScript", level: "Experienced" },
    { id: 4, name: "HTML", level: "Experienced" },
    { id: 5, name: "CSS", level: "Experienced" },
    { id: 6, name: "React", level: "Experienced" },
    { id: 7, name: "Git", level: "Experienced" },
    { id: 8, name: "GUI (WxWidgets)", level: "Experienced" },
  ];

  const firstSection = skillsData.filter((skill) => skill.id <= 4);
  const secondSection = skillsData.filter((skill) => skill.id > 4);

  return (
    <div className="skills__content">
      <div className="skills__title">Frontend</div>

      <div className="skills__box">
        <div className="skills__group">
          {firstSection.map((item, index) => {
            return (
              <div className="skills__data" key={index}>
                <i className="bx bx-badge-check"></i>

                <div className="">
                  <h3 className="skills__name">{item.name}</h3>
                  <span className="skills__level">{item.level}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills__group">
          {secondSection.map((item, index) => {
            return (
              <div className="skills__data" key={index}>
                <i className="bx bx-badge-check"></i>

                <div className="">
                  <h3 className="skills__name">{item.name}</h3>
                  <span className="skills__level">{item.level}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
