import { AllAppContext } from "../../context/AllAppContext.js";
import "./formStyles/form.css";
import FormInputs from "./FormInputs.jsx";
import { useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export default function Form() {
  const {
    pageTitle,
    page,
    setPage,
    data,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    submitHide,
    originRef,
    destiantionRef,
    personalInputs,
    setPersonalInputs,
    goodsInputs,
    setGoodsInputs,
    clearObjectStateValues,
    clearRoute,
  } = useContext(AllAppContext);

  const { t } = useTranslation();

  const handlePrev = () => setPage((prev) => prev - 1);
  const handleNext = () => setPage((prev) => prev + 1);

  const form = useRef();

  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID =
    process.env.REACT_APP_EMAILJS_PARTNERSHIP_TEMPLATE_ID;
  const EMAILJS_PUBLIC_ID = process.env.REACT_APP_EMAILJS_PUBLIC_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init(EMAILJS_PUBLIC_ID);

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data).then(
      (result) => {
        console.log("message sent");
      },
      (error) => {
        console.log(error.text);
      }
    );

    clearRoute();
    clearObjectStateValues(personalInputs, setPersonalInputs);
    clearObjectStateValues(goodsInputs, setGoodsInputs);
    originRef.current.value = "";
    destiantionRef.current.value = "";
  };

  const content = (
    <form className="form" ref={form}>
      <h2 className="form__title">{pageTitle[page]}</h2>

      <FormInputs originRef={originRef} destiantionRef={destiantionRef} />

      <div className="button__container container">
        <button
          type="button"
          className={`btn button-submit ${prevHide}`}
          onClick={handlePrev}
          disabled={disablePrev}
        >
          {t("prev")}
        </button>

        {canSubmit ? (
          <button
            type="button"
            className={`btn button-submit ${submitHide}`}
            onClick={sendEmail}
          >
            {t("submit")}
          </button>
        ) : (
          <button
            type="button"
            className={`btn button-submit ${nextHide}`}
            onClick={handleNext}
            disabled={disableNext}
          >
            {t("next")}
          </button>
        )}
      </div>
    </form>
  );

  return content;
}
