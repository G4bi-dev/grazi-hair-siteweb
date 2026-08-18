import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import portraitImg from "@/assets/portrait.jpg";
import { GalleryGrid } from "@/components/gallery-grid";
import { BeforeAfter } from "@/components/before-after";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { expertise, services, site } from "@/data/site";
import { galleryItems } from "@/data/gallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grazi Hair — Balayage, mèches blondes & coloration" },
      {
        name: "description",
        content:
          "Grazi Hair, coiffeuse indépendante spécialisée en balayage, mèches blondes et coloration sur-mesure. Demandez votre rendez-vous en quelques clics.",
      },
      { property: "og:title", content: "Grazi Hair — L'art du blond sur-mesure" },
      {
        property: "og:description",
        content:
          "Balayage, mèches blondes et coloration sur-mesure par une coiffeuse indépendante experte du blond lumineux.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Grazi Hair",
          description:
            "Coiffeuse indépendante spécialisée en balayage, mèches blondes et coloration.",
          telephone: site.contact.phone,
          email: site.contact.email,
          address: { "@type": "PostalAddress", streetAddress: site.contact.address },
          sameAs: [site.contact.instagram],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92svh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Cheveux longs blonds avec balayage lumineux dans un intérieur ivoire"
          width={1600}
          height={1920}
          className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-28 md:px-10 md:pb-24">
          <Reveal className="max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.32em] text-primary-foreground/80 uppercase">
              {site.tagline}
            </p>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] text-primary-foreground sm:text-6xl md:text-7xl">
              La couleur
              <span className="block italic text-primary-foreground/90">qui vous ressemble</span>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
              {site.baseline}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/rendez-vous"
                className="bg-ivory px-8 py-4 text-center text-[0.7rem] tracking-[0.24em] text-espresso uppercase transition-opacity hover:opacity-90"
              >
                Demander un rendez-vous
              </Link>
              <Link
                to="/prestations"
                className="border border-primary-foreground/60 px-8 py-4 text-center text-[0.7rem] tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-primary-foreground/10"
              >
                Découvrir les prestations
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <SectionHeading
          eyebrow="Spécialités"
          title="Une expertise dédiée à la lumière"
          intro="Chaque couleur est composée sur-mesure, dans le respect de la fibre et de votre style de vie."
        />
        <ul className="mt-16 grid gap-10 md:grid-cols-3 md:gap-14">
          {expertise.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 120}>
              <p className="font-display text-5xl text-nude">0{i + 1}</p>
              <h3 className="mt-5 text-2xl">{item.title}</h3>
              <div className="rule-gold mt-5" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* PRESTATIONS (aperçu) */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <SectionHeading eyebrow="Prestations" title="Le soin du détail, du diagnostic au coiffage" />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 100} />
            ))}
          </div>
          <Reveal className="mt-12">
            <Link
              to="/prestations"
              className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.24em] uppercase transition-opacity hover:opacity-70"
            >
              Voir toutes les prestations <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <SectionHeading
          eyebrow="Réalisations"
          title="Une galerie de blonds et de couleurs"
          intro={"Balayage, mèches, blond et coloration sur mesure. \u00a0\nChaque couleur est pensée selon votre carnation, votre style et la nature de vos cheveux."}
        />
        <div className="mt-14">
          <GalleryGrid items={galleryItems.slice(0, 6)} withFilters={false} />
        </div>
        <Reveal className="mt-12">
          <Link
            to="/realisations"
            className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.24em] uppercase transition-opacity hover:opacity-70"
          >
            Découvrir la galerie complète <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      {/* AVANT / APRÈS */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <SectionHeading
            eyebrow="Transformations"
            title="Avant · Après"
            intro="Des passages au blond travaillés en douceur, étape par étape."
            align="center"
          />
          <Reveal className="mt-14">
            <BeforeAfter />
          </Reveal>
        </div>
      </section>

      {/* À PROPOS */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <Reveal className="media-zoom order-1 md:order-none">
            <img
              src={portraitImg}
              alt="Portrait de la coiffeuse dans son salon lumineux"
              loading="lazy"
              width={1200}
              height={1504}
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="À propos"
              title="Bonjour, je suis Grazi"
              intro="Coiffeuse depuis plus de 20 ans, Grazi accompagne chaque cliente avec expérience, précision et passion."
            />
            <Reveal delay={120}>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                Spécialisée en colorations et transformations capillaires, je travaille chaque chevelure comme une pièce unique, avec une attention particulière portée à la santé de la fibre.

                Mon objectif : créer un résultat qui vous ressemble, tout en respectant la santé et la beauté de vos cheveux.
              </p>
              <Link
                to="/a-propos"
                className="mt-8 inline-flex items-center gap-3 text-[0.7rem] tracking-[0.24em] uppercase transition-opacity hover:opacity-70"
              >
                En savoir plus <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-nude/40">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <Reveal>
            <p className="eyebrow">Rendez-vous</p>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl md:text-5xl">
              Prête pour une transformation ?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Envoyez votre demande en quelques étapes : vous serez recontactée pour
              confirmer la date et l'horaire.
            </p>
            <Link
              to="/rendez-vous"
              className="mt-10 inline-block bg-foreground px-10 py-4 text-[0.7rem] tracking-[0.24em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Demander un rendez-vous
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
