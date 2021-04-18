import React from "react";

import Background from "./Background";
import Head from "./Head";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="Page">
      <Background />
      <Head />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
