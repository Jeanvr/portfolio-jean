"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Reveal from "@/components/Reveal";
import { SkillData } from "@/constants";

const swiperBreakpoints = {
  0: {
    slidesPerView: 2.2,
  },
  640: {
    slidesPerView: 3.2,
  },
  1024: {
    slidesPerView: 5,
  },
};

const Page = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Reveal
        as="section"
        className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 backdrop-blur"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
          Habilidades
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
          Stack frontend para interfaces modernas
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          Trabajo con un stack centrado en experiencia de usuario, claridad
          visual y velocidad de desarrollo. Estas son las tecnologias que mejor
          representan como construyo producto en frontend.
        </p>
      </Reveal>

      <Reveal
        as="section"
        className="mt-6 space-y-6"
        delay={0.06}
      >
        {[false, true].map((reverse) => (
          <div
            key={String(reverse)}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4"
          >
            <Swiper
              breakpoints={swiperBreakpoints}
              loop
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: reverse,
              }}
              speed={5000}
              modules={[Autoplay]}
              className="max-w-full"
            >
              {SkillData.map((skill) => (
                <SwiperSlide key={`${skill.name}-${reverse ? "reverse" : "forward"}`}>
                  <div className="flex h-full min-h-28 items-center justify-center gap-3 rounded-3xl border border-white/10 bg-slate-950/45 px-4 py-5">
                    <Image
                      src={skill.Image}
                      alt={skill.name}
                      width={skill.width}
                      height={skill.height}
                    />
                    <span className="text-sm font-medium text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </Reveal>
    </main>
  );
};

export default Page;
