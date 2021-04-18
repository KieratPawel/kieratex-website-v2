import React from "react";
import Project from "./LinkCard";

const Projects = () => {
  return (
    <div className="section section--projects">
      <h2 className="section__title">Projekty</h2>
      <div className="section__container section__container--projects">
        <Project
          src="images/kieratex.jpg"
          title="Kieratex_v1"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus."
          id="project1"
          link="https://kieratpawel.github.io/kieratex-website/"
        />
        <Project
          src="images/dom-seniora.jpg"
          title="dom seniora pod debem"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus."
          id="project2"
          link="https://domseniorapoddebem.pl/"
        />
        <Project
          src="images/lotto-machine.jpg"
          title="lotto machine"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus."
          id="project3"
          link="https://kieratpawel.github.io/lotto-picker-react/"
        />
        <Project
          src="images/github.jpg"
          title="github"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus."
          id="project4"
          link="https://github.com/KieratPawel"
        />
      </div>
    </div>
  );
};

export default Projects;
