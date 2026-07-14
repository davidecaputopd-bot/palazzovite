// Manifest delle 40 foto reali in /public/foto (selezione dallo shooting).
// I nomi camera-* seguono gli slug degli elementi (aria/etere/fiamma/terra/mare).

export const HERO = "/foto/hero-01.jpg";

function seq(prefix: string, n: number): string[] {
  return Array.from({ length: n }, (_, i) => `/foto/${prefix}-${String(i + 1).padStart(2, "0")}.jpg`);
}

// 6 scatti per camera: prime 4 = ambiente, ultime 2 = bagno.
export const ROOM_PHOTOS: Record<string, string[]> = {
  aria: seq("camera-aria", 6),
  etere: seq("camera-etere", 6),
  mare: seq("camera-mare", 6),
  terra: seq("camera-terra", 6),
  fiamma: seq("camera-fiamma", 6),
};

// 12 scatti spazi comuni: scala a chiocciola, salone voltato, sala lettura,
// cucina, angolo caffè. 8 location: facciata, giardino, cortile, portale, terrazza.
export const SPAZI_PHOTOS = seq("spazi", 12);
export const LOCATION_PHOTOS = seq("location", 8);

// Foto per ciascuno spazio comune (galleria per tile, come le stanze).
// La scala a chiocciola resta nella sezione Storia, non qui.
export const SPACE_PHOTOS: Record<"garden" | "kitchen" | "terrace" | "work", string[]> = {
  garden: ["/foto/location-07.jpg", "/foto/location-08.jpg"],
  // La sala lettura fa parte della cucina: inclusa qui.
  kitchen: ["/foto/spazi-04.jpg", "/foto/spazi-11.jpg", "/foto/spazi-10.jpg", "/foto/spazi-05.jpg", "/foto/spazi-12.jpg"],
  terrace: ["/foto/location-05.jpg", "/foto/location-06.jpg", "/foto/hero-01.jpg"],
  work: ["/foto/spazi-03.jpg", "/foto/spazi-08.jpg", "/foto/spazi-09.jpg"],
};
