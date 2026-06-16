"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import TerminalBadges from "./TerminalBadges";
import TerminalCommandGuide from "./TerminalCommandGuide";
import TerminalSidebar from "./TerminalSidebar";
import TerminalWindow from "./TerminalWindow";
import { resolveCommand } from "./terminalCommands";
import { bootLines, TERMINAL_THEME_STORAGE_KEY } from "./terminalContent";
import { isTerminalTheme, terminalThemeConfig } from "./terminalThemes";
import type { TerminalLine, TerminalTheme } from "./types";

const TerminalSection = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const historyRef = useRef<HTMLDivElement | null>(null);
  const nextLineIdRef = useRef(2);
  const [input, setInput] = useState("");
  const [terminalTheme, setTerminalTheme] = useState<TerminalTheme>("default");
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 1,
      response: bootLines,
    },
  ]);
  const activeTheme = terminalThemeConfig[terminalTheme];

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(TERMINAL_THEME_STORAGE_KEY);

    if (storedTheme && isTerminalTheme(storedTheme)) {
      setTerminalTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    historyRef.current?.scrollTo({
      top: historyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const switchTerminalTheme = (nextTheme: TerminalTheme) => {
    setTerminalTheme(nextTheme);
    window.localStorage.setItem(TERMINAL_THEME_STORAGE_KEY, nextTheme);

    return [`Terminal theme switched to ${nextTheme}.`];
  };

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
        response: resolveCommand(command, switchTerminalTheme),
      },
    ]);
    setInput("");
  };

  const runGuideCommand = (command: string) => {
    runCommand(command);
    inputRef.current?.focus();
  };

  return (
    <section id="jean-os" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={activeTheme.shell}
      >
        <div className={activeTheme.glow} />
        <div className={activeTheme.grid} />
        <div className={activeTheme.topGlow} />

        <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.35fr] lg:items-stretch">
          <TerminalSidebar activeTheme={activeTheme} />
          <TerminalWindow
            activeTheme={activeTheme}
            history={history}
            input={input}
            setInput={setInput}
            runCommand={runCommand}
            inputRef={inputRef}
            historyRef={historyRef}
          />
        </div>

        <TerminalCommandGuide activeTheme={activeTheme} onRunCommand={runGuideCommand} />

        <TerminalBadges activeTheme={activeTheme} />
      </motion.div>
    </section>
  );
};

export default TerminalSection;
