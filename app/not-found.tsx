import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-4 text-center text-zinc-100">
      <div className="max-w-lg border border-white/10 bg-[#151515] p-10">
        <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">404</p>
        <h1 className="mt-4 text-4xl font-medium tracking-[-0.06em]">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-zinc-300">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#f4f2ef] px-5 py-3 text-sm font-semibold text-[#111] transition-colors hover:bg-white"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
