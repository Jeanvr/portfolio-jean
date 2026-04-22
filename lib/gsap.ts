"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let pluginsRegistered = false;

export const setupGsap = () => {
  if (pluginsRegistered || typeof window === "undefined") {
    return;
  }

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  pluginsRegistered = true;
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type HoverLiftOptions = {
  y?: number;
  scale?: number;
  duration?: number;
  resetDuration?: number;
  boxShadow?: string;
  resetBoxShadow?: string;
};

export const bindHoverLift = (
  elements: HTMLElement[],
  {
    y = -3,
    scale = 1.01,
    duration = 0.24,
    resetDuration = 0.28,
    boxShadow,
    resetBoxShadow,
  }: HoverLiftOptions = {},
) => {
  if (prefersReducedMotion()) {
    return () => undefined;
  }

  const cleanups = elements.map((element) => {
    const initialBoxShadow = getComputedStyle(element).boxShadow;

    const handleEnter = () => {
      const animation: gsap.TweenVars = {
        y,
        scale,
        duration,
        ease: "power2.out",
        overwrite: true,
      };

      if (boxShadow) {
        animation.boxShadow = boxShadow;
      }

      gsap.to(element, animation);
    };

    const handleLeave = () => {
      const animation: gsap.TweenVars = {
        y: 0,
        scale: 1,
        duration: resetDuration,
        ease: "power2.out",
        overwrite: true,
      };

      animation.boxShadow = resetBoxShadow ?? initialBoxShadow;

      gsap.to(element, animation);
    };

    element.addEventListener("pointerenter", handleEnter);
    element.addEventListener("pointerleave", handleLeave);
    element.addEventListener("focus", handleEnter);
    element.addEventListener("blur", handleLeave);

    return () => {
      element.removeEventListener("pointerenter", handleEnter);
      element.removeEventListener("pointerleave", handleLeave);
      element.removeEventListener("focus", handleEnter);
      element.removeEventListener("blur", handleLeave);
    };
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
};

export { gsap, ScrollTrigger, useGSAP };
