import { garageHighlights, garageVehicles } from "./garageData";
import TerminalGarageVehicleCard from "./TerminalGarageVehicleCard";
import type { GarageVariant } from "./types";

type TerminalGaragePanelProps = {
  variant: GarageVariant;
};

const TerminalGaragePanel = ({ variant }: TerminalGaragePanelProps) => {
  const selectedVehicle = variant === "overview" ? null : garageVehicles[variant];

  if (selectedVehicle) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-amber-200/20 bg-slate-950/75 p-3 shadow-2xl shadow-black/30 ring-1 ring-white/10 sm:p-4">
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(251,191,36,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.35)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="relative">
          <TerminalGarageVehicleCard vehicle={selectedVehicle} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-amber-200/20 bg-slate-950/75 p-3 shadow-2xl shadow-black/30 ring-1 ring-white/10 sm:p-4">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(251,191,36,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.35)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-amber-300/15 to-transparent" />

      <div className="relative space-y-4">
        <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber-200">JEAN GARAGE // personal side unlocked</p>
          <h3 className="mt-2 font-mono text-xl font-black uppercase tracking-tight text-white sm:text-2xl">8-bit garage mode</h3>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <TerminalGarageVehicleCard vehicle={garageVehicles.moto} compact />
          <TerminalGarageVehicleCard vehicle={garageVehicles.car} compact />
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {garageHighlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-xl border border-emerald-200/10 bg-emerald-300/[0.06] px-3 py-2 font-mono text-xs text-emerald-100"
            >
              ▸ {highlight}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TerminalGaragePanel;
