import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Phone, Pill, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { company, products } from "@/data/company";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product unavailable — B·G Pharma Pakistan" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} (${product.molecule}) — B·G Pharma Pakistan`;
    return {
      meta: [
        { title },
        { name: "description", content: product.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: product.summary },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${product.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${product.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.summary,
            category: product.category,
            brand: { "@type": "Brand", name: "B·G Pharma Pakistan" },
          }),
        },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  const gallery = [product.image, ...(product.gallery ?? [])].filter(Boolean) as string[];

  return (
    <>
      <section className="border-b border-border bg-paper/60 backdrop-blur-xl">
        <div className="container-page py-10 md:py-14">
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden />
            All products
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-6">
              {gallery.length > 0 ? (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-lift">
                    <img
                      src={gallery[0]}
                      alt={`${product.name} pack — ${product.molecule}`}
                      className="aspect-4/3 w-full object-cover"
                    />
                  </div>
                  {gallery.length > 1 && (
                    <div className="grid grid-cols-3 gap-3">
                      {gallery.slice(1).map((src) => (
                        <div
                          key={src}
                          className="overflow-hidden rounded-xl border border-border bg-card shadow-soft"
                        >
                          <img
                            src={src}
                            alt={`${product.name} — additional pack view`}
                            loading="lazy"
                            className="aspect-square w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid aspect-4/3 place-items-center rounded-[1.5rem] border border-border bg-secondary text-primary/70">
                  <div className="text-center">
                    <Pill className="mx-auto size-10" aria-hidden />
                    <p className="mt-4 font-display text-3xl text-primary-deep">{product.name}</p>
                    <p className="mt-1 text-xs font-semibold tracking-[0.16em] uppercase">
                      Pack image coming soon
                    </p>
                  </div>
                </div>
              )}
            </Reveal>

            <Reveal delay={110} className="lg:col-span-6">
              <span className="rounded-full bg-secondary px-3 py-1 text-[0.62rem] font-bold tracking-[0.18em] text-primary uppercase">
                {product.category}
              </span>
              <h1 className="mt-5 font-display text-4xl text-primary-deep md:text-5xl">{product.name}</h1>
              <p className="mt-3 text-sm font-semibold text-brand-red">{product.molecule}</p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{product.summary}</p>

              <div className="mt-7 flex flex-wrap items-center gap-4 rounded-2xl border border-primary/20 bg-secondary p-5">
                <div>
                  <p className="text-[0.62rem] font-bold tracking-[0.18em] text-primary uppercase">
                    Retail price (MRP)
                  </p>
                  <p className="mt-1 font-display text-2xl text-primary-deep md:text-3xl">
                    {product.price}
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Prices are indicative retail rates in Pakistani Rupees and may vary by pack size
                  and pharmacy.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {product.forms.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {product.facts && (
                <dl className="mt-9 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                  {product.facts.map((f) => (
                    <div key={f.label} className="grid gap-1 p-5 sm:grid-cols-3 sm:gap-4">
                      <dt className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
                        {f.label}
                      </dt>
                      <dd className="text-sm leading-relaxed text-foreground sm:col-span-2">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-deep"
                >
                  <Phone className="size-4" aria-hidden /> Enquire about {product.name}
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-primary-deep transition-colors hover:bg-secondary"
                >
                  Request literature
                </Link>
              </div>

              <p className="mt-7 flex gap-3 rounded-xl bg-secondary p-4 text-xs leading-relaxed text-secondary-foreground">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                Keep out of reach of children. To be used only on the prescription of a registered
                medical practitioner. Store as directed on the pack.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-page py-16 md:py-20">
          <Reveal>
            <p className="eyebrow">Related</p>
            <h2 className="mt-3 font-display text-2xl text-primary-deep md:text-3xl">
              More in {product.category}
            </h2>
          </Reveal>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
