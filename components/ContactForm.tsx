"use client";

import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const form = formRef.current;

    setError('');
    setSuccess(false);

    if (!trimmedName) {
      setError('Name is required.');
      return;
    }

    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!trimmedMessage) {
      setError('Message is required.');
      return;
    }

    if (!form) {
      console.error('EmailJS form ref is not available.');
      setError('The contact form is not ready yet. Please try again.');
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration is missing.', {
        hasServiceId: Boolean(serviceId),
        hasTemplateId: Boolean(templateId),
        hasPublicKey: Boolean(publicKey),
      });
      setError('Email service is not configured.');
      return;
    }

    setName(trimmedName);
    setEmail(trimmedEmail);
    setMessage(trimmedMessage);

    const nameField = form.elements.namedItem('user_name') as HTMLInputElement | null;
    const emailField = form.elements.namedItem('user_email') as HTMLInputElement | null;
    const messageField = form.elements.namedItem('message') as HTMLTextAreaElement | null;

    if (nameField) {
      nameField.value = trimmedName;
    }

    if (emailField) {
      emailField.value = trimmedEmail;
    }

    if (messageField) {
      messageField.value = trimmedMessage;
    }

    console.debug('EmailJS sendForm starting.', {
      hasServiceId: Boolean(serviceId),
      hasTemplateId: Boolean(templateId),
      hasPublicKey: Boolean(publicKey),
      fieldNames: ['user_name', 'user_email', 'message'],
    });

    setSending(true);

    try {
      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        form,
        {
          publicKey,
        }
      );
      console.info('EmailJS sendForm succeeded.', {
        status: response.status,
        text: response.text,
      });
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error: unknown) {
      const emailJsError = error as { status?: number; text?: string };

      console.error('EmailJS sendForm failed.', {
        status: emailJsError?.status,
        text: emailJsError?.text,
        error,
      });
      setError('We could not send your message right now. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className={`w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 ${sending ? 'opacity-50' : ''}`}
          disabled={sending}
        >
          {sending ? 'Sending...' : 'Send'}
        </button>
        {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
