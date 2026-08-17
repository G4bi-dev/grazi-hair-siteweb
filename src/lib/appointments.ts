/**
 * Point d'entrée unique pour l'envoi des demandes de rendez-vous.
 *
 * Aujourd'hui : simple simulation côté client (aucun backend connecté).
 * Plus tard : remplacer le corps de la fonction par un appel serveur
 * (base de données, email de notification, espace administrateur…)
 * sans rien changer dans le formulaire.
 */

export type AppointmentRequest = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  date1: string;
  slot1: string;
  date2?: string;
  slot2?: string;
  message?: string;
  photoName?: string | null;
};

export async function submitAppointmentRequest(
  request: AppointmentRequest,
): Promise<{ status: "pending" }> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  if (import.meta.env.DEV) {
    console.info("[demande de rendez-vous]", request);
  }
  return { status: "pending" };
}
