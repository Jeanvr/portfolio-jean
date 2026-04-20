"use client";

import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const form = formRef.current;

    setError("");
    setSuccess(false);

    if (!trimmedName) {
      setError("Tu nombre es obligatorio.");
      return;
    }

    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
      setError("Introduce un email valido.");
      return;
    }

    if (!trimmedMessage) {
      setError("El mensaje no puede estar vacio.");
      return;
    }

    if (!form) {
      console.error("EmailJS form ref is not available.");
      setError("El formulario todavia no esta listo. Intentalo de nuevo.");
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration is missing.", {
        hasServiceId: Boolean(serviceId),
        hasTemplateId: Boolean(templateId),
        hasPublicKey: Boolean(publicKey),
      });
      setError("El servicio de correo no esta configurado.");
      return;
    }

    setName(trimmedName);
    setEmail(trimmedEmail);
    setMessage(trimmedMessage);

    const nameField = form.elements.namedItem("user_name") as HTMLInputElement | null;
    const emailField = form.elements.namedItem("user_email") as HTMLInputElement | null;
    const messageField = form.elements.namedItem("message") as HTMLTextAreaElement | null;

    if (nameField) {
      nameField.value = trimmedName;
    }

    if (emailField) {
      emailField.value = trimmedEmail;
    }

    if (messageField) {
      messageField.value = trimmedMessage;
    }

    setSending(true);

    try {
      await emailjs.sendForm(serviceId, templateId, form, {
        publicKey,
      });
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (submitError: unknown) {
      const emailJsError = submitError as { status?: number; text?: string };

      console.error("EmailJS sendForm failed.", {
        status: emailJsError?.status,
        text: emailJsError?.text,
        error: submitError,
      });
      setError("No se pudo enviar el mensaje ahora mismo. Prueba de nuevo mas tarde.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="rounded-[28px] bg-slate-950/50 p-4 sm:p-6">
      <h2 className="text-2xl font-semibold text-white">Escribeme</h2>
      <p className="mt-2 text-sm leading-7 text-slate-300">
        Cuentame el tipo de proyecto, rol o entrevista que quieres comentar.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-sm font-medium text-slate-200">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            required
            className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
            placeholder="Tu nombre"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-sm font-medium text-slate-200">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
            className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
            placeholder="tu@email.com"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-sm font-medium text-slate-200">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            rows={6}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
            placeholder="Cuentame el proyecto, el rol o la entrevista que quieres comentar."
          />
        </div>

        <button
          type="submit"
          className={`w-full rounded-2xl bg-emerald-400 p-3 font-semibold text-slate-950 transition hover:bg-emerald-300 ${
            sending ? "cursor-not-allowed opacity-60" : ""
          }`}
          disabled={sending}
        >
          {sending ? "Enviando..." : "Enviar mensaje"}
        </button>

        <div aria-live="polite" className="min-h-6 text-sm">
          {success && <p className="text-emerald-300">Mensaje enviado correctamente.</p>}
          {error && <p className="text-rose-300">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
