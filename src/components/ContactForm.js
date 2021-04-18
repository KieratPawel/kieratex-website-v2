import React from "react";
import { useForm } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xyylzwoq");
  if (state.succeeded) {
    return <p className="contact__message">Wiadomość wysłana!</p>;
  }
  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <input
        className="contact__input"
        id="email"
        type="email"
        name="email"
        placeholder="Twój email"
      />
      <textarea
        className="contact__textarea"
        id="message"
        name="message"
        placeholder="Twoja wiadomość"
        rows="10"
      />
      <button
        className="contact__button"
        type="submit"
        disabled={state.submitting}
      >
        Wyślij wiadomość
      </button>
    </form>
  );
}

export default ContactForm;
