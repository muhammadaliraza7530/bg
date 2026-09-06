import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Handshake, HeartPulse, Target } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { categories, company, images, products } from "@/data/company";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About B·G Pharma Pakistan — Our Purpose & Standards" },
      {
        name: "description",
        content:
          "B·G Pharma Pakistan, based in Faisalabad, promotes time-tested, effective and economical medicines with representatives serving Punjab and Sindh.",
      },
      { property: "og:title", content: "About B·G Pharma Pakistan" },
      {
        property: "og:description",
        content:
          "Our purpose, standards and therapeutic focus — Priority to Serve Humanity, from Faisalabad across Punjab & Sindh.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: HeartPulse,
    title: "Serve first",
    body: "Patient benefit decides what we launch, how we price it, and how we speak about it.",
  },
  {
    icon: Target,
    title: "Proven molecules",
    body: "We stay with established actives and dependable formulations rather than untested novelty.",
  },
  {
    icon: Handshake,
    title: "Fair partnership",
    body: "Transparent dealing with doctors, pharmacies and distributors — no overpromising.",
  },
  {
    icon: Compass,
    title: "Steady expansion",
    body: `Focused growth: ${company.coverage} first, with the same service standard everywhere we go.`,
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper/60 backdrop-blur-xl">
        <div className="hairline-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow">About the company</p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-primary-deep md:text-5xl">
                A Pakistani pharmaceutical company with one instruction
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {company.name} exists to make dependable treatment reachable. {company.positioning}{" "}
                Our head office in Faisalabad coordinates a field team that serves prescribers and
                pharmacies across {company.coverage}.
              </p>
              <p className="mt-6 font-display text-2xl text-brand-red">{company.slogan}</p>
            </Reveal>
          </div>
          <Reveal delay={130} className="lg:col-span-6">
            <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-lift">
              <img
                src={images.conferenceRoom}
                alt="Conference room at the B·G Pharma Pakistan head office"
                width={1200}
                height={800}
                className="aspect-3/2 w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Mission & vision</p>
            <h2 className="mt-4 font-display text-3xl text-primary-deep md:text-4xl">
              Quality treatment should not depend on income
            </h2>
          </Reveal>
          <div className="grid gap-5 lg:col-span-7">
            <Reveal delay={80}>
              <article className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <h3 className="font-display text-xl text-primary-deep">Our mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To promote time-tested, effective and economical medicines, and to support the
                  healthcare community with honest product information and reliable supply.
                </p>
              </article>
            </Reveal>
            <Reveal delay={160}>
              <article className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <h3 className="font-display text-xl text-primary-deep">Our vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To become a trusted national name in essential therapy — nutrition, anti-infectives,
                  gastro care and paediatric care — while never losing the affordability that defines us.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper/55 py-20 backdrop-blur-xl md:py-24">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">What we stand for</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-primary-deep md:text-4xl">
              Four commitments behind every pack we ship
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} as="article">
                <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <v.icon className="size-5.5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg text-primary-deep">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">Our office</p>
            <h2 className="mt-3 mb-5 font-display text-2xl text-primary-deep md:text-3xl">
              Reception &amp; Business Office, Faisalabad
            </h2>
            <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-lift">
              <img
                src={images.reception}
                alt="B·G Pharma Pakistan reception area"
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <p className="eyebrow">Therapeutic focus</p>
            <h2 className="mt-4 font-display text-3xl text-primary-deep md:text-4xl">
              {products.length} brands, five areas of care
            </h2>
            <ul className="mt-7 space-y-3">
              {categories.map((c) => (
                <li
                  key={c}
                  className="flex items-center justify-between gap-4 border-b border-border pb-3 text-sm font-semibold text-primary-deep last:border-0"
                >
                  {c}
                  <span className="text-xs font-bold text-muted-foreground">
                    {products.filter((p) => p.category === c).length} brands
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/products"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-deep"
            >
              See the full portfolio
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
