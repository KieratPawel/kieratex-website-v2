import Face from "./images/face.png";
import Services1 from "./images/services1.png";
import Services2 from "./images/services2.png";
import Services3 from "./images/services3.png";
import Kieratex from "./images/kieratex.jpg";
import DomSeniora from "./images/dom-seniora.jpg";
import LottoMachine from "./images/lotto-machine.jpg";
import Github from "./images/github.jpg";
import Contact1 from "../static/images/contact1.png";
import Contact2 from "../static/images/contact2.png";
import Contact3 from "../static/images/contact3.png";

const config = {
  header: {
    name1: "Kierate",
    name1X: "x",
    name2: "web development",
    slogan1: "Tanio",
    slogan2: "Szybko",
    slogan3: "Skutecznie",
    image: { src: Face, alt: "Twarz twórcy Kieratex" },
  },
  about: {
    sectionTitle: "Tworzymy wyjątkowe strony internetowe",
    card1: {
      title: "Wykonane w zgodzie z aktualnymi standardami",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus.",
      id: "about1",
      image: { src: Services1, alt: "technologia" },
    },
    card2: {
      title: "Zoptymalizowane pod kątem wyszukiwarek internetowych",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus.",
      id: "about2",
      image: { src: Services2, alt: "technologia" },
    },
    card3: {
      title: "W pełni responsywne, bez względu na typ urządzenia",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus.",
      id: "about1",
      image: { src: Services3, alt: "technologia" },
    },
  },
  projects: {
    sectionTitle: "Projekty",
    project1: {
      title: "Kieratex_v1",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus.",
      id: "project1",
      link: "https://kieratpawel.github.io/kieratex-website/",
      image: { src: Kieratex, alt: "strona Kieratex_v1" },
    },
    project2: {
      title: "dom seniora pod debem",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus.",
      id: "project2",
      link: "https://domseniorapoddebem.pl/",
      image: { src: DomSeniora, alt: "strona Domu Seniora" },
    },
    project3: {
      title: "lotto machine",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus.",
      id: "project3",
      link: "https://kieratpawel.github.io/lotto-picker-react/",
      image: { src: LottoMachine, alt: "strona Lotto Machine" },
    },
    project4: {
      title: "github",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eaque nulla earum totam minima sint excepturi obcaecati, atque, assumenda dolorem quam illum natus.",
      id: "project4",
      link: "https://github.com/KieratPawel",
      image: { src: Github, alt: "strona Github" },
    },
  },
  contact: {
    sectionTitle: "Kontakt",
    phone: {
      number: "+48 692 798 454",
      image: { src: Contact2, alt: "telefon" },
    },
    mail: {
      address: "kierat.pawel@gmail.com",
      image: {
        src: Contact1,
        alt: "koperta",
      },
    },
    facebook: {
      name: "Paweł Kierat",
      link: "https://www.facebook.com/profile.php?id=100005792883108",
      image: {
        src: Contact3,
        alt: "facebook",
      },
    },
  },
};

export default config;
