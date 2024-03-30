import React, { useState, useEffect } from "react";

import Image from "./Image";

import BackgroundPattern from "../static/images/background-pattern.jpg";
import BinaryCode from "../static/images/binary-code.png";
import Globe from "../static/images/globe.png";
import Oreo from "../static/images/oreo.png";

const Background = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let throttleTimeout;
    const handleScroll = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          setOffset(window.scrollY);
          throttleTimeout = null;
        }, 20);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="Page__background Page__background--pattern"
        style={{
          transform: `translateY(-${offset * .5}px)`,
          backgroundImage: `url(${BackgroundPattern})`,
        }}
      />
      <Image
        className="Page__background Page__background--image"
        src={BinaryCode}
        alt="kod binarny"
        style={{
          transform: `translateY(${offset * -.1}px)`,
        }}
      />
      <Image
        className="Page__background Page__background--image"
        src={BinaryCode}
        alt="kod binarny"
        style={{
          transform: `translateY(${offset * -.7}px)`,
        }}
      />
      <Image
        className="Page__background Page__background--image"
        src={Globe}
        alt="glob"
        style={{
          transform: `translateY(${offset * -.5}px) scale(${
            offset * .001 + 1 > 2 ? 2 : offset * .001 + 1
          })`,
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