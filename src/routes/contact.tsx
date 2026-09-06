import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Shazib Outlet — Gujrat, Punjab" },
      {
        name: "description",
        content:
          "Visit Shazib Outlet at Chhani Nikowani, District Gujrat, or call 0314 484 9045 to order watches, wallets and power banks.",
      },
      { property: "og:title", content: "Contact Shazib Outlet" },
      {
        property: "og:description",
        content: "Call 0314 484 9045, email shazibbhai338@gmail.com or visit our store in Gujrat, Punjab.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const details = [
  {
    icon: MapPin,
    title: "Our Store",
    text: "Chhani Nikowani, District Gujrat, Punjab, Pakistan.",
  },
  { icon: Phone, title: "Call Us", text: "0314 484 9045 — for orders, stock and delivery updates." },
  { icon: Clock, title: "Open Hours", text: "Monday to Sunday, 10:00 AM to 10:00 PM." },
  {
    icon: MessageCircle,
    title: "WhatsApp Order",
    text: "Send us the product name and your address — cash on delivery across Pakistan.",
  },
];

function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal className="text-center">
        <p className="text-[10px] tracking-[0.45em] text-accent">GET IN TOUCH</p>
        <h1 className="mt-4 text-4xl sm:text-6xl">Contact Shazib Outlet</h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Questions about a watch, wallet or power bank? Call, message or visit the store —
          we reply quickly and deliver nationwide.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {details.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 100}>
            <div className="card-3d glass-panel h-full rounded-2xl p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <Icon className="h-6 w-6 text-primary" />
              </span>
              <h2 className="mt-4 text-lg sm:text-xl">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="lift-3d glass-panel mt-12 rounded-3xl px-6 py-14 text-center">
        <h2 className="text-2xl sm:text-4xl">Ready To Order?</h2>
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
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:shazibbhai338@gmail.com">Email Us</a>
          </Button>
        </div>
      </Reveal>
    </main>
  );
}
