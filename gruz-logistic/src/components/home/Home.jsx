import Data from "./Data";
import "./homeStyles/home.css";

const Home = () => {
  return (
    <div className="home section">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__img"></div>

          <Data />
        </div>
      </div>
    </div>
  );
};

export default Home;
