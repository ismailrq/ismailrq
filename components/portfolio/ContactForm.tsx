"use client";

import { Send } from "lucide-react";
import { useState } from "react";

type ContactFormProps = {
  email: string;
};

type FieldErrors = Partial<
  Record<"name" | "email" | "message", string>
>;

export function ContactForm({ email }: ContactFormProps) {
  const [errors, setErrors] = useState<FieldErrors>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const senderEmail = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const nextErrors: FieldErrors = {};

    if (name.length < 2) {
      nextErrors.name = "Please enter at least two characters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (message.length < 20) {
      nextErrors.message = "Tell me a little more—at least 20 characters.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Ismail,\n\n${message}\n\nFrom: ${name}\nReply to: ${senderEmail}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="form-body">
        <div className="form-field">
          <label htmlFor="name">
            <span>01</span> name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Ada Lovelace"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p className="field-error" id="name-error" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="email">
            <span>02</span> email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="ada@studio.example"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p className="field-error" id="email-error" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="message">
            <span>03</span> message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="A short note about the problem, the team, and your timeline…"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p className="field-error" id="message-error" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="form-actions">
          <p>
            <span className="status-dot" aria-hidden="true" />
            Opens your email app
          </p>
          <button type="submit" className="button button-primary">
            Compose message
            <Send size={16} aria-hidden="true" />
          </button>
        </div>
      </div>


    </form>
  );
}

