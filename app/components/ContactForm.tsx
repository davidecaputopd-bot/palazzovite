"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CONTACT_EMAIL } from "@/app/data/config";
import { rooms } from "@/app/data/rooms";
import type { SiteCopy } from "@/app/data/i18n";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({ copy }: { copy: SiteCopy["form"] }) {
  const searchParams = useSearchParams();
  const initialRoom =
    rooms.find((room) => room.slug === searchParams.get("room"))?.name ?? "";
  const [status, setStatus] = useState<Status>("idle");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(initialRoom);
  const [mailtoHref, setMailtoHref] = useState(`mailto:${CONTACT_EMAIL}`);

  // Fallback: se l'invio automatico non riesce, apre la mail già precompilata
  // con tutti i dati della richiesta, così la richiesta arriva comunque.
  function buildMailto(form: HTMLFormElement) {
    const d = new FormData(form);
    const camera = selectedRoom || "-";
    const date =
      checkIn && checkOut ? `${checkIn} - ${checkOut}` : checkIn || "date da definire";
    const subject = `Richiesta disponibilità - ${camera} - ${date}`;
    const body = [
      `Nome: ${d.get("name") ?? ""}`,
      `Email: ${d.get("email") ?? ""}`,
      `Telefono: ${d.get("phone") ?? ""}`,
      `Ospiti: ${d.get("guests") ?? ""}`,
      `Camera: ${camera}`,
      `Arrivo: ${checkIn}`,
      `Partenza: ${checkOut}`,
      "",
      `${d.get("message") ?? ""}`,
    ].join("\n");
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const dateError =
    checkIn && checkOut && checkOut <= checkIn
      ? copy.dateError
      : "";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (dateError) return;
    setStatus("loading");

    const form = e.currentTarget;
    setMailtoHref(buildMailto(form));
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? "").trim();

    // Le chiavi diventano le etichette dei campi nella mail: sempre in italiano,
    // qualunque sia la lingua con cui l'ospite naviga il sito.
    const camera = selectedRoom || "Camera da definire";
    const date =
      checkIn && checkOut ? `${checkIn} - ${checkOut}` : checkIn || "date da definire";
    const payload: Record<string, string> = {
      Nome: get("name"),
      Email: get("email"),
      Telefono: get("phone") || "-",
      Ospiti: get("guests") || "-",
      Camera: camera,
      Arrivo: checkIn || "-",
      Partenza: checkOut || "-",
      Messaggio: get("message") || "-",
      _subject: `Richiesta disponibilità - ${camera} - ${date}`,
      _template: "table",
      _captcha: "false",
    };
    if (payload.Email) payload._replyto = payload.Email;

    try {
      // FormSubmit: nessuna chiave, recapita a CONTACT_EMAIL (attivazione una tantum).
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && String(data.success) === "true") {
        setStatus("success");
        form.reset();
        setCheckIn("");
        setCheckOut("");
        setSelectedRoom("");
      } else {
        setMailtoHref(buildMailto(form));
        setStatus("error");
      }
    } catch {
      setMailtoHref(buildMailto(form));
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12 max-w-md mx-auto form-success">
        <p className="font-display text-3xl mb-3">{copy.sent}</p>
        <p className="font-body font-light text-[var(--ink-soft)]">
          {copy.sentText}
        </p>
      </div>
    );
  }

  const inputClass =
    // Niente focus:outline-none: lascia agire il :focus-visible globale (2px, WCAG 2.4.11).
    "w-full bg-transparent border-b border-[var(--ink)]/60 py-3 font-body font-light text-[var(--ink)] placeholder:text-[var(--ink-soft)] focus:border-[var(--ink)] focus:bg-[var(--stone)]/40 transition-colors duration-200";
  const labelClass = "font-label text-[11px] text-[var(--ink-soft)] block mb-2";

  return (
    <form onSubmit={handleSubmit} className="w-full text-left space-y-5">
      <p className="font-body text-sm leading-relaxed text-[var(--ink-soft)]">
        {copy.intro}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} htmlFor="name">
            {copy.name}
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required aria-required="true" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            {copy.email}
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required aria-required="true" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} htmlFor="phone">
            {copy.phone}
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="guests">
            {copy.guests}
          </label>
          <input id="guests" name="guests" type="number" min={1} max={10} required aria-required="true" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="room">
          {copy.suite}
        </label>
        <select
          id="room"
          name="room"
          className={inputClass}
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
        >
          <option value="">{copy.undecided}</option>
          {rooms.map((r) => (
            <option key={r.slug} value={r.name}>
              {r.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} htmlFor="checkin">
            {copy.arrival}
          </label>
          <input
            id="checkin"
            name="checkin"
            type="date"
            required
            aria-required="true"
            aria-describedby={dateError ? "date-error" : undefined}
            aria-invalid={dateError ? true : undefined}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="checkout">
            {copy.departure}
          </label>
          <input
            id="checkout"
            name="checkout"
            type="date"
            required
            aria-required="true"
            aria-describedby={dateError ? "date-error" : undefined}
            aria-invalid={dateError ? true : undefined}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>
      {dateError && (
        <p id="date-error" role="alert" className="border border-[var(--fiamma-ink)]/20 bg-[var(--stone)]/45 px-3 py-2 font-label text-[11px] leading-relaxed text-[var(--fiamma-ink)]">
          {dateError}
        </p>
      )}
      <p className="font-body text-sm text-[var(--ink-soft)]">{copy.requiredFields}</p>

      <div>
        <label className={labelClass} htmlFor="message">
          {copy.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder={copy.placeholder}
        />
      </div>

      <label className="flex items-start gap-3 font-body text-sm leading-relaxed text-[var(--ink-soft)]">
        <input
          name="privacy"
          type="checkbox"
          required
          aria-required="true"
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--ink)]"
        />
        <span>
          {copy.privacyConsent}{" "}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-[var(--ink)]"
          >
            {copy.privacyLink}
          </a>
          .
        </span>
      </label>

      {status === "error" && (
        <p role="alert" className="border border-[var(--fiamma-ink)]/20 bg-[var(--stone)]/45 px-3 py-2 font-label text-[11px] leading-relaxed text-[var(--fiamma-ink)]">
          {copy.sendError}{" "}
          <a href={mailtoHref} className="underline underline-offset-4 hover:opacity-70">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading" || !!dateError}
        className="w-full font-label text-xs bg-[var(--ink)] text-[var(--stone)] px-8 py-4 hover:opacity-85 active:scale-[0.98] transition-[opacity,transform] duration-150 disabled:opacity-50 disabled:scale-100"
      >
        {status === "loading" ? copy.sending : copy.send}
      </button>
    </form>
  );
}
