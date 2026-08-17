import { useRef, useState } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

/** Slider avant/après — glisser ou utiliser les flèches du clavier. */
export function BeforeAfter() {
  const [value, setValue] = useState(50);
  const frame = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div ref={frame} className="relative aspect-[4/5] overflow-hidden select-none sm:aspect-[4/3]">
        <img
          src={afterImg}
          alt="Après : blond miel lumineux avec balayage sur-mesure"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <img
            src={beforeImg}
            alt="Avant : base brune avec racines marquées"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <span className="absolute top-4 left-4 bg-background/85 px-3 py-1 text-[0.6rem] tracking-[0.24em] uppercase">
          Avant
        </span>
        <span className="absolute top-4 right-4 bg-background/85 px-3 py-1 text-[0.6rem] tracking-[0.24em] uppercase">
          Après
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-background/90"
          style={{ left: `${value}%` }}
        >
          <span className="absolute top-1/2 left-1/2 size-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-background/90 bg-background/70 backdrop-blur-sm" />
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label="Comparer avant et après"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-4 text-center text-xs tracking-[0.18em] text-muted-foreground uppercase">
        Glissez pour découvrir la transformation
      </p>
    </div>
  );
}
