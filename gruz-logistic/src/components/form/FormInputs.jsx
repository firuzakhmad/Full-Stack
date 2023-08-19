import { AllAppContext } from "../../context/AllAppContext.js";
import { useTranslation } from "react-i18next";
import { Autocomplete } from "@react-google-maps/api";

import { useContext } from "react";

export default function FormInputs() {
  const {
    setData,
    page,
    originRef,
    destiantionRef,
    calculateRoute,
    personalInputs,
    setPersonalInputs,
    goodsInputs,
    setGoodsInputs,
    locationInputs,
    handleInputChange,
    handleInputFocus,
  } = useContext(AllAppContext);
  const { t } = useTranslation();

  const displayClicked = (e) => {
    e.preventDefault();

    setData((prevData) => ({
      ...prevData,
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
    }));

    calculateRoute();
  };

  const display = {
    0: (
      <>
        {personalInputs.map((field) => {
          return (
            <div className="form__input-container" key={field.id}>
              <label
                className={`form__label ${
                  field.isFocused || field.value ? "label-top" : ""
                }`}
              >
                {field.label}
              </label>

              <input
                type="text"
                name={field.name}
                value={field.value}
                className="form__input"
                onChange={(e) =>
                  handleInputChange(
                    e,
                    personalInputs,
                    setPersonalInputs,
                    field.id
                  )
                }
                onFocus={() =>
                  handleInputFocus(
                    field.id,
                    personalInputs,
                    setPersonalInputs,
                    true
                  )
                }
                onBlur={() =>
                  handleInputFocus(
                    field.id,
                    personalInputs,
                    setPersonalInputs,
                    false
                  )
                }
              />
            </div>
          );
        })}
      </>
    ),
    1: (
      <>
        {goodsInputs.map((field) => {
          return (
            <div className="form__input-container" key={field.id}>
              {field.type === "text" ? (
                <label
                  className={`form__label ${
                    field.isFocused || field.value ? "label-top" : ""
                  }`}
                >
                  {field.label}
                </label>
              ) : null}
              <input
                type={field.type}
                value={field.value}
                name={field.name}
                className="form__input"
                ref={field.ref}
                onChange={(e) =>
                  handleInputChange(e, goodsInputs, setGoodsInputs, field.id)
                }
                onFocus={() =>
                  handleInputFocus(field.id, goodsInputs, setGoodsInputs, true)
                }
                onBlur={() =>
                  handleInputFocus(field.id, goodsInputs, setGoodsInputs, false)
                }
              />
            </div>
          );
        })}
      </>
    ),
    2: (
      <div className="destination__inputs">
        {locationInputs.map((field) => {
          return (
            <div
              className={`form__input-container ${
                field.type === "button" ? "display-button" : ""
              }`}
              key={field.id}
            >
              {field.type === "input" ? (
                <Autocomplete>
                  <input
                    type="text"
                    className="form__input map"
                    ref={field.ref}
                    name={field.name}
                    placeholder={field.placeHolder}
                  />
                </Autocomplete>
              ) : (
                <button
                  href="#"
                  className="btn display"
                  onClick={displayClicked}
                >
                  {t("display")}
                </button>
              )}
            </div>
          );
        })}
      </div>
    ),
  };

  const content = <>{display[page]}</>;

  return content;
}
