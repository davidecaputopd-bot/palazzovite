"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { WEB3FORMS_ACCESS_KEY, CONTACT_EMAIL } from "@/app/data/config";
import { rooms } from "@/app/data/rooms";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const roomParam = searchParams.get("room");
    if (roomParam) {
      const match = rooms.find((r) => r.slug === roomParam);
      if (match) setSelectedRoom(match.name);
    }
  }, [searchParams]);
  const dateError =
    checkIn && checkOut && checkOut <= checkIn
      ? "La data di partenza deve essere dopo l'arrivo."
      : "";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (dateError) return;
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Nuova richiesta da Palazzo Vite");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
        setCheckIn("");
        setCheckOut("");
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
        <p className="font-display text-3xl mb-3">Richiesta inviata.</p>
        <p className="font-body font-light text-[var(--ink-soft)]">
          Ti risponderemo al più presto a conferma della disponibilità.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border-b border-[var(--ink)]/30 py-3 font-body font-light text-[var(--ink)] placeholder:text-[var(--ink-soft)]/50 focus:outline-none focus:border-[var(--ink)] transition-colors";
  const labelClass = "font-label text-[11px] text-[var(--ink-soft)] block mb-2";

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} htmlFor="name">
            Nome e cognome *
          </label>
          <input id="name" name="name" type="text" required aria-required="true" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email *
          </label>
          <input id="email" name="email" type="email" required aria-required="true" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} htmlFor="phone">
            Telefono
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="guests">
            Numero ospiti
          </label>
          <input id="guests" name="guests" type="number" min={1} max={10} className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="room">
          Stanza di interesse
        </label>
        <select
          id="room"
          name="room"
          className={inputClass}
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
        >
          <option value="">Non so ancora</option>
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
            Arrivo
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
            Partenza
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
          ⚠ {dateError}
        </p>
      )}

      <div>
        <label className={labelClass} htmlFor="message">
          Messaggio
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Richieste particolari, orario di arrivo, ecc."
        />
      </div>

      {status === "error" && (
        <p role="alert" className="font-label text-[11px] text-[var(--fiamma)]">
          ⚠ Invio non riuscito. Riprova oppure scrivi a {CONTACT_EMAIL}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading" || !!dateError}
        className="w-full sm:w-auto font-label text-xs bg-[var(--ink)] text-[var(--stone)] px-8 py-4 hover:opacity-85 transition-opacity disabled:opacity-50"
      >
        {status === "loading" ? "Invio in corso..." : "Invia richiesta"}
      </button>
    </form>
  );
}
