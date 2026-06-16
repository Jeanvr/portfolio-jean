import { Mail, ShieldCheck, Sparkles } from "lucide-react";

import { PersonalInfo } from "@/constants";

import { systemBadges } from "./terminalContent";
import type { TerminalBadgesProps } from "./types";

const TerminalBadges = ({ activeTheme }: TerminalBadgesProps) => {
  return (
    <div className="relative mt-5 flex flex-wrap gap-2">
      {systemBadges.map((badge) => (
        <span
          key={badge}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300"
        >
          <ShieldCheck className={activeTheme.badgeIcon} aria-hidden="true" />
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
  );
};

export default TerminalBadges;
