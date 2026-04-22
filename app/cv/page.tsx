import type { Metadata } from "next";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PersonalInfo, SkillData } from "@/constants";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Resumen profesional de Jean Carlo Vega como Frontend Developer.",
};

const strengths = [
  "Interfaces modernas con foco en claridad visual y responsive design.",
  "Desarrollo con React, Next.js y TypeScript orientado a mantenimiento.",
  "Atencion a accesibilidad, rendimiento y experiencia de usuario real.",
];

export default function CvPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <Reveal
        as="section"
        className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
          CV
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
          {PersonalInfo.fullName}
        </h1>
        <p className="mt-2 text-xl text-sky-200">{PersonalInfo.role}</p>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          {PersonalInfo.summary} Esta version resume el perfil profesional que
          acompana al portfolio y sirve como punto de entrada rapido para
          procesos de seleccion.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/my-projects"
            className="rounded-full bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Ver proyectos
          </Link>
          <Link
            href="/contact-me"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Contacto
          </Link>
        </div>
      </Reveal>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <Reveal
          as="article"
          className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
        >
          <h2 className="text-xl font-semibold text-white">Perfil</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            {strengths.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          as="article"
          className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
          delay={0.04}
        >
          <h2 className="text-xl font-semibold text-white">Stack principal</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {SkillData.map((skill) => (
              <span
                key={skill.name}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="article"
          className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
          delay={0.08}
        >
          <h2 className="text-xl font-semibold text-white">Como aporto</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Me interesa construir productos que se entiendan rapido, se sientan
            bien en movil y transmitan confianza. El objetivo no es solo que la
            interfaz se vea bien, sino que ayude a cerrar oportunidades.
          </p>
        </Reveal>

        <Reveal
          as="article"
          className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
          delay={0.12}
        >
          <h2 className="text-xl font-semibold text-white">Contacto</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <a
              href={`mailto:${PersonalInfo.email}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>{PersonalInfo.email}</span>
            </a>
            <a
              href={PersonalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span>GitHub</span>
              <ArrowUpRight className="ml-auto h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={PersonalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              <span>LinkedIn</span>
              <ArrowUpRight className="ml-auto h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
