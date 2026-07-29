"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-dvh bg-[var(--stone)] text-[var(--ink)] flex flex-col items-center justify-center px-6 text-center">
      <p className="font-label text-[11px] tracking-[0.16em] uppercase text-[var(--accent-deep)] mb-6">
        Ops
      </p>
      <h1 className="font-display text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] mb-6">
        Qualcosa è andato storto
      </h1>
      <p className="font-body font-light text-base md:text-lg text-[var(--ink-soft)] max-w-md mb-10 leading-relaxed">
        Si è verificato un errore imprevisto. Puoi riprovare, oppure scrivici a{" "}
        <a href="mailto:palazzovite@gmail.com" className="underline underline-offset-4 hover:text-[var(--ink)]">
          palazzovite@gmail.com
        </a>
        .
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] text-[var(--stone)] px-8 py-4 font-label text-[11px] tracking-[0.16em] uppercase hover:bg-[var(--hero-shade)] transition-colors"
        >
          Riprova
        </button>
        <Link
          href="/"
          className="font-label text-[11px] tracking-[0.16em] uppercase text-[var(--ink-soft)] hover:text-[var(--ink)] underline underline-offset-4"
        >
          Torna alla home
        </Link>
      </div>
    </main>
  );
}
