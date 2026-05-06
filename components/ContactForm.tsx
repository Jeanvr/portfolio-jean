"use client";

import React, { useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { bindHoverLift, setupGsap, useGSAP } from "@/lib/gsap";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type SubmitStatus = "idle" | "sending" | "success" | "error";

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
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
    setSubmitStatus("idle");
    setStatusMessage("");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS environment variables are missing", {
        hasServiceId: Boolean(EMAILJS_SERVICE_ID),
        hasTemplateId: Boolean(EMAILJS_TEMPLATE_ID),
        hasPublicKey: Boolean(EMAILJS_PUBLIC_KEY),
      });
      setSubmitStatus("error");
      setStatusMessage("El servicio de contacto no está configurado.");
      return;
    }

    if (!formRef.current) {
      console.error("Contact form ref is not available for EmailJS submission");
      setSubmitStatus("error");
      setStatusMessage(
        "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.",
      );
      return;
    }

    setSubmitStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        },
      );

      setSubmitStatus("success");
      setStatusMessage("Mensaje enviado correctamente.");
    } catch (error) {
      console.error("EmailJS contact form submission failed", error);
      setSubmitStatus("error");
      setStatusMessage(
        "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.",
      );
    }
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
    setSubmitStatus("idle");
    setStatusMessage("");
  };

  const isSending = submitStatus === "sending";

  return (
    <div className="rounded-[28px] bg-slate-50/80 p-4 dark:bg-slate-950/50 sm:p-6">
      <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Escríbeme</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
        Cuéntame el tipo de proyecto, colaboración u oportunidad que quieres comentar.
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-6 space-y-4"
        noValidate
      >
        <div className="flex flex-col">
          <label
            htmlFor="contact-name"
            className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Nombre
          </label>
          <input
            type="text"
            id="contact-name"
            name="user_name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setErrors((currentErrors) => ({
                ...currentErrors,
                name: undefined,
              }));
              setSubmitStatus("idle");
              setStatusMessage("");
            }}
            autoComplete="name"
            required
            disabled={isSending}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className="rounded-2xl border border-slate-300 bg-white p-3 text-slate-950 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 aria-[invalid=true]:border-rose-400 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-emerald-400"
            placeholder="Tu nombre"
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-2 text-sm text-rose-600 dark:text-rose-300">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="contact-email"
            className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Email
          </label>
          <input
            type="email"
            id="contact-email"
            name="user_email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setErrors((currentErrors) => ({
                ...currentErrors,
                email: undefined,
              }));
              setSubmitStatus("idle");
              setStatusMessage("");
            }}
            autoComplete="email"
            required
            disabled={isSending}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className="rounded-2xl border border-slate-300 bg-white p-3 text-slate-950 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 aria-[invalid=true]:border-rose-400 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-emerald-400"
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-2 text-sm text-rose-600 dark:text-rose-300">
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="contact-message"
            className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Mensaje
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              setErrors((currentErrors) => ({
                ...currentErrors,
                message: undefined,
              }));
              setSubmitStatus("idle");
              setStatusMessage("");
            }}
            required
            disabled={isSending}
            rows={6}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className="rounded-2xl border border-slate-300 bg-white p-3 text-slate-950 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 aria-[invalid=true]:border-rose-400 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-emerald-400"
            placeholder="Cuéntame el proyecto, colaboración u oportunidad que quieres comentar."
          />
          {errors.message && (
            <p id="contact-message-error" className="mt-2 text-sm text-rose-600 dark:text-rose-300">
              {errors.message}
            </p>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <button
            ref={submitButtonRef}
            type="submit"
            aria-label="Enviar mensaje por correo electrónico"
            disabled={isSending}
            className="rounded-2xl bg-emerald-400 p-3 font-semibold text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-70 dark:focus:ring-offset-slate-950"
          >
            {isSending ? "Enviando..." : "Enviar mensaje"}
          </button>

          <button
            type="button"
            onClick={handleClear}
            disabled={isSending}
            className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-sky-500/40 hover:bg-sky-50 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-70 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-sky-400/40 dark:hover:bg-white/10 dark:focus:ring-offset-slate-950"
          >
            Limpiar
          </button>
        </div>

        <div aria-live="polite" className="min-h-6 text-sm">
          {submitStatus === "success" && <p className="text-emerald-700 dark:text-emerald-300">{statusMessage}</p>}
          {submitStatus === "error" && (
            <p className="text-rose-600 dark:text-rose-300">{statusMessage}</p>
          )}
          {submitStatus === "idle" && isFormValid && (
            <p className="text-sky-700 dark:text-sky-300">Formulario listo para enviar por correo.</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
