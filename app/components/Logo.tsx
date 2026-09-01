// Logo Palazzo Vite (emblema circolare: VITE / PALAZZO).
// Reso come CSS mask con background-color: currentColor, così il colore del
// marchio segue il colore del testo del contenitore (chiaro sopra l'hero,
// scuro quando si scrolla, scuro sul footer) senza servire più file.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Palazzo Vite"
      className={className}
      style={{
        display: "inline-block",
        backgroundColor: "currentColor",
        WebkitMaskImage: "url(/logo.svg)",
        maskImage: "url(/logo.svg)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
