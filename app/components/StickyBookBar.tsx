export default function StickyBookBar({ availability, subtitle }: { availability: string; subtitle: string }) {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-[var(--dark)] text-[var(--ink)] border border-[var(--ink)]/15 shadow-[0_18px_45px_rgba(43,36,25,0.22)]">
      <a
        href="#prenota"
        className="flex flex-col items-center justify-center gap-1 px-5 py-4 min-h-[58px] active:scale-[0.99] transition-transform"
      >
        <span className="font-label text-[11px]">
          {availability}
        </span>
        <span className="font-body font-light text-[10px] text-[var(--ink-soft)] tracking-wide">
          {subtitle}
        </span>
      </a>
    </div>
  );
}
