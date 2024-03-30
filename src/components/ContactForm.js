import React, { useState } from "react";
import axios from "axios";
import config from "../static/config";

const { successMessage, errorMessage, emailPlaceholder, textareaPlaceholder, buttonForm } = config.contact;

function ContactForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
    popup: false,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xyylzwoq",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="contact__form"
    >
      <input
        className="contact__input"
        id="email"
        type="email"
        name="email"
        placeholder={emailPlaceholder}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required
      />
      <textarea
        className="contact__textarea"
        id="message"
        name="message"
        placeholder={textareaPlaceholder}
        rows="10"
        required
      ></textarea>
      <button
        type="submit"
        className="contact__button"
        disabled={serverState.submitting}
      >
        {buttonForm}
      </button>
      {serverState.status && (
        <p className={serverState.status.ok ? "popup popup--success" : "popup popup--error"}>
          {serverState.status.ok ? successMessage : errorMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;