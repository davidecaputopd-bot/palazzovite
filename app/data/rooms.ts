export type Room = {
  slug: string;
  name: string;
  element: "aria" | "etere" | "fiamma" | "terra" | "mare";
  sqm?: number;
  bed: string;
  floor?: string;
  description: string;
  image: string | null; // null = foto non ancora disponibile
  bathroomImage?: string;
};

// NOTA: sqm e floor vanno completati con i dati reali quando disponibili.
export const rooms: Room[] = [
  {
    slug: "aria",
    name: "Aria",
    element: "aria",
    bed: "Letto matrimoniale",
    description:
      "Toni chiari, biancheria bianca e ritratti alle pareti. Il bagno, essenziale e curato, è definito da un grande specchio ad arco.",
    image: "/images/rooms/aria-1.jpg",
    bathroomImage: "/images/rooms/aria-bagno-1.jpg",
  },
  {
    slug: "etere",
    name: "Etere",
    element: "etere",
    bed: "Letto matrimoniale",
    description:
      "Pareti grigio-azzurre, una cassettiera antica con specchio originale e una porta-finestra sul balcone privato affacciato sulla bouganville.",
    image: "/images/rooms/etere-1.jpg",
  },
  {
    slug: "fiamma",
    name: "Fiamma",
    element: "fiamma",
    bed: "Letto matrimoniale",
    description:
      "Cementine originali e un comodino in legno laccato color ocra raccontano il carattere della dimora con pochi elementi scelti.",
    image: null,
  },
  {
    slug: "terra",
    name: "Terra",
    element: "terra",
    bed: "Letto matrimoniale",
    description:
      "Cementine verdi e brune, legno laccato color ocra e un soffitto verde profondo compongono un ambiente raccolto.",
    image: "/images/rooms/terra-2.jpg",
    bathroomImage: "/images/rooms/terra-bagno.jpg",
  },
  {
    slug: "mare",
    name: "Mare",
    element: "mare",
    bed: "Due letti singoli",
    description:
      "Pareti verde salvia, un camino in legno scuro e la porta-finestra con persiane bianche conservano un'atmosfera domestica.",
    image: "/images/rooms/mare-1.jpg",
    bathroomImage: "/images/rooms/mare-bagno.jpg",
  },
];
