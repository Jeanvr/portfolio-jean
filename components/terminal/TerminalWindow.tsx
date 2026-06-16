import type { FormEvent } from "react";

import { commandChips, PROMPT } from "./terminalContent";
import type { TerminalWindowProps } from "./types";

const TerminalWindow = ({
  activeTheme,
  history,
  input,
  setInput,
  runCommand,
  inputRef,
  historyRef,
}: TerminalWindowProps) => {
  const executeCommand = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runCommand(input);
  };

  return (
    <div className={activeTheme.terminal}>
      <div className={activeTheme.header}>
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="min-w-0">
            <p className={activeTheme.title}>jean-os --interactive</p>
            <p className={activeTheme.subtitle}>secure local session / portfolio runtime</p>
          </div>
        </div>
        <div className={activeTheme.status}>
          <span className={activeTheme.statusDot} aria-hidden="true" />
          online
        </div>
      </div>

      <div className={activeTheme.chipsBar}>
        {commandChips.map((command) => (
          <button
            key={command}
            type="button"
            onClick={() => {
              runCommand(command);
              inputRef.current?.focus();
            }}
            className={activeTheme.chip}
          >
            {command}
          </button>
        ))}
      </div>

      <div ref={historyRef} className={activeTheme.history} onMouseDown={() => inputRef.current?.focus()}>
        <div className={activeTheme.scanline} />
        {history.map((line) => (
          <div key={line.id} className="relative mb-5">
            {line.command !== undefined ? (
              <p className={activeTheme.commandText}>
                <span className={activeTheme.prompt}>{PROMPT}</span> {line.command}
              </p>
            ) : null}
            {line.response.map((responseLine) => (
              <p key={`${line.id}-${responseLine}`} className={activeTheme.response}>
                {responseLine}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className={activeTheme.inputBar}>
        <form onSubmit={executeCommand}>
          <label htmlFor="jean-os-command" className="sr-only">
            Terminal command
          </label>
          <div className={activeTheme.inputLine}>
            <span className={`shrink-0 ${activeTheme.prompt}`}>{PROMPT}</span>
            <input
              ref={inputRef}
              id="jean-os-command"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="help"
              autoComplete="off"
              className={activeTheme.input}
            />
            <span className={activeTheme.cursor} aria-hidden="true" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TerminalWindow;
