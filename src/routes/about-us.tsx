import { createFileRoute } from "@tanstack/react-router";
import { Target, ShieldCheck, Eye, HeadphonesIcon, PackageCheck, XCircle, Truck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Shazib Outlet" },
      {
        name: "description",
        content:
          "Shazib Outlet's mission, responsibilities and delivery & return policy — quality you can trust, delivered nationwide across Pakistan.",
      },
      { property: "og:title", content: "About Us — Shazib Outlet" },
      {
        property: "og:description",
        content:
          "Our mission is to bring you the best quality products. Read our delivery & return policy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutUsPage,
});

const responsibilities = [
  {
    icon: ShieldCheck,
    title: "Best Quality",
    text: "We deliver only those products that meet our strict quality standards and pass our inspection.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "We provide complete and accurate information, from the moment you order through to delivery.",
  },
  {
    icon: HeadphonesIcon,
    title: "Best Customer Service",
    text: "Every question and concern is resolved promptly and to your satisfaction.",
  },
];

const policyPoints = [
  {
    icon: PackageCheck,
    title: "Open & Check Your Parcel",
    text: "You can open and check your parcel in front of the courier before accepting it.",
  },
  {
    icon: XCircle,
    title: "Cancelling On The Spot",
    text: "If you don't like the product and cancel the order at the door, Rs. 200 delivery charges apply.",
  },
  {
    icon: Truck,
    title: "Why The Charge",
    text: "This amount covers the courier rider's effort and the shipping & handling expenses of the trip.",
  },
];

function AboutUsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      {/* Mission */}
      <Reveal className="text-center">
        <p className="text-[10px] tracking-[0.45em] text-accent">WHO WE ARE</p>
        <h1 className="mt-4 text-4xl sm:text-6xl">About Shazib Outlet</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Our mission is to bring you the finest quality and the best products. We built
          this brand with a single purpose in mind: <span className="text-foreground">&ldquo;To
          ensure your trust and convenience.&rdquo;</span>
        </p>
      </Reveal>

      <Reveal className="lift-3d glass-panel mt-12 flex items-start gap-4 rounded-3xl p-6 sm:p-8">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
          <Target className="h-6 w-6 text-primary" />
        </span>
        <div>
          <h2 className="text-xl sm:text-2xl">Our Mission</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            We founded Shazib Outlet so that premium everyday essentials &mdash; watches,
            wallets and power banks &mdash; reach you with honest pricing, genuine quality and
            reliable delivery, anywhere in Pakistan.
          </p>
        </div>
      </Reveal>

      {/* Responsibilities */}
      <section className="mt-16">
        <Reveal className="text-center">
          <p className="text-[10px] tracking-[0.4em] text-accent">OUR RESPONSIBILITIES</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">What We Stand For</h2>
        </Reveal>
        <div className="scene-3d mt-10 grid gap-6 sm:grid-cols-3">
          {responsibilities.map(({ icon: Icon, title, text }, i) => (
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

      {/* Delivery & Return Policy */}
      <section className="mt-16">
        <Reveal className="text-center">
          <p className="text-[10px] tracking-[0.4em] text-accent">DELIVERY & RETURNS</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Delivery & Return Policy</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            For your convenience, we allow you to open and check your parcel. However, a few
            important conditions apply:
          </p>
        </Reveal>

        <div className="scene-3d mt-10 grid gap-6 sm:grid-cols-3">
          {policyPoints.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="card-3d glass-panel h-full rounded-2xl p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                  <Icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mt-4 text-lg sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="lift-3d glass-panel mt-8 rounded-3xl p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl">In Summary</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <PackageCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              You may open and check the parcel in front of the courier before accepting it.
            </li>
            <li className="flex gap-3">
              <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              If you cancel the order at the door, a Rs. 200 delivery charge is payable.
            </li>
            <li className="flex gap-3">
              <Truck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              The charge covers the courier rider&rsquo;s effort and shipping & handling costs.
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal className="lift-3d glass-panel mt-16 rounded-3xl px-6 py-14 text-center">
        <h2 className="text-2xl sm:text-4xl">Have A Question?</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
          Cash on delivery available all over Pakistan, with 7-day easy returns.
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
    </main>
  );
}
