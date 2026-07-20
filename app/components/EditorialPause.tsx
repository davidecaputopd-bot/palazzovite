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
    <section className={`${bg} px-6 md:px-10 py-14 md:py-24 overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-7 md:gap-10 items-end`}>
          <Reveal
            variant="fade"
            className={`relative min-h-[430px] md:min-h-[660px] overflow-hidden bg-[var(--stone-deep)] lg:col-span-7 ${
              reverse ? "lg:col-start-6 lg:order-2" : "lg:col-start-1"
            }`}
          >
            <Image
              src={image}
              alt={copy.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </Reveal>

          <Reveal
            delay={80}
            className={`lg:col-span-5 ${reverse ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"}`}
          >
            <div className="border-t border-[var(--ink)]/18 pt-7 md:pt-9">
              <p className="font-label text-[10px] text-[var(--ink-soft)] mb-6">
                {copy.eyebrow}
              </p>

              <h2 className="font-display text-[clamp(2.35rem,4.7vw,4.5rem)] leading-[0.92] max-w-xl">
                {copy.title}
              </h2>

              <p className="font-body font-light text-base md:text-lg leading-relaxed text-[var(--ink-soft)] max-w-md mt-6">
                {copy.text}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
