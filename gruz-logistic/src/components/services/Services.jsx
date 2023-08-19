import "./servicesStyles/services.css";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="services section">
      <h2 className="section__title">{t("our_services")}</h2>

      <div className="text__container container">
        <div className="text__content-data">
          <h3 className="text__content-title">{t("freight_forwarding")}</h3>
          <p className="text__content-description">
            {t("freight_forwarding_desc")}
          </p>
        </div>

        <div className="text__content-data">
          <h3 className="text__content-title">
            {t("warehousing_and_distribution")}
          </h3>
          <p className="text__content-description">
            {t("warehousing_and_distribution_desc")}
          </p>
        </div>
        <div className="text__content-data">
          <h3 className="text__content-title">{t("customs_clearance")}</h3>
          <p className="text__content-description">
            {t("customs_clearance_desc")}
          </p>
        </div>
        <div className="text__content-data">
          <h3 className="text__content-title">
            {t("supply_chain_management")}
          </h3>
          <p className="text__content-description">
            {t("supply_chain_management_desc")}
          </p>
        </div>
        <div className="text__content-data">
          <h3 className="text__content-title">{t("value-Added_services")}</h3>
          <p className="text__content-description">
            {t("value-Added_services_desc")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
