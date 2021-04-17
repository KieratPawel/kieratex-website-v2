import Card from "./Card";

const About = () => {
  return (
    <div className="about">
      <h2 className="about__title">Tworzymy wyjątkowe strony internetowe</h2>
      <div className="about__container">
        <Card
          src="images/services1.png"
          title="Wykonane w zgodzie z aktualnymi standardami"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus."
          id="about1"
        />
        <Card
          src="images/services2.png"
          title="Zoptymalizowane pod kątem wyszukiwarek internetowych"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus."
          id="about2"
        />
        <Card
          src="images/services3.png"
          title="W pełni responsywne, bez względu na typ urządzenia"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus."
          id="about3"
        />
      </div>
    </div>
  );
};

export default About;
