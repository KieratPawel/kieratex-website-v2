import React from "react";

import Background from "./Background";
import Head from "./Head";
import About from "./About";
import Projects from "./Projects";

function App() {
  return (
    <div className="Page">
      <Background />
      <Head />
      <About />
      <Projects />
    </div>
  );
}

export default App;
