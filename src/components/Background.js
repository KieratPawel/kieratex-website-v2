import React, { useState, useEffect } from "react";

const Background = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="Page__background Page__background--pattern"
        style={{
          transform: `translateY(-${offsetY * 0.5}px)`,
          backgroundImage: "url(/images/background-pattern.jpg)",
        }}
      />
      <img
        className="Page__background Page__background--image"
        src="/images/binary-code.png"
        alt="kod binarny"
        style={{
          transform: `translateY(${offsetY * -0.1}px)`,
          filter: `hue-rotate(${offsetY * 0.1}deg)`,
        }}
      />
      <img
        className="Page__background Page__background--image"
        src="/images/brackets.png"
        alt="nawiasy ostre"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
          filter: `hue-rotate(${offsetY * 0.02}deg)`,
        }}
      />
      <img
        className="Page__background Page__background--image"
        src="/images/globe.png"
        alt="glob"
        style={{
          transform: `translateY(${offsetY * -0.5}px) scale(${
            offsetY * 0.001 > 3 ? 3 : offsetY * 0.001
          })`,
          filter: `invert(${offsetY * 0.05}%)`,
        }}
      />
      <img
        className="Page__background Page__background--image"
        src="/images/oreo.png"
        alt="ciastko"
        style={{
          transform: `translateY(${offsetY * 0.3}px) translateX(${
            offsetY * 0.3
          }px)`,
        }}
      />
    </>
  );
};

export default Background;
