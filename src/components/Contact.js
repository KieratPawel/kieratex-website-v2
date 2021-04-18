import React from "react";

import ContactForm from "./ContactForm";

import Contact1 from "../static/images/contact1.png";
import Contact2 from "../static/images/contact2.png";
import Contact3 from "../static/images/contact3.png";

const Contact = () => {
  return (
    <div className="section section--contact">
      <h2 className="section__title">Kontakt</h2>
      <div className="section__container contact">
        <ContactForm />
        <div className="contact__socials">
          <p className="contact__line">
            <a className="contact__element" href="tel:692-798-454">
              <img src={Contact2} alt="telefon" className="contact__image" />
              +48 692 798 454
            </a>
          </p>
          <p className="contact__line">
            <a
              className="contact__element"
              href="mailto:kierat.pawel@gmail.com"
            >
              <img src={Contact1} alt="koperta" className="contact__image" />
              kierat.pawel@gmail.com
            </a>
          </p>
          <p className="contact__line">
            <a
              className="contact__element"
              href="https://www.facebook.com/profile.php?id=100005792883108"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Contact3} alt="facebook" className="contact__image" />
              Paweł Kierat
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
