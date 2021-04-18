import React, { useState, useEffect } from "react";

import Image from "./Image";

import BackgroundPattern from "../static/images/background-pattern.jpg";
import BinaryCode from "../static/images/binary-code.png";
import Globe from "../static/images/globe.png";
import Oreo from "../static/images/oreo.png";

const Background = () => {
  const [offset, setOffset] = useState(0);
  const handleScroll = () => setOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="Page__background Page__background--pattern"
        style={{
          transform: `translateY(-${offset * 0.5}px)`,
          backgroundImage: `url(${BackgroundPattern})`,
        }}
      />
      <Image
        className="Page__background Page__background--image"
        src={BinaryCode}
        alt="kod binarny"
        style={{
          transform: `translateY(${offset * -0.1}px)`,
          filter: `hue-rotate(${offset * 0.1}deg)`,
        }}
      />
      <Image
        className="Page__background Page__background--image"
        src={BinaryCode}
        alt="kod binarny"
        style={{
          transform: `translateY(${offset * -0.7}px)`,
          filter: `invert(${offset * 0.1}%)`,
        }}
      />
      <Image
        className="Page__background Page__background--image"
        src={Globe}
        alt="glob"
        style={{
          transform: `translateY(${offset * -0.5}px) scale(${
            offset * 0.001 + 1 > 2 ? 2 : offset * 0.001 + 1
          })`,
          filter: `invert(${offset * 0.05}%)`,
        }}
      />
      <Image
        className="Page__background Page__background--image"
        src={Oreo}
        alt="ciastko"
        style={{
          transform: `translateY(${offset * 0.6}px) translateX(${
            offset * 0.6
          }px)`,
        }}
      />
    </>
  );
};

export default Background;
