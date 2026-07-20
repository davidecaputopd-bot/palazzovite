"use client";

import { useEffect, useState } from "react";

export default function StickyBookBar({
  availability,
}: {
  availability: string;
  subtitle: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("main > section");
    const booking = document.getElementById("prenota");
    let pastHero = !hero;
    let onBooking = false;

    const update = () => setVisible(pastHero && !onBooking);

    const heroObserver = hero
      ? new IntersectionObserver(
          ([entry]) => {
            pastHero = !entry.isIntersecting;
            update();
          },
          { threshold: 0.04 },
        )
      : null;

    const bookingObserver = booking
      ? new IntersectionObserver(
          ([entry]) => {
            onBooking = entry.isIntersecting;
            update();
          },
          { rootMargin: "-12% 0px -22% 0px", threshold: 0.01 },
        )
      : null;

    if (hero && heroObserver) heroObserver.observe(hero);
    if (booking && bookingObserver) bookingObserver.observe(booking);
    update();

    return () => {
      heroObserver?.disconnect();
      bookingObserver?.disconnect();
    };
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[color-mix(in_srgb,var(--dark)_94%,transparent)] text-[var(--ink)] border-t border-[var(--ink)]/12 backdrop-blur-md transition-[transform,opacity] duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="#prenota"
        className="flex min-h-[48px] items-center justify-center px-5 py-3 font-label text-[11px] tracking-[0.16em] active:opacity-80 transition-opacity"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        {availability}
      </a>
    </div>
  );
}
