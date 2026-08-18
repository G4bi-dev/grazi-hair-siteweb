import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const galleryCategories = [
  "Tout",
  "Balayage",
  "Blond",
  "Mèches",
  "Coloration",
  "Détails",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "Tout">;
  /** Format d'affichage dans la grille éditoriale */
  ratio: "portrait" | "landscape" | "tall";
};

/** Ajouter simplement de nouvelles entrées ici pour enrichir la galerie. */
export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: g1,
    alt: "Détail de cheveux blonds lumineux avec balayage doré",
    category: "Détails",
    ratio: "portrait",
  },
  {
    id: "g2",
    src: g2,
    alt: "Balayage blond lumineux sur cheveux longs et ondulés",
    category: "Balayage",
    ratio: "tall",
  },
  {
    id: "g3",
    src: g3,
    alt: "Coloration cuivrée chaude avec reflets sur cheveux longs bouclés",
    category: "Coloration",
    ratio: "portrait",
  },
  {
    id: "g4",
    src: g4,
    alt: "Travail de mèches blondes en cours au salon",
    category: "Mèches",
    ratio: "landscape",
  },
  {
    id: "g5",
    src: g5,
    alt: "Intérieur de salon minimaliste aux tons ivoire",
    category: "Détails",
    ratio: "tall",
  },
  {
    id: "g6",
    src: g6,
    alt: "Détail de tresse blonde aux reflets champagne",
    category: "Blond",
    ratio: "landscape",
  },
];
