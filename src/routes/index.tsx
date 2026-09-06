import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Watch, Wallet, BatteryCharging, Truck, ShieldCheck, BadgePercent } from "lucide-react";
import { categories, products, formatPKR } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { ProductMarquee } from "@/components/site/ProductMarquee";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shazib Outlet | Watches, Wallets & Power Banks" },
      {
        name: "description",
        content:
          "Shop premium watches, genuine leather wallets and fast-charging power banks at Shazib Outlet — great quality at outlet prices.",
      },
      { property: "og:title", content: "Shazib Outlet | Watches, Wallets & Power Banks" },
      {
        property: "og:description",
        content: "Premium watches, leather wallets and power banks at outlet prices.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = React.useState("All");
  const { add, setOpen } = useCart();
  const list = active === "All" ? products : products.filter((p) => p.category === active);
  const featured = products[0]!;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroSlideshow
          images={["/media/watch-1.jpg", "/media/wallet-1.jpg", "/media/powerbank-3.jpg", "/media/watch-3.jpg", "/media/wallet-3.jpg", "/media/powerbank-2.jpg"]}
        />

        <div className="scene-3d relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 pt-14 pb-20 text-center sm:px-6 lg:pt-24">
          <Reveal className="flex w-full flex-col items-center">
            <span className="glass-panel rounded-full px-4 py-1.5 text-[9px] font-medium tracking-[0.45em] text-accent sm:text-[10px]">
              WELCOME TO
            </span>
            <h1 className="mt-6 text-4xl leading-[1.02] sm:text-6xl lg:text-[4.25rem]">
              <span className="text-emerald-gradient block">Shazib Outlet</span>
            <span className="mt-2 block text-[10px] font-semibold tracking-[0.22em] text-foreground/85 sm:text-xs">
              WATCHES · WALLETS · POWER BANKS
            </span>
            </h1>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent/70 sm:w-20" />
              <span className="h-1.5 w-1.5 rotate-45 bg-accent/80" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-accent/70 sm:w-20" />
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Premium everyday essentials at outlet prices.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" asChild>
                <a href="#collection">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => {
                  add(featured);
                  setOpen(true);
                }}
              >
                Add Bestseller Watch
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative mt-16 w-full max-w-2xl">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_28%,transparent),transparent)] blur-2xl" />
            <div className="float-slow glass-panel overflow-hidden rounded-3xl bg-muted [transform:perspective(1400px)_rotateX(5deg)]">
              <img
                src={"/media/watch-1.jpg"}
                alt="Chrono Steel navy dial watch at Shazib Outlet"
                width={1024}
                height={1024}
                decoding="async"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="glass-panel absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl px-5 py-4 text-center">
              <p className="text-[10px] tracking-[0.3em] text-accent">BESTSELLER</p>
              <p className="mt-1 text-sm">{featured.name}</p>
              <p className="text-sm font-semibold text-primary">{formatPKR(featured.price)}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Auto-moving draggable rail */}
      <ProductMarquee />

      {/* Category highlights */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Reveal className="text-center">
          <p className="text-[10px] tracking-[0.4em] text-accent">SHOP BY CATEGORY</p>
          <h2 className="mt-3 text-3xl sm:text-5xl">Everything You Carry Daily</h2>
        </Reveal>
        <div className="scene-3d mt-10 grid gap-6 sm:grid-cols-3">
          {[
            { icon: Watch, title: "Watches", text: "Chronographs, classics and smart watches.", image: "/media/watch-2.jpg" },
            { icon: Wallet, title: "Wallets", text: "Genuine leather bifolds, card holders and zip wallets.", image: "/media/wallet-1.jpg" },
            { icon: BatteryCharging, title: "Power Banks", text: "Fast-charging, high-capacity backup power.", image: "/media/powerbank-1.jpg" },
          ].map(({ icon: Icon, title, text, image }, i) => (
            <Reveal key={title} delay={i * 120}>
              <button
                onClick={() => {
                  setActive(title);
                  document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="card-3d glass-panel group block w-full overflow-hidden rounded-2xl text-left"
              >
                <div className="relative h-44 overflow-hidden bg-muted">
                  <img
                    src={image}
                    alt={title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-4xl px-4 pt-4 sm:px-6">
        <Reveal>
          <dl className="grid grid-cols-3 gap-3 sm:gap-6">
            {[
              { value: 5000, suffix: "+", label: "Happy customers" },
              { value: 100, suffix: "%", label: "Original products" },
              { value: 7, suffix: "-day", label: "Easy returns" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="lift-3d glass-panel rounded-2xl px-3 py-5 text-center sm:py-7"
              >
                <dt className="text-xl font-bold text-primary sm:text-3xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dt>
                <dd className="mt-1 text-[10px] tracking-wide text-muted-foreground sm:text-xs">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* Collection */}
      <section id="collection" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6">
        <Reveal className="text-center">
          <p className="text-[10px] tracking-[0.4em] text-accent">THE COLLECTION</p>
          <h2 className="mt-3 text-3xl sm:text-5xl">Outlet Deals For You</h2>
        </Reveal>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-xs tracking-wide transition-colors ${
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="scene-3d mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) * 120}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Reveal className="text-center">
          <p className="text-[10px] tracking-[0.4em] text-accent">WHY SHAZIB OUTLET</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Quality Without The Price Tag</h2>
        </Reveal>
        <div className="scene-3d mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BadgePercent, title: "Outlet Prices", text: "Direct sourcing means the best deals on every product." },
            { icon: ShieldCheck, title: "100% Original", text: "Every watch, wallet and power bank is genuine and checked." },
            { icon: Truck, title: "Nationwide Delivery", text: "Fast, safe cash-on-delivery shipping across Pakistan." },
            { icon: BatteryCharging, title: "Tested Quality", text: "Each power bank and watch is tested before dispatch." },
          ].map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="card-3d glass-panel group h-full rounded-2xl p-6">
                <span className="float-slow inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                  <Icon className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-125" />
                </span>
                <h3 className="mt-4 text-lg sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="lift-3d glass-panel relative overflow-hidden rounded-3xl px-6 py-16 text-center">
          <h2 className="text-3xl sm:text-5xl">Order On WhatsApp</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Message us your favourite product and get it delivered to your doorstep,
            anywhere in Pakistan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild>
              <a href="https://wa.me/923144849045" target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+923144849045">Call 0314 484 9045</a>
            </Button>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
