import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  HeartHandshake,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { categories, ceoMessage, chairmanVision, company, images, products } from "@/data/company";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "B·G Pharma Pakistan — Priority to Serve Humanity" },
      {
        name: "description",
        content:
          "B·G Pharma Pakistan promotes time-tested, effective and economical medicines — iron and calcium therapy, antibiotics, antifungals, gastro care, paediatric drops and Vitamin D3 injectables.",
      },
      { property: "og:title", content: "B·G Pharma Pakistan — Priority to Serve Humanity" },
      {
        property: "og:description",
        content:
          "Time-tested, effective and economical medicines, served across Punjab & Sindh from Faisalabad.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillars = [
  {
    icon: ShieldCheck,
    title: "Quality first",
    body: "Every batch is sourced and packed to pharmacopoeial standards, so prescribers get the response they expect.",
  },
  {
    icon: HeartHandshake,
    title: "Economical by design",
    body: "Pricing is set so that a full course of treatment stays affordable for an ordinary household.",
  },
  {
    icon: Microscope,
    title: "Time-tested molecules",
    body: "We build around proven actives — levofloxacin, azithromycin, omeprazole, cholecalciferol and more.",
  },
  {
    icon: Truck,
    title: "Field presence",
    body: `Representatives serving doctors, pharmacies and distributors across ${company.coverage}.`,
  },
];

function Home() {
  const featured = products.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper/20 backdrop-blur-md">
        <div className="hairline-grid pointer-events-none absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.44 0.105 152 / 28%) 0%, transparent 68%)",
          }}
          aria-hidden
        />
        <div className="relative container-page grid items-center gap-14 py-16 md:py-24 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-4 py-1.5 text-[0.66rem] font-bold tracking-[0.2em] text-primary uppercase shadow-soft">
                <Sparkles className="size-3.5" aria-hidden />
                Pharmaceutical company · Pakistan
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-7 font-display text-4xl leading-[1.05] text-primary-deep sm:text-5xl lg:text-6xl">
                Priority to
                <span className="block text-brand-red">Serve Humanity</span>
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                B·G Pharma Pakistan is promoting time-tested, effective and economical medicines —
                from iron and bone-health therapy to antibiotics, gastro care, paediatric drops and
                Vitamin D3 injectables.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-deep hover:shadow-lift"
                >
                  Explore our portfolio
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-7 py-3.5 text-sm font-semibold text-primary-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
                >
                  <Phone className="size-4" aria-hidden />
                  {company.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  { k: `${products.length}+`, v: "Brands in market" },
                  { k: "5", v: "Therapeutic areas" },
                  { k: "2", v: "Provinces served" },
                ].map((s) => (
                  <div key={s.v}>
                    <dt className="font-display text-3xl text-primary">{s.k}</dt>
                    <dd className="mt-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-5">
            <figure className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-lift">
              <img
                src={images.conferenceRoom}
                alt="B·G Pharma Pakistan head-office conference room in Faisalabad"
                loading="eager"
                decoding="async"
                className="aspect-4/3 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-primary-deep/10 to-transparent"
                aria-hidden
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[0.6rem] font-bold tracking-[0.2em] text-primary-foreground/80 uppercase">
                  Head office · Faisalabad
                </p>
                <p className="mt-1.5 font-display text-xl text-primary-foreground">
                  Where our team plans better access to medicine
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Category marquee */}
        <div className="relative border-y border-border bg-background/60 py-4 backdrop-blur-xl">
          <div className="flex w-max animate-[marquee-x_28s_linear_infinite] gap-10 pr-10">
            {[...categories, ...categories, ...categories, ...categories].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="flex items-center gap-10 text-xs font-bold tracking-[0.2em] text-primary/70 uppercase"
              >
                {c}
                <span className="size-1.5 rounded-full bg-brand-red/60" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">Why B·G Pharma</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-primary-deep md:text-4xl">
            A portfolio built on trust, access and clinical usefulness
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} as="article">
              <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="size-5.5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl text-primary-deep">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-paper/55 py-20 backdrop-blur-xl md:py-28">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Our medicines</p>
              <h2 className="mt-4 max-w-xl font-display text-3xl text-primary-deep md:text-4xl">
                Featured brands from our portfolio
              </h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              View all {products.length} products
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70} className="h-full">
                <ProductCard product={p} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership message */}
      <section className="container-page py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-lift">
              <img
                src={images.chairman}
                alt="Chairman, Board of Directors of B·G Pharma Pakistan"
                width={900}
                height={1100}
                loading="lazy"
                className="aspect-4/5 w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <p className="eyebrow">A message from our leadership</p>
            <h2 className="mt-4 font-display text-3xl text-primary-deep md:text-4xl">
              We measure ourselves by the patients we reach
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {ceoMessage.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
            <div className="mt-8 h-1 w-28 rounded-full rule-gradient" aria-hidden />
            <p className="mt-5 font-display text-lg text-primary-deep">
              Chairman, Board of Directors
            </p>
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-red uppercase">
              {company.name}
            </p>
            <div className="mt-10 rounded-2xl border border-border bg-secondary/40 p-6 md:p-8">
              <p className="eyebrow">Our vision</p>
              <p className="mt-3 font-display text-xl leading-snug text-primary-deep md:text-2xl">
                {chairmanVision.statement}
              </p>
              <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                {chairmanVision.points.map((p) => (
                  <li key={p.title}>
                    <p className="text-sm font-semibold text-primary-deep">{p.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-ink px-7 py-14 text-ink-foreground md:px-14 md:py-18">
            <div className="hairline-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="text-[0.66rem] font-bold tracking-[0.22em] text-brand-gold uppercase">
                  Partner with us
                </p>
                <h2 className="mt-4 font-display text-3xl md:text-4xl">
                  Distributors, pharmacies and prescribers — let's talk
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-foreground/70 md:text-base">
                  {company.coverageNote} Reach our team for product literature, orders and
                  territory enquiries.
                </p>
                <p className="mt-6 flex items-center gap-2 text-sm text-ink-foreground/70">
                  <MapPin className="size-4 text-brand-gold" aria-hidden />
                  {company.address}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 text-sm font-bold text-ink transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Contact us
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-colors duration-300 hover:bg-ink-foreground/10"
                >
                  Email us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
