export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[var(--ink-soft)]">
      <span className="font-display text-lg tracking-wide">Palazzo Vite</span>
      <div className="font-label text-[11px] flex items-center gap-6">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[var(--ink)]">
          Instagram
        </a>
        <a href="mailto:info@palazzovite.com" className="hover:text-[var(--ink)]">
          info@palazzovite.com
        </a>
        <span>© {new Date().getFullYear()} Palazzo Vite</span>
      </div>
    </footer>
  );
}
