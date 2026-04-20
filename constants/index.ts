import { RxClipboard, RxDashboard, RxHome, RxPerson } from "react-icons/rx";

export const PersonalInfo = {
  shortName: "Jean Carlo",
  fullName: "Jean Carlo Vega",
  role: "Frontend Developer",
  email: "vega.jeancarlo@gmail.com",
  githubUrl: "https://github.com/Jeanvr",
  linkedinUrl:
    "https://www.linkedin.com/search/results/all/?keywords=Jean%20Carlo%20Vega",
  resumePath: "/cv",
  summary:
    "Desarrollo interfaces modernas con React, Next.js y TypeScript, priorizando claridad visual, accesibilidad, rendimiento y mantenimiento.",
};

export const MainNavLinks = [
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Habilidades",
    link: "/my-skills",
  },
  {
    name: "Proyectos",
    link: "/my-projects",
  },
  {
    name: "Contacto",
    link: "/contact-me",
  },
  {
    name: "CV",
    link: "/cv",
  },
];

export const SkillData = [
  {
    name: "HTML5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "CSS",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind CSS",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next.js",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Stripe",
    Image: "/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Node.js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "MongoDB",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Projects = [
  {
    title: "Website corporativo con Next.js",
    text: "Landing moderna centrada en jerarquia visual, componentes reutilizables y una navegacion pensada para convertir visitas en oportunidades.",
    src: "/NextWebsite.png",
  },
  {
    title: "Experiencia visual tematica espacial",
    text: "Proyecto de interfaz con narrativa fuerte, animaciones suaves y una direccion de arte enfocada en destacar la marca sin perder usabilidad.",
    src: "/SpaceWebsite.png",
  },
  {
    title: "Portfolio personal con enfoque UI",
    text: "Sitio orientado a marca personal, rendimiento y presentacion clara del trabajo para facilitar procesos de seleccion y validacion tecnica.",
    src: "/WebPortfolio.png",
  },
  {
    title: "Landing experimental estilo Matrix",
    text: "Exploracion visual con microinteracciones, contraste alto y una identidad digital reconocible para campanas o productos creativos.",
    src: "/Matrix.png",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
