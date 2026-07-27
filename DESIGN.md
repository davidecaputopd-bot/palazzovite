---
name: Palazzo Vite
description: Dimora storica del 1908 a Copertino (Salento) — sito vetrina, cinque suite a tema elementale
colors:
  stone: "#F4EFE4"
  stone-deep: "#E8DFC9"
  ink: "#2B2419"
  ink-soft: "#4A4233"
  verdino: "#B8C3B1"
  hero-shade: "#24301F"
  blush: "#F2E2DD"
  accent: "#ACB6A8"
  accent-soft: "#C1C8BE"
  accent-deep: "#5E6B57"
  sage: "#8C9479"
  ochre: "#C99A3E"
  terracotta: "#B5703C"
  wood: "#5C4128"
  gold: "#B8964F"
  aria: "#D8D2BF"
  aria-ink: "#756B4F"
  etere: "#B8964F"
  etere-ink: "#8A6B2E"
  fiamma: "#B5703C"
  fiamma-ink: "#8A4E26"
  terra: "#C99A3E"
  terra-ink: "#71591A"
  mare: "#8C9479"
  mare-ink: "#54593F"
typography:
  display:
    fontFamily: "Encode Sans Expanded, sans-serif"
    fontSize: "clamp(2.7rem, 6vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "0.01em"
  subheading:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.35rem, 4.7vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "normal"
  body:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Encode Sans Expanded, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  sm: "12px"
  md: "16px"
  lg: "24px"
  pill: "9999px"
spacing:
  section-y-mobile: "5rem"
  section-y-desktop: "9rem"
  section-x: "1.5rem"
  gap: "0.75rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stone}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.hero-shade}"
    textColor: "{colors.stone}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  input-field:
    backgroundColor: "{colors.stone-deep}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  panel:
    backgroundColor: "{colors.stone-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "20px 24px"
  room-card:
    backgroundColor: "{colors.verdino}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "16px 20px"
---

# Design System: Palazzo Vite

## 1. Overview

**Creative North Star: "La Casa Riaperta"**

Palazzo Vite non si presenta come un boutique hotel: si presenta come una dimora del 1908 che ha appena ripreso a respirare. Il sistema visivo è costruito attorno a fotografie e materiali reali — pietra leccese, cementine, ferro battuto, agrumi, le pareti verde-salvia delle stanze — e da lì estrae ogni colore. È caldo e morbido, non patinato: superfici a tinta piena con angoli gentilmente arrotondati, ombre calde appena percettibili, una pellicola di grana sopra tutta la pagina. La voce tipografica alterna un display geometrico largo (Encode Sans Expanded, sempre maiuscolo) a un corpo letterario serif (Spectral), con Playfair riservato ai momenti editoriali.

Il sistema rifiuta esplicitamente l'estetica da catalogo patinato di un boutique hotel di catena, l'oro ostentato del lusso da cartolina, e ogni traccia di "AI slop" da landing page SaaS — eyebrow uppercase su ogni sezione, card grid identiche, gradient text, hero-metric template, ombre nette e lucide. La patina e l'imperfezione sono pregi da mostrare, non difetti da nascondere.

Il colore firma è il **verdino** (#B8C3B1), campionato dalle pareti reali: è il fondo delle cinque schede-suite e lega tutto il sito all'edificio vero. I cinque colori-elemento (Aria, Etere, Fiamma, Terra, Mare) restano in riserva, usati per il testo e i badge di ogni stanza, mai come decorazione arbitraria.

**Key Characteristics:**
- Palette ancorata a materiali reali del palazzo, non a una teoria del colore
- Superfici morbide: pannelli a tinta con raggio 12–24px, ombre calde diffuse
- Tipografia a tre registri: display geometrico maiuscolo, corpo serif letterario, occhielli editoriali Playfair
- Verdino come superficie-firma delle suite; colori-elemento in riserva per stanza
- Movimento discreto: un solo fade-up all'ingresso, solo per il contenuto sotto la piega

## 2. Colors

Palette pietra/terra calda, mai dolciastra: ogni colore corrisponde a un materiale visto nelle foto del palazzo.

### Primary
- **Verdino delle Pareti** (#B8C3B1): il colore-firma, campionato dalle pareti verde-salvia. Fondo delle schede-suite e delle superfici che devono "appartenere" all'edificio. Mai usato come colore di testo su fondo chiaro (contrasto insufficiente).

### Secondary
- **Salvia Profonda** (#5E6B57, `accent-deep`): unico accento tipografico. Etichette (label) e occhielli su fondo chiaro. Verde scurito per garantire contrasto AA.

### Tertiary — Materiali (riserva)
- **Ocra** (#C99A3E), **Terracotta** (#B5703C), **Oro Vecchio** (#B8964F), **Legno** (#5C4128), **Salvia** (#8C9479): colori dei materiali reali, usati come colore-elemento delle stanze (Terra, Fiamma, Etere, Mare), mai come decorazione generica.

### Neutral
- **Pietra Leccese** (#F4EFE4, `stone`): sfondo base, il "foglio" caldo su cui tutto si appoggia. Mai bianco puro.
- **Pietra Profonda** (#E8DFC9, `stone-deep`): fill dei pannelli-dati e dei campi form; stacca dal fondo senza introdurre un nuovo colore.
- **Inchiostro di Noce** (#2B2419, `ink`): testo principale, bottone primario, badge. Ancora scura ovunque.
- **Inchiostro Morbido** (#4A4233, `ink-soft`): testo secondario e descrizioni.
- **Crema** (#F2E2DD, `blush`): superfici chiare sopra la hero.
- **Velatura Hero** (#24301F, `hero-shade`): solo come velatura fotografica sotto la hero e sorgente delle ombre calde.

### Colori-Elemento (testo)
- **aria-ink** (#756B4F) · **etere-ink** (#8A6B2E) · **fiamma-ink** (#8A4E26) · **terra-ink** (#71591A) · **mare-ink** (#54593F): variante scura di ogni elemento, usata **solo** per testo/badge della stanza corrispondente, per contrasto leggibile.

### Named Rules
**La Regola del Materiale Vero.** Ogni colore deve poter essere indicato a dito in una foto del palazzo. Se non corrisponde a una parete, un pavimento o un arredo reale, non entra in palette.

**La Regola del Verdino-Non-Testo.** Il verdino (#B8C3B1) è una superficie, mai un colore di testo su fondo chiaro: il contrasto crolla a ~1.6:1. Per il testo si usa `ink` o `accent-deep`.

**La Regola dell'Elemento in Riserva.** I colori-elemento (aria/etere/fiamma/terra/mare) appartengono alla loro stanza. Non sono decorazione: fuori dalla scheda-suite non compaiono.

## 3. Typography

**Display Font:** Encode Sans Expanded (fallback sans-serif di sistema)
**Body Font:** Spectral, peso 300 (fallback Georgia, serif)
**Subheading Font:** Playfair Display (fallback Georgia, serif)
**Label Font:** Encode Sans Expanded, maiuscolo con tracking ampio

**Character:** Il display geometrico largo è la voce dell'insegna — condensa, sicura, sempre maiuscola. Spectral è la voce del racconto — serif letterario, leggero, mai gridato. Playfair è la voce editoriale — comparso solo dove serve rompere i maiuscoli (pause editoriali). L'accoppiata regge su un asse di contrasto vero (geometrico vs letterario), non su due sans simili.

### Hierarchy
- **Display** (600, `clamp(2.7rem, 6vw, 6rem)`, line-height 0.9–0.94, uppercase): titoli di hero e sezione.
- **Subheading** (500, `clamp(2.35rem, 4.7vw, 4.5rem)`, line-height 1.02, Playfair, title case): titoli delle pause editoriali.
- **Body** (300, `1rem–1.25rem`, line-height 1.6, Spectral): paragrafi narrativi. Max-width contenuta (65–75ch).
- **Label** (600, `0.625rem–0.6875rem` — tier 10/11px, tracking 0.14em, uppercase): occhielli, metadati, link nav, bottoni, chip.

### Named Rules
**La Regola dell'Insegna.** Encode Sans Expanded compare solo in maiuscolo e solo per titoli — mai per corpo di testo.

**La Regola dell'Occhiello Raro.** L'eyebrow (label maiuscola sopra il titolo) vive su 2 sezioni-àncora (Storia, Suite), non su ogni sezione. Un occhiello ovunque è AI-grammar.

## 4. Elevation

Il sistema NON è più piatto: usa **profondità morbida**. La depth viene da tre mezzi combinati: (1) layering tonale tra superfici (stone → stone-deep → verdino → ink), (2) angoli arrotondati che sollevano otticamente pannelli e foto, (3) ombre calde, ampie e a bassa opacità sotto le foto-protagoniste e i popover. Nessuna ombra netta, scura o lucida: quella è l'estetica boutique-patinato che il brand rifiuta.

### Shadow Vocabulary
- **Ombra-Foto** (`box-shadow: 0 28px 60px -32px color-mix(in srgb, #24301F 50%, transparent)`): sollevamento caldo sotto le foto-protagoniste (Storia, editoriale, Posizione, mappa).
- **Ombra-Popover** (`box-shadow: 0 14px 34px rgb(36 48 31 / 0.16)`): sotto il dropdown lingua e superfici fluttuanti.

### Named Rules
**La Regola dell'Ombra Calda.** Ogni ombra è tinta di `hero-shade` (#24301F), mai nero puro, sempre a bassa opacità e blur ampio con spread negativo. Se sembra un'app del 2014, il nero è troppo scuro e il blur troppo stretto.

## 5. Components

### Buttons
- **Shape:** pillola (`rounded-full`), coerente col linguaggio morbido.
- **Primary:** fondo Inchiostro (#2B2419), testo Pietra (#F4EFE4), padding 16px/32px, tipografia Label maiuscola. Hover → `hero-shade`. Usato per "Invia richiesta", CTA hero, "Richiedi per questa suite".
- **Ghost:** trasparente con bordo 1px del colore del testo corrente (blush su hero, ink su scrolled), pillola. Usato per la CTA in nav e il selettore lingua.

### Chips
- **Style:** pillola a tinta `stone-deep`, testo ink; sulle schede-suite assumono il colore-elemento della stanza (`color-mix(elemento, stone)`, testo `elemento-ink`).
- **State:** informativi, non interattivi (dotazioni stanza: letto, bagno, Wi-Fi).

### Cards / Containers (Pannelli)
- **Corner Style:** raggio md (16px, `rounded-2xl`); container grandi lg (24px).
- **Background:** `stone-deep` pieno su fondo `stone`; nelle sezioni a fondo scuro, il pannello si schiarisce (`stone`).
- **Shadow Strategy:** nessuna ombra sui pannelli-dati; l'ombra è riservata alle foto (vedi Elevation).
- **Border:** nessuno. La separazione è tonale, mai un filo da 1px.
- **Internal Padding:** 20–24px.
- **Gerarchia:** non tutto è un pannello pieno. I dati-stat (Highlights, Posizione) sono pannelli; i meta secondari (dettagli Storia) restano aperti (solo tono e spazio).

### Inputs / Fields
- **Style:** campo pieno morbido, fondo `stone-deep`, raggio sm (12px). Niente sottolineatura, niente bordo perimetrale.
- **Focus:** il focus-ring globale (2px `ink`, offset 2px) — mai `outline:none`. Fondo che si scurisce leggermente.
- **Error:** pannello morbido tinto `fiamma-ink` (nessun bordo), testo `fiamma-ink`.

### Navigation
- **Style:** fissa in alto, trasparente sull'hero, velatura `verdino` + blur dopo lo scroll. Link in Label maiuscola con underline animato sull'attivo (scroll-spy).
- **Selettore lingua:** icona globo lineare in `currentColor` + sigla (IT/EN/FR/ES). Mai bandiere-emoji.
- **Mobile:** bottone testuale "Menu"/"Chiudi" (no hamburger); barra fissa "Richiedi disponibilità" in basso (safe-area aware). Target touch ≥ 44px.

### Scheda-Suite (componente firma)
Ogni suite è una scheda su fondo `verdino`, raggio lg (24px), con badge romano (I–V) in `ink`, nome in `ink`, chip nel colore-elemento della stanza, e CTA a contrasto (pillola `ink` piena). È il momento in cui il verdino e i cinque elementi si incontrano.

### Reveal (firma di movimento)
Un unico fade-up (opacità 0→1, `translateY` clamp 12–18px, `cubic-bezier(0.16,1,0.3,1)`) applicato **solo al contenuto sotto la piega**: ciò che è già a schermo resta visibile, nessun gate. Rispetta sempre `prefers-reduced-motion`.

## 6. Do's and Don'ts

### Do:
- **Do** ancorare ogni colore a un materiale reale fotografato nel palazzo (Regola del Materiale Vero).
- **Do** usare il verdino come superficie-firma delle suite; per il testo usare `ink` o `accent-deep`.
- **Do** dividere le informazioni con tono e spazio o pannelli morbidi, mai con filetti da 1px.
- **Do** arrotondare pannelli e foto (raggio 12–24px) e usare ombre calde solo sulle foto-protagoniste.
- **Do** tenere l'occhiello su 2 sezioni-àncora, non su tutte.
- **Do** riservare i colori-elemento alla loro stanza.
- **Do** rispettare `prefers-reduced-motion` e animare solo il contenuto sotto la piega.
- **Do** dichiarare apertamente i contenuti mancanti invece di inventare placeholder ingannevoli.

### Don't:
- **Don't** introdurre un'estetica da **boutique hotel patinato** (foto stock, oro ostentato, copy da marketing turistico generico) — anti-riferimento esplicito del brand.
- **Don't** usare **ombre nette, scure o lucide** né glassmorphism decorativo: rompono la Regola dell'Ombra Calda.
- **Don't** usare **gradient text** o `background-clip: text` — vietato in ogni circostanza.
- **Don't** mettere l'**eyebrow uppercase su ogni sezione**, né **card grid identiche** ripetute, né **hero-metric template**: sono "AI slop" da landing page SaaS.
- **Don't** usare il **verdino come colore di testo** su fondo chiaro (contrasto ~1.6:1).
- **Don't** usare **bandiere-emoji** come icone (inietta hue incontrollati): icona lineare in `currentColor`.
- **Don't** trasformare *ogni* gruppo di dati nello stesso pannello morbido: serve gerarchia tra contenitori.
- **Don't** usare Encode Sans Expanded in minuscolo o per il corpo del testo.
- **Don't** inventare dati reali mancanti (mq, piano, prezzi, recensioni) con segnaposto che sembrano veri.
