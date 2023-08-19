import { motion } from "framer-motion";
import { fadeIn } from "../motionVariants/variants";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Data = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <div className="home__data">
      <motion.p
        className="home__description-p1"
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {t("welcome_to")}
      </motion.p>
      <motion.h1
        className="home__title"
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        ОсОО Груз Логистик
      </motion.h1>{" "}
      <motion.h3
        className="home__description-p2"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {t("your_unwavering")}
      </motion.h3>
      <motion.button
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        onClick={() => navigate("/partnership")}
        className="partner-btn"
      >
        {t("partner_request")}
      </motion.button>
    </div>
  );
};

export default Data;
