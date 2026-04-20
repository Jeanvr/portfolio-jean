import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Seleccion de proyectos de frontend y UI desarrollados por Jean Carlo Vega.",
};

const Page = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
          Proyectos
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
          Trabajo visual con enfoque frontend
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          Esta seleccion muestra el tipo de interfaces, direccion visual y
          ejecucion que quiero llevar a producto: experiencias claras, modernas
          y cuidadas tanto en escritorio como en movil.
        </p>
      </section>

      <section className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.text}
            image={project.src}
          />
        ))}
      </section>
    </main>
  );
};

export default Page;
