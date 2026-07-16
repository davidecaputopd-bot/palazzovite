import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/app/data/config";

export const metadata: Metadata = {
  title: "Cookie policy · Palazzo Vite",
  description:
    "Informazioni su cookie, strumenti tecnici e servizi terzi utilizzati dal sito di Palazzo Vite.",
  alternates: { canonical: "/cookie-policy" },
};

const updatedAt = "16 luglio 2026";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--stone)] text-[var(--ink)] px-6 md:px-10 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="font-label text-xs underline underline-offset-4 hover:opacity-70">
          ← Torna al sito
        </Link>

        <h1 className="font-display text-[clamp(2.8rem,8vw,5.5rem)] leading-[0.92] mt-12 mb-8">
          Cookie policy
        </h1>

        <p className="font-body text-lg leading-relaxed text-[var(--ink-soft)] mb-10">
          Questa pagina spiega quali strumenti tecnici e servizi esterni possono
          essere usati durante la navigazione del sito di Palazzo Vite.
        </p>

        <div className="space-y-9 font-body text-base leading-relaxed text-[var(--ink-soft)]">
          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Cookie tecnici</h2>
            <p>
              Il sito può utilizzare strumenti tecnici necessari al corretto
              funzionamento delle pagine, alla sicurezza e alla distribuzione dei
              contenuti. Questi strumenti non richiedono consenso quando sono
              strettamente necessari al servizio richiesto dall’utente.
            </p>
          </section>

          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Statistiche di navigazione</h2>
            <p>
              Il sito può utilizzare Vercel Web Analytics per ottenere dati
              aggregati sulle visite e migliorare le pagine. Lo strumento è
              pensato per raccogliere metriche essenziali senza cookie di terze
              parti e senza identificare direttamente il visitatore.
            </p>
          </section>

          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Google Maps</h2>
            <p>
              La mappa integrata di Google Maps non viene caricata
              automaticamente. Viene mostrata solo se scegli di cliccare su
              “Mostra la mappa”. In alternativa puoi aprire direttamente
              l’indirizzo su Google Maps tramite il link esterno presente nella
              sezione Posizione.
            </p>
          </section>

          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Form di contatto</h2>
            <p>
              L’invio del form può passare attraverso FormSubmit, servizio usato
              per recapitare la richiesta all’indirizzo email della struttura. I
              dati inseriti nel form sono trattati secondo quanto indicato
              nell’informativa privacy.
            </p>
          </section>

          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Gestione dal browser</h2>
            <p>
              Puoi limitare o cancellare cookie e dati di navigazione dalle
              impostazioni del tuo browser. La disattivazione di alcuni strumenti
              tecnici potrebbe incidere sul corretto funzionamento del sito.
            </p>
          </section>

          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Contatti</h2>
            <p>
              Per domande su cookie e privacy puoi scrivere a{" "}
              <a className="underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <p className="font-label text-[11px] text-[var(--ink)] pt-4">
            Ultimo aggiornamento: {updatedAt}
          </p>
        </div>
      </div>
    </main>
  );
}
