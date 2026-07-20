import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import type { SiteCopy } from "@/app/data/i18n";

type EditorialItem = SiteCopy["editorial"]["house"];

export default function EditorialPause({
  copy,
  image,
  tone = "stone",
  reverse = false,
}: {
  copy: EditorialItem;
  image: string;
  tone?: "stone" | "green";
  reverse?: boolean;
}) {
  const bg = tone === "green" ? "bg-[var(--dark)]" : "bg-[var(--stone)]";
  const panel =
    tone === "green"
      ? "bg-[color-mix(in_srgb,var(--dark)_82%,var(--stone))]"
      : "bg-[color-mix(in_srgb,var(--stone)_82%,var(--blush))]";

  return (
    <section className={`${bg} px-6 md:px-10 py-12 md:py-24 overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className={`relative grid grid-cols-1 lg:grid-cols-12 items-end gap-0 ${reverse ? "" : ""}`}>
          <Reveal
            variant="fade"
            className={`relative min-h-[470px] md:min-h-[720px] overflow-hidden bg-[var(--stone-deep)] lg:col-span-8 ${
              reverse ? "lg:col-start-5 lg:row-start-1" : "lg:col-start-1 lg:row-start-1"
            }`}
          >
            <Image
              src={image}
              alt={copy.imageAlt}
              fill
              className="object-cover scale-[1.01]"
              sizes="(max-width: 1024px) 100vw, 68vw"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-[var(--hero-shade)]/22 via-transparent to-transparent" />
          </Reveal>

          <Reveal
            delay={80}
            className={`relative z-10 -mt-16 mx-4 border border-[var(--ink)]/10 ${panel} px-6 py-7 shadow-[0_24px_80px_color-mix(in_srgb,var(--hero-shade)_10%,transparent)] md:px-10 md:py-10 lg:mx-0 lg:mt-0 lg:col-span-5 lg:row-start-1 ${
              reverse ? "lg:col-start-1 lg:translate-x-10" : "lg:col-start-8 lg:-translate-x-10"
            }`}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--ink)]/35" />
              <p className="font-label text-[10px] text-[var(--ink-soft)]">
                {copy.eyebrow}
              </p>
            </div>

            <h2 className="font-display text-[clamp(2.45rem,5vw,4.8rem)] leading-[0.9] max-w-lg">
              {copy.title}
            </h2>

            <p className="font-body font-light text-base md:text-lg leading-relaxed text-[var(--ink-soft)] max-w-md mt-6">
              {copy.text}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
