import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, Clock, Mail, MapPin, Phone, Send, UserRound } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { company, team } from "@/data/company";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact B·G Pharma Pakistan — Faisalabad Head Office" },
      {
        name: "description",
        content:
          "Contact B·G Pharma Pakistan: 0319-6542988, bgpharmapakistan@gmail.com, H #49-B Near Jamia Rizvia Ghosia, Sheikh Colony, Faisalabad. Distributor and product enquiries welcome.",
      },
      { property: "og:title", content: "Contact B·G Pharma Pakistan" },
      {
        property: "og:description",
        content: "Phone, email and head office address for product, order and territory enquiries.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const manager = team[0];

  const mailto = (formData: FormData) => {
    const name = String(formData.get("name") ?? "");
    const subject = `Enquiry from ${name} — ${String(formData.get("topic") ?? "General")}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${String(formData.get("phone") ?? "")}`,
      `City: ${String(formData.get("city") ?? "")}`,
      `Topic: ${String(formData.get("topic") ?? "")}`,
      "",
      String(formData.get("message") ?? ""),
    ].join("\n");
    return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section className="relative overflow-hidden bg-paper/60 backdrop-blur-xl">
        <div className="hairline-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative container-page py-16 md:py-20">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-primary-deep md:text-5xl">
              Talk to our team in Faisalabad
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              For product literature, orders, distribution rights or territory enquiries, reach us by
              phone, WhatsApp or email — we respond during business hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-5 lg:col-span-5">
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <h2 className="font-display text-xl text-primary-deep">Head office</h2>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4.5 shrink-0 text-primary" aria-hidden />
                    <address className="not-italic text-muted-foreground">
                      {company.addressLines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </address>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 size-4.5 shrink-0 text-primary" aria-hidden />
                    <a
                      href={`tel:${company.phoneRaw}`}
                      className="font-semibold text-primary-deep hover:text-primary"
                    >
                      {company.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 size-4.5 shrink-0 text-primary" aria-hidden />
                    <a
                      href={`mailto:${company.email}`}
                      className="font-semibold break-all text-primary-deep hover:text-primary"
                    >
                      {company.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 size-4.5 shrink-0 text-primary" aria-hidden />
                    <span className="text-muted-foreground">
                      Monday – Saturday, 9:00 am – 6:00 pm (PKT)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Building2 className="mt-0.5 size-4.5 shrink-0 text-primary" aria-hidden />
                    <span className="text-muted-foreground">
                      Field coverage: {company.coverage}
                    </span>
                  </li>
                </ul>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </Reveal>

            {manager && (
              <Reveal delay={110}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-secondary p-6">
                  <img
                    src={manager.image}
                    alt={`${manager.name}, ${manager.role}`}
                    loading="lazy"
                    className="size-20 shrink-0 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-[0.62rem] font-bold tracking-[0.18em] text-primary uppercase">
                      {manager.role} · {manager.region}
                    </p>
                    <p className="mt-1.5 font-display text-lg text-primary-deep">{manager.name}</p>
                    <a
                      href={`tel:${manager.phoneRaw}`}
                      className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-deep"
                    >
                      <UserRound className="size-4" aria-hidden /> {manager.phone}
                    </a>
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          <Reveal delay={140} className="lg:col-span-7">
            <form
              className="rounded-2xl border border-border bg-card p-7 shadow-soft md:p-9"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                window.location.href = mailto(data);
                setSent(true);
              }}
            >
              <h2 className="font-display text-2xl text-primary-deep">Send an enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill this in and your email app will open with the details ready to send.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field label="Your name" name="name" required placeholder="Dr. / Mr. / Ms." />
                <Field label="Phone" name="phone" type="tel" required placeholder="03XX XXXXXXX" />
                <Field label="City" name="city" placeholder="Faisalabad" />
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
                    Enquiry type
                  </span>
                  <select
                    name="topic"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  >
                    <option>Product information</option>
                    <option>Distribution / order</option>
                    <option>Territory & field opportunity</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>

              <label className="mt-5 flex flex-col gap-2">
                <span className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us which product or territory you are asking about."
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </label>

              <button
                type="submit"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-deep"
              >
                <Send className="size-4" aria-hidden /> Send enquiry
              </button>
              <p aria-live="polite" className="mt-4 min-h-5 text-sm text-primary">
                {sent
                  ? "Your email app should now be open. If it didn't open, write to us directly at " +
                    company.email
                  : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-bold tracking-[0.14em] text-primary uppercase">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
      />
    </label>
  );
}
