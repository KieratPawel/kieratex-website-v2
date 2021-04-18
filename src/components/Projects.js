import React from "react";
import Project from "./LinkCard";

import Kieratex from "../static/images/kieratex.jpg";
import DomSeniora from "../static/images/dom-seniora.jpg";
import LottoMachine from "../static/images/lotto-machine.jpg";
import Github from "../static/images/github.jpg";

const Projects = () => {
  return (
    <div className="section section--projects">
      <h2 className="section__title">Projekty</h2>
      <div className="section__container section__container--projects">
        <Project
          src={Kieratex}
          title="Kieratex_v1"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus."
          id="project1"
          link="https://kieratpawel.github.io/kieratex-website/"
        />
        <Project
          src={DomSeniora}
          title="dom seniora pod debem"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus."
          id="project2"
          link="https://domseniorapoddebem.pl/"
        />
        <Project
          src={LottoMachine}
          title="lotto machine"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus."
          id="project3"
          link="https://kieratpawel.github.io/lotto-picker-react/"
        />
        <Project
          src={Github}
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
