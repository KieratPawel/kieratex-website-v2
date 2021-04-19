import React from "react";
import Project from "./LinkCard";

import config from "../static/config";

const { projects } = config;

const Projects = () => {
  return (
    <div className="section section--projects">
      <h2 className="section__title">{projects.sectionTitle}</h2>
      <div className="section__container section__container--projects">
        <Project
          image={projects.project1.image}
          title={projects.project1.title}
          text={projects.project1.text}
          id={projects.project1.id}
          link={projects.project1.link}
        />
        <Project
          image={projects.project2.image}
          title={projects.project2.title}
          text={projects.project2.text}
          id={projects.project2.id}
          link={projects.project2.link}
        />
        <Project
          image={projects.project3.image}
          title={projects.project3.title}
          text={projects.project3.text}
          id={projects.project3.id}
          link={projects.project3.link}
        />
        <Project
          image={projects.project4.image}
          title={projects.project4.title}
          text={projects.project4.text}
          id={projects.project4.id}
          link={projects.project4.link}
        />
      </div>
    </div>
  );
};

export default Projects;
