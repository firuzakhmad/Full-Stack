import "./partnershipStyles/partnership.css";
import Form from "../form/Form";
import { useTranslation } from "react-i18next";
import GoogleMapBox from "../googleMap/GoogleMapBox.jsx";
import { useContext } from "react";
import { AllAppContext } from "../../context/AllAppContext";

const Partnership = () => {
  const { t } = useTranslation();

  const { distance, duration } = useContext(AllAppContext);

  return (
    <div className="partnership__full">
      <span className="big-circle"></span>

      <div className="partnership">
        <div className="form__container container grid">
          <div className="form__content">
            <div className="form__info-data">
              <span className="circle one partnership"></span>
              <span className="circle two partnership"></span>
              <Form />
            </div>

            <div className="form__info">
              <h3 className="form__title info-title">{t("map_integration")}</h3>
              <p className="form__info-description">
                {t("map_integration_desc")}
              </p>

              <div className="form__mabox-content">
                <h3 className="form__content-title">{t("mark_location")}</h3>

                <div className="form__page form__mapbox">
                  <GoogleMapBox />
                </div>
                {distance && duration && (
                  <>
                    <p className="distance__duration">
                      Distance:{" "}
                      <span className="distance__duration-text">
                        {distance}
                      </span>
                    </p>
                    <p className="distance__duration">
                      Duration:{" "}
                      <span className="distance__duration-text">
                        {duration}
                      </span>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
