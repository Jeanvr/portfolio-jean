import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto profesional de Jean Carlo Vega para proyectos, colaboraciones y oportunidades donde pueda aportar valor real.",
};

const Page = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section
        id="contacto"
        className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <Reveal
          as="article"
          className="rounded-[32px] border border-slate-200 bg-white/85 p-8 shadow-2xl shadow-slate-200/70 backdrop-blur dark:border-white/10 dark:bg-slate-900/75 dark:shadow-slate-950/30"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/menorca.jpg"
              alt="Retrato de Jean Carlo Vega"
              width={96}
              height={96}
              className="h-24 w-24 rounded-3xl border border-slate-200 object-cover dark:border-white/10"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300/80">
                Contacto
              </p>
              <h1 className="mt-1 text-3xl font-semibold text-slate-950 dark:text-white">
                Hablemos de proyectos, colaboración o contacto profesional
              </h1>
            </div>
          </div>

          <p className="mt-6 text-base leading-8 text-slate-700 dark:text-slate-300">
            Estoy abierto a proyectos interesantes, colaboraciones y
            oportunidades donde pueda aportar valor real desde frontend moderno,
            Python, automatización, bases de datos o herramientas internas.
            Cuéntame el contexto y el objetivo.
          </p>

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/[0.04]">
            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-200">
              Qué puedes esperar
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                Respuesta clara para contacto profesional, proyectos o colaboraciones.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                Enfoque en frontend moderno, Python, automatización y datos.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-200" />
                Comunicación directa, contexto técnico y orientación a resolver problemas reales.
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal
          as="div"
          className="rounded-[32px] border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:shadow-none sm:p-6"
          delay={0.08}
        >
          <ContactForm />
        </Reveal>
      </section>
    </main>
  );
};

export default Page;
