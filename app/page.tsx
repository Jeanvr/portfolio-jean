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
  "Accesibilidad",
  "Performance",
];

const valuePoints = [
  {
    title: "Interfaces listas para producto",
    description:
      "Trabajo jerarquia visual, componentes reutilizables y estados claros para que el frontend ayude al negocio.",
  },
  {
    title: "Criterio tecnico visible",
    description:
      "Cuido rendimiento, mantenibilidad y experiencia movil para que el portfolio no sea solo diseno, sino ejecucion real.",
  },
  {
    title: "Colaboracion con intencion",
    description:
      "Pienso como parte del equipo: diseno, producto y desarrollo tienen que verse alineados desde la primera entrega.",
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.18),transparent_22%),linear-gradient(180deg,#07111f_0%,#0b1729_55%,#08111d_100%)]" />

      <section className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start xl:items-center">
          <div className="max-w-3xl">
            
            <h1
              ref={titleRef}
              className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Jean Carlo Vega
              <span className="block bg-gradient-to-r from-emerald-300 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
                Frontend Developer enfocado en producto, UX y rendimiento.
              </span>
            </h1>

            <p
              ref={descriptionRef}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              {PersonalInfo.summary} Convierto ideas en interfaces claras,
              rapidas y preparadas para contratacion, validacion y crecimiento.
            </p>

            <div ref={tagsRef} className="mt-8 flex flex-wrap gap-3">
              {stack.filter((item) => item !== "Performance").map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
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
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-sky-300/40 hover:bg-white/10"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Contacto
              </Link>
              <Link
                href={PersonalInfo.resumePath}
                data-home-hover="true"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/80 px-5 py-3 font-semibold text-slate-100 transition hover:border-emerald-300/40 hover:bg-slate-800"
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
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10 hover:text-white"
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
            className="relative rounded-[32px] border border-white/10 bg-slate-900/75 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur"
          >
            <div className="flex items-center gap-4 border-b border-white/10 pb-5">
              <Image
                src="/me.jpg"
                alt="Retrato de Jean Carlo Vega"
                width={88}
                height={88}
                className="h-20 w-20 rounded-3xl border border-white/10 object-cover"
                priority
              />
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-sky-300/80">
                  Perfil profesional
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-white">
                  Frontend con foco en contratacion
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-semibold text-emerald-200">
                  Stack principal
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  React, Next.js, TypeScript, Tailwind CSS, Framer Motion y
                  buenas practicas de accesibilidad, rendimiento y responsive
                  design.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-semibold text-sky-200">
                  Propuesta de valor
                </p>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-300">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                    Interfaces claras que comunican mejor el producto.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                    Decisiones visuales con criterio tecnico y mantenimiento.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-200" />
                    Entregas orientadas a conversion, legibilidad y confianza.
                  </li>
                </ul>
              </div>

              <Link
                href="/my-projects"
                data-home-hover="true"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
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
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            >
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
