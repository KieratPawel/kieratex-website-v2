import React, { useState, useEffect } from "react";

import Image from "./Image";

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
          backgroundImage: "url(/images/background-pattern.jpg)",
        }}
      />
      <Image
        className="Page__background Page__background--image"
        src="/images/binary-code.png"
        alt="kod binarny"
        style={{
          transform: `translateY(${offset * -0.1}px)`,
          filter: `hue-rotate(${offset * 0.1}deg)`,
        }}
      />
      <Image
        className="Page__background Page__background--image"
        src="/images/binary-code.png"
        alt="kod binarny"
        style={{
          transform: `translateY(${offset * -0.7}px)`,
          filter: `invert(${offset * 0.1}%)`,
        }}
      />
      <Image
        className="Page__background Page__background--image"
        src="/images/globe.png"
        alt="glob"
        style={{
          transform: `translateY(${offset * -0.5}px) scale(${
            offset * 0.001 + 1 > 3 ? 3 : offset * 0.001 + 1
          })`,
          filter: `invert(${offset * 0.05}%)`,
        }}
      />
      <Image
        className="Page__background Page__background--image"
        src="/images/oreo.png"
        alt="ciastko"
        style={{
          transform: `translateY(${offset * 0.3}px) translateX(${
            offset * 0.3
          }px)`,
        }}
      />
    </>
  );
};

export default Background;
