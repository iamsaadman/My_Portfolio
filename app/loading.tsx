export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-4">
      <div className="flex items-center gap-3 border border-white/10 bg-[#151515] px-4 py-3 text-sm text-zinc-200">
        <span className="h-2 w-2 animate-pulse rounded-full bg-zinc-300" />
        Loading portfolio...
      </div>
    </main>
  );
}
