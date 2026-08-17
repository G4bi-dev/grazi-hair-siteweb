import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/prestations", label: "Prestations" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/rendez-vous", label: "Rendez-vous" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const overlay = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        overlay
          ? "bg-transparent text-primary-foreground"
          : "border-b border-border/60 bg-background/90 text-foreground backdrop-blur-md",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10 md:py-5">
        <Link to="/" className="min-w-0" aria-label={`${site.name} — accueil`}>
          <span className="block truncate font-display text-xl tracking-[0.18em] uppercase sm:text-2xl">
            {site.name}
          </span>
          <span
            className={cn(
              "mt-0.5 hidden text-[0.6rem] tracking-[0.3em] uppercase sm:block",
              overlay ? "text-primary-foreground/75" : "text-muted-foreground",
            )}
          >
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={cn(
                "text-[0.7rem] tracking-[0.22em] uppercase transition-colors",
                overlay
                  ? "text-primary-foreground/80 hover:text-primary-foreground data-[status=active]:text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground data-[status=active]:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/rendez-vous"
            className={cn(
              "border px-5 py-2.5 text-[0.7rem] tracking-[0.22em] uppercase transition-colors",
              overlay
                ? "border-primary-foreground/60 hover:bg-primary-foreground/15"
                : "border-foreground/70 hover:bg-foreground hover:text-primary-foreground",
            )}
          >
            Prendre rendez-vous
          </Link>
        </nav>


        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="shrink-0 p-2 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border/60 bg-background px-5 pb-8 lg:hidden">
          <ul className="divide-y divide-border/60">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="block py-4 text-sm tracking-[0.18em] uppercase"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/rendez-vous"
            className="mt-6 block bg-foreground py-4 text-center text-[0.7rem] tracking-[0.22em] text-primary-foreground uppercase"
          >
            Prendre rendez-vous
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
