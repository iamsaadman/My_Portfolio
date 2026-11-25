import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Muhammad Saadman Sakib Hossain | Full-Stack Developer & Software Engineer",
    template: "%s | Muhammad Saadman Sakib Hossain",
  },
  description:
    "Explore the portfolio of Muhammad Saadman Sakib Hossain, a Full-Stack Developer and CSE student building modern web applications, software solutions, and AI-powered experiences.",
  openGraph: {
    title: "Muhammad Saadman Sakib Hossain",
    description:
      "Full-stack developer and CSE student with a strong interest in software engineering, AI/ML, and digital product development.",
    url: baseUrl,
    siteName: "Saadman Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Saadman Sakib Hossain",
    description:
      "Full-stack developer and CSE student focused on web development, software engineering, and AI/ML applications.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050505] text-zinc-100">
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
