export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 pb-24 md:pb-10 border-t border-[var(--ink)]/10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
        <span className="font-display text-lg tracking-wide">Palazzo Vite</span>
        <div className="font-label text-[11px] flex flex-wrap items-center gap-x-6 gap-y-2 text-[var(--ink-soft)]">
          <span>Via Amendola, 1 - Copertino (LE)</span>
          <a href="https://www.instagram.com/palazzovite/" target="_blank" rel="noreferrer" className="hover:text-[var(--ink)]">
            Instagram
          </a>
          <a href="mailto:info@palazzovite.com" className="hover:text-[var(--ink)]">
            info@palazzovite.com
          </a>
          <span>© {new Date().getFullYear()} Palazzo Vite</span>
        </div>
      </div>

      {/* Dati legali obbligatori per locazioni turistiche/affittacamere in Italia */}
      <div className="font-label text-xs leading-relaxed text-[var(--ink-soft)] max-w-2xl">
        <p>
          Concentrika S.A.S., Via Basilio il Macedone 32, 73043 Copertino
          (LE). P.IVA 05152990750
        </p>
        <p>CIN: IT075022B400127675 - CIS: LE075022242000033498</p>
      </div>
    </footer>
  );
}
