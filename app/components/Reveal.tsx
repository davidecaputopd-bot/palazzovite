"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "lift",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "lift" | "fade" | "instant";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || variant === "instant") return;

    const el = ref.current;
    if (!el) return;

    const frame = requestAnimationFrame(() => {
      setHidden(true);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -24px 0px" },
    );

    observer.observe(el);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [variant]);

  const distance = variant === "fade" ? "0" : "clamp(12px, 2vw, 18px)";
  const duration = variant === "fade" ? 0.42 : 0.52;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? `translateY(${distance})` : "translateY(0)",
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
