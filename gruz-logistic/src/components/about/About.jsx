import "./aboutStyles/about.css";
import { motion } from "framer-motion";
import { fadeIn } from "../motionVariants/variants";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about section">
      <motion.h2
        className="section__title"
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {t("about")}
      </motion.h2>

      <div className="about__container container grid">
        <div className="about__content grid">
          <motion.div
            className="about__img"
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          ></motion.div>

          <motion.div
            className="about__data"
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <p className="about__description-p1">{t("about_desc_1")}</p>
            <Link className="btn contact-us" to="/contact">
              {t("contact_us")}
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="about__content-div container"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="text__content-data">
            <h3 className="text__content-title">{t("our_journey")}</h3>
            <p className="text__content-description">{t("our_journey_desc")}</p>
          </div>

          <div className="text__content-data">
            <h3 className="text__content-title">
              {t("experience_that_matters")}
            </h3>
            <p className="text__content-description">
              {t("experience_that_matters_desc")}
            </p>
          </div>

          <div className="text__content-data">
            <h3 className="text__content-title">{t("our_approach")}</h3>
            <p className="text__content-description">
              {t("our_approach_desc")}
            </p>
          </div>

          <div className="text__content-data">
            <h3 className="text__content-title">{t("about_desc_2")}</h3>
            <p className="text__content-description">{t("about_desc_3")}</p>
            <p className="text__content-description">
              <br /> <br />
              {t("about_desc_4")}
              <br />
              <br />
              {t("about_desc_5")}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
