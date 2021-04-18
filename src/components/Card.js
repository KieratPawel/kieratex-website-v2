import React from "react";
import { Collapse } from "@material-ui/core";
import Image from "./Image";

import usePosition from "../hooks/usePosition";

const Card = ({ src, title, text, id }) => {
  const checked = usePosition(id);

  return (
    <div className="card" id={id}>
      <Collapse in={checked} timeout={1000 + Math.random() * 1000}>
        <div className="card__image-container">
          <Image className="card__image" alt="technologia" src={src} />
        </div>

        <div className="card__info">
          <h2 className="card__title">{title}</h2>
          <p className="card__text">{text}</p>
        </div>
      </Collapse>
    </div>
  );
};

export default Card;
