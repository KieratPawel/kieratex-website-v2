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
        "Do tworzenia aplikacji wykorzystywane są najnowsze w branży technologie. W tym między innymi HTML5, CSS3, Vanilla JavaScript, a także SCSS, React, czy Git",
      id: "about1",
      image: { src: Services1, alt: "technologie" },
    },
    card2: {
      title: "Zoptymalizowane pod kątem wyszukiwarek internetowych",
      text:
        "Aplikacje są przygotowywane w taki sposób, aby wspierać pozycjonowanie stron w wyszukiwarkach, takich jak min. Google, czy Bing. W tym celu wykorzystywane są opisy oraz tagi.",
      id: "about2",
      image: { src: Services2, alt: "lupka Google" },
    },
    card3: {
      title: "W pełni responsywne, bez względu na typ urządzenia",
      text:
        "Grafiki oraz zawartość aplikacji są optymalizowane pod względem wymiarów, aby dobrze prezentować się na różnego typu urządzeniach - komputerach osobistych, tabletach, czy smartfonach.",
      id: "about1",
      image: { src: Services3, alt: "urządzenia elektroniczne" },
    },
  },
  projects: {
    sectionTitle: "Projekty",
    project1: {
      title: "Kieratex_v1",
      text:
        "Pierwszy projekt wykonany przez Kieratex. Prezentuje autora oraz jego ówczesne umiejętności. Aplikacja korzysta z takich technik jak HTML5, CSS oraz z biblioteki jQuery.",
      id: "project1",
      link: "https://kieratpawel.github.io/kieratex-website/",
      image: { src: Kieratex, alt: "strona Kieratex_v1" },
    },
    project2: {
      title: "dom seniora pod debem",
      text:
        "Pierwszy komercyjny projekt Kieratex, wykonany na zlecenie domu seniora 'Pod Dębem'. Strona promocyjna obiektu. Projekt wykorzystuje czysty JavaScript, SCSS.",
      id: "project2",
      link: "https://domseniorapoddebem.pl/",
      image: { src: DomSeniora, alt: "strona Domu Seniora" },
    },
    project3: {
      title: "lotto machine",
      text:
        "Lotto machine to aplikacja generująca liczby z zadanego przedziału. Projekt został wykonany przy użyciu React'a. Zastosowano w nim komponenty klasowe.",
      id: "project3",
      link: "https://kieratpawel.github.io/lotto-picker-react/",
      image: { src: LottoMachine, alt: "strona Lotto Machine" },
    },
    project4: {
      title: "github",
      text:
        "Repozytorium Kieratex zawierające kody źródłowe przygotowanych projektów. Dodatkowo znajdują się tam odnośniki, pod którymi można podejrzeć aplikacje w działaniu.",
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
