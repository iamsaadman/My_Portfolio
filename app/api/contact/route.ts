import { NextResponse } from "next/server";
import { Resend } from "resend";

import { profile } from "@/data/site";
import { contactSchema } from "@/lib/validations";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid form payload." },
        { status: 400 },
      );
    }

    const { name, email, subject, message } = parsed.data;

    const from = process.env.EMAIL_FROM?.trim();
    const to = process.env.EMAIL_TO?.trim() || profile.email;

    if (!resend || !from) {
      return NextResponse.json(
        {
          error: "Email delivery is not configured yet. Add RESEND_API_KEY and EMAIL_FROM to your environment variables.",
        },
        { status: 500 },
      );
    }

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio Enquiry: ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif; line-height:1.6; color:#111827;">
          <h2>New portfolio enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\r?\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend delivery failed:", error);
      return NextResponse.json(
        { error: "The message could not be delivered. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "The message could not be sent. Please try again later." },
      { status: 500 },
    );
  }
}
