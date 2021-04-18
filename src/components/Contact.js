import React from "react";

import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="section section--contact">
      <h2 className="section__title">Kontakt</h2>
      <div className="section__container contact">
        <ContactForm />
        <div className="contact__socials">
          <p className="contact__line">
            <a className="contact__element" href="tel:692-798-454">
              <img
                src="images/contact2.png"
                alt="telefon"
                className="contact__image"
              />
              +48 692 798 454
            </a>
          </p>
          <p className="contact__line">
            <a
              className="contact__element"
              href="mailto:kierat.pawel@gmail.com"
            >
              <img
                src="images/contact1.png"
                alt="koperta"
                className="contact__image"
              />
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
              <img
                src="images/contact3.png"
                alt="facebook"
                className="contact__image"
              />
              Paweł Kierat
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
