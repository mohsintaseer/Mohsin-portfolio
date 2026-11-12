"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <label>Your name<input name="name" required maxLength={100} autoComplete="name" /></label>
      <label>Your email<input name="email" type="email" required maxLength={150} autoComplete="email" /></label>
      <label>Message<textarea name="message" required rows={5} maxLength={3000} /></label>
      <input name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p role="status" className="note">
        {status === "sent" && "Message sent. I’ll reply by email."}
        {status === "error" && `${error} You can also email me directly.`}
      </p>
    </form>
  );
}
