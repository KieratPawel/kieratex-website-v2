import Card from "./Card";

import config from "../static/config";

const { about } = config;

const About = () => {
  return (
    <div className="section">
      <h2 className="section__title">{about.sectionTitle}</h2>
      <div className="section__container">
        <Card
          image={about.card1.image}
          title={about.card1.title}
          text={about.card1.text}
          id={about.card1.id}
        />
        <Card
          image={about.card2.image}
          title={about.card2.title}
          text={about.card2.text}
          id={about.card2.id}
        />
        <Card
          image={about.card3.image}
          title={about.card3.title}
          text={about.card3.text}
          id={about.card3.id}
        />
      </div>
    </div>
  );
};

export default About;
