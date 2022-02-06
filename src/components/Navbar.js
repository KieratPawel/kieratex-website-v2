import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar">
      <Link
        activeClass="active"
        to="head"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={1000}
      >
        <span></span>
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={1000}
      >
        <span></span>
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={1000}
      >
        <span></span>
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={1000}
      >
        <span></span>
      </Link>
    </div>
  );
}

export default Navbar;
