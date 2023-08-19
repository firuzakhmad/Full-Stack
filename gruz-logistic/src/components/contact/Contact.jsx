import { useRef, useState } from "react";
import "./contactStyles/contact.css";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const Contact = () => {
  const { t } = useTranslation();

  const form = useRef();

  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID;
  const EMAILJS_PUBLIC_ID = process.env.REACT_APP_EMAILJS_PUBLIC_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    const updatedInputFields = inputFields.map((field) => ({
      ...field,
      value: "",
    }));

    // Set the state with the updated inputFields array
    setInputFields(updatedInputFields);
  };

  const [inputFields, setInputFields] = useState([
    {
      id: 1,
      name: "name",
      type: "input",
      value: "",
      isFocused: false,
      label: t("name"),
    },
    {
      id: 2,
      name: "mail",
      type: "input",
      value: "",
      isFocused: false,
      label: t("mail"),
    },
    {
      id: 3,
      name: "phone",
      type: "input",
      value: "",
      isFocused: false,
      label: t("phone"),
    },
    {
      id: 4,
      name: "message",
      type: "textarea",
      value: "",
      isFocused: false,
      label: t("message"),
    },
    // Add more input fields as needed
  ]);

  const handleInputChange = (event, id) => {
    const updatedFields = inputFields.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setInputFields(updatedFields);
  };

  const handleInputFocus = (id, state) => {
    const updatedFields = inputFields.map((field) =>
      field.id === id ? { ...field, isFocused: state } : field
    );
    setInputFields(updatedFields);
  };

  return (
    <div className="contact__full">
      <span className="big-circle"></span>
      <div className="contact section">
        <div className="form__container container grid">
          <div className="form__content">
            <div className="form__info">
              <h3 className="form__title info-title">{t("get_in_touch")}</h3>
              <p className="form__info-description">{t("ready_to_partner")}</p>

              <div className="form__info-container">
                <div className="form__info-social">
                  <BiMap className="form__info-icon" />
                  <p>80 Suyumbaeva, Bishkek, Kyrgyzstan</p>
                </div>

                <div className="form__info-social">
                  <AiOutlineMail className="form__info-icon" />
                  <Link
                    to="mailto:Gruzlogistic1@gmail.com"
                    className="form__info-social"
                  >
                    Gruzlogistic1@gmail.com
                  </Link>
                </div>

                <div className="form__info-social">
                  <AiOutlineWhatsApp className="form__info-icon" />
                  <p>+996552020529</p>
                </div>
              </div>

              <div className="form__social-media">
                <p>{t("contact_us")} :</p>
                <div className="form__info-social-div ">
                  <Link to="#">
                    <AiFillFacebook className="form__info-social-icon" />
                  </Link>
                  <Link to="#">
                    <AiFillTwitterSquare className="form__info-social-icon" />
                  </Link>
                  <Link to="https://www.instagram.com/gruzlogistic/">
                    <AiFillInstagram className="form__info-social-icon" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="form__info-data">
              <span className="circle one"></span>
              <span className="circle two"></span>

              <form className="form" ref={form} onSubmit={sendEmail}>
                <h3 className="form__title">{t("contact_us")}</h3>

                {inputFields.map((field) => {
                  return (
                    <div className="form__input-container" key={field.id}>
                      <label
                        className={`form__label ${
                          field.isFocused || field.value ? "label-top" : ""
                        }`}
                      >
                        {field.label}
                      </label>
                      {field.type === "input" ? (
                        <input
                          name={field.name}
                          type="text"
                          value={field.value}
                          className="form__input"
                          onChange={(e) => handleInputChange(e, field.id)}
                          onFocus={() => handleInputFocus(field.id, true)}
                          onBlur={() => handleInputFocus(field.id, false)}
                        />
                      ) : (
                        <textarea
                          name={field.name}
                          value={field.value}
                          className="form__input textarea"
                          onChange={(e) => handleInputChange(e, field.id)}
                          onFocus={() => handleInputFocus(field.id, true)}
                          onBlur={() => handleInputFocus(field.id, false)}
                        />
                      )}
                    </div>
                  );
                })}
                <input type="submit" value={t("submit")} className="btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
