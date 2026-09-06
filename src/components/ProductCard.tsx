import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Pill } from "lucide-react";
import type { Product } from "@/data/company";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-lift"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-paper">
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.name} — ${product.molecule}`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="flex size-full flex-col items-center justify-center gap-3 bg-secondary text-primary/60">
            <Pill className="size-9" aria-hidden />
            <span className="font-display text-2xl text-primary-deep/80">{product.name}</span>
          </div>
        )}
        <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[0.62rem] font-bold tracking-[0.14em] text-primary uppercase backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-display text-xl text-primary-deep">{product.name}</h3>
        <p className="mt-1 text-xs font-semibold tracking-wide text-brand-red">{product.molecule}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
        <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-sm font-bold text-primary-deep">
          <span className="text-[0.6rem] font-bold tracking-[0.14em] text-primary uppercase">Price</span>
          {product.price}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {product.forms.slice(0, 3).map((f) => (
            <span
              key={f}
              className="rounded-full bg-secondary px-2.5 py-1 text-[0.68rem] font-semibold text-secondary-foreground"
            >
              {f}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          View details
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
