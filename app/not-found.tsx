import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-dvh bg-[var(--stone)] text-[var(--ink)] flex flex-col items-center justify-center px-6 text-center">
      <p className="font-label text-[11px] tracking-[0.16em] uppercase text-[var(--accent-deep)] mb-6">
        Errore 404
      </p>
      <h1 className="font-display text-[clamp(3rem,10vw,6rem)] leading-[0.9] mb-6">
        Pagina non trovata
      </h1>
      <p className="font-body font-light text-base md:text-lg text-[var(--ink-soft)] max-w-md mb-10 leading-relaxed">
        La pagina che cercavi non esiste o è stata spostata. Torna alla dimora per
        scoprire le suite e richiedere disponibilità.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] text-[var(--stone)] px-8 py-4 font-label text-[11px] tracking-[0.16em] uppercase hover:bg-[var(--hero-shade)] transition-colors"
      >
        Torna a Palazzo Vite
      </Link>
    </main>
  );
}
