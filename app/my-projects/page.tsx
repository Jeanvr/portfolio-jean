import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Selección de proyectos de frontend moderno, automatización con Python y aplicaciones web.",
};

const projects: ProjectCardProps[] = [
  {
    category: "Proyecto principal",
    title: "Portfolio 2026",
    summary:
      "Portfolio personal rediseñado como pieza de frontend moderno: comunica perfil IT, stack, proyectos, CV y contacto profesional con una experiencia visual cuidada.",
    problem:
      "El portfolio anterior mostraba estilo visual, pero no ayudaba a entender rápido mi posición actual, qué tipo de tecnología aplico y cómo puedo aportar valor.",
    solution:
      "Replanteé la home, la navegación, el contenido y la experiencia visual para priorizar posicionamiento profesional, claridad de copy, responsive real y llamadas a la acción útiles.",
    stack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "EmailJS"],
    technicalChallenge:
      "Equilibrar identidad visual con legibilidad, estructura semantica y una experiencia movil mas abierta, sin caer en una home generica o sobrecargada.",
    result:
      "Ahora el proyecto presenta el perfil, stack, contacto, CV y proyectos destacados con una lectura más rápida y un tono profesional menos agresivo.",
    demoUrl: "/",
    repoUrl: "https://github.com/Jeanvr/portfolio-jean",
    year: "2026",
    demoLabel: "Ver demo",
    demoExternal: false,
  },
  {
    category: "Automatizacion aplicada",
    title: "supplier-scrapi",
    summary:
      "Automatización real con Python para scraping, gestión de datos y documentación de proveedores: cruza información desde Excel, localiza fichas técnicas y catálogos, descarga assets y genera reportes.",
    problem:
      "Revisar catalogos de proveedores, encontrar documentos correctos y emparejarlos manualmente con hojas de calculo es lento, repetitivo y propenso a errores.",
    solution:
      "Construcción de una pipeline en Python que resuelve documentación por proveedor, genera salidas estructuradas y automatiza parte del matching, descarga y revisión de datos.",
    stack: ["Python", "Scrapy", "pandas", "openpyxl", "Pillow", "parsel"],
    technicalChallenge:
      "Normalizar fuentes heterogeneas, mantener estados de resolucion reproducibles y generar salidas utiles para negocio en JSONL, reportes Excel y carpetas de imagenes y PDFs.",
    result:
      "El proyecto demuestra automatización aplicada a un flujo de trabajo real: menos revisión manual, más trazabilidad y un proceso repetible para gestionar documentación de proveedores.",
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
      "Proyecto web/app con React y TypeScript, routing y estilos propios para presentar contenido de forma ligera, clara y navegable desde una base moderna en Vite.",
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
  "Cada proyecto explica qué problema resuelve, cómo está construido y qué valor técnico demuestra.",
  "La selección mezcla marca personal, automatización aplicada con Python y una app frontend pública para mostrar rango sin diluir el foco.",
  "Los enlaces priorizan conversación profesional: demo cuando aporta revisión rápida y repositorio cuando conviene validar implementación o stack.",
];

const Page = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Reveal
        as="section"
        className="rounded-[32px] border border-slate-200 bg-white/85 p-8 shadow-2xl shadow-slate-200/70 backdrop-blur dark:border-white/10 dark:bg-slate-900/75 dark:shadow-slate-950/25"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300/80">
          Proyectos
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">
          Proyectos que conectan frontend, automatización y problemas reales
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
          Esta sección presenta proyectos que ayudan a validar cómo pienso,
          cómo resuelvo problemas y cómo convierto tecnología en entregables
          útiles: desde frontend moderno hasta automatización con Python.
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
            className="rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none"
          >
            <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{point}</p>
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
