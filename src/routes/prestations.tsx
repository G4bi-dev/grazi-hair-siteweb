import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/site";

export const Route = createFileRoute("/prestations")({
  head: () => ({
    meta: [
      { title: "Prestations — Grazi Hair" },
      {
        name: "description",
        content:
          "Balayage, mèches blondes, blond polaire, coloration, patine et soins : découvrez les prestations de Grazi Hair.",
      },
      { property: "og:title", content: "Prestations — Grazi Hair" },
      {
        property: "og:description",
        content: "Balayage, mèches blondes, coloration, patine et soins sur-mesure.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/prestations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/prestations" }],
  }),
  component: PrestationsPage,
});

function PrestationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Prestations"
        title="Des prestations sur-mesure"
        intro="Chaque rendez-vous commence par un diagnostic personnalisé. Les durées et tarifs indiqués sont provisoires et seront confirmés lors de la prise de contact."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={(i % 3) * 100} />
          ))}
        </div>

        <Reveal className="mt-16 border border-border/70 bg-secondary/60 px-6 py-12 text-center md:px-16">
          <h2 className="text-2xl md:text-3xl">Une envie particulière ?</h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Décrivez votre projet dans votre demande de rendez-vous : la faisabilité et le
            temps nécessaire seront évalués ensemble.
          </p>
          <Link
            to="/rendez-vous"
            className="mt-8 inline-block border border-foreground/70 px-8 py-3.5 text-[0.7rem] tracking-[0.24em] uppercase transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            Demander un rendez-vous
          </Link>
        </Reveal>
      </section>
    </>
  );
}
