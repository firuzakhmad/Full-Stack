import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactData } from "./contactData";
import "./contactStyles/contact.css";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_ID = process.env.REACT_APP_EMAILJS_PUBLIC_ID;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form.current,
      EMAILJS_PUBLIC_ID
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            {contactData.map((item, index) => {
              return (
                <div className="contact__card" key={index}>
                  <i className={`${item.icon} contact__card-icon`}></i>

                  <h3 className="contact__card-title">{item.title}</h3>
                  <span className="contact__card-data">{item.data}</span>

                  <a
                    href={item.href}
                    className="contact__button"
                    target="_blank"
                  >
                    Write me{" "}
                    <bx className="bx bx-right-arrow-alt contact__button-icon"></bx>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                className="contact__form-input"
                placeholder="Write your project"
                cols={30}
                rows={10}
              />
            </div>
            <button className="button button--flex">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
