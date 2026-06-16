import { Database, MapPin, Server } from "lucide-react";

import type { SignalCard } from "./types";

export const PROMPT = "jean@portfolio:~$";
export const TERMINAL_THEME_STORAGE_KEY = "jean-os-terminal-theme";

export const commandChips = ["help", "skills", "projects", "contact", "terminal-theme matrix", "theme"];

export const systemBadges = [
  "Linux daily driver",
  "Python automation",
  "Database workflows",
  "Barcelona ops mindset",
  "Ecommerce reality checks",
  "Moto, car and GoPro energy",
];

export const signalCards: SignalCard[] = [
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

export const bootLines = [
  "Booting Jean OS Terminal...",
  "Kernel: practical-engineering-6.16 loaded.",
  "Modules: linux, python, databases, ecommerce, frontend.",
  "Type help to inspect the system.",
];
