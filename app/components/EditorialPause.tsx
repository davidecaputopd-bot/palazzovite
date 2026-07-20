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

  return (
    <section className={`${bg} px-6 md:px-10 py-10 md:py-20`}>
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 md:gap-10 items-stretch ${
          reverse ? "lg:grid-cols-[0.85fr_1.15fr]" : ""
        }`}
      >
        <Reveal variant="fade" className={`relative min-h-[420px] md:min-h-[620px] overflow-hidden bg-[var(--stone-deep)] ${reverse ? "lg:order-2" : ""}`}>
          <Image
            src={image}
            alt={copy.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 62vw"
          />
        </Reveal>

        <Reveal
          delay={80}
          className={`flex min-h-[320px] flex-col justify-end border border-[var(--ink)]/10 px-6 py-7 md:px-10 md:py-10 ${
            tone === "green" ? "bg-[color-mix(in_srgb,var(--dark)_86%,var(--stone))]" : "bg-[var(--stone-deep)]/55"
          } ${reverse ? "lg:order-1" : ""}`}
        >
          <p className="font-label text-[11px] text-[var(--ink-soft)] mb-5">
            {copy.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.94] max-w-lg">
            {copy.title}
          </h2>
          <p className="font-body font-light text-base md:text-lg leading-relaxed text-[var(--ink-soft)] max-w-md mt-6">
            {copy.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
