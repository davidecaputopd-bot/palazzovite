import Link from "next/link";
import Logo from "@/app/components/Logo";
import { BOOKING_URL, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from "@/app/data/config";

export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] text-[var(--ink)] px-6 md:px-10 py-10 pb-28 md:pb-10 border-t border-[var(--ink)]/10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
        <Logo className="h-16 w-16" />
        <div className="font-label text-[11px] flex flex-wrap items-center gap-x-6 gap-y-2 text-[var(--ink-soft)]">
          <span>Via Amendola, 1 - Copertino (LE)</span>
          <a href={`tel:+39${CONTACT_PHONE}`} className="whitespace-nowrap font-semibold text-[var(--ink)] hover:text-[var(--accent-deep)] transition-colors">
            +39 {CONTACT_PHONE_DISPLAY}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[var(--ink)] hover:text-[var(--accent-deep)] transition-colors">
            {CONTACT_EMAIL}
          </a>
          <a href="https://www.instagram.com/palazzovite/" target="_blank" rel="noreferrer" className="hover:text-[var(--ink)]">
            Instagram
          </a>
          <a href="https://www.facebook.com/profile.php?id=61588969245162" target="_blank" rel="noreferrer" className="hover:text-[var(--ink)]">
            Facebook
          </a>
          {BOOKING_URL && (
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--ink)]">
              Booking
            </a>
          )}
          <Link href="/privacy" className="hover:text-[var(--ink)]">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="hover:text-[var(--ink)]">
            Cookie
          </Link>
          <span>© {new Date().getFullYear()} Palazzo Vite</span>
        </div>
      </div>

      {/* Dati legali obbligatori per locazioni turistiche/affittacamere in Italia */}
      <div className="font-label text-xs leading-relaxed text-[var(--ink-soft)] max-w-2xl">
        <p>
          Concentrika S.A.S., Via Basilio il Macedone 32, 73043 Copertino (LE).{" "}
          <span className="whitespace-nowrap">P. IVA 05152990750</span>
        </p>
        <p>
          <span className="whitespace-nowrap">CIN: IT075022B400127675</span>
          {" - "}
          <span className="whitespace-nowrap">CIS: LE075022242000033498</span>
        </p>
      </div>
    </footer>
  );
}
