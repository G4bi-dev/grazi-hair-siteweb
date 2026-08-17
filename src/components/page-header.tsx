import { Reveal } from "./reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="mx-auto max-w-7xl px-5 pt-36 pb-16 md:px-10 md:pt-44 md:pb-24">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 text-4xl leading-[1.1] sm:text-5xl md:text-6xl">{title}</h1>
        <div className="rule-gold mt-7" />
        {intro ? (
          <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {intro}
          </p>
        ) : null}
      </Reveal>
    </header>
  );
}
