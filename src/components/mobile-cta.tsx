import { Link, useRouterState } from "@tanstack/react-router";

/** CTA rendez-vous toujours accessible sur mobile. */
export function MobileCta() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/rendez-vous") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 p-3 backdrop-blur-md lg:hidden">
      <Link
        to="/rendez-vous"
        className="block bg-foreground py-3.5 text-center text-[0.7rem] tracking-[0.22em] text-primary-foreground uppercase"
      >
        Demander un rendez-vous
      </Link>
    </div>
  );
}
