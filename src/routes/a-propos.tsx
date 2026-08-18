import { createFileRoute, Link } from "@tanstack/react-router";
import portraitImg from "@/assets/portrait.jpg";
import detailImg from "@/assets/details-2.jpg";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { expertise, site } from "@/data/site";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Grazi Hair, coiffeuse coloriste" },
      {
        name: "description",
        content:
          "Coiffeuse depuis plus de 20 ans, Grazi accompagne chaque cliente avec expérience, précision et passion.",
      },
      { property: "og:title", content: "À propos — Grazi Hair" },
      {
        property: "og:description",
        content:
          "Coiffeuse indépendante experte du blond : diagnostic précis, écoute et attention aux détails.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/a-propos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: AProposPage,
});

function AProposPage() {
  return (
    <>
      <PageHeader eyebrow="À propos" title="Bonjour, je suis Grazi" />

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <Reveal className="media-zoom">
            <img
              src={portraitImg}
              alt="Portrait de Grazi, coiffeuse coloriste"
              loading="lazy"
              width={1200}
              height={1504}
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>

          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <Reveal>
              <p className="text-foreground">
                Coiffeuse depuis plus de 20 ans, Grazi accompagne chaque cliente avec expérience, précision et passion.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                Ma spécialité : le blond. Balayage, mèches blondes et coloration sur-mesure,
                avec une technique pensée pour préserver la fibre et créer une lumière
                naturelle qui pousse joliment.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                Chaque rendez-vous commence par un échange et un diagnostic : couleur
                actuelle, historique, entretien souhaité et style de vie. Rien n'est
                standardisé — c'est cette attention aux détails qui fait la différence.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <blockquote className="border-l border-champagne pl-6 font-display text-xl leading-snug text-foreground italic sm:text-2xl">
                « Une belle couleur est celle qu'on oublie de remarquer : elle vous
                ressemble simplement. »
              </blockquote>
            </Reveal>
            <Reveal delay={300}>
              <Link
                to="/rendez-vous"
                className="mt-4 inline-block border border-foreground/70 px-8 py-3.5 text-[0.7rem] tracking-[0.24em] uppercase transition-colors hover:bg-foreground hover:text-primary-foreground"
              >
                Demander un rendez-vous
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:items-center md:gap-20 md:px-10 md:py-32">
          <div>
            <p className="eyebrow">Mon approche</p>
            <ul className="mt-10 space-y-10">
              {expertise.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 100}>
                  <h2 className="text-2xl">{item.title}</h2>
                  <div className="rule-gold mt-4" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </ul>
            <p className="mt-12 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {site.tagline}
            </p>
          </div>
          <Reveal className="media-zoom">
            <img
              src={detailImg}
              alt="Détail de cheveux blonds lumineux"
              loading="lazy"
              width={1000}
              height={1300}
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
