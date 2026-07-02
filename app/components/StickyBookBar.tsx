export default function StickyBookBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--ink)]">
      <a
        href="#prenota"
        className="flex flex-col items-center justify-center gap-0.5 px-6 py-5 min-h-[64px]"
      >
        <span className="font-label text-xs text-[var(--stone)]">
          Verifica disponibilità
        </span>
        <span className="font-body font-light text-[10px] text-[var(--stone)]/50 tracking-wide">
          Affittacamere · Copertino, Salento
        </span>
      </a>
    </div>
  );
}
