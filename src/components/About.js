import Card from "./Card";

import Services1 from "../static/images/services1.png";
import Services2 from "../static/images/services2.png";
import Services3 from "../static/images/services3.png";

const About = () => {
  return (
    <div className="section">
      <h2 className="section__title">Tworzymy wyjątkowe strony internetowe</h2>
      <div className="section__container">
        <Card
          src={Services1}
          title="Wykonane w zgodzie z aktualnymi standardami"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus."
          id="about1"
        />
        <Card
          src={Services2}
          title="Zoptymalizowane pod kątem wyszukiwarek internetowych"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus."
          id="about2"
        />
        <Card
          src={Services3}
          title="W pełni responsywne, bez względu na typ urządzenia"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus."
          id="about3"
        />
      </div>
    </div>
  );
};

export default About;
