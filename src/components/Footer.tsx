import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, images, products } from "@/data/company";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-ink-foreground">
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center overflow-hidden rounded-full bg-card">
                <img src={images.logo} alt="" width={96} height={96} className="size-full object-cover" />
              </span>
              <span className="font-display text-xl font-semibold">
                B<span className="text-brand-gold">·</span>G Pharma Pakistan
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
              {company.positioning} {company.coverageNote}
            </p>
            <p className="mt-6 font-display text-lg text-brand-gold">{company.slogan}</p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <h3 className="text-xs font-bold tracking-[0.2em] text-ink-foreground/50 uppercase">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: "/products", label: "Product portfolio" },
                { to: "/about", label: "About the company" },
                { to: "/team", label: "Our team" },
                { to: "/contact", label: "Contact & enquiries" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-ink-foreground/75 transition-colors hover:text-brand-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xs font-bold tracking-[0.2em] text-ink-foreground/50 uppercase">
              Featured
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {products.slice(0, 4).map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="text-ink-foreground/75 transition-colors hover:text-brand-gold"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="text-sm not-italic md:col-span-4">
            <h3 className="text-xs font-bold tracking-[0.2em] text-ink-foreground/50 uppercase">Reach us</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-gold" aria-hidden />
                <span className="text-ink-foreground/75">
                  {company.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-gold" aria-hidden />
                <a href={`tel:${company.phoneRaw}`} className="text-ink-foreground/75 hover:text-brand-gold">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-gold" aria-hidden />
                <a
                  href={`mailto:${company.email}`}
                  className="break-all text-ink-foreground/75 hover:text-brand-gold"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-foreground/15 pt-7 text-xs text-ink-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="max-w-lg sm:text-right">
            Product information is intended for healthcare professionals. Medicines must be used only on
            the prescription of a registered medical practitioner.
          </p>
        </div>
      </div>
    </footer>
  );
}
