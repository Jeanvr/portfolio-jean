import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MainNavLinks, PersonalInfo } from "@/constants";

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
    href: `mailto:${PersonalInfo.email}`,
    icon: Mail,
    external: false,
  },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
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
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 transition hover:border-sky-400/40 hover:bg-white/10"
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
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
