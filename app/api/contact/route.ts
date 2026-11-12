import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

  const { name, email, message, website } = body as Record<string, string>;
  if (website) return NextResponse.json({ ok: true }); // honeypot: bots fill this
  if (!name?.trim() || !message?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "")) {
    return NextResponse.json({ error: "Please fill in all fields with a valid email." }, { status: 400 });
  }

  const { SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    return NextResponse.json({ error: "Contact form is not set up yet." }, { status: 503 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transporter.sendMail({
      from: `"Portfolio" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: email,
      subject: `Portfolio message from ${name.slice(0, 100)}`,
      text: `From: ${name} <${email}>\n\n${message.slice(0, 3000)}`,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not send the message." }, { status: 500 });
  }
}
