import React from "react";
import Project from "./LinkCard";

import config from "../static/config";

const { projects } = config;

const Projects = () => {
  return (
    <div className="section section--projects">
      <h2 className="section__title">{projects.sectionTitle}</h2>
      <div className="section__container section__container--projects">
        {projects.projectsArray.map(project=>(
          <Project
            image={project.image}
            title={project.title}
            text={project.text}
            id={project.id}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
