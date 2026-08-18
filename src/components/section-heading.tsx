import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 text-3xl leading-[1.15] sm:text-4xl md:text-5xl">{title}</h2>
      <div className={cn("rule-gold mt-6", align === "center" && "mx-auto")} />
      {intro ? (
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base whitespace-pre-line">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
