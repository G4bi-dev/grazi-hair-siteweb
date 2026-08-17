import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { site } from "@/data/site";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Grazi Hair" },
      {
        name: "description",
        content:
          "Mentions légales et informations sur la protection des données du site Grazi Hair.",
      },
      { property: "og:title", content: "Mentions légales — Grazi Hair" },
      {
        property: "og:description",
        content: "Mentions légales et confidentialité du site Grazi Hair.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mentions-legales" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <>
      <PageHeader eyebrow="Informations" title="Mentions légales" />
      <section className="mx-auto max-w-3xl px-5 pb-32 text-sm leading-relaxed text-muted-foreground md:px-10">
        <div className="space-y-10">
          <div>
            <h2 className="text-xl text-foreground">Éditeur du site</h2>
            <p className="mt-3">
              {site.name} — informations d'identification à compléter (statut, numéro
              d'entreprise, adresse du siège).
            </p>
          </div>
          <div>
            <h2 className="text-xl text-foreground">Données personnelles</h2>
            <p className="mt-3">
              Les informations transmises via le formulaire de demande de rendez-vous sont
              utilisées uniquement pour traiter et confirmer la demande. Elles ne sont ni
              revendues ni transmises à des tiers. Texte à compléter selon la
              réglementation applicable.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-foreground">Cookies</h2>
            <p className="mt-3">
              Ce site n'utilise pas de cookie de suivi publicitaire. Section à compléter en
              cas d'ajout d'outils de mesure d'audience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
