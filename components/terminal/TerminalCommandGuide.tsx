"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import type { TerminalCommandGuideProps } from "./types";

const guideCommands = [
  {
    label: "About me",
    command: "about",
    description: "Short profile and what I build.",
  },
  {
    label: "Skills",
    command: "skills",
    description: "My main tech stack.",
  },
  {
    label: "Projects",
    command: "projects",
    description: "Real projects and automation work.",
  },
  {
    label: "Work style",
    command: "work",
    description: "How I solve practical problems.",
  },
  {
    label: "Contact",
    command: "contact",
    description: "Email, GitHub and LinkedIn.",
  },
  {
    label: "Change global theme",
    command: "theme",
    description: "Toggle light/dark mode.",
  },
  {
    label: "Matrix terminal",
    command: "theme matrix",
    description: "Hacker green terminal mode.",
  },
  {
    label: "Amber terminal",
    command: "theme amber",
    description: "Retro CRT terminal mode.",
  },
  {
    label: "Ice terminal",
    command: "theme ice",
    description: "Clean cyan terminal mode.",
  },
  {
    label: "Barcelona terminal",
    command: "theme barcelona",
    description: "Mediterranean terminal style.",
  },
  {
    label: "Reset terminal theme",
    command: "theme default",
    description: "Back to default Jean OS style.",
  },
];

const TerminalCommandGuide = ({ activeTheme, onRunCommand }: TerminalCommandGuideProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCommandClick = (command: string) => {
    onRunCommand(command);
    setIsOpen(false);
  };

  const ChevronIcon = isOpen ? ChevronUp : ChevronDown;

  return (
    <section className="relative mt-6 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] shadow-2xl shadow-slate-950/20 backdrop-blur">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="group flex w-full items-center justify-between gap-4 p-4 text-left transition hover:bg-white/[0.045] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20 sm:p-5"
      >
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">Command Guide</h3>
          <p className="mt-1 text-sm text-slate-400 group-hover:text-slate-300">Click commands without typing</p>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/45 text-slate-200 transition group-hover:border-white/20 group-hover:bg-white/[0.06]">
          <ChevronIcon aria-hidden="true" className="size-5" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <div className="grid gap-2 border-t border-white/10 p-3 sm:grid-cols-2 sm:p-4 xl:grid-cols-3">
              {guideCommands.map((item) => (
                <button
                  key={item.command}
                  type="button"
                  onClick={() => handleCommandClick(item.command)}
                  className="group min-h-20 rounded-2xl border border-white/10 bg-slate-950/45 p-3 text-left transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-white/20 sm:min-h-24"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-sm font-semibold text-slate-100">{item.label}</span>
                    <span className={activeTheme.chip}>{item.command}</span>
                  </span>
                  <span className="mt-2 block text-sm leading-5 text-slate-400 group-hover:text-slate-300">
                    {item.description}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default TerminalCommandGuide;
