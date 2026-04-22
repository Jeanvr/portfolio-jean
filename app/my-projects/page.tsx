import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Seleccion de proyectos preparados como prueba real de trabajo para hiring frontend: portfolio, scraping aplicado y una app frontend publica.",
};

const projects: ProjectCardProps[] = [
  {
    category: "Proyecto principal",
    title: "Portfolio 2026",
    summary:
      "Portfolio personal redisenado para funcionar como una landing de contratacion: comunica rol, stack, prueba de trabajo y formas de contacto sin depender de una explicacion extra.",
    problem:
      "El portfolio anterior mostraba estilo visual, pero no ayudaba a entender rapido quien soy, que tipo de frontend hago y por que deberian entrevistarme.",
    solution:
      "Replantee la home, la navegacion y el contenido para priorizar posicionamiento profesional, claridad de copy, responsive real y llamadas a la accion utiles para recruiters.",
    stack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "EmailJS"],
    technicalChallenge:
      "Equilibrar identidad visual con legibilidad, estructura semantica y una experiencia movil mas abierta, sin caer en una home generica o sobrecargada.",
    result:
      "Ahora el proyecto funciona como una pieza de conversion: presenta rol, stack, contacto, CV y proyectos destacados con una lectura mucho mas rapida.",
    demoUrl: "/",
    repoUrl: "https://github.com/Jeanvr/portfolio-jean",
    year: "2026",
    demoLabel: "Ver demo",
    demoExternal: false,
  },
  {
    category: "Automatizacion aplicada",
    title: "Supplier Scraper",
    summary:
      "Flujo de scraping y resolucion documental para proveedores que cruza datos desde Excel, localiza fichas tecnicas y catalogos, descarga assets y genera reportes listos para operacion.",
    problem:
      "Revisar catalogos de proveedores, encontrar documentos correctos y emparejarlos manualmente con hojas de calculo es lento, repetitivo y propenso a errores.",
    solution:
      "Construccion de una pipeline en Python que resuelve documentos por proveedor, genera salidas estructuradas y automatiza parte del trabajo de matching y descarga.",
    stack: ["Python", "Scrapy", "pandas", "openpyxl", "Pillow", "parsel"],
    technicalChallenge:
      "Normalizar fuentes heterogeneas, mantener estados de resolucion reproducibles y generar salidas utiles para negocio en JSONL, reportes Excel y carpetas de imagenes y PDFs.",
    result:
      "El proyecto demuestra capacidad de automatizacion real y pensamiento de producto: menos trabajo manual, mas trazabilidad y un proceso repetible para ampliar catalogos.",
    demoUrl: "/contact-me",
    repoUrl: "https://github.com/Jeanvr/supplier-scrapi",
    year: "2026",
    demoLabel: "Solicitar demo",
    demoExternal: false,
    note: "No hay demo publica porque es una herramienta orientada a flujo interno y datos de trabajo.",
  },
  {
    category: "Frontend publico",
    title: "Examen El Mundo Today",
    summary:
      "Aplicacion frontend en React y TypeScript con routing y estilos propios para presentar contenido de forma ligera, clara y navegable desde una base moderna en Vite.",
    problem:
      "Necesitaba una app frontend que demostrara maquetacion, estructura de paginas, navegacion entre vistas y capacidad para montar una UI coherente sin depender de un framework visual pesado.",
    solution:
      "Desarrollo de una SPA con React Router y Styled Components, separando vistas y estilos para construir una experiencia mas ordenada y facil de evolucionar.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Styled Components",
    ],
    technicalChallenge:
      "Mantener la app simple pero escalable, organizando rutas, paginas y estilos desde cero y sosteniendo una base tipada para seguir iterando sin caos.",
    result:
      "La demo publica sirve como prueba util de ejecucion frontend: routing, composicion de interfaz y una experiencia que puede revisarse rapidamente en navegador.",
    demoUrl: "http://apielmundotoday.cat/",
    repoUrl: "https://github.com/Jeanvr/ExamenElMundoToday",
    year: "2024",
    demoLabel: "Ver demo",
  },
];

const proofPoints = [
  "Cada proyecto responde a las preguntas que un recruiter tecnico suele hacerse: que problema resuelve, como esta construido y que demuestra sobre ti.",
  "La seleccion mezcla una pieza de marca personal, una automatizacion aplicada y una app frontend publica para mostrar rango sin diluir el foco principal.",
  "Los enlaces priorizan conversion: demo cuando aporta revision rapida y repositorio cuando conviene validar implementacion o stack.",
];

const Page = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Reveal
        as="section"
        className="rounded-[32px] border border-white/10 bg-slate-900/75 p-8 shadow-2xl shadow-slate-950/25 backdrop-blur"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
          Proyectos
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold text-white sm:text-5xl">
          Prueba real de trabajo para procesos de hiring frontend
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          Esta seccion ya no funciona como una galeria. Ahora presenta proyectos
          que ayudan a validar como pienso producto, como resuelvo problemas y
          como convierto tecnologia en entregables utiles.
        </p>
      </Reveal>

      <Reveal
        as="section"
        className="mt-6 grid gap-4 lg:grid-cols-3"
        delay={0.06}
      >
        {proofPoints.map((point) => (
          <article
            key={point}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
          >
            <p className="text-sm leading-7 text-slate-300">{point}</p>
          </article>
        ))}
      </Reveal>

      <section className="mt-6 space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </main>
  );
};

export default Page;
