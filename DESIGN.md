---
name: Palazzo Vite
description: Affittacamere storico a Copertino (LE), dal 1901 — sito vetrina editoriale, cinque stanze a tema elementale
colors:
  ink: "#2B2419"
  ink-soft: "#4A4233"
  stone: "#F4EFE4"
  stone-deep: "#E8DFC9"
  sage: "#8C9479"
  ochre: "#C99A3E"
  terracotta: "#B5703C"
  wood: "#5C4128"
  gold: "#B8964F"
  aria: "#D8D2BF"
  aria-ink: "#8A8268"
  etere: "#B8964F"
  etere-ink: "#8A6B2E"
  fiamma: "#B5703C"
  fiamma-ink: "#8A4E26"
  terra: "#C99A3E"
  terra-ink: "#8A6B22"
  mare: "#8C9479"
  mare-ink: "#54593F"
typography:
  display:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "clamp(2.5rem, 9vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "clamp(1.25rem, 3vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.01em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  none: "0px"
spacing:
  section-y-mobile: "6rem"
  section-y-desktop: "9rem"
  section-x: "1.5rem"
  gap-hairline: "1px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stone}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stone}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.stone}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 0"
---

# Design System: Palazzo Vite

## 1. Overview

**Creative North Star: "La Casa Riaperta"**

Palazzo Vite non si presenta come un boutique hotel: si presenta come una casa del 1901 che ha appena ripreso a vivere. Il sistema visivo deve sembrare costruito attorno a fotografie e materiali reali — pietra leccese, cementine, legno laccato, ferro battuto — non attorno a una palette astratta scelta per "sembrare elegante". Tipografia da insegna d'epoca (Bebas Neue) per i titoli, etichette da archivio in monospaziato maiuscolo per i metadati, corpo del testo leggero e leggibile per il racconto. Tutto è flat: nessuna ombra, nessun angolo arrotondato, nessuna texture decorativa che non derivi da una foto vera. La separazione tra sezioni e tra stanze è un filo sottile (1px), come la linea di una pagina scritta a mano, non un bordo da componente UI.

Il sistema rifiuta esplicitamente l'estetica da catalogo patinato di un boutique hotel di catena, l'oro ostentato del lusso da cartolina, e ogni traccia di "AI slop" da landing page SaaS — eyebrow uppercase ripetute meccanicamente su ogni sezione, card grid identiche, gradient text, hero-metric template. Dove un dato reale manca (foto della stanza Fiamma, link booking), il sito lo dice con garbo invece di improvvisare un placeholder ingannevole.

**Key Characteristics:**
- Palette ancorata a materiali reali del palazzo, non a una teoria del colore generica
- Tipografia a tre registri netti: display da insegna, label da archivio, corpo leggero
- Superfici completamente flat: zero ombre, zero radius, separazione via filo da 1px
- Ogni stanza (Aria, Etere, Fiamma, Terra, Mare) ha un colore-elemento e un'icona lineare propria
- Movimento discreto e coerente: reveal-on-scroll uniforme, mai coreografia vistosa

## 2. Colors

Palette pietra/terra, calda ma mai dolciastra: ogni colore corrisponde a un materiale reale visto nelle foto del palazzo (intonaco, terracotta, legno, ferro), non a una scelta "da brand".

### Primary
- **Inchiostro di Noce** (#2B2419): testo principale, sfondi pieni (nav scrolled, footer scuro della sezione "Il Palazzo", bottone primario). Fa da ancora scura su quasi ogni superficie chiara.

### Secondary
- **Pietra Leccese** (#F4EFE4): sfondo base del sito, il "foglio" su cui tutto il resto si appoggia. Mai bianco puro: ha la temperatura calda della pietra leccese reale.
- **Pietra Leccese Profonda** (#E8DFC9): variante più satura di Stone, usata per separare sezioni alternate (es. la sezione "Prenota") senza introdurre un nuovo colore.

### Tertiary — Materiali
- **Salvia** (#8C9479): verde spento, dalle pareti della stanza Mare.
- **Ocra** (#C99A3E): giallo-terra, dal pavimento in cementine della stanza Terra.
- **Terracotta** (#B5703C): rosso-mattone, dal comodino laccato della stanza Fiamma.
- **Legno** (#5C4128): bruno scuro, sfondo placeholder dietro la foto hero prima del caricamento.
- **Oro Vecchio** (#B8964F): ottone smorzato, dalla cassettiera con specchio della stanza Etere.

### Neutral — Stanze (colore + variante testo)
- **Aria** (#D8D2BF, ink #8A8268): pareti chiare, ritratti dipinti.
- **Etere** (#B8964F, ink #8A6B2E): grigio-azzurro venato d'oro vecchio, balcone sulla bouganville.
- **Fiamma** (#B5703C, ink #8A4E26): cementine originali, comodino ocra.
- **Terra** (#C99A3E, ink #8A6B22): cementine verdi e marroni, soffitto verde scuro.
- **Mare** (#8C9479, ink #54593F): pareti verde salvia, camino in legno scuro.

Ogni colore-elemento ha una variante `-ink` più scura, usata **solo** per testo e icone sopra lo sfondo chiaro dello stesso elemento, per garantire contrasto leggibile (mai il colore decorativo puro come colore di testo).

### Named Rules
**La Regola del Materiale Vero.** Ogni colore deve poter essere indicato a dito in una foto del palazzo. Se un colore non corrisponde a un materiale, una parete o un arredo reale, non entra in palette.

**La Regola del Contrasto Stanza.** Il colore decorativo di una stanza (`--aria`, `--etere`, ecc.) non è mai usato come colore di testo: solo come sfondo a bassa opacità (18–22%) dietro le icone. Il testo usa sempre la variante `-ink` corrispondente.

## 3. Typography

**Display Font:** Bebas Neue (con fallback sans-serif di sistema)
**Body Font:** DM Sans, peso 300 (con fallback sans-serif di sistema)
**Label/Mono Font:** DM Mono, pesi 300–500

**Character:** Bebas Neue è la voce dell'insegna — condensata, maiuscola, da edificio storico ripristinato. DM Sans Light è la voce del racconto — leggera, quasi sussurrata, mai gridata. DM Mono uppercase con tracking ampio è la voce dell'archivio — etichette, metadati, didascalie, come timbri su un documento.

### Hierarchy
- **Display** (400, `clamp(2.5rem, 9vw, 6rem)`, line-height 0.95, uppercase): titoli di sezione e hero. Il nome "Palazzo Vite" nell'hero usa una scala ancora più estrema (`18vw` mobile / `9vw` desktop) riservata esclusivamente all'hero.
- **Headline** (400, `~1.25–1.5rem`, uppercase): nomi delle stanze, titoli di sotto-sezione (es. "Il Giardino", "La Scala").
- **Body** (300, `1rem–1.125rem`, line-height 1.6): paragrafi narrativi (storia, descrizioni stanze). Max-width contenuta (`max-w-md`/`max-w-xl`) per restare entro 65–75ch.
- **Label** (400–500, `0.6875rem–0.75rem`, tracking 0.16em, uppercase): eyebrow di sezione, metadati form, link di navigazione, bottoni, didascalie ("Foto in arrivo").

### Named Rules
**La Regola dell'Insegna.** Bebas Neue compare solo in maiuscolo e solo per titoli — mai per corpo di testo, mai in minuscolo. È una voce, non un default.

**La Regola dell'Archivio.** Il monospaziato (label) è sempre uppercase con tracking ampio (0.16em): è il registro dei metadati, mai del racconto.

## 4. Elevation

Il sistema è completamente flat: nessuna `box-shadow`, nessun `border-radius` in tutto il sito. La profondità non viene da elevazione UI ma da tre soli mezzi: contrasto tonale tra sezioni (stone → stone-deep → ink), fotografia a piena ampiezza, e una linea sottile da 1px (`gap-px` su sfondo `ink/10%`) che separa stanze e blocchi affiancati — l'equivalente visivo di un margine scritto a penna, non di un bordo da componente.

### Named Rules
**La Regola del Foglio Piatto.** Nessuna superficie si solleva mai dal piano. Se serve separare due elementi, si usa una linea di 1px o un cambio di tono di sfondo, mai un'ombra.

## 5. Components

### Buttons
- **Shape:** angoli vivi, nessun radius (0px) — coerente con la Regola del Foglio Piatto.
- **Primary:** sfondo Inchiostro di Noce (#2B2419), testo Pietra Leccese (#F4EFE4), padding 16px/32px, tipografia Label (uppercase, tracking 0.16em). Usato per "Invia richiesta" e la CTA mobile fissa.
- **Hover/Focus:** opacità ridotta all'85% al hover (`transition-opacity`), nessun cambio di colore o ombra.
- **Ghost (nav):** trasparente con bordo 1px del colore del testo corrente (bianco su hero, ink su scrolled) — usato per "Verifica disponibilità" in nav.

### Inputs / Fields
- **Style:** nessun bordo perimetrale, solo `border-bottom` 1px (ink al 30% di opacità) su sfondo trasparente. Il campo è "scritto sulla pagina", non "incassato in una scheda".
- **Focus:** il bordo inferiore passa a ink pieno (100% opacità), nessun glow o ring.
- **Error:** testo di errore in Label, colore `--fiamma` (terracotta), sotto al campo.
- **Label:** sempre in font Label, uppercase, 11px, sopra il campo.

### Cards / Containers — Schede Stanza
- **Corner Style:** nessun radius.
- **Background:** Pietra Leccese piena; il colore-elemento appare solo come sfondo a bassa opacità (18–22%) dietro l'icona quando manca la foto.
- **Shadow Strategy:** nessuna — vedi Elevation.
- **Border:** nessun bordo per scheda; la separazione tra schede è la linea di 1px nel grid `gap-px`.
- **Internal Padding:** 24px mobile / 32px desktop.

### Navigation
- **Style:** fissa in alto, trasparente con gradiente scuro leggero sopra l'hero, sfondo Pietra Leccese pieno dopo lo scroll. Tipografia Label uppercase per i link.
- **Default/hover:** opacità 100% → 60% al hover, transizione semplice.
- **Active:** nessuno stato attivo evidenziato (sito a singola pagina con anchor link).
- **Mobile:** bottone "Menu"/"Chiudi" testuale (no hamburger icon), pannello a tendina con link impilati separati da linea 1px.

### Reveal (componente firma)
Ogni sezione del sito entra in scena con un fade-up uniforme via `IntersectionObserver`: opacità 0→1 e `translateY(28px)→0` su `cubic-bezier(0.16, 1, 0.3, 1)` di 0.9s, con `delay` scaglionato per elementi affiancati (es. le tre foto in "Il Palazzo", scaglionate di 120ms). È l'unica firma di movimento del sito: niente parallax, niente animazioni divergenti tra sezioni.

## 6. Do's and Don'ts

### Do:
- **Do** ancorare ogni colore a un materiale reale fotografato nel palazzo (Regola del Materiale Vero).
- **Do** usare la variante `-ink` di ogni colore-elemento per il testo, mai il colore decorativo puro.
- **Do** mantenere il sito completamente flat: zero `box-shadow`, zero `border-radius`.
- **Do** separare blocchi affiancati con una linea di 1px, non con un bordo o un'ombra.
- **Do** usare il fade-up di `Reveal` come unica firma di movimento, con stagger solo dove elementi sono davvero affiancati nella stessa sezione.
- **Do** dichiarare apertamente i contenuti mancanti ("Foto in arrivo") invece di nascondere il buco o inventare un placeholder generico.
- **Do** rispettare sempre `prefers-reduced-motion`, dato il pubblico misto (anche ospiti meno avvezzi a interfacce animate).

### Don't:
- **Don't** introdurre ombre, glassmorphism o angoli arrotondati: rompe la Regola del Foglio Piatto e introduce un linguaggio da prodotto SaaS estraneo a un palazzo del 1901.
- **Don't** usare gradient text o testo con `background-clip: text` — vietato in ogni circostanza.
- **Don't** trasformare le schede stanza in card con ombra/bordo arrotondato: restano fogli piatti separati da una linea.
- **Don't** introdurre un'estetica da boutique hotel patinato (foto stock, oro ostentato, copy da marketing turistico generico) — è l'anti-riferimento esplicito del brand.
- **Don't** moltiplicare l'eyebrow uppercase ("La Storia", "Le Stanze"...) come scaffolding automatico su ogni nuova sezione senza motivo: oggi è già presente su ogni sezione del sito ed è un pattern da AI-grammar da tenere sotto osservazione, non da estendere ulteriormente senza criterio.
- **Don't** usare Bebas Neue in minuscolo o per corpo di testo: è riservato ai titoli, sempre maiuscolo.
- **Don't** inventare dati reali mancanti (mq, piano, link booking) con segnaposto che sembrano dati veri.
