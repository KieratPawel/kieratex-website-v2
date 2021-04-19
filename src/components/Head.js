import React, { useEffect, useState } from "react";

import { Fade } from "@material-ui/core";

import config from "../static/config";

const { header } = config;

const Head = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setTimeout(() => setChecked(true), 700);
  }, []);

  return (
    <Fade in={checked} timeout={2000}>
      <header className="header">
        <div className="header__info">
          <h1 className="header__brand">
            {header.name1}
            <span className="header__x">{header.name1X}</span>
          </h1>
          <h1 className="header__brand">{header.name2}</h1>
          <p className="header__slogan">{header.slogan1}</p>
          <p className="header__slogan">{header.slogan2}</p>
          <p className="header__slogan">{header.slogan3}</p>
        </div>
        <img
          className="header__face"
          src={header.image.src}
          alt={header.image.alt}
        />
      </header>
    </Fade>
  );
};

export default Head;
