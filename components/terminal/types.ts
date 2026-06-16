import type { Dispatch, RefObject, SetStateAction } from "react";
import type { LucideIcon } from "lucide-react";

export type Theme = "light" | "dark";
export type TerminalTheme = "default" | "matrix" | "amber" | "ice" | "barcelona";

export type TerminalLine = {
  id: number;
  command?: string;
  response: string[];
};

export type TerminalThemeConfig = {
  shell: string;
  glow: string;
  grid: string;
  topGlow: string;
  panel: string;
  card: string;
  cardIcon: string;
  terminal: string;
  header: string;
  title: string;
  subtitle: string;
  status: string;
  statusDot: string;
  chipsBar: string;
  chip: string;
  history: string;
  scanline: string;
  commandText: string;
  prompt: string;
  response: string;
  inputBar: string;
  inputLine: string;
  input: string;
  cursor: string;
  badgeIcon: string;
};

export type SignalCard = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export type TerminalWindowProps = {
  activeTheme: TerminalThemeConfig;
  history: TerminalLine[];
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  runCommand: (rawCommand: string) => void;
  inputRef: RefObject<HTMLInputElement>;
  historyRef: RefObject<HTMLDivElement>;
};

export type TerminalSidebarProps = {
  activeTheme: TerminalThemeConfig;
};

export type TerminalBadgesProps = {
  activeTheme: TerminalThemeConfig;
};
