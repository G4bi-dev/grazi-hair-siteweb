import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/*
 * Mobile : on conserve les proportions naturelles de chaque photo.
 * Desktop (md+) : grille éditoriale parfaitement régulière — toutes les
 * cellules partagent le même ratio portrait, les images remplissent leur
 * zone via object-cover. Plus de col-span/row-span : plus de trous.
 */
const ratioClass: Record<GalleryItem["ratio"], string> = {
  portrait: "aspect-[4/5] md:aspect-[4/5]",
  landscape: "aspect-[4/3] md:aspect-[4/5]",
  tall: "aspect-[3/4] md:aspect-[4/5]",
};

export function GalleryGrid({
  items = galleryItems,
  withFilters = true,
}: {
  items?: GalleryItem[];
  withFilters?: boolean;
}) {
  const [filter, setFilter] = useState<GalleryCategory>("Tout");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const visible = useMemo(
    () => (filter === "Tout" ? items : items.filter((i) => i.category === filter)),
    [items, filter],
  );

  return (
    <div>
      {withFilters ? (
        <Reveal className="flex flex-wrap gap-x-6 gap-y-3">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={cn(
                "border-b pb-1 text-[0.68rem] tracking-[0.22em] uppercase transition-colors",
                filter === cat
                  ? "border-champagne text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </Reveal>
      ) : null}

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        {visible.map((item, i) => (
          <Reveal key={item.id} as="figure" delay={(i % 3) * 90} className={ratioClass[item.ratio]}>
            <button
              type="button"
              onClick={() => setActive(item)}
              className="media-zoom group relative block h-full w-full"
              aria-label={`Agrandir : ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-espresso/0 transition-colors duration-700 group-hover:bg-espresso/10" />
              <span className="absolute bottom-4 left-4 text-[0.6rem] tracking-[0.24em] text-primary-foreground uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {item.category}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{active?.alt ?? "Réalisation"}</DialogTitle>
          {active ? (
            <figure>
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[80vh] w-full bg-background object-contain"
              />
              <figcaption className="mt-3 text-center text-[0.65rem] tracking-[0.24em] text-primary-foreground uppercase">
                {active.category}
              </figcaption>
            </figure>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
