import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & horaires — Grazi Hair" },
      {
        name: "description",
        content:
          "Téléphone, email, adresse, horaires et Instagram de Grazi Hair, coiffeuse spécialisée en balayage et coloration.",
      },
      { property: "og:title", content: "Contact — Grazi Hair" },
      {
        property: "og:description",
        content: "Coordonnées, horaires et localisation de Grazi Hair.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { contact, hours } = site;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Informations pratiques"
        intro="Les coordonnées ci-dessous sont provisoires et seront mises à jour prochainement."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <Phone className="mt-1 size-4 shrink-0 text-taupe" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="eyebrow">Téléphone</p>
                  <a className="mt-2 block text-lg hover:opacity-70" href={`tel:${contact.phone}`}>
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 size-4 shrink-0 text-taupe" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="eyebrow">Email</p>
                  <a
                    className="mt-2 block truncate text-lg hover:opacity-70"
                    href={`mailto:${contact.email}`}
                  >
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 size-4 shrink-0 text-taupe" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="eyebrow">Adresse</p>
                  <p className="mt-2 text-lg">{contact.address}</p>
                  <p className="text-sm text-muted-foreground">{contact.city}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Instagram className="mt-1 size-4 shrink-0 text-taupe" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="eyebrow">Instagram</p>
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 block text-lg hover:opacity-70"
                  >
                    {contact.instagramHandle}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MessageCircle className="mt-1 size-4 shrink-0 text-taupe" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="eyebrow">WhatsApp</p>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 block text-lg hover:opacity-70"
                  >
                    Écrire sur WhatsApp
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-border/70 bg-secondary/60 p-8">
              <p className="eyebrow">Horaires</p>
              <dl className="mt-6 divide-y divide-border/70">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-sm">{h.day}</dt>
                    <dd className="text-sm text-muted-foreground">{h.value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                to="/rendez-vous"
                className="mt-8 block bg-foreground py-4 text-center text-[0.7rem] tracking-[0.24em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                Demander un rendez-vous
              </Link>
            </div>

            <div className="mt-8 aspect-[4/3] w-full border border-border/70">
              <iframe
                title="Localisation du salon"
                src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}&output=embed`}
                loading="lazy"
                className="h-full w-full grayscale-[35%]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
