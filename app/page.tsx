"use client";

import {
  ArrowRight,
  FileText,
  FolderKanban,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Reveal from "@/components/Reveal";
import { PersonalInfo } from "@/constants";
import { bindHoverLift, gsap, prefersReducedMotion, setupGsap, useGSAP } from "@/lib/gsap";

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "Bases de datos",
  "Automatización",
];

const valuePoints = [
  {
    title: "Frontend moderno",
    description:
      "Construyo interfaces claras con React, Next.js, TypeScript y Tailwind, cuidando UX, mantenimiento y responsive real.",
  },
  {
    title: "Automatización y datos",
    description:
      "Aplico Python, scraping, bases de datos y flujos de datos para reducir tareas manuales y ordenar información útil para negocio.",
  },
  {
    title: "Problemas reales de negocio",
    description:
      "Trabajo desde IT dando soporte a procesos internos, conectando tecnología con necesidades concretas de operación.",
  },
];

const quickLinks = [
  {
    label: "GitHub",
    href: PersonalInfo.githubUrl,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: PersonalInfo.linkedinUrl,
    icon: Linkedin,
  },
  {
    label: PersonalInfo.email,
    href: `mailto:${PersonalInfo.email}`,
    icon: Mail,
  },
];

export default function Home() {
  const rootRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const tagsRef = useRef<HTMLDivElement | null>(null);
  const ctasRef = useRef<HTMLDivElement | null>(null);
  const quickLinksRef = useRef<HTMLDivElement | null>(null);
  const asideRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      setupGsap();

      const hoverTargets = gsap.utils.toArray<HTMLElement>("[data-home-hover]");
      const cleanupHover = bindHoverLift(hoverTargets, {
        y: -4,
        scale: 1.012,
        boxShadow: "0 18px 40px rgba(2, 6, 23, 0.22)",
      });

      if (prefersReducedMotion()) {
        return () => {
          cleanupHover();
        };
      }

      const tagItems = Array.from(tagsRef.current?.children ?? []);
      const ctaItems = Array.from(ctasRef.current?.children ?? []);
      const quickLinkItems = Array.from(quickLinksRef.current?.children ?? []);

      gsap
        .timeline({
          defaults: {
            ease: "power3.out",
          },
        })
        .from(titleRef.current, {
          y: 34,
          autoAlpha: 0,
          duration: 0.82,
        })
        .from(
          descriptionRef.current,
          {
            y: 22,
            autoAlpha: 0,
            duration: 0.68,
          },
          "-=0.48",
        )
        .from(
          tagItems,
          {
            y: 18,
            autoAlpha: 0,
            duration: 0.44,
            stagger: 0.05,
          },
          "-=0.38",
        )
        .from(
          ctaItems,
          {
            y: 16,
            autoAlpha: 0,
            duration: 0.48,
            stagger: 0.06,
          },
          "-=0.3",
        )
        .from(
          quickLinkItems,
          {
            y: 14,
            autoAlpha: 0,
            duration: 0.4,
            stagger: 0.05,
          },
          "-=0.28",
        )
        .from(
          asideRef.current,
          {
            y: 28,
            autoAlpha: 0,
            scale: 0.985,
            duration: 0.82,
          },
          "<0.14",
        );

      return () => {
        cleanupHover();
      };
    },
    { scope: rootRef },
  );

  return (
    <main ref={rootRef} className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.14),transparent_22%),linear-gradient(180deg,#f8fafc_0%,#eef8ff_55%,#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.18),transparent_22%),linear-gradient(180deg,#07111f_0%,#0b1729_55%,#08111d_100%)]" />

      <section className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start xl:items-center">
          <div className="max-w-3xl">
            
            <h1
              ref={titleRef}
              className="max-w-4xl text-4xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl"
            >
              Jean Carlo Vega
              <span className="block bg-gradient-to-r from-emerald-300 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
                Frontend moderno, automatización con Python y bases de datos.
              </span>
            </h1>

            <p
              ref={descriptionRef}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300 sm:text-xl"
            >
              {PersonalInfo.summary} Actualmente trabajo en IT en una
              distribuidora con varias sedes en Catalunya, donde aplico Python,
              gestión de datos y automatización para resolver problemas reales
              de negocio.
            </p>

            <div ref={tagsRef} className="mt-8 flex flex-wrap gap-3">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:shadow-none"
                >
                  {item}
                </span>
              ))}
            </div>

            <div ref={ctasRef} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/my-projects"
                data-home-hover="true"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                <FolderKanban className="h-5 w-5" aria-hidden="true" />
                Ver proyectos
              </Link>
              <Link
                href="/contact-me"
                data-home-hover="true"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 font-semibold text-slate-800 transition hover:border-sky-500/40 hover:bg-sky-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-sky-300/40 dark:hover:bg-white/10"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Contactar
              </Link>
              <Link
                href={PersonalInfo.resumePath}
                data-home-hover="true"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-950 px-5 py-3 font-semibold text-white transition hover:border-emerald-500/40 hover:bg-slate-800 dark:border-white/15 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-emerald-300/40"
              >
                <FileText className="h-5 w-5" aria-hidden="true" />
                Ver CV
              </Link>
            </div>

            <div ref={quickLinksRef} className="mt-10 flex flex-wrap gap-3">
              {quickLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    data-home-hover="true"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm transition hover:border-cyan-500/40 hover:bg-cyan-50 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:shadow-none dark:hover:border-cyan-300/40 dark:hover:bg-white/10 dark:hover:text-white"
                    {...(item.href.startsWith("http")
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <aside
            ref={asideRef}
            className="relative rounded-[32px] border border-slate-200 bg-white/85 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur dark:border-white/10 dark:bg-slate-900/75 dark:shadow-cyan-950/20"
          >
            <div className="flex items-center gap-4 border-b border-slate-200 pb-5 dark:border-white/10">
              <Image
                src="/me.jpg"
                alt="Retrato de Jean Carlo Vega"
                width={88}
                height={88}
                className="h-20 w-20 rounded-3xl border border-slate-200 object-cover dark:border-white/10"
                priority
              />
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300/80">
                  Perfil profesional
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-950 dark:text-white">
                  IT con foco práctico
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-200">
                  Trabajo actual
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  IT en una distribuidora con varias sedes en Catalunya,
                  trabajando con datos, Python, automatización y soporte a
                  procesos internos.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-sm font-semibold text-sky-700 dark:text-sky-200">
                  Propuesta de valor
                </p>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                    Frontend moderno con criterio de UX y mantenimiento.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                    Automatización, scraping y flujos de datos con Python.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-200" />
                    Herramientas internas para resolver problemas operativos.
                  </li>
                </ul>
              </div>

              <Link
                href="/my-projects"
                data-home-hover="true"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-600 dark:text-emerald-200 dark:hover:text-emerald-100"
              >
                Ver trabajo destacado
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Reveal
        as="section"
        className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {valuePoints.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none"
            >
              <p className="text-lg font-semibold text-slate-950 dark:text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
