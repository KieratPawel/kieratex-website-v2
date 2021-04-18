import React from "react";
import { Fade } from "@material-ui/core";
import Image from "./Image";

import usePosition from "../hooks/usePosition";

const LinkCard = ({ src, title, text, id, link }) => {
  const checked = usePosition(id);

  return (
    <div className="card card--link" id={id}>
      <Fade in={checked} timeout={1000 + Math.random() * 1000}>
        <div className="card__container">
          <a
            className="card__link"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="card__image-container">
              <Image className="card__image" alt="technologia" src={src} />
            </div>
          </a>
          <div className="card__info card__info--link">
            <h2 className="card__title">
              <a
                className="card__link"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                {title}
              </a>
            </h2>

            <p className="card__text">{text}</p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default LinkCard;
