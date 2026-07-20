"use client";

import { useEffect, useState } from "react";

export default function StickyBookBar({
  availability,
}: {
  availability: string;
  subtitle: string;
}) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[color-mix(in_srgb,var(--dark)_94%,transparent)] text-[var(--ink)] border-t border-[var(--ink)]/12 backdrop-blur-md">
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
