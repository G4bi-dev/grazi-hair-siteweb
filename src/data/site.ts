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
    email: "info@grazihair.com",
    address: "Bruxelles",
    city: "Belgique",
    instagram: "https://instagram.com/GRAZIHAIR01",
    instagramHandle: "@GRAZIHAIR01",
    whatsapp: "https://wa.me/32455198283",
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
    duration: "3 h à 4 h",
    price: "À partir de 130 €",
    category: "Blond",
  },
  {
    id: "meches-blondes",
    name: "Mèches blondes",
    description:
      "Travail de mèches fines pour un blond dimensionnel, éclatant et facile à entretenir.",
    duration: "2 h 30 à 3 h 30",
    price: "À partir de 120 €",
    category: "Blond",
  },
  {
    id: "blond-polaire",
    name: "Blond polaire / éclaircissement",
    description:
      "Passage au blond froid avec protection de la fibre et patine personnalisée.",
    duration: "4 h à 6 h",
    price: "À partir de 180 €",
    category: "Blond",
  },
  {
    id: "coloration",
    name: "Coloration",
    description:
      "Couleur racines ou coloration complète, nuance composée sur-mesure pour un résultat profond et brillant.",
    duration: "1 h 30 à 2 h",
    price: "À partir de 55 €",
    category: "Coloration",
  },
  {
    id: "patine",
    name: "Patine & gloss",
    description:
      "Raviver les reflets, neutraliser les tons jaunes et offrir une brillance miroir.",
    duration: "45 min à 1 h 15",
    price: "À partir de 40 €",
    category: "Coloration",
  },
  {
    id: "ombre-hair",
    name: "Ombré Hair",
    description:
      "Dégradé subtil de racines à pointes pour un effet naturel, sophistiqué et facile à entretenir.",
    duration: "3 h à 4 h",
    price: "À partir de 150 €",
    category: "Coloration",
  },
  {
    id: "correction-couleur",
    name: "Correction de couleur",
    description:
      "Correction technique des accidents de couleur : bouchés, bandes, reflets indésirables ou cheveux trop clairs.",
    duration: "3 h à 6 h",
    price: "À partir de 180 € · sur devis",
    category: "Coloration",
  },
  {
    id: "lissage-bresilien",
    name: "Lissage brésilien",
    description:
      "Lissage semi-permanent à la kératine pour discipliner la fibre, réduire le volume et sublimer la brillance.",
    duration: "2 h 30 à 4 h",
    price: "À partir de 160 €",
    category: "Soin & coupe",
  },
  {
    id: "botox-capillaire",
    name: "Botox capillaire",
    description:
      "Soin profond réparateur qui nourrit, restructure et illumine les cheveux abîmés ou ternes.",
    duration: "1 h 30 à 2 h 30",
    price: "À partir de 70 €",
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
