import Card from "./Card";

import config from "../static/config";

const { about } = config;

const About = () => {
  return (
    <div className="section">
      <h2 className="section__title">{about.sectionTitle}</h2>
      <div className="section__container">
        {about.cardsArray.map(card=>(
          <Card
            image={card.image}
            title={card.title}
            text={card.text}
            id={card.id}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
