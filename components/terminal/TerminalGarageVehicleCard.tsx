import Image from "next/image";

import type { GarageVehicle } from "./garageData";

type TerminalGarageVehicleCardProps = {
  vehicle: GarageVehicle;
  compact?: boolean;
};

const TerminalGarageVehicleCard = ({ vehicle, compact = false }: TerminalGarageVehicleCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-amber-200/15 bg-slate-950/70 shadow-lg shadow-black/30">
      <div className={`relative overflow-hidden ${compact ? "aspect-[4/3]" : "aspect-[16/10]"}`}>
        <Image
          src={vehicle.imageSrc}
          alt={vehicle.imageAlt}
          fill
          sizes={compact ? "(min-width: 640px) 260px, 100vw" : "(min-width: 1024px) 560px, 100vw"}
          className="object-cover saturate-110 transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(2,6,23,0.86))]" />
        <div className="absolute left-3 top-3 rounded-full border border-amber-200/25 bg-black/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-amber-100 backdrop-blur">
          {vehicle.label}
        </div>
      </div>
      <div className="space-y-2 p-3 sm:p-4">
        <h4 className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-amber-100">{vehicle.title}</h4>
        <p className="text-sm leading-6 text-slate-100">{vehicle.primary}</p>
        <p className="text-xs leading-5 text-slate-400">{vehicle.secondary}</p>
      </div>
    </article>
  );
};

export default TerminalGarageVehicleCard;
