"use client";

import { useRef, useState, FormEvent } from "react";
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
  const formRef = useRef<HTMLFormElement>(null);

  // Fallback: se l'invio automatico non riesce, apre la mail già precompilata
  // con tutti i dati della richiesta, così la richiesta arriva comunque.
  function buildMailto() {
    const f = formRef.current;
    if (!f) return `mailto:${CONTACT_EMAIL}`;
    const d = new FormData(f);
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
    const payload: Record<string, string> = Object.fromEntries(
      new FormData(form).entries() as IterableIterator<[string, string]>,
    );

    // Oggetto strutturato: "Richiesta disponibilità - [Camera] - [Date]"
    const camera = selectedRoom || "Camera da definire";
    const date =
      checkIn && checkOut ? `${checkIn} - ${checkOut}` : checkIn || "date da definire";
    payload._subject = `Richiesta disponibilità - ${camera} - ${date}`;
    payload._template = "table";
    payload._captcha = "false";
    if (payload.email) payload._replyto = payload.email;

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
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12 max-w-md mx-auto">
        <p className="font-display text-3xl mb-3">{copy.sent}</p>
        <p className="font-body font-light text-[var(--ink-soft)]">
          {copy.sentText}
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border-b border-[var(--ink)]/30 py-3 font-body font-light text-[var(--ink)] placeholder:text-[var(--ink-soft)]/50 focus:outline-none focus:border-[var(--ink)] transition-colors";
  const labelClass = "font-label text-[11px] text-[var(--ink-soft)] block mb-2";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-full text-left space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} htmlFor="name">
            {copy.name}
          </label>
          <input id="name" name="name" type="text" required aria-required="true" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            {copy.email}
          </label>
          <input id="email" name="email" type="email" required aria-required="true" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} htmlFor="phone">
            {copy.phone}
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="guests">
            {copy.guests}
          </label>
          <input id="guests" name="guests" type="number" min={1} max={10} className={inputClass} />
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
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>
      {dateError && (
        <p role="alert" className="font-label text-[11px] text-[var(--fiamma)]">
          {dateError}
        </p>
      )}

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

      {status === "error" && (
        <p role="alert" className="font-label text-[11px] text-[var(--fiamma)]">
          {copy.sendError}{" "}
          <a href={buildMailto()} className="underline underline-offset-4 hover:opacity-70">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading" || !!dateError}
        className="w-full sm:w-auto font-label text-xs bg-[var(--ink)] text-[var(--stone)] px-8 py-4 hover:opacity-85 transition-opacity disabled:opacity-50"
      >
        {status === "loading" ? copy.sending : copy.send}
      </button>
    </form>
  );
}
