export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-[var(--wood)]">
      {/* placeholder: sostituire con foto reale del palazzo (facciata o cortile) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(43,36,25,0.15) 0%, rgba(43,36,25,0.55) 75%, rgba(43,36,25,0.8) 100%), linear-gradient(135deg, #8C9479 0%, #5C4128 55%, #2B2419 100%)",
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-24">
        <p className="font-label text-xs text-[#F4EFE4]/80 mb-3">
          Lecce — Salento — dal 1901
        </p>
        <h1 className="font-display text-[18vw] md:text-[9vw] leading-[0.85] text-[#F4EFE4]">
          Palazzo Vite
        </h1>
        <p className="font-body font-light text-[#F4EFE4]/90 max-w-md mt-6 text-base md:text-lg">
          Un palazzo dei primi del Novecento nel cuore del Salento, riaperto
          oggi in cinque stanze.
        </p>
      </div>
    </section>
  );
}
