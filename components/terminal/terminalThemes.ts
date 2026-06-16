import type { TerminalTheme, TerminalThemeConfig } from "./types";

export const terminalThemes: TerminalTheme[] = ["default", "matrix", "amber", "ice", "barcelona"];

export const terminalThemeConfig: Record<TerminalTheme, TerminalThemeConfig> = {
  default: {
    shell:
      "relative overflow-hidden rounded-[34px] border border-emerald-300/20 bg-slate-950 p-4 shadow-2xl shadow-emerald-950/30 ring-1 ring-white/10 sm:p-6 lg:p-8",
    glow:
      "absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.22),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(14,165,233,0.18),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.2),rgba(2,6,23,0.9))]",
    grid: "absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(52,211,153,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.7)_1px,transparent_1px)] [background-size:34px_34px]",
    topGlow: "pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-emerald-300/10 to-transparent",
    panel: "flex flex-col justify-between gap-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur",
    card: "rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/30",
    cardIcon: "flex items-center gap-3 text-emerald-200",
    terminal:
      "relative flex min-h-[560px] flex-col overflow-hidden rounded-[28px] border border-emerald-300/20 bg-[#020817] shadow-2xl shadow-emerald-950/40",
    header: "flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3 sm:px-5",
    title: "truncate font-mono text-sm font-semibold text-emerald-100",
    subtitle: "truncate text-xs text-slate-500",
    status:
      "inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 font-mono text-xs text-emerald-200",
    statusDot: "h-2 w-2 animate-pulse rounded-full bg-emerald-300",
    chipsBar: "flex flex-wrap gap-2 border-b border-white/10 bg-slate-950/70 px-4 py-3 sm:px-5",
    chip:
      "rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 font-mono text-xs font-semibold text-emerald-100 transition hover:border-emerald-200/50 hover:bg-emerald-300/20 focus:outline-none focus:ring-2 focus:ring-emerald-300/50",
    history: "relative flex-1 overflow-y-auto px-4 py-5 font-mono text-sm leading-7 text-emerald-100 sm:px-6",
    scanline: "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(16,185,129,0.04)_50%,transparent_100%)]",
    commandText: "break-words text-emerald-300",
    prompt: "text-slate-500",
    response: "break-words text-slate-200",
    inputBar: "border-t border-white/10 bg-slate-900/90 px-4 py-4 sm:px-6",
    inputLine: "flex items-center gap-2 font-mono text-sm text-emerald-300",
    input: "min-w-0 flex-1 bg-transparent text-emerald-100 caret-emerald-300 outline-none placeholder:text-slate-600",
    cursor: "h-5 w-2 animate-pulse rounded-sm bg-emerald-300/80",
    badgeIcon: "h-3.5 w-3.5 text-emerald-300",
  },
  matrix: {
    shell:
      "relative overflow-hidden rounded-[34px] border border-green-300/30 bg-black p-4 shadow-2xl shadow-green-500/25 ring-1 ring-green-300/10 sm:p-6 lg:p-8",
    glow:
      "absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,197,94,0.34),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(16,185,129,0.22),transparent_28%),linear-gradient(135deg,rgba(0,0,0,0.35),rgba(2,6,23,0.96))]",
    grid: "absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(74,222,128,0.75)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.75)_1px,transparent_1px)] [background-size:26px_26px]",
    topGlow: "pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-green-300/20 to-transparent",
    panel: "flex flex-col justify-between gap-8 rounded-[28px] border border-green-300/15 bg-green-950/[0.12] p-6 backdrop-blur",
    card: "rounded-3xl border border-green-300/15 bg-black/60 p-4 shadow-lg shadow-green-950/40",
    cardIcon: "flex items-center gap-3 text-green-200",
    terminal:
      "relative flex min-h-[560px] flex-col overflow-hidden rounded-[28px] border border-green-300/30 bg-black shadow-2xl shadow-green-500/25",
    header: "flex flex-wrap items-center justify-between gap-3 border-b border-green-300/15 bg-green-300/[0.05] px-4 py-3 sm:px-5",
    title: "truncate font-mono text-sm font-semibold text-green-100",
    subtitle: "truncate text-xs text-green-700",
    status:
      "inline-flex items-center gap-2 rounded-full border border-green-300/30 bg-green-300/10 px-3 py-1 font-mono text-xs text-green-200",
    statusDot: "h-2 w-2 animate-pulse rounded-full bg-green-300",
    chipsBar: "flex flex-wrap gap-2 border-b border-green-300/15 bg-black/75 px-4 py-3 sm:px-5",
    chip:
      "rounded-full border border-green-300/25 bg-green-300/10 px-3 py-1.5 font-mono text-xs font-semibold text-green-100 transition hover:border-green-200/60 hover:bg-green-300/20 focus:outline-none focus:ring-2 focus:ring-green-300/50",
    history: "relative flex-1 overflow-y-auto px-4 py-5 font-mono text-sm leading-7 text-green-100 sm:px-6",
    scanline:
      "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(34,197,94,0.08)_0%,transparent_10%,rgba(34,197,94,0.06)_50%,transparent_100%)] [background-size:100%_6px]",
    commandText: "break-words text-green-300 drop-shadow-[0_0_8px_rgba(34,197,94,0.65)]",
    prompt: "text-green-700",
    response: "break-words text-green-100",
    inputBar: "border-t border-green-300/15 bg-black/90 px-4 py-4 sm:px-6",
    inputLine: "flex items-center gap-2 font-mono text-sm text-green-300",
    input: "min-w-0 flex-1 bg-transparent text-green-100 caret-green-300 outline-none placeholder:text-green-800",
    cursor: "h-5 w-2 animate-pulse rounded-sm bg-green-300/90 shadow-[0_0_14px_rgba(34,197,94,0.8)]",
    badgeIcon: "h-3.5 w-3.5 text-green-300",
  },
  amber: {
    shell:
      "relative overflow-hidden rounded-[34px] border border-amber-300/25 bg-stone-950 p-4 shadow-2xl shadow-amber-950/35 ring-1 ring-amber-200/10 sm:p-6 lg:p-8",
    glow:
      "absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(245,158,11,0.25),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(251,113,133,0.12),transparent_28%),linear-gradient(135deg,rgba(28,25,23,0.35),rgba(12,10,9,0.95))]",
    grid: "absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(251,191,36,0.75)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.75)_1px,transparent_1px)] [background-size:32px_32px]",
    topGlow: "pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-amber-300/15 to-transparent",
    panel: "flex flex-col justify-between gap-8 rounded-[28px] border border-amber-200/10 bg-amber-950/[0.08] p-6 backdrop-blur",
    card: "rounded-3xl border border-amber-200/10 bg-stone-950/70 p-4 shadow-lg shadow-stone-950/40",
    cardIcon: "flex items-center gap-3 text-amber-200",
    terminal:
      "relative flex min-h-[560px] flex-col overflow-hidden rounded-[28px] border border-amber-300/25 bg-[#170f05] shadow-2xl shadow-amber-950/45",
    header: "flex flex-wrap items-center justify-between gap-3 border-b border-amber-200/10 bg-amber-300/[0.05] px-4 py-3 sm:px-5",
    title: "truncate font-mono text-sm font-semibold text-amber-100",
    subtitle: "truncate text-xs text-amber-700",
    status:
      "inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 font-mono text-xs text-amber-200",
    statusDot: "h-2 w-2 animate-pulse rounded-full bg-amber-300",
    chipsBar: "flex flex-wrap gap-2 border-b border-amber-200/10 bg-stone-950/75 px-4 py-3 sm:px-5",
    chip:
      "rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1.5 font-mono text-xs font-semibold text-amber-100 transition hover:border-amber-200/60 hover:bg-amber-300/20 focus:outline-none focus:ring-2 focus:ring-amber-300/50",
    history: "relative flex-1 overflow-y-auto px-4 py-5 font-mono text-sm leading-7 text-amber-100 sm:px-6",
    scanline:
      "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(245,158,11,0.07)_50%,transparent_100%)] [background-size:100%_8px]",
    commandText: "break-words text-amber-300",
    prompt: "text-amber-700",
    response: "break-words text-orange-100",
    inputBar: "border-t border-amber-200/10 bg-stone-950/90 px-4 py-4 sm:px-6",
    inputLine: "flex items-center gap-2 font-mono text-sm text-amber-300",
    input: "min-w-0 flex-1 bg-transparent text-amber-100 caret-amber-300 outline-none placeholder:text-amber-800",
    cursor: "h-5 w-2 animate-pulse rounded-sm bg-amber-300/85",
    badgeIcon: "h-3.5 w-3.5 text-amber-300",
  },
  ice: {
    shell:
      "relative overflow-hidden rounded-[34px] border border-cyan-200/25 bg-slate-950 p-4 shadow-2xl shadow-cyan-950/30 ring-1 ring-cyan-100/10 sm:p-6 lg:p-8",
    glow:
      "absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(125,211,252,0.22),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.18),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.2),rgba(2,8,23,0.92))]",
    grid: "absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(103,232,249,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.7)_1px,transparent_1px)] [background-size:36px_36px]",
    topGlow: "pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-200/12 to-transparent",
    panel: "flex flex-col justify-between gap-8 rounded-[28px] border border-cyan-100/10 bg-cyan-100/[0.035] p-6 backdrop-blur",
    card: "rounded-3xl border border-cyan-100/10 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/30",
    cardIcon: "flex items-center gap-3 text-cyan-100",
    terminal:
      "relative flex min-h-[560px] flex-col overflow-hidden rounded-[28px] border border-cyan-200/25 bg-[#03101f] shadow-2xl shadow-cyan-950/40",
    header: "flex flex-wrap items-center justify-between gap-3 border-b border-cyan-100/10 bg-cyan-100/[0.04] px-4 py-3 sm:px-5",
    title: "truncate font-mono text-sm font-semibold text-cyan-100",
    subtitle: "truncate text-xs text-sky-600",
    status:
      "inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-200/10 px-3 py-1 font-mono text-xs text-cyan-100",
    statusDot: "h-2 w-2 animate-pulse rounded-full bg-cyan-200",
    chipsBar: "flex flex-wrap gap-2 border-b border-cyan-100/10 bg-slate-950/70 px-4 py-3 sm:px-5",
    chip:
      "rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1.5 font-mono text-xs font-semibold text-cyan-100 transition hover:border-cyan-100/60 hover:bg-cyan-200/20 focus:outline-none focus:ring-2 focus:ring-cyan-200/50",
    history: "relative flex-1 overflow-y-auto px-4 py-5 font-mono text-sm leading-7 text-cyan-50 sm:px-6",
    scanline: "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(125,211,252,0.045)_50%,transparent_100%)]",
    commandText: "break-words text-cyan-200",
    prompt: "text-sky-600",
    response: "break-words text-slate-100",
    inputBar: "border-t border-cyan-100/10 bg-slate-950/90 px-4 py-4 sm:px-6",
    inputLine: "flex items-center gap-2 font-mono text-sm text-cyan-200",
    input: "min-w-0 flex-1 bg-transparent text-cyan-50 caret-cyan-200 outline-none placeholder:text-sky-700",
    cursor: "h-5 w-2 animate-pulse rounded-sm bg-cyan-200/85",
    badgeIcon: "h-3.5 w-3.5 text-cyan-200",
  },
  barcelona: {
    shell:
      "relative overflow-hidden rounded-[34px] border border-sky-200/20 bg-slate-950 p-4 shadow-2xl shadow-sky-950/30 ring-1 ring-rose-100/10 sm:p-6 lg:p-8",
    glow:
      "absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(14,165,233,0.24),transparent_32%),radial-gradient(circle_at_88%_18%,rgba(251,146,60,0.16),transparent_28%),radial-gradient(circle_at_70%_90%,rgba(244,114,182,0.12),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.2),rgba(2,6,23,0.92))]",
    grid: "absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(125,211,252,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.55)_1px,transparent_1px)] [background-size:34px_34px]",
    topGlow: "pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-sky-200/12 to-transparent",
    panel: "flex flex-col justify-between gap-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur",
    card: "rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/30",
    cardIcon: "flex items-center gap-3 text-sky-100",
    terminal:
      "relative flex min-h-[560px] flex-col overflow-hidden rounded-[28px] border border-sky-200/20 bg-[#03111f] shadow-2xl shadow-sky-950/40",
    header: "flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-sky-100/[0.04] px-4 py-3 sm:px-5",
    title: "truncate font-mono text-sm font-semibold text-sky-100",
    subtitle: "truncate text-xs text-slate-500",
    status:
      "inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1 font-mono text-xs text-amber-100",
    statusDot: "h-2 w-2 animate-pulse rounded-full bg-amber-200",
    chipsBar: "flex flex-wrap gap-2 border-b border-white/10 bg-slate-950/70 px-4 py-3 sm:px-5",
    chip:
      "rounded-full border border-sky-200/20 bg-sky-200/10 px-3 py-1.5 font-mono text-xs font-semibold text-sky-100 transition hover:border-amber-200/50 hover:bg-amber-200/15 focus:outline-none focus:ring-2 focus:ring-sky-200/50",
    history: "relative flex-1 overflow-y-auto px-4 py-5 font-mono text-sm leading-7 text-sky-50 sm:px-6",
    scanline: "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(14,165,233,0.04)_50%,transparent_100%)]",
    commandText: "break-words text-amber-200",
    prompt: "text-slate-500",
    response: "break-words text-sky-50",
    inputBar: "border-t border-white/10 bg-slate-950/90 px-4 py-4 sm:px-6",
    inputLine: "flex items-center gap-2 font-mono text-sm text-amber-200",
    input: "min-w-0 flex-1 bg-transparent text-sky-50 caret-amber-200 outline-none placeholder:text-slate-600",
    cursor: "h-5 w-2 animate-pulse rounded-sm bg-amber-200/85",
    badgeIcon: "h-3.5 w-3.5 text-sky-200",
  },
};

export const isTerminalTheme = (theme: string): theme is TerminalTheme => {
  return terminalThemes.includes(theme as TerminalTheme);
};
