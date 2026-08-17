import { Link } from "@tanstack/react-router";
import type { Service } from "@/data/site";
import { Reveal } from "./reveal";

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="group flex h-full flex-col border border-border/70 bg-card p-7 transition-colors duration-500 hover:border-champagne md:p-9">
      <p className="eyebrow">{service.category}</p>
      <h3 className="mt-4 text-2xl leading-snug">{service.name}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-border/70 pt-5 text-xs tracking-[0.12em] uppercase">
        <div>
          <dt className="text-muted-foreground">Durée</dt>
          <dd className="mt-1">{service.duration ?? "—"}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Tarif</dt>
          <dd className="mt-1">{service.price ?? "—"}</dd>
        </div>
      </dl>

      <Link
        to="/rendez-vous"
        search={{ service: service.id }}
        className="mt-7 inline-block border border-foreground/60 px-5 py-3 text-center text-[0.68rem] tracking-[0.22em] uppercase transition-colors hover:bg-foreground hover:text-primary-foreground"
      >
        Demander un rendez-vous
      </Link>
    </Reveal>
  );
}
