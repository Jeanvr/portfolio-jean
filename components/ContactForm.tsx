"use client";

import React, { useMemo, useRef, useState } from "react";
import { bindHoverLift, setupGsap, useGSAP } from "@/lib/gsap";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_EMAIL = "vega.jeancarlo@gmail.com";

type ContactFormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const validateForm = (values: {
  name: string;
  email: string;
  message: string;
}) => {
  const errors: ContactFormErrors = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedMessage = values.message.trim();

  if (!trimmedName) {
    errors.name = "El nombre es obligatorio.";
  }

  if (!trimmedEmail) {
    errors.email = "El email es obligatorio.";
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = "Introduce un email válido.";
  }

  if (!trimmedMessage) {
    errors.message = "El mensaje es obligatorio.";
  }

  return errors;
};

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const isFormValid = useMemo(
    () => Object.keys(validateForm({ name, email, message })).length === 0,
    [email, message, name],
  );

  useGSAP(
    () => {
      setupGsap();

      const button = submitButtonRef.current;

      if (!button) {
        return;
      }

      return bindHoverLift([button], {
        y: -2,
        scale: 1.01,
        boxShadow: "0 18px 38px rgba(16, 185, 129, 0.2)",
      });
    },
    { scope: formRef },
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const validationErrors = validateForm({
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    });

    setErrors(validationErrors);
    setSubmitted(false);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const subject = `Contacto desde portfolio - ${trimmedName}`;
    const body = [
      `Nombre: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      "",
      "Mensaje:",
      trimmedMessage,
    ].join("\n");
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="rounded-[28px] bg-slate-950/50 p-4 sm:p-6">
      <h2 className="text-2xl font-semibold text-white">Escríbeme</h2>
      <p className="mt-2 text-sm leading-7 text-slate-300">
        Cuéntame el tipo de proyecto, rol o entrevista que quieres comentar.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <div className="flex flex-col">
          <label htmlFor="contact-name" className="mb-2 text-sm font-medium text-slate-200">
            Nombre
          </label>
          <input
            type="text"
            id="contact-name"
            name="user_name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setErrors((currentErrors) => ({ ...currentErrors, name: undefined }));
              setSubmitted(false);
            }}
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none aria-[invalid=true]:border-rose-400"
            placeholder="Tu nombre"
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-2 text-sm text-rose-300">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="contact-email" className="mb-2 text-sm font-medium text-slate-200">
            Email
          </label>
          <input
            type="email"
            id="contact-email"
            name="user_email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setErrors((currentErrors) => ({ ...currentErrors, email: undefined }));
              setSubmitted(false);
            }}
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none aria-[invalid=true]:border-rose-400"
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-2 text-sm text-rose-300">
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="contact-message" className="mb-2 text-sm font-medium text-slate-200">
            Mensaje
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              setErrors((currentErrors) => ({ ...currentErrors, message: undefined }));
              setSubmitted(false);
            }}
            required
            rows={6}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none aria-[invalid=true]:border-rose-400"
            placeholder="Cuéntame el proyecto, el rol o la entrevista que quieres comentar."
          />
          {errors.message && (
            <p id="contact-message-error" className="mt-2 text-sm text-rose-300">
              {errors.message}
            </p>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <button
            ref={submitButtonRef}
            type="submit"
            aria-label="Enviar mensaje por correo electrónico"
            className="rounded-2xl bg-emerald-400 p-3 font-semibold text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Enviar mensaje
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-100 transition hover:border-sky-400/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Limpiar
          </button>
        </div>

        <div aria-live="polite" className="min-h-6 text-sm">
          {submitted && (
            <p className="text-emerald-300">
              Se abrió tu cliente de correo con el mensaje preparado.
            </p>
          )}
          {!submitted && isFormValid && (
            <p className="text-sky-300">Formulario listo para enviar por correo.</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
