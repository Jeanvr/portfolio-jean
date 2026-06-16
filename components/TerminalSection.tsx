"use client";

import { motion } from "framer-motion";
import { Database, Mail, MapPin, Server, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { PersonalInfo } from "@/constants";

type Theme = "light" | "dark";

type TerminalLine = {
  id: number;
  command?: string;
  response: string[];
};

const PROMPT = "jean@portfolio:~$";

const commandChips = ["help", "skills", "projects", "contact", "theme"];

const systemBadges = [
  "Linux daily driver",
  "Python automation",
  "Database workflows",
  "Barcelona ops mindset",
  "Ecommerce reality checks",
  "Moto, car and GoPro energy",
];

const signalCards = [
  {
    icon: Server,
    label: "Automation",
    value: "Scripts that remove repetitive work, not excuses.",
  },
  {
    icon: Database,
    label: "Data",
    value: "SQL, clean flows and business-readable outputs.",
  },
  {
    icon: MapPin,
    label: "Context",
    value: "Barcelona, ecommerce, internal IT and real operations.",
  },
];

const bootLines = [
  "Booting Jean OS Terminal...",
  "Kernel: practical-engineering-6.16 loaded.",
  "Modules: linux, python, databases, ecommerce, frontend.",
  "Type help to inspect the system.",
];

const getCurrentTheme = (): Theme => {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

const applyNextTheme = () => {
  const nextTheme: Theme = getCurrentTheme() === "dark" ? "light" : "dark";

  localStorage.setItem("portfolio-theme", nextTheme);
  document.documentElement.classList.toggle("dark", nextTheme === "dark");
  document.documentElement.style.colorScheme = nextTheme;
  window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: { theme: nextTheme } }));

  return nextTheme;
};

const resolveCommand = (command: string) => {
  switch (command) {
    case "help":
      return [
        "Available commands:",
        "help     Show the command list",
        "about    Explain who Jean is and what he builds",
        "skills   Show the core technical stack",
        "projects Highlight practical project directions",
        "work     Describe the way Jean approaches real work",
        "contact  Print reliable contact channels",
        "theme    Toggle light/dark mode across the portfolio",
        "clear    Reset the terminal output",
      ];
    case "about":
      return [
        `${PersonalInfo.fullName} - ${PersonalInfo.role}.`,
        "I connect modern frontend, Python automation and databases to solve operational problems that actually exist.",
        "The goal is simple: useful systems, clean handoffs and less manual chaos.",
      ];
    case "skills":
      return [
        "Core stack: React, Next.js, TypeScript, Tailwind CSS, Python, SQL and Linux.",
        "Useful extras: scraping, Excel-heavy workflows, automation scripts and database cleanup.",
        "I prefer tools that survive contact with real users, messy data and Monday morning deadlines.",
      ];
    case "projects":
      return [
        "supplier-scrapi: Python automation for supplier documentation and structured data.",
        "portfolio-jean: Next.js portfolio with responsive UI, theme control and contact flow.",
        "ecommerce-assets: practical workflows for product assets, data and internal operations.",
      ];
    case "work":
      return [
        "Current mode: IT, databases, ecommerce assets and automation for a multi-site distributor in Catalunya.",
        "Working style: understand the process first, automate the boring parts second, document the result third.",
        "Personality layer: calm under pressure, but allergic to vague requirements and copy-paste systems.",
      ];
    case "contact":
      return [
        `Email: ${PersonalInfo.email}`,
        `GitHub: ${PersonalInfo.githubUrl}`,
        `LinkedIn: ${PersonalInfo.linkedinUrl}`,
      ];
    case "theme": {
      if (typeof window === "undefined") {
        return ["Theme control is available in the browser."];
      }

      const nextTheme = applyNextTheme();

      return [`Theme switched to ${nextTheme}. UI state synchronized.`];
    }
    case "":
      return [];
    default:
      return [`command not found: ${command}. Type "help".`];
  }
};

const TerminalSection = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const historyRef = useRef<HTMLDivElement | null>(null);
  const nextLineIdRef = useRef(2);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 1,
      response: bootLines,
    },
  ]);

  useEffect(() => {
    historyRef.current?.scrollTo({
      top: historyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const runCommand = (rawCommand: string) => {
    const displayCommand = rawCommand.trim();
    const command = displayCommand.toLowerCase();

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    setHistory((currentHistory) => [
      ...currentHistory,
      {
        id: nextLineIdRef.current++,
        command: displayCommand,
        response: resolveCommand(command),
      },
    ]);
    setInput("");
  };

  const executeCommand = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runCommand(input);
  };

  return (
    <section id="jean-os" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[34px] border border-emerald-300/20 bg-slate-950 p-4 shadow-2xl shadow-emerald-950/30 ring-1 ring-white/10 sm:p-6 lg:p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.22),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(14,165,233,0.18),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.2),rgba(2,6,23,0.9))]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(52,211,153,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.7)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-emerald-300/10 to-transparent" />

        <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.35fr] lg:items-stretch">
          <div className="flex flex-col justify-between gap-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
                <Terminal className="h-4 w-4" aria-hidden="true" />
                Integrated Shell
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Jean OS Terminal
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Automation, Linux, databases and real projects.
              </p>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                A focused command center for the practical side of my work: scripts that save time,
                data that makes sense, and interfaces that do not collapse when reality gets messy.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {signalCards.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/30"
                  >
                    <div className="flex items-center gap-3 text-emerald-200">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      <p className="font-mono text-xs uppercase tracking-[0.2em]">{item.label}</p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{item.value}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative flex min-h-[560px] flex-col overflow-hidden rounded-[28px] border border-emerald-300/20 bg-[#020817] shadow-2xl shadow-emerald-950/40">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3 sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-mono text-sm font-semibold text-emerald-100">
                    jean-os --interactive
                  </p>
                  <p className="truncate text-xs text-slate-500">secure local session / portfolio runtime</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 font-mono text-xs text-emerald-200">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" aria-hidden="true" />
                online
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-b border-white/10 bg-slate-950/70 px-4 py-3 sm:px-5">
              {commandChips.map((command) => (
                <button
                  key={command}
                  type="button"
                  onClick={() => {
                    runCommand(command);
                    inputRef.current?.focus();
                  }}
                  className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 font-mono text-xs font-semibold text-emerald-100 transition hover:border-emerald-200/50 hover:bg-emerald-300/20 focus:outline-none focus:ring-2 focus:ring-emerald-300/50"
                >
                  {command}
                </button>
              ))}
            </div>

            <div
              ref={historyRef}
              className="relative flex-1 overflow-y-auto px-4 py-5 font-mono text-sm leading-7 text-emerald-100 sm:px-6"
              onMouseDown={() => inputRef.current?.focus()}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(16,185,129,0.04)_50%,transparent_100%)]" />
              {history.map((line) => (
                <div key={line.id} className="relative mb-5">
                  {line.command !== undefined ? (
                    <p className="break-words text-emerald-300">
                      <span className="text-slate-500">{PROMPT}</span> {line.command}
                    </p>
                  ) : null}
                  {line.response.map((responseLine) => (
                    <p key={`${line.id}-${responseLine}`} className="break-words text-slate-200">
                      {responseLine}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 bg-slate-900/90 px-4 py-4 sm:px-6">
              <form onSubmit={executeCommand}>
                <label htmlFor="jean-os-command" className="sr-only">
                  Terminal command
                </label>
                <div className="flex items-center gap-2 font-mono text-sm text-emerald-300">
                  <span className="shrink-0 text-slate-500">{PROMPT}</span>
                  <input
                    ref={inputRef}
                    id="jean-os-command"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="help"
                    autoComplete="off"
                    className="min-w-0 flex-1 bg-transparent text-emerald-100 caret-emerald-300 outline-none placeholder:text-slate-600"
                  />
                  <span className="h-5 w-2 animate-pulse rounded-sm bg-emerald-300/80" aria-hidden="true" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="relative mt-5 flex flex-wrap gap-2">
          {systemBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
              {badge}
            </span>
          ))}
          <a
            href={`mailto:${PersonalInfo.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-xs font-semibold text-sky-100 transition hover:border-sky-200/50 hover:bg-sky-300/20"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            Open a real conversation
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-xs font-medium text-amber-100">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Built for signal, not noise
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default TerminalSection;
