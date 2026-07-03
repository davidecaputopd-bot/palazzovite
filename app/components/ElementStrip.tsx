// Firma visiva del sito: i cinque elementi delle stanze in una linea.
export default function ElementStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-[3px] ${className}`} aria-hidden="true">
      {["aria", "etere", "fiamma", "terra", "mare"].map((el) => (
        <span key={el} className="flex-1" style={{ backgroundColor: `var(--${el})` }} />
      ))}
    </div>
  );
}
