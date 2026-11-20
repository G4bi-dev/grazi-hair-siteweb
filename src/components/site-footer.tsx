import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { site } from "@/data/site";
import logoAsset from "@/assets/grazi-logo.png.asset.json";

const nav = [
  { to: "/prestations", label: "Prestations" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/rendez-vous", label: "Rendez-vous" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={logoAsset.url} alt={site.name} width={200} height={44} loading="lazy" className="h-10 w-auto" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.baseline}
            </p>
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
            >
              <Instagram className="size-4" aria-hidden="true" />
              {site.contact.instagramHandle}
            </a>
          </div>

          <nav aria-label="Navigation du pied de page">
            <p className="eyebrow">Navigation</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Coordonnées</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a className="hover:text-foreground" href={`tel:${site.contact.phone}`}>
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
              </li>
              <li>{site.contact.address}</li>
              <li>{site.contact.city}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border/60 pt-6 text-[0.7rem] tracking-[0.15em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Tous droits réservés.
          </p>
          <Link to="/mentions-legales" className="hover:text-foreground">
            Mentions légales & confidentialité
          </Link>
          <p>Créé et designé par Gabriela Reis</p>
        </div>
      </div>
    </footer>
  );
}
