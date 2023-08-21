const Backend = () => {
  const skillsData = [
    { id: 1, name: "MySQL", level: "Experienced" },
    { id: 2, name: "Node JS", level: "Experienced" },
    { id: 3, name: "Express JS", level: "Experienced" },
    { id: 4, name: "AWS", level: "Experienced" },
  ];

  const firstSection = skillsData.filter((skill) => skill.id <= 4);
  const secondSection = skillsData.filter((skill) => skill.id > 4);
  return (
    <div className="skills__content">
      <div className="skills__title">Backend</div>

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
      </div>
    </div>
  );
};

export default Backend;
