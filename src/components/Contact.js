import React from "react";

import ContactForm from "./ContactForm";

import config from "../static/config";

const { contact } = config;

const Contact = () => {
  return (
    <div className="section section--contact">
      <h2 className="section__title">{contact.sectionTitle}</h2>
      <div className="section__container contact">
        <ContactForm />
        <div className="contact__socials">
          <p className="contact__line">
            <a
              className="contact__element"
              href={`tel:${contact.phone.number}`}
            >
              <img
                src={contact.phone.image.src}
                alt={contact.phone.image.alt}
                className="contact__image"
              />
              {contact.phone.number}
            </a>
          </p>
          <p className="contact__line">
            <a
              className="contact__element"
              href={`mailto:${contact.mail.address}`}
            >
              <img
                src={contact.mail.image.src}
                alt={contact.mail.image.alt}
                className="contact__image"
              />
              {contact.mail.address}
            </a>
          </p>
          <p className="contact__line">
            <a
              className="contact__element"
              href={contact.facebook.link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={contact.facebook.image.src}
                alt={contact.facebook.image.alt}
                className="contact__image"
              />
              {contact.facebook.name}
            </a>
          </p>
        </div>
      </div>   
    </div>
  );
};

export default Contact;
