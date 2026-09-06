import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/company";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Product Portfolio — B·G Pharma Pakistan" },
      {
        name: "description",
        content:
          "Browse the full B·G Pharma Pakistan portfolio: Irozone, Calpax-D, Metacid, Melcin, Mezethro, Flukazol, Meg-D, K3-D, Ezibid, Zolik, Omefit, Begnisium and Vitamin D3 injectables.",
      },
      { property: "og:title", content: "Product Portfolio — B·G Pharma Pakistan" },
      {
        property: "og:description",
        content:
          "Nutrition, anti-infectives, gastro care, paediatric drops and injectables from B·G Pharma Pakistan.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = active === "All" || p.category === active;
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.molecule.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [active, query]);

  return (
    <>
      <section className="relative overflow-hidden bg-paper/60 backdrop-blur-xl">
        <div className="hairline-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative container-page py-16 md:py-20">
          <Reveal>
            <p className="eyebrow">Product portfolio</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-primary-deep md:text-5xl">
              Time-tested medicines across five therapeutic areas
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {products.length} brands spanning nutrition and bone health, anti-infectives, gastro
              care, paediatric care and injectables — each selected to be effective, dependable and
              affordable.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-12 md:py-16">
        <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-1 flex flex-wrap gap-2">
            {["All", ...categories].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-bold tracking-wide uppercase transition-all duration-300",
                  active === c
                    ? "border-primary bg-primary text-primary-foreground shadow-soft"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="relative w-full lg:max-w-xs">
            <span className="sr-only">Search products</span>
            <Search
              className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search brand or molecule"
              className="w-full rounded-full border border-border bg-card py-3 pr-4 pl-11 text-sm text-foreground shadow-soft outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
          </label>
        </Reveal>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-sm text-muted-foreground">
            No products match that search. Try another brand or molecule.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i, 6) * 60} className="h-full">
                <ProductCard product={p} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
