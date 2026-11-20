import { test, expect, mock } from "bun:test";
import {
  appointmentWhatsappUrl,
  buildAppointmentMessage,
  openWhatsAppUrl,
  type AppointmentRequest,
} from "@/lib/appointments";

const base: AppointmentRequest = {
  firstName: "Gabriela",
  lastName: "dos Reis",
  phone: "+32 455 198 283",
  email: "gabriela@example.com",
  service: "balayage",
  date1: "2026-12-05",
  slot1: "Matin (09:00 — 12:00)",
};

test("la demande ouvre WhatsApp au numéro du salon", () => {
  const url = appointmentWhatsappUrl(base);
  expect(url.startsWith("https://wa.me/32455198283?text=")).toBe(true);
});

test("le message récapitule les champs avec des sauts de ligne", () => {
  const msg = buildAppointmentMessage(base);
  expect(msg).toContain("Prénom : Gabriela");
  expect(msg).toContain("Nom : dos Reis");
  expect(msg).toContain("Prestation : Balayage sur-mesure");
  expect(msg).toContain("Date souhaitée : 05/12/2026");
  expect(msg).toContain("Plage horaire : Matin (09:00 — 12:00)");
  expect(msg.split("\n").length).toBeGreaterThan(6);
});

test("les options vides sont omises, les remplies ajoutées", () => {
  const sans = buildAppointmentMessage(base);
  expect(sans).not.toContain("Deuxième possibilité");
  expect(sans).not.toContain("Message :");

  const avec = buildAppointmentMessage({
    ...base,
    date2: "2026-12-12",
    slot2: "Soirée (18:00 — 20:00)",
    message: "Blond lumineux",
    photoName: "cheveux.jpg",
  });
  expect(avec).toContain("Date : 12/12/2026");
  expect(avec).toContain("Message : Blond lumineux");
  expect(avec).toContain("cheveux.jpg");
});

test("le texte est encodé pour une URL", () => {
  const url = appointmentWhatsappUrl(base);
  const encoded = url.split("text=")[1];
  expect(encoded).toBeDefined();
  const text = decodeURIComponent(encoded ?? "");
  expect(text).toContain("Prénom : Gabriela");
  expect(url).not.toContain(" ");
});

test("WhatsApp est ouvert par un lien invisible et sécurisé, sans window.open", () => {
  const click = mock(() => {});
  const remove = mock(() => {});
  const appendChild = mock(() => {});
  const link = {
    href: "",
    target: "",
    rel: "",
    hidden: false,
    style: { display: "" },
    setAttribute: mock(() => {}),
    click,
    remove,
  };
  const doc = {
    createElement: mock(() => link),
    body: { appendChild },
  } as unknown as Document;
  const url = "https://wa.me/32455198283?text=Bonjour";

  openWhatsAppUrl(url, doc);

  expect(doc.createElement).toHaveBeenCalledWith("a");
  expect(link.href).toBe(url);
  expect(link.target).toBe("_blank");
  expect(link.rel).toBe("noopener noreferrer");
  expect(link.hidden).toBe(true);
  expect(link.style.display).toBe("none");
  expect(link.setAttribute).toHaveBeenCalledWith("aria-hidden", "true");
  expect(appendChild).toHaveBeenCalledWith(link);
  expect(click).toHaveBeenCalledTimes(1);
  expect(remove).toHaveBeenCalledTimes(1);
});
