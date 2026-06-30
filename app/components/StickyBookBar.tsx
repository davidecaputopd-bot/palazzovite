export default function StickyBookBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--ink)] px-6 py-4">
      <a
        href="#prenota"
        className="block text-center font-label text-xs text-[var(--stone)]"
      >
        Verifica disponibilità
      </a>
    </div>
  );
}
