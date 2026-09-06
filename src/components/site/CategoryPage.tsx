import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

type Props = {
  category: string;
  eyebrow: string;
  heading: string;
  intro: string;
  hero: string;
  points: { title: string; text: string }[];
};

export function CategoryPage({ category, eyebrow, heading, intro, hero, points }: Props) {
  const list = products.filter((p) => p.category === category);

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border/60">
        <img
          src={hero}
          alt={`${category} at Shazib Outlet`}
          className="absolute inset-0 h-full w-full object-cover opacity-25 blur-[2px]"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <Reveal>
            <p className="text-[10px] tracking-[0.45em] text-accent">{eyebrow}</p>
            <h1 className="mt-4 text-4xl sm:text-6xl">{heading}</h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {intro}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <a href="https://wa.me/923144849045" target="_blank" rel="noreferrer">
                  Order on WhatsApp
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="tel:+923144849045">Call 0314 484 9045</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="scene-3d grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) * 120}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="card-3d glass-panel h-full rounded-2xl p-6">
                <h2 className="text-lg sm:text-xl">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
