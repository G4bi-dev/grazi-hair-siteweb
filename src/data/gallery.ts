import blond from "@/assets/blond.jpg";
import meches from "@/assets/meches.jpg";
import details1 from "@/assets/details-1.jpg";
import details2 from "@/assets/details-2.jpg";
import balayage from "@/assets/gallery-2.jpg";
import coloration from "@/assets/after.jpg";

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
    id: "blond",
    src: blond,
    alt: "Blond polaire lumineux sur cheveux mi-longs ondulés",
    category: "Blond",
    ratio: "portrait",
  },
  {
    id: "balayage",
    src: balayage,
    alt: "Balayage blond lumineux sur cheveux longs et ondulés",
    category: "Balayage",
    ratio: "tall",
  },
  {
    id: "meches",
    src: meches,
    alt: "Mèches blondes fines et fondues sur cheveux longs lissés",
    category: "Mèches",
    ratio: "portrait",
  },
  {
    id: "details-1",
    src: details1,
    alt: "Coloration cuivrée intense au reflet brillant après coiffage",
    category: "Détails",
    ratio: "portrait",
  },
  {
    id: "coloration",
    src: coloration,
    alt: "Coloration ombré blond sur cheveux longs bouclés",
    category: "Coloration",
    ratio: "tall",
  },
  {
    id: "details-2",
    src: details2,
    alt: "Détail du travail de lissage mèche par mèche au salon",
    category: "Détails",
    ratio: "landscape",
  },
];
