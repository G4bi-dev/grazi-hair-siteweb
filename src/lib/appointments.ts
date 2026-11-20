/**
 * Point d'entrée unique pour l'envoi des demandes de rendez-vous.
 *
 * Comportement actuel : la demande n'est pas postée à un serveur.
 * Elle est transformée en message texte récapitulatif, encodée pour une URL,
 * puis ouverte dans WhatsApp (nouvel onglet) vers le numéro du salon.
 */

import { services, site } from "@/data/site";

export type AppointmentRequest = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  date1: string;
  slot1: string;
  date2?: string | undefined;
  slot2?: string | undefined;
  message?: string | undefined;
  photoName?: string | null;
};

/** Numéro WhatsApp du salon, dérivé du lien de contact (ex : 32455198283). */
function whatsappNumber(): string {
  const digits = site.contact.whatsapp.replace(/\D/g, "");
  return digits.length > 5 ? digits : "32455198283";
}

/** "2026-11-25" → "25/11/2026" (retourne l'entrée telle quelle si invalide). */
function formatDate(value: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (!match) return value.trim();
  const [, year, month, day] = match;
  return `${day}/${month}/${year}`;
}

/** Nom lisible de la prestation à partir de son identifiant. */
function serviceName(id: string): string {
  const found = services.find((s) => s.id === id);
  return found ? found.name : id.trim();
}

/**
 * Construit le récapitulatif texte de la demande, avec des sauts de ligne propres.
 * Les champs optionnels vides sont simplement omis.
 */
export function buildAppointmentMessage(request: AppointmentRequest): string {
  const lines: string[] = [
    "Demande de rendez-vous — Grazi Hair",
    "",
    `Prénom : ${request.firstName.trim()}`,
    `Nom : ${request.lastName.trim()}`,
    `Téléphone : ${request.phone.trim()}`,
    `Email : ${request.email.trim()}`,
    "",
    `Prestation : ${serviceName(request.service)}`,
    `Date souhaitée : ${formatDate(request.date1)}`,
    `Plage horaire : ${request.slot1.trim()}`,
  ];

  const date2 = request.date2?.trim() ?? "";
  const slot2 = request.slot2?.trim() ?? "";
  if (date2 || slot2) {
    lines.push("", "Deuxième possibilité :");
    if (date2) lines.push(`Date : ${formatDate(date2)}`);
    if (slot2) lines.push(`Plage horaire : ${slot2}`);
  }

  const message = request.message?.trim() ?? "";
  if (message) {
    lines.push("", `Message : ${message}`);
  }

  if (request.photoName) {
    lines.push(
      "",
      `Photo jointe au formulaire : ${request.photoName} (à m'envoyer ici)`,
    );
  }

  return lines.join("\n");
}

/** URL WhatsApp complète, avec le message encodé pour une URL. */
export function appointmentWhatsappUrl(request: AppointmentRequest): string {
  const text = encodeURIComponent(buildAppointmentMessage(request));
  return `https://wa.me/${whatsappNumber()}?text=${text}`;
}

/**
 * Ouvre la demande dans WhatsApp. Appelé de façon synchrone dans le handler
 * de soumission pour ne pas être bloqué par le filtre des nouvelles fenêtres.
 */
export function submitAppointmentRequest(
  request: AppointmentRequest,
): { status: "pending"; url: string } {
  const url = appointmentWhatsappUrl(request);
  window.open(url, "_blank", "noopener,noreferrer");
  return { status: "pending", url };
}
