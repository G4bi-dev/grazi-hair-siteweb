/**
 * Contenu du site — tout est modifiable ici (placeholders).
 * Remplacer les valeurs par les informations réelles quand elles seront connues.
 */

export const site = {
  name: "Grazi Hair",
  tagline: "Balayage · Blond · Coloration",
  baseline:
    "L'art du blond lumineux et des couleurs sur-mesure, pensé pour révéler votre naturel.",
  contact: {
    phone: "+32 455 198 283",
    email: "",
    address: "Bruxelles",
    city: "Belgique",
    instagram: "https://instagram.com/GRAZIHAIR01",
    instagramHandle: "@GRAZIHAIR01",
    whatsapp: "https://wa.me/00000000000", // à remplacer
    mapsQuery: "Adresse à compléter",
  },
  hours: [
    { day: "Lundi", value: "Sur rendez-vous" },
    { day: "Mardi — Vendredi", value: "09:00 — 19:00" },
    { day: "Samedi", value: "09:00 — 17:00" },
    { day: "Dimanche", value: "Fermé" },
  ],
} as const;

export type Service = {
  id: string;
  name: string;
  description: string;
  duration?: string;
  price?: string;
  category: "Blond" | "Coloration" | "Soin & coupe";
};

/** Prix et durées : valeurs temporaires à confirmer. */
export const services: Service[] = [
  {
    id: "balayage",
    name: "Balayage sur-mesure",
    description:
      "Éclaircissement à main levée pour un dégradé lumineux et naturel, adapté à votre base et à votre carnation.",
    duration: "À confirmer",
    price: "Sur devis",
    category: "Blond",
  },
  {
    id: "meches-blondes",
    name: "Mèches blondes",
    description:
      "Travail de mèches fines pour un blond dimensionnel, éclatant et facile à entretenir.",
    duration: "À confirmer",
    price: "Sur devis",
    category: "Blond",
  },
  {
    id: "blond-polaire",
    name: "Blond polaire / éclaircissement",
    description:
      "Passage au blond froid avec protection de la fibre et patine personnalisée.",
    duration: "À confirmer",
    price: "Sur devis",
    category: "Blond",
  },
  {
    id: "coloration",
    name: "Coloration",
    description:
      "Couleur racines ou coloration complète, nuance composée sur-mesure pour un résultat profond et brillant.",
    duration: "À confirmer",
    price: "Sur devis",
    category: "Coloration",
  },
  {
    id: "patine",
    name: "Patine & gloss",
    description:
      "Raviver les reflets, neutraliser les tons jaunes et offrir une brillance miroir.",
    duration: "À confirmer",
    price: "Sur devis",
    category: "Coloration",
  },
  {
    id: "ombre-hair",
    name: "Ombré Hair",
    description:
      "Dégradé subtil de racines à pointes pour un effet naturel, sophistiqué et facile à entretenir.",
    duration: "À confirmer",
    price: "Sur devis",
    category: "Coloration",
  },
  {
    id: "correction-couleur",
    name: "Correction de couleur",
    description:
      "Correction technique des accidents de couleur : bouchés, bandes, reflets indésirables ou cheveux trop clairs.",
    duration: "À confirmer",
    price: "Sur devis",
    category: "Coloration",
  },
  {
    id: "lissage-bresilien",
    name: "Lissage brésilien",
    description:
      "Lissage semi-permanent à la kératine pour discipliner la fibre, réduire le volume et sublimer la brillance.",
    duration: "À confirmer",
    price: "Sur devis",
    category: "Soin & coupe",
  },
  {
    id: "botox-capillaire",
    name: "Botox capillaire",
    description:
      "Soin profond réparateur qui nourrit, restructure et illumine les cheveux abîmés ou ternes.",
    duration: "À confirmer",
    price: "Sur devis",
    category: "Soin & coupe",
  },
];

export const timeSlots = [
  "Matin (09:00 — 12:00)",
  "Début d'après-midi (12:00 — 15:00)",
  "Fin d'après-midi (15:00 — 18:00)",
  "Soirée (18:00 — 20:00)",
] as const;

export const expertise = [
  {
    title: "Balayage",
    text: "Un éclaircissement fondu, dessiné à main levée, qui suit vos mouvements et pousse joliment.",
  },
  {
    title: "Mèches blondes",
    text: "La précision technique du blond : lumière, profondeur et respect absolu de la fibre.",
  },
  {
    title: "Coloration",
    text: "Des nuances composées sur-mesure, chaudes ou froides, pour une couleur qui vous ressemble.",
  },
] as const;
