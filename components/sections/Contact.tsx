"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import { Check, Copy, Mail, MessageSquareText, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { gmailComposeUrl, profile } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit = async (values: ContactFormValues) => {
    if (values.company) {
      setStatus("error");
      setMessage("Spam protection triggered.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong while sending the message.");
      }

      setStatus("success");
      setMessage("Message sent successfully. Thank you for reaching out.");
      reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Your message could not be sent right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  };

  return (
    <section id="contact" className="section-wrap contact-section scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="contact-closing">
          <p className="eyebrow-label">Contact / Final frame</p>
          <h2>Have an idea?<br /><span>Let&apos;s make it real.</span></h2>
          <p>Have an interesting opportunity or project in mind? Let&apos;s connect and explore what we can create together.</p>
        </div>

        <div className="contact-layout mt-14">
          <Reveal>
            <div className="contact-details">
              <p className="contact-details-label">Direct line</p>
              <h3>Start a conversation.</h3>
              <div className="contact-details-list">
                <div>
                  <Mail size={16} />
                  <a href={gmailComposeUrl} target="_blank" rel="noreferrer" className="break-all hover:text-white">{profile.email}</a>
                </div>
                <div>
                  <MessageSquareText size={16} />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="mt-8 inline-flex items-center gap-2 border-b border-white/20 pb-2 text-sm text-zinc-200 transition-colors hover:border-white hover:text-white"
              >
                {copyState === "copied" ? <Check size={15} /> : <Copy size={15} />}
                {copyState === "copied" ? "Email copied" : copyState === "error" ? "Could not copy email" : "Copy email address"}
              </button>
              <div className="mt-8 flex gap-4 border-t border-white/10 pt-5">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
                  <FaLinkedinIn size={15} /> LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
                  <FaGithub size={15} /> GitHub
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit(onSubmit)} className="border border-white/10 bg-[#111] p-6 sm:p-8">
              <p className="mb-6 text-sm leading-6 text-zinc-400">Or send me a message using the form below.</p>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-200">Full Name</label>
                  <input id="name" {...register("name")} className="w-full rounded-none border border-white/10 bg-white/[0.035] px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-white/60" placeholder="Your name" />
                  {errors.name ? <p className="mt-2 text-sm text-zinc-300">{errors.name.message}</p> : null}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-200">Email Address</label>
                  <input id="email" type="email" {...register("email")} className="w-full rounded-none border border-white/10 bg-white/[0.035] px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-white/60" placeholder="you@example.com" />
                  {errors.email ? <p className="mt-2 text-sm text-zinc-300">{errors.email.message}</p> : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-zinc-200">Subject</label>
                <input id="subject" {...register("subject")} className="w-full rounded-none border border-white/10 bg-white/[0.035] px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-white/60" placeholder="Project inquiry" />
                {errors.subject ? <p className="mt-2 text-sm text-zinc-300">{errors.subject.message}</p> : null}
              </div>

              <div className="mt-5 hidden">
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-zinc-200">Company</label>
                <input id="company" {...register("company")} className="w-full rounded-none border border-white/10 bg-white/[0.035] px-4 py-3 text-white outline-none" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-200">Message</label>
                <textarea id="message" rows={6} {...register("message")} className="w-full resize-y rounded-none border border-white/10 bg-white/[0.035] px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-white/60" placeholder="Tell me about your project or idea..." />
                {errors.message ? <p className="mt-2 text-sm text-zinc-300">{errors.message.message}</p> : null}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 border border-white bg-[#f5f5f5] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#050505] transition-colors hover:bg-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send size={15} /> {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {status !== "idle" ? (
                  <p className="text-sm text-zinc-300" aria-live="polite">
                    {message}
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
