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

export const SPAZI_PHOTOS = seq("spazi", 5);
export const LOCATION_PHOTOS = seq("location", 4);
