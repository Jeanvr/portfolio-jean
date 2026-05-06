import { RxClipboard, RxDashboard, RxHome, RxPerson } from "react-icons/rx";

export const PersonalInfo = {
  shortName: "Jean Carlo",
  fullName: "Jean Carlo Vega",
  role: "IT Developer | Frontend, Python y datos",
  email: "vega.jeancarlo@gmail.com",
  githubUrl: "https://github.com/Jeanvr",
  linkedinUrl: "https://www.linkedin.com/in/jeanvr/",
  resumePath: "/cv",
  summary:
    "Desarrollador IT enfocado en frontend moderno, automatización con Python y bases de datos.",
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
