import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { AppointmentForm } from "@/components/appointment-form";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

const searchSchema = z.object({
  service: z.string().optional(),
});

export const Route = createFileRoute("/rendez-vous")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Demande de rendez-vous — Grazi Hair" },
      {
        name: "description",
        content:
          "Envoyez votre demande de rendez-vous : prestation souhaitée, date et plage horaire. Vous serez recontactée pour confirmation.",
      },
      { property: "og:title", content: "Demande de rendez-vous — Grazi Hair" },
      {
        property: "og:description",
        content: "Demandez votre rendez-vous balayage, mèches blondes ou coloration.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/rendez-vous" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/rendez-vous" }],
  }),
  component: RendezVousPage,
});

function RendezVousPage() {
  const { service } = Route.useSearch();

  return (
    <>
      <PageHeader
        eyebrow="Rendez-vous"
        title="Demander un rendez-vous"
        intro="Complétez ce formulaire en quelques instants. Il s'agit d'une demande : la date et l'horaire seront confirmés personnellement avant votre venue."
      />

      <section className="mx-auto max-w-7xl px-5 pb-32 md:px-10 md:pb-40">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
          <Reveal>
            <AppointmentForm defaultService={service ?? ""} />
          </Reveal>

          <Reveal delay={140} className="h-fit border border-border/70 bg-secondary/60 p-8">
            <p className="eyebrow">Bon à savoir</p>
            <ul className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <li>
                Un diagnostic est réalisé avant chaque service couleur : durée et tarif
                sont confirmés à ce moment-là.
              </li>
              <li>
                Ajouter une photo de vos cheveux actuels aide à préparer au mieux votre
                rendez-vous.
              </li>
              <li>Réponse habituelle sous 24 à 48 h.</li>
            </ul>

            <div className="mt-8 border-t border-border/70 pt-6 text-sm text-muted-foreground">
              <p className="eyebrow">Contact direct</p>
              <p className="mt-4">
                <a className="hover:text-foreground" href={`tel:${site.contact.phone}`}>
                  {site.contact.phone}
                </a>
              </p>
              <p className="mt-2">
                <a className="hover:text-foreground" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
