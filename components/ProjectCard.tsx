"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { gsap, prefersReducedMotion, setupGsap, useGSAP } from "@/lib/gsap";

export interface ProjectCardProps {
  category: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  technicalChallenge: string;
  result: string;
  demoUrl: string;
  repoUrl: string;
  year: string;
  demoLabel?: string;
  demoExternal?: boolean;
  repoExternal?: boolean;
  note?: string;
}

const ActionLink = ({
  href,
  label,
  variant,
  external = false,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary";
  external?: boolean;
}) => {
  const className =
    variant === "primary"
      ? "inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
      : "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10";

  const content = (
    <>
      <span>{label}</span>
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
};

const ProjectCard = ({
  category,
  title,
  summary,
  problem,
  solution,
  stack,
  technicalChallenge,
  result,
  demoUrl,
  repoUrl,
  year,
  demoLabel = "Ver demo",
  demoExternal = true,
  repoExternal = true,
  note,
}: ProjectCardProps) => {
  const articleRef = useRef<HTMLElement | null>(null);
  const yearRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      setupGsap();

      const card = articleRef.current;

      if (!card || prefersReducedMotion()) {
        return;
      }

      const stackItems = Array.from(stackRef.current?.children ?? []);
      const actionItems = Array.from(actionsRef.current?.children ?? []);

      gsap.fromTo(
        card,
        {
          autoAlpha: 0,
          y: 34,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 84%",
            once: true,
          },
        },
      );

      const hoverTimeline = gsap
        .timeline({
          paused: true,
          defaults: {
            duration: 0.26,
            ease: "power2.out",
          },
        })
        .to(
          card,
          {
            y: -10,
            scale: 1.005,
            boxShadow: "0 24px 60px rgba(2, 6, 23, 0.28)",
          },
          0,
        )
        .to(
          yearRef.current,
          {
            y: -2,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          },
          0,
        )
        .to(
          actionItems,
          {
            y: -2,
            stagger: 0.04,
          },
          0.02,
        )
        .to(
          stackItems,
          {
            y: -2,
            stagger: 0.015,
          },
          0.04,
        );

      const handleEnter = () => {
        hoverTimeline.play();
      };

      const handleLeave = () => {
        hoverTimeline.reverse();
      };

      const handleFocusOut = (event: FocusEvent) => {
        const nextTarget = event.relatedTarget;

        if (!(nextTarget instanceof Node) || !card.contains(nextTarget)) {
          hoverTimeline.reverse();
        }
      };

      card.addEventListener("pointerenter", handleEnter);
      card.addEventListener("pointerleave", handleLeave);
      card.addEventListener("focusin", handleEnter);
      card.addEventListener("focusout", handleFocusOut);

      return () => {
        card.removeEventListener("pointerenter", handleEnter);
        card.removeEventListener("pointerleave", handleLeave);
        card.removeEventListener("focusin", handleEnter);
        card.removeEventListener("focusout", handleFocusOut);
      };
    },
    { scope: articleRef },
  );

  return (
    <article
      ref={articleRef}
      className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-8"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
              {category}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
              {summary}
            </p>
          </div>

          <div
            ref={yearRef}
            className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
          >
            {year}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/80">
              Problema
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{problem}</p>
          </section>

          <section className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/80">
              Solucion
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{solution}</p>
          </section>

          <section className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/80">
              Reto tecnico
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {technicalChallenge}
            </p>
          </section>

          <section className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/80">
              Resultado
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{result}</p>
          </section>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-slate-950/40 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/80">
            Stack
          </p>
          <div ref={stackRef} className="mt-4 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm text-slate-300">
              Cada enlace esta pensado para facilitar revision tecnica y
              validacion rapida durante procesos de seleccion.
            </p>
            {note ? <p className="text-sm text-amber-200/80">{note}</p> : null}
          </div>

          <div ref={actionsRef} className="flex flex-wrap gap-3">
            <ActionLink
              href={demoUrl}
              label={demoLabel}
              variant="primary"
              external={demoExternal}
            />
            <ActionLink
              href={repoUrl}
              label="Ver repositorio"
              variant="secondary"
              external={repoExternal}
            />
          </div>
        </div>

        <div className="border-t border-white/10 pt-5">
          <a
            href={repoUrl}
            target={repoExternal ? "_blank" : undefined}
            rel={repoExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span>Repositorio de referencia para revisar implementacion</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
