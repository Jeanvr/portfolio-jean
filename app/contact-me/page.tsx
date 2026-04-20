import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto profesional de Jean Carlo Vega para entrevistas y oportunidades frontend.",
};

const Page = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-[32px] border border-white/10 bg-slate-900/75 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur">
          <div className="flex items-center gap-4">
            <Image
              src="/menorca.jpg"
              alt="Retrato de Jean Carlo Vega"
              width={96}
              height={96}
              className="h-24 w-24 rounded-3xl border border-white/10 object-cover"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-sky-300/80">
                Contacto
              </p>
              <h1 className="mt-1 text-3xl font-semibold text-white">
                Hablemos de tu proximo proyecto
              </h1>
            </div>
          </div>

          <p className="mt-6 text-base leading-8 text-slate-300">
            Si estas buscando un frontend developer para producto, freelance o
            procesos de seleccion, este es el mejor punto de entrada. Cuentame
            el contexto, los objetivos y el tipo de rol que tienes en mente.
          </p>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-semibold text-emerald-200">
              Que puedes esperar
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                Respuesta clara para entrevistas, freelance o colaboraciones.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                Enfoque en frontend con React, Next.js y TypeScript.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-200" />
                Comunicacion orientada a producto, UX y entrega real.
              </li>
            </ul>
          </div>
        </article>

        <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-4 sm:p-6">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Page;
