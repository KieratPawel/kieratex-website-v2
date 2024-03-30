import Face from "./images/face.png";
import Services1 from "./images/services1.png";
import Services2 from "./images/services2.png";
import Services3 from "./images/services3.png";
import Kieratex from "./images/kieratex.jpg";
import DomSeniora from "./images/dom-seniora.jpg";
import Github from "./images/github.jpg";
import Patshop from "./images/patshop.png";
import Oromed from "./images/oromed.png";
import Ecoflow from "./images/ecoflow.png";
import Royal from "./images/royal_stone.png";
import Shibushi from "./images/shibushi.png";
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
    image: { src: Face, alt: "Twarz Kieratex" },
  },
  about: {
    sectionTitle: "Tworzymy wyjątkowe strony internetowe",
    cardsArray: [
      {
        title: "Wykonane w zgodzie z aktualnymi standardami",
        text:
          "Do tworzenia aplikacji wykorzystywane są najnowsze w branży technologie. W tym między innymi HTML5, CSS3, Vanilla JavaScript, a także SCSS, React, czy Git",
        id: "about1",
        image: { src: Services1, alt: "technologie" },
      },
      {
        title: "Zoptymalizowane pod kątem wyszukiwarek internetowych",
        text:
          "Aplikacje są przygotowywane w taki sposób, aby wspierać pozycjonowanie stron w wyszukiwarkach, takich jak min. Google, czy Bing. W tym celu wykorzystywane są opisy oraz tagi.",
        id: "about2",
        image: { src: Services2, alt: "lupka Google" },
      },
      {
        title: "W pełni responsywne, bez względu na typ urządzenia",
        text:
          "Grafiki oraz zawartość aplikacji są optymalizowane pod względem wymiarów, aby dobrze prezentować się na różnego typu urządzeniach - komputerach osobistych, tabletach, czy smartfonach.",
        id: "about1",
        image: { src: Services3, alt: "urządzenia elektroniczne" },
      }
    ],
  },
  projects: {
    sectionTitle: "Projekty",
    projectsArray: [
      {
        title: "github",
        text:
          "Repozytorium Kieratex zawierające kody źródłowe przygotowanych projektów. Dodatkowo znajdują się tam odnośniki, pod którymi można podejrzeć aplikacje w działaniu.",
        id: "project1",
        link: "https://github.com/KieratPawel",
        image: { src: Github, alt: "strona Github" },
      },
      {
        title: "Kieratex_v1",
        text:
          "Pierwszy projekt wykonany przez Kieratex. Prezentuje autora oraz jego ówczesne umiejętności.",
        id: "project2",
        link: "https://kieratpawel.github.io/kieratex-website/",
        image: { src: Kieratex, alt: "strona Kieratex_v1" },
      },
      {
        title: "dom seniora pod debem",
        text:
          "Pierwszy komercyjny projekt Kieratex, wykonany na zlecenie domu seniora 'Pod Dębem'. Strona promocyjna obiektu.",
        id: "project3",
        link: "https://domseniorapoddebem.pl/",
        image: { src: DomSeniora, alt: "strona Domu Seniora" },
      },
      {
        title: "patshop",
        text:
          "Sklep internetowy z branży odzieżowej. Oferuje swoim klientom odzież hip hop, skate czy streetwear.",
        id: "project4",
        link: "https://patshop.pl/",
        image: { src: Patshop, alt: "sklep patshop" },
      },
      {
        title: "royal stone",
        text:
          "Sklep internetowy z półfabrykatami do tworzenia biżuterii handmade.",
        id: "project5",
        link: "https://royal-stone.pl/",
        image: { src: Royal, alt: "sklep royal stone" },
      },
      {
        title: "oromed",
        text:
          "Oromed.pl - sklep producenta wysokiej jakości sprzętu medycznego marki Oromed",
        id: "project6",
        link: "https://oromed.pl/",
        image: { src: Oromed, alt: "sklep oromed" },
      },
      {
        title: "ecoflow",
        text:
          "Oficjalny sklep marki EcoFlow. Oferujący przenośne stacje zasilania, banki i magazyny energii, panele fotowoltaiczne, inteligentne urządzenia i akcesoria.",
        id: "project7",
        link: "https://sklep.ecoflow.com.pl/",
        image: { src: Ecoflow, alt: "sklep ecoflow" },
      },
      {
        title: "shibushi",
        text:
          "Dynamicznie rozwijający się sklep internetowy z branży beaty. Oferujący kosmetyki koreańskie.",
        id: "project8",
        link: "https://shibushi.pl/",
        image: { src: Shibushi, alt: "sklep shibushi" },
      }
    ],
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
    successMessage: "Wiadomość wysłana",
    errorMessage: "Wprowadź poprawne dane",
    emailPlaceholder: "Twój email",
    textareaPlaceholder: "Twoja wiadomość",
    buttonForm: "Wyślij wiadomość",
  },
};

export default config;