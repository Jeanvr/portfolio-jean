"use client";

import React, { ReactNode, createElement, useRef } from "react";
import { gsap, prefersReducedMotion, setupGsap, useGSAP } from "@/lib/gsap";

type RevealTag = "article" | "div" | "section";

type RevealProps = {
  as?: RevealTag;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  id?: string;
  start?: string;
  y?: number;
};

const Reveal = ({
  as = "div",
  children,
  className,
  delay = 0,
  duration = 0.8,
  id,
  start = "top 84%",
  y = 28,
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      setupGsap();

      const element = ref.current;

      if (!element || prefersReducedMotion()) {
        return;
      }

      gsap.fromTo(
        element,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          delay,
          duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start,
            once: true,
          },
        },
      );
    },
    { scope: ref, dependencies: [delay, duration, start, y] },
  );

  return createElement(as, { ref, className, id }, children);
};

export default Reveal;
