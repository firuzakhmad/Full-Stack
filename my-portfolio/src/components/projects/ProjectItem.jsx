import { Link } from "react-router-dom";

const ProjectItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <Link to={item.link} className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </Link>
    </div>
  );
};

export default ProjectItem;
