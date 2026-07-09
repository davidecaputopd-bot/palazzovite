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
    image: "/foto/camera-aria-03.jpg",
    bathroomImage: "/foto/camera-aria-05.jpg",
  },
  {
    slug: "etere",
    name: "Etere",
    element: "etere",
    bed: "Letto matrimoniale",
    description:
      "Pareti grigio-azzurre, una cassettiera antica con specchio originale e una porta-finestra sul balcone privato affacciato sulla bouganville.",
    image: "/foto/camera-etere-01.jpg",
    bathroomImage: "/foto/camera-etere-05.jpg",
  },
  {
    slug: "fiamma",
    name: "Fiamma",
    element: "fiamma",
    bed: "Letto matrimoniale",
    description:
      "Cementine originali e un comodino in legno laccato color ocra raccontano il carattere della dimora con pochi elementi scelti.",
    image: "/foto/camera-fiamma-01.jpg",
    bathroomImage: "/foto/camera-fiamma-05.jpg",
  },
  {
    slug: "terra",
    name: "Terra",
    element: "terra",
    bed: "Letto matrimoniale",
    description:
      "Cementine verdi e brune, legno laccato color ocra e un soffitto verde profondo compongono un ambiente raccolto.",
    image: "/foto/camera-terra-03.jpg",
    bathroomImage: "/foto/camera-terra-05.jpg",
  },
  {
    slug: "mare",
    name: "Mare",
    element: "mare",
    bed: "Due letti singoli",
    description:
      "Pareti verde salvia, un camino in legno scuro e la porta-finestra con persiane bianche conservano un'atmosfera domestica.",
    image: "/foto/camera-mare-02.jpg",
    bathroomImage: "/foto/camera-mare-05.jpg",
  },
];
