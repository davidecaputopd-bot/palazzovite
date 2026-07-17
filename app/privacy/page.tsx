import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@/app/data/config";

export const metadata: Metadata = {
  title: "Informativa privacy · Palazzo Vite",
  description:
    "Informativa sul trattamento dei dati personali raccolti attraverso il sito di Palazzo Vite.",
  alternates: { canonical: "/privacy" },
};

const updatedAt = "16 luglio 2026";

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-screen bg-[var(--stone)] text-[var(--ink)] px-6 md:px-10 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="font-label text-xs underline underline-offset-4 hover:opacity-70">
          ← Torna al sito
        </Link>

        <h1 className="font-display text-[clamp(2.8rem,8vw,5.5rem)] leading-[0.92] mt-12 mb-8">
          Informativa privacy
        </h1>

        <p className="font-body text-lg leading-relaxed text-[var(--ink-soft)] mb-10">
          Questa informativa descrive come vengono trattati i dati personali raccolti
          attraverso il sito di Palazzo Vite, in particolare quando compili il form
          di richiesta disponibilità o ci contatti via email, telefono o canali social.
        </p>

        <div className="space-y-9 font-body text-base leading-relaxed text-[var(--ink-soft)]">
          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Titolare del trattamento</h2>
            <p>
              Concentrika S.A.S., Via Basilio il Macedone 32, 73043 Copertino
              (LE), P.IVA 05152990750. Per richieste relative alla privacy puoi
              scrivere a{" "}
              <a className="underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <p className="mt-3">
              Non risulta nominato un Responsabile della Protezione dei Dati
              (DPO), in quanto non obbligatorio per questa tipologia di attività
              salvo diverse valutazioni interne o normative.
            </p>
          </section>

          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Dati trattati</h2>
            <p>
              Possiamo trattare i dati che scegli di inviarci: nome e cognome,
              email, telefono, date del soggiorno, numero di ospiti, suite di
              interesse e contenuto del messaggio. Se ci contatti telefonicamente
              o via email, trattiamo i dati necessari per rispondere alla tua
              richiesta.
            </p>
          </section>

          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Finalità e base giuridica</h2>
            <p>
              I dati vengono usati per rispondere alle richieste di informazioni
              e disponibilità, gestire eventuali comunicazioni precontrattuali e,
              se necessario, adempiere a obblighi di legge. La base giuridica è
              l’esecuzione di misure precontrattuali richieste dall’interessato e,
              quando applicabile, l’adempimento di obblighi legali.
            </p>
            <p className="mt-3">
              I dati non vengono usati per newsletter, comunicazioni promozionali
              o attività di profilazione, salvo separata e specifica informativa.
            </p>
          </section>

          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Servizi esterni</h2>
            <p>
              Il sito è ospitato su Vercel. Il form di contatto utilizza
              FormSubmit per inoltrare le richieste all’indirizzo email della
              struttura. Il sito utilizza inoltre Vercel Web Analytics per
              statistiche aggregate e non invasive sulla navigazione. La mappa
              di Google Maps non viene caricata automaticamente: viene mostrata
              solo dopo un’azione esplicita dell’utente.
            </p>
          </section>

          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Trasferimenti fuori dallo Spazio Economico Europeo</h2>
            <p>
              Alcuni fornitori tecnici potrebbero trattare dati anche fuori
              dallo Spazio Economico Europeo. In questi casi il trattamento deve
              avvenire sulla base degli strumenti previsti dal GDPR, come
              decisioni di adeguatezza, clausole contrattuali standard o altre
              garanzie applicabili.
            </p>
          </section>

          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Conservazione</h2>
            <p>
              I dati delle richieste vengono conservati per il tempo necessario a
              gestire la comunicazione e l’eventuale rapporto con l’ospite. I
              dati potranno essere conservati più a lungo solo quando necessario
              per obblighi amministrativi, fiscali o di tutela dei diritti.
            </p>
          </section>

          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Comunicazione dei dati</h2>
            <p>
              I dati non vengono venduti né diffusi. Possono essere trattati da
              fornitori tecnici coinvolti nel funzionamento del sito, della posta
              elettronica, dell’hosting o degli strumenti di invio dei messaggi,
              nei limiti necessari allo svolgimento dei rispettivi servizi.
            </p>
          </section>

          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Conferimento dei dati</h2>
            <p>
              Il conferimento dei dati indicati come obbligatori nel form è
              necessario per ricevere una risposta alla richiesta. Il mancato
              conferimento può impedire a Palazzo Vite di ricontattarti o di
              gestire correttamente la richiesta di disponibilità. I dati non
              obbligatori sono facoltativi.
            </p>
          </section>

          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Decisioni automatizzate</h2>
            <p>
              Non vengono effettuate decisioni basate unicamente su trattamenti
              automatizzati, né attività di profilazione con effetti giuridici o
              significativi sulla persona.
            </p>
          </section>

          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Diritti dell’interessato</h2>
            <p>
              Puoi chiedere accesso, rettifica, cancellazione, limitazione o
              opposizione al trattamento dei tuoi dati e, dove applicabile, la
              portabilità dei dati. Puoi esercitare i tuoi diritti scrivendo a{" "}
              <a className="underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              . Hai inoltre diritto di proporre reclamo all’Autorità Garante per
              la protezione dei dati personali.
            </p>
          </section>

          <section>
            <h2 className="font-label text-xs text-[var(--ink)] mb-3">Contatti</h2>
            <p>
              Palazzo Vite · Via Amendola, 1 - Copertino (LE) ·{" "}
              <a className="underline underline-offset-4" href={`tel:+39${CONTACT_PHONE_DISPLAY.replaceAll(" ", "")}`}>
                {CONTACT_PHONE_DISPLAY}
              </a>{" "}
              ·{" "}
              <a className="underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>

          <p className="font-label text-[11px] text-[var(--ink)] pt-4">
            Ultimo aggiornamento: {updatedAt}
          </p>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
