import type { GarageVariant } from "./types";

export type GarageVehicle = {
  variant: Exclude<GarageVariant, "overview">;
  title: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
  primary: string;
  secondary: string;
};

export const garageHighlights = [
  "motorbike lover",
  "car enthusiast",
  "weekend roads",
  "Barcelona night rides",
  "mechanical curiosity",
  "tech + engines + automation mindset",
];

export const garageVehicles: Record<Exclude<GarageVariant, "overview">, GarageVehicle> = {
  moto: {
    variant: "moto",
    title: "MOTO MODE",
    label: "two wheels",
    imageSrc: "/terminal/garage-bike.webp",
    imageAlt: "Jean Garage motorbike",
    primary: "Two wheels, clean lines, engine noise, and weekend routes.",
    secondary: "Green machine. Weekend mode. Focused mind.",
  },
  car: {
    variant: "car",
    title: "CAR MODE",
    label: "four wheels",
    imageSrc: "/terminal/garage-car.webp",
    imageAlt: "Jean Garage car",
    primary: "Cars are another kind of system: power, airflow, sensors, data and control.",
    secondary: "Same mindset: read signals, optimize flow, control the system.",
  },
};
