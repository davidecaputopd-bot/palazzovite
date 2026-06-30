export type Room = {
  slug: string;
  name: string;
  element: "aria" | "etere" | "fiamma" | "terra" | "mare";
  sqm?: number;
  bed: string;
  floor?: string;
  description: string;
  image: string;
};

// NOTA: sqm, floor e image vanno completati/sostituiti con i dati reali
// e le foto del fotografo non appena disponibili.
export const rooms: Room[] = [
  {
    slug: "aria",
    name: "Aria",
    element: "aria",
    bed: "Letto matrimoniale",
    description:
      "Pareti chiare e luce diretta dalla finestra principale. Lenzuola bianche, arredi essenziali.",
    image: "/images/rooms/aria.jpg",
  },
  {
    slug: "etere",
    name: "Etere",
    element: "etere",
    bed: "Letto matrimoniale",
    description:
      "La stanza con lo specchio antico a cornice dorata e il soffitto a volta originale.",
    image: "/images/rooms/etere.jpg",
  },
  {
    slug: "fiamma",
    name: "Fiamma",
    element: "fiamma",
    bed: "Letto matrimoniale",
    description:
      "Pavimento in cementine originali, comodino in legno laccato color ocra.",
    image: "/images/rooms/fiamma.jpg",
  },
  {
    slug: "terra",
    name: "Terra",
    element: "terra",
    bed: "Letto matrimoniale",
    description:
      "Pavimento in cementine originali verdi e marroni, comodino in legno laccato ocra, soffitto verde scuro. Bagno con doccia, box in vetro e pareti verde salvia.",
    image: "/images/rooms/terra-2.jpg",
  },
  {
    slug: "mare",
    name: "Mare",
    element: "mare",
    bed: "Letto matrimoniale",
    description:
      "Pareti verde salvia, libreria in legno con volumi e oggetti del Salento.",
    image: "/images/rooms/mare.jpg",
  },
];
