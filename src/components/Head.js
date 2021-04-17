import React, { useEffect, useState } from "react";
import { Fade } from "@material-ui/core";

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
            Kierate<span className="header__x">x</span>
          </h1>
          <h1 className="header__brand">web development</h1>
          <p className="header__slogan">Tanio</p>
          <p className="header__slogan">Szybko</p>
          <p className="header__slogan">Skutecznie</p>
        </div>
        <img
          className="header__face"
          src="images/face.png"
          alt="Twarz twórcy Kieratex"
        />
      </header>
    </Fade>
  );
};

export default Head;
