import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfter } from "@/components/before-after";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Galerie balayage & blond | Grazi Hair" },
      {
        name: "description",
        content:
          "Galerie de réalisations : balayages, blonds lumineux, mèches, colorations et transformations avant/après signées Grazi Hair.",
      },
      { property: "og:title", content: "Réalisations — Grazi Hair" },
      {
        property: "og:description",
        content: "Balayages, blonds, mèches, colorations et transformations avant/après.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/realisations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/realisations" }],
  }),
  component: RealisationsPage,
});

function RealisationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Réalisations"
        title="Galerie"
        intro="Une sélection de travaux : balayages fondus, blonds lumineux, mèches fines, colorations profondes et détails de matière."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-32">
        <GalleryGrid />
      </section>

      <section className="border-t border-border/60 bg-secondary/60">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <SectionHeading
            eyebrow="Transformations"
            title="Avant · Après"
            intro="Le passage au blond se construit progressivement, en préservant la fibre."
            align="center"
          />
          <Reveal className="mt-14">
            <BeforeAfter />
          </Reveal>
        </div>
      </section>
    </>
  );
}
