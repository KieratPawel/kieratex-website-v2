import React from "react";

import Background from "./Background";
import Head from "./Head";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="Page">
      <Background />
      <div className="view_wrapper" id="head">
        <Head />
      </div>
      <div className="view_wrapper" id="about">
        <About />
      </div>
      <div className="view_wrapper" id="projects">
        <Projects />
      </div>
      <div className="view_wrapper" id="contact">
        <Contact />
      </div>
      <Navbar />
    </div>
  );
}

export default App;
