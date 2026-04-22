"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { MainNavLinks, PersonalInfo } from "@/constants";
import {
  ScrollTrigger,
  bindHoverLift,
  gsap,
  prefersReducedMotion,
  setupGsap,
  useGSAP,
} from "@/lib/gsap";

const socialLinks = [
  {
    name: "GitHub",
    href: PersonalInfo.githubUrl,
    icon: Github,
    external: true,
  },
  {
    name: "LinkedIn",
    href: PersonalInfo.linkedinUrl,
    icon: Linkedin,
    external: true,
  },
  {
    name: "Email",
    href: "/contact-me#contacto",
    icon: Mail,
    external: false,
  },
];

const Navbar = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      setupGsap();

      const container = containerRef.current;
      const header = headerRef.current;

      if (!container || !header) {
        return;
      }

      const navLinks = gsap.utils.toArray<HTMLElement>("[data-nav-link]");
      const socialLinks = gsap.utils.toArray<HTMLElement>("[data-social-link]");
      const cleanupNavHover = bindHoverLift(navLinks, {
        y: -2,
        scale: 1.01,
      });
      const cleanupSocialHover = bindHoverLift(socialLinks, {
        y: -3,
        scale: 1.012,
        boxShadow: "0 14px 30px rgba(2, 6, 23, 0.2)",
      });

      if (prefersReducedMotion()) {
        return () => {
          cleanupNavHover();
          cleanupSocialHover();
        };
      }

      gsap.fromTo(
        container,
        {
          autoAlpha: 0,
          y: -18,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.68,
          ease: "power2.out",
        },
      );

      const animateHeader = (isScrolled: boolean) => {
        gsap.to(header, {
          backgroundColor: isScrolled
            ? "rgba(2, 6, 23, 0.92)"
            : "rgba(2, 6, 23, 0.8)",
          borderColor: isScrolled
            ? "rgba(148, 163, 184, 0.16)"
            : "rgba(255, 255, 255, 0.1)",
          boxShadow: isScrolled
            ? "0 16px 40px rgba(2, 6, 23, 0.22)"
            : "0 0 0 rgba(2, 6, 23, 0)",
          duration: 0.28,
          ease: "power2.out",
          overwrite: true,
        });
      };

      animateHeader(window.scrollY > 24);

      const trigger = ScrollTrigger.create({
        trigger: document.body,
        start: "top top-=40",
        onEnter: () => animateHeader(true),
        onLeaveBack: () => animateHeader(false),
      });

      return () => {
        cleanupNavHover();
        cleanupSocialHover();
        trigger.kill();
      };
    },
    { scope: containerRef },
  );

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
    >
      <div
        ref={containerRef}
        className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex min-w-0 flex-1 items-center gap-3">
          <Image
            src="/me.jpg"
            alt="Foto de Jean Carlo Vega"
            width={52}
            height={52}
            className="h-12 w-12 rounded-2xl border border-white/10 object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
              Frontend Developer
            </p>
            <p className="truncate text-lg font-semibold text-white">
              {PersonalInfo.fullName}
            </p>
          </div>
        </Link>

        <nav
          aria-label="Navegacion principal"
          className="order-3 flex w-full flex-wrap gap-2 text-sm text-slate-200 lg:order-none lg:w-auto lg:justify-center"
        >
          {MainNavLinks.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              data-nav-link="true"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-emerald-400/40 hover:bg-white/10 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex flex-wrap items-center justify-end gap-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                data-social-link="true"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 transition hover:border-sky-400/40 hover:bg-white/10"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
