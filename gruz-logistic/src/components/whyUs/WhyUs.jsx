import "./whyUsStyles/whyUs.css";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <div className="whyUs section">
      <h2 className="section__title">{t("why_gruz_logistic?")}</h2>

      <div className="text__container container grid">
        <div className="whyUs__content">
          <div className="whyUs__img"></div>

          <div className="text__content-data">
            <h3 className="text__content-title">{t("reliability")}</h3>
            <p className="text__content-description">{t("reliability_desc")}</p>
          </div>

          <div className="text__content-data">
            <h3 className="text__content-title">{t("global_network")}</h3>
            <p className="text__content-description">
              {t("global_network_desc")}
            </p>
          </div>

          <div className="text__content-data">
            <h3 className="text__content-title">{t("expert_team")}</h3>
            <p className="text__content-description">{t("expert_team_desc")}</p>
          </div>

          <div className="text__content-data">
            <h3 className="text__content-title">
              {t("technology-Driven_approach")}
            </h3>
            <p className="text__content-description">
              {t("technology-Driven_approach_desc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
