import { gmailComposeUrl, navigation, profile, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Full-stack developer · Software engineer · AI/ML enthusiast
            </p>
            <p className="footer-wordmark">
              MUHAMMAD SAADMAN
              <br />
              SAKIB HOSSAIN.
            </p>
          </div>
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 border-b border-white/30 pb-2 text-sm text-zinc-200 transition-colors hover:border-white hover:text-white"
          >
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr]">
          <p className="max-w-sm text-sm leading-7 text-zinc-500">
            Building practical digital experiences with code, creativity, and intelligent technology.
          </p>

          <div>
            <h2 className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">Explore</h2>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {navigation
                .filter((item) => ["Home", "About", "Projects", "Contact"].includes(item.label))
                .map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-zinc-300 transition-colors hover:text-white">
                  {item.label}
                </a>
                ))}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">Connect</h2>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <a href="#home" className="w-fit transition-colors hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
