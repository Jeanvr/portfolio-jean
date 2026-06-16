import { PersonalInfo } from "@/constants";

import { terminalThemes, isTerminalTheme } from "./terminalThemes";
import type { TerminalTheme, Theme } from "./types";

export const getCurrentTheme = (): Theme => {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

export const applyNextTheme = () => {
  const nextTheme: Theme = getCurrentTheme() === "dark" ? "light" : "dark";

  localStorage.setItem("portfolio-theme", nextTheme);
  document.documentElement.classList.toggle("dark", nextTheme === "dark");
  document.documentElement.style.colorScheme = nextTheme;
  window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: { theme: nextTheme } }));

  return nextTheme;
};

export const resolveCommand = (command: string, switchTerminalTheme: (theme: TerminalTheme) => string[]) => {
  const [baseCommand, argument] = command.split(/\s+/, 2);

  if ((baseCommand === "theme" || baseCommand === "terminal-theme") && argument) {
    if (isTerminalTheme(argument)) {
      return switchTerminalTheme(argument);
    }

    return [`Unknown terminal theme: ${argument}. Valid themes: ${terminalThemes.join(", ")}.`];
  }

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
        "terminal-theme matrix|amber|ice|barcelona|default",
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
    case "terminal-theme":
      return [`Choose a terminal theme: ${terminalThemes.join(", ")}.`];
    case "":
      return [];
    default:
      return [`command not found: ${command}. Type "help".`];
  }
};
