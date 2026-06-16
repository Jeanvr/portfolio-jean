import { Terminal } from "lucide-react";

import { signalCards } from "./terminalContent";
import type { TerminalSidebarProps } from "./types";

const TerminalSidebar = ({ activeTheme }: TerminalSidebarProps) => {
  return (
    <div className={activeTheme.panel}>
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
            <article key={item.label} className={activeTheme.card}>
              <div className={activeTheme.cardIcon}>
                <Icon className="h-5 w-5" aria-hidden="true" />
                <p className="font-mono text-xs uppercase tracking-[0.2em]">{item.label}</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.value}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default TerminalSidebar;
